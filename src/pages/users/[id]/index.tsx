import { useRouter } from "next/router";
import { api, type RouterOutputs } from "@/utils/api";
import Info from "@/components/UserPage/Info";
import Head from "next/head";
type User = RouterOutputs["user"]["getOne"];
import Loading from "@/components/utils/Loading";
import UserNotFound from "@/components/utils/UserNotFound";
import { useSession } from "next-auth/react";
export default function UserProfile() {
    const { data: sessionData } = useSession();
    const router = useRouter();
    const userId = router.query.id as string;

    const {
        data: user,
        isLoading,
        isError,
        refetch,
    } = api.user.getOne.useQuery(
        { id: userId },
        { enabled: sessionData?.user !== undefined }
    );
    if (isLoading) {
        return (
            <>
                <Head>
                    <title>Wczytywanie...</title>
                </Head>
                <Loading />
            </>
        );
    }
    if (isError || user === null) {
        return (
            <>
                <Head>
                    <title>Wystąpił błąd</title>
                </Head>
                <UserNotFound />
            </>
        );
    }
    return (
        <div>
            <Info
                profilePicture={user.image}
                userName={user.name}
                description={user.description}
                roomsOwnedCount={user.roomsOwned.length}
            />
        </div>
    );
}
