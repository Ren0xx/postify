import { useSession } from "next-auth/react";
export default function useSessionState() {
    const { status } = useSession();
    return status;
}
