import { Chip } from "@mui/material";
import { type RouterOutputs } from "@/utils/api";
type Tag = RouterOutputs["tag"]["getAll"][0];
type TagsFilterProps = {
    tags?: Tag[];
    selectedTags: string[];
    onTagClick: (tag: string) => void;
};
const TagsFilter = ({ tags, selectedTags, onTagClick }: TagsFilterProps) => {
    return (
        <div>
            {tags?.map((tag) => (
                <Chip
                    key={tag.id}
                    label={tag.name}
                    onClick={() => onTagClick(tag.name)}
                    color={
                        selectedTags.includes(tag.name) ? "primary" : "default"
                    }
                    variant={
                        selectedTags.includes(tag.name) ? "filled" : "outlined"
                    }
                    style={{ margin: "0.5rem" }}
                />
            ))}
        </div>
    );
};

export default TagsFilter;
