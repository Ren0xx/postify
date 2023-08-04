import { Box, Button } from "@mui/material";
import DeleteRoomModal from "@/components/ChatRoom/DeleteRoomModal";
import useDeleteRoom from "@/hooks/useDeleteRoom";
type AdminProps = {
    roomId: string;
};
const AdminSection = (props: AdminProps) => {
    return (
        <Box
            sx={{ display: "flex", gap: "0.5em", justifyContent: "flex-end" }}
            component='ul'>
            <Button variant='contained'>Dodaj tagi</Button>

            <DeleteRoomModal id={props.roomId} />
            <Button variant='contained' color='error'>
                Wyrzuć użytkowników
            </Button>
        </Box>
    );
};

export default AdminSection;
