import { Chip } from "@mui/material";
import { type RouterOutputs } from "@/utils/api";
type Tag = RouterOutputs["tag"]["getOne"];
type TagProps = {
    tags: Tag[];
    deleteTag: (id: string) => void;
};
const TagsSection = (props: TagProps) => {
    const { tags, deleteTag } = props;
    const handleDelete = (id: string) => {
        deleteTag(id);
    };

    return (
        <ul>
            {tags?.map((tag) => (
                <Chip
                    key={tag?.id}
                    label={tag?.name ?? "Unknown"}
                    component='li'
                    onDelete={tag?.id ? () => handleDelete(tag.id) : undefined}
                />
            ))}
        </ul>
    );
};
export default TagsSection;
