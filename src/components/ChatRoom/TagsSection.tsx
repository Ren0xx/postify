import { Box, Chip } from "@mui/material";
import { type RouterOutputs } from "@/utils/api";
type Tag = RouterOutputs["tag"]["getOne"];
type TagProps = {
    tags: Tag[];
    deleteTag: (id: string) => void;
    canDelete: boolean;
};
const TagsSection = (props: TagProps) => {
    const { tags, deleteTag, canDelete } = props;
    const handleDelete = (id: string) => {
        deleteTag(id);
    };

    return (
        <Box component='ul' sx={{ p: 1 }}>
            {tags?.map((tag) => (
                <Chip
                    key={tag?.id}
                    label={tag?.name ?? "Unknown"}
                    component='li'
                    color='secondary'
                    onDelete={canDelete && tag?.id ? () => handleDelete(tag.id) : undefined}
                />
            ))}
        </Box>
    );
};
export default TagsSection;
