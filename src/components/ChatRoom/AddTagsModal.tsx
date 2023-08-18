import {
    Box,
    Chip,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
} from "@mui/material";
import { useMemo } from "react";
import { type RouterOutputs } from "@/utils/api";
import LoadingButton from "@mui/lab/LoadingButton";
import useAddTag from "@/hooks/useAddTag";
import { useState } from "react";
type Tag = RouterOutputs["tag"]["getOne"];
type TagProps = {
    tags: Tag[];
    roomId: string;
    refetch: () => void;
};
const AddTagsModal = (props: TagProps) => {
    const { open, handleClose, handleOpen, addMany, allTags } = useAddTag();
    const { tags, roomId, refetch } = props;
    const [selectedTags, setSelectedTags] = useState(tags);

    const handleTagSelect = (tag: Tag) => {
        if (selectedTags.some((t) => t?.id === tag?.id)) {
            setSelectedTags((prevSelected) =>
                prevSelected.filter((t) => t?.id !== tag?.id)
            );
        } else {
            setSelectedTags((prevSelected) => [...prevSelected, tag]);
        }
    };
    const tagsNotConnected = useMemo(() => {
        if (!allTags) {
            return [];
        }
        return allTags.filter((tag) => !tags.some((t) => t?.id === tag.id));
    }, [allTags, tags]);

    const addTags = async () => {
        if (selectedTags.length === 0) return;
        const tagIds = selectedTags.map((tag) => tag?.id.toString() ?? "");
        await addMany.mutateAsync({ roomId, tagIds });

        refetch();
        setSelectedTags([]);
        handleClose();
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
                        {tagsNotConnected.map((tag: Tag) => (
                            <Chip
                                key={tag?.id}
                                label={tag?.name ?? "Unknown"}
                                component='li'
                                color={
                                    selectedTags.some((t) => t?.id === tag?.id)
                                        ? "primary"
                                        : "secondary"
                                }
                                onClick={() => handleTagSelect(tag)}
                                clickable
                            />
                        ))}
                    </Box>
                </DialogContent>
                <DialogActions
                    sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                    <LoadingButton
                        sx={{ px: 6, my: 1 }}
                        // eslint-disable-next-line @typescript-eslint/no-misused-promises
                        onClick={addTags}
                        loading={addMany.isLoading}
                        loadingIndicator='Wczytywanie…'
                        variant='outlined'>
                        Dodaj
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AddTagsModal;
