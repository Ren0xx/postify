import { TextField, Typography } from "@mui/material";
import RoomCard from "./RoomCard";
import RoomChat from "./RoomChat";
const RoomsList = () => {
    //mock
    const b = new Array(5);
    b.fill(0);
    return (
        <>
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
