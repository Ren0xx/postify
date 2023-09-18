import { Box } from "@mui/material";
import DeleteRoomModal from "@/components/ChatRoom/DeleteRoomModal";
import AddTagsModal from "@/components/ChatRoom/AddTagsModal";
import { type RouterOutputs } from "@/utils/api";
type Tag = RouterOutputs["tag"]["getOne"];
type AdminProps = {
    roomId: string;
    tags: Tag[];
    refetch: () => void;
};
const AdminSection = (props: AdminProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                gap: "0.5em",
                justifyContent: "flex-end",
                my: 1,
            }}>
            <AddTagsModal
                roomId={props.roomId}
                tags={props.tags}
                refetch={props.refetch}
            />
            <DeleteRoomModal id={props.roomId} />
        </Box>
    );
};

export default AdminSection;
