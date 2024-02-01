import SignIn from "@/components/SignIn";
import Homepage from "@/components/Homepage";
import useSessionState from "@/hooks/useSessionState";
import SiteLoading from "@/components/utils/SiteLoading";
export default function Home() {
    const status = useSessionState();
    if (status === "loading") {
        return <SiteLoading />;
    }
    if (status === "unauthenticated") {
        return <SignIn />;
    }
    return <Homepage />;
}
