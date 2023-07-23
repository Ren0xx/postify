import { Box, Grid } from "@mui/material";
import Head from "next/head";
import RoomChat from "@/components/MainPage/RoomChat";
export default function Room() {
    //TODO
    // Get the id from the params and use it to fetch room data

    return (
        <>
            <Head>
                <title>Room ;id</title>
            </Head>
            <Box>
                <h1>Hi from room ;room name</h1>
                <RoomChat />
            </Box>
        </>
    );
}
