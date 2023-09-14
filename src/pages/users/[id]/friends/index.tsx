import Head from "next/head";
import { useRouter } from "next/router";
import { api } from "@/utils/api";
import Friends from "@/components/UserPage/Friends";
import { useSession } from "next-auth/react";
import Loading from "@/components/utils/Loading";
import SignIn from "@/components/SignIn";
import { PageTransition } from "@/components/Animations/PageTransition";
const FriendsPage = () => {
    const { data: sessionData } = useSession();
    const router = useRouter();
    const id = router.query.id as string;

    const {
        data: friends,
        isLoading,
        isError,
        refetch,
    } = api.user.getUserFriends.useQuery(
        { id: id },
        { enabled: sessionData?.user !== undefined }
    );
    if (!sessionData) {
        return <SignIn />;
    }
    if (isLoading) {
        return (
            <>
                <Head>
                    <title>Wczytywanie...</title>
                </Head>
                <FriendsLoader />
            </>
        );
    }
    if (isError) {
        return (
            <>
                <Head>
                    <title>Wystąpił błąd</title>
                </Head>
                <div>Coś poszło nie tak</div>
            </>
        );
    }
    return (
        <PageTransition>
            <Friends
                friends={friends?.User_A}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                refetch={refetch}
            />
        </PageTransition>
    );
};

const FriendsLoader = () => {
    return (
        <>
            <Head>
                <title>Wczytywanie...</title>
            </Head>
            <Loading />
        </>
    );
};

export default FriendsPage;
