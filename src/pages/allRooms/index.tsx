import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function AllRooms() {
    const router = useRouter();
    useEffect(() => {
        router.push("/allRooms/1");
    }, [router]);

    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
    );
}
