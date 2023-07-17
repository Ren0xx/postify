import { useSession } from "next-auth/react";
export default function useIsLogged() {
    const { data: sessionData } = useSession();
    if (!sessionData) {
        return null;
    }
    return true;
}
