import {
    Box,
    Chip,
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    Typography,
} from "@mui/material";
import { api, type RouterOutputs } from "@/utils/api";
import useAddTag from "@/hooks/useAddTag";
import { useState } from "react";
type Tag = RouterOutputs["tag"]["createOne"];
type TagProps = {
    tags: Tag[];
    roomId: string;
    refetch: () => void;
};
const AddTagsModal = (props: TagProps) => {
    const { open, handleClose, handleOpen, createOne } = useAddTag();
    const { tags, roomId, refetch } = props;

    const [tagName, setName] = useState<string>("");
    const [err, setErr] = useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErr(false);
        setName(e.target.value);
    };
    const createTag = async () => {
        const tagData = await createOne.mutateAsync({ name: tagName, roomId });
        if (tagData === null) {
            setErr(true);
            setName("");
            return;
        }
        refetch();
        setName("");
    };
    return (
        <>
            <Button variant='contained' onClick={handleOpen}>
                Dodaj tagi
            </Button>
            <Dialog open={open} onClose={handleClose} sx={{ p: 2 }}>
                <DialogTitle>Dodaj tagi</DialogTitle>
                <DialogContent>
                    <Box component='ul' sx={{ display: "flex", gap: 2 }}>
                        {tags.map((tag: Tag) => (
                            <Chip
                                key={tag?.id}
                                label={tag?.name ?? "Unknown"}
                                component='li'
                                color='secondary'
                            />
                        ))}
                    </Box>
                    <TextField
                        label='Dodaj tag'
                        onChange={handleChange}
                        value={tagName}
                    />
                </DialogContent>
                <DialogActions
                    sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                    <Button
                        // eslint-disable-next-line @typescript-eslint/no-misused-promises
                        onClick={createTag}
                        disabled={createOne.isLoading || err}>
                        Dodaj tag
                    </Button>
                    <Box sx={{ my: 4 }}>
                        {createOne.isLoading && (
                            <Typography color='info'>Wczytywanie...</Typography>
                        )}
                        {err && (
                            <Typography color='error'>
                                Tag już istnieje
                            </Typography>
                        )}
                    </Box>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AddTagsModal;
