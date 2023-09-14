import { useRouter } from "next/router";
import { useState } from "react";
import { api, type RouterOutputs } from "@/utils/api";
import About from "@/components/UserPage/About";
import SiteLoading from "@/components/utils/SiteLoading";
import UserNotFound from "@/components/utils/UserNotFound";
import { useSession } from "next-auth/react";
import AddOrRemoveFriend from "@/components/UserPage/AddOrRemoveFriend";
import SignIn from "@/components/SignIn";
export default function UserProfile() {
    const { data: sessionData } = useSession();
    const router = useRouter();
    const userId = router.query.id as string;

    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const {
        data: user,
        isLoading,
        isError,
    } = api.user.getOne.useQuery(
        { id: userId },
        { enabled: sessionData?.user !== undefined }
    );
    const {
        data: userFriends,
        refetch: refetchLoggedUser,
        isRefetching,
    } = api.user.getLoggedUserFriends.useQuery(undefined, {
        enabled: sessionData?.user !== undefined,
    });

    const isFriend = userFriends?.User_A.some((friend) => friend.id === userId);
    //adding or removing user from friends
    const addFriend = api.user.addFriend.useMutation({
        onSuccess: () => {
            void refetchLoggedUser();
            setIsDisabled(false);
        },
    });
    const removeFriend = api.user.removeFriend.useMutation({
        onSuccess: () => {
            void refetchLoggedUser();
            setIsDisabled(false);
        },
    });

    const addOne = async (id: string) => {
        setIsDisabled(true);
        await addFriend.mutateAsync({ id });
    };
    const removeOne = async (id: string) => {
        setIsDisabled(true);
        await removeFriend.mutateAsync({ id });
    };

    const addOrRemoveFriend = () => {
        void (isFriend ? removeOne(userId) : addOne(userId));
    };
    if (!sessionData) {
        return <SignIn />;
    }
    if (isLoading) {
        return <SiteLoading />;
    }
    if (isError || user === null) {
        return <UserNotFound />;
    }
    return (
        <div>
            <AddOrRemoveFriend
                isLoggedUserPage={user.id === sessionData?.user.id}
                isDisabled={isDisabled}
                isRefetching={isRefetching}
                isFriend={isFriend}
                addOrRemoveFriend={addOrRemoveFriend}
            />
            <About
                userId={user.id}
                isOwner={user.id === sessionData?.user.id}
                profilePicture={user.image}
                userName={user.name}
                description={user.description}
                roomsOwnedCount={user.roomsOwned.length}
            />
        </div>
    );
}
