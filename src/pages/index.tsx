import styles from "./index.module.css";
import Head from "next/head";
import useIsLogged from "@/hooks/useIsLogged";
import SignIn from "@/components/SignIn";
import Homepage from "@/components/Homepage";
export default function Home() {
    const logged = useIsLogged();
    if (!logged) {
        return <SignIn />;
    }
    return <Homepage />;
}
