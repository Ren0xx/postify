import { TextField, Typography } from "@mui/material";
import RoomCard from "./RoomCard";
import RoomChat from "./RoomChat";
import Link from "next/link";
const RoomsList = () => {
    //mock
    const b = new Array(5);
    b.fill(0);
    return (
        <>
            <Link href='/rooms/clkmw4dbg00000o7kgqmx068n'>Pokoj testowy</Link>
            <TextField
                label='Przesukaj pokoje'
                //onChange={handleSearchChange}
                //value={searchTerm}
                fullWidth
                // className={styles.searchBar}
            />
            <Typography variant='h6'>Popularne pokoje:</Typography>
            <div>
                {b.map((_) => (
                    // eslint-disable-next-line react/jsx-key
                    <RoomCard />
                ))}
            </div>
        </>
    );
};
export default RoomsList;
