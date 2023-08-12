import { useRouter } from "next/router";
import { api, type RouterOutputs } from "@/utils/api";
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
            <h2>Użytkownik: {user?.name}</h2>
            <p>Właściciel {user?.roomsOwned.length} pokoi.</p>

            <p> Etc</p>
        </div>
    );
}
