import { Chip } from "@mui/material";
import { type RouterOutputs } from "@/utils/api";
type Tag = RouterOutputs["tag"]["getOne"];
type TagProps = {
    tags: Tag[];
};
const TagsSection = (props: TagProps) => {
    const { tags } = props;
    return (
        <>
            {tags?.map((tag) => (
                <Chip key={tag?.id} label={tag?.name} />
            ))}
        </>
    );
};
export default TagsSection;
