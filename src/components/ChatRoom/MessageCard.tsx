import { Avatar, Box, Stack, Grid, IconButton, Link } from "@mui/material";
import slugify from "slugify";
import { useRef } from "react";
import { formattedToLocale } from "@/utils/dates/helperFuncs";
import ClearIcon from "@mui/icons-material/Clear";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
type MessageProps = {
    content: string;
    updatedAt: Date | undefined;
    image?: string | null;
    creatorId?: string | null;
    name?: string | null;
    id?: string;
};
const MessageCard = (props: MessageProps) => {
    const { data: sessionData } = useSession();
    const { content, updatedAt, image, name, id, creatorId } = props;
    const deleteButtonRef = useRef<HTMLButtonElement>(null);
    const deleteOne = api.message.deleteOne.useMutation();

    const handleDelete = () => {
        if (!isAuthor) return;
        if (id) void deleteOne.mutateAsync({ id });
    };
    const isAuthor =
        creatorId === sessionData?.user.id || creatorId === undefined
            ? true
            : false;
    return (
        <Box
            sx={{
                flexGrow: 1,
                p: 0.2,
                m: 0,
                "&:hover": {
                    cursor: "pointer",
                },
            }}
            onMouseEnter={() => {
                if (deleteButtonRef.current) {
                    deleteButtonRef.current.style.opacity = "1";
                }
            }}
            onMouseLeave={() => {
                if (deleteButtonRef.current) {
                    deleteButtonRef.current.style.opacity = "0";
                }
            }}>
            <Grid container spacing={1}>
                <Grid
                    item
                    xs={1}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5em",
                    }}>
                    <Avatar
                        component={Link}
                        href={`/users/${slugify(name ?? "not-found")}`}
                        src={image ?? ""}
                        alt='Not found'
                        sx={{ mt: 2, p: 0, alignSelf: "flex-start" }}
                    />
                </Grid>
                <Grid
                    item
                    xs={11}
                    sx={{
                        "&:hover": {
                            backgroundColor: "#dfdfdf",
                        },
                        borderRadius: "0.5em",
                        display: "flex",
                    }}>
                    <Stack>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "0.3em",
                                alignItems: "center",
                                mt: "auto",
                            }}>
                            <Link
                                underline='none'
                                href={`/users/${slugify(name ?? "not-found")}`}>
                                <strong>{name}</strong>
                            </Link>
                            <p>{formattedToLocale(updatedAt || new Date())}</p>
                        </Box>
                        <Box>
                            <p>{content}</p>
                        </Box>
                    </Stack>
                    {isAuthor ? (
                        <IconButton
                            ref={deleteButtonRef}
                            sx={{
                                opacity: 0,
                                transition: "opacity 0.2s",
                                ml: "auto",
                                px: 4,
                                "&:hover": {
                                    // Remove hover effect
                                    backgroundColor: "transparent",
                                    color: "inherit",
                                },
                            }}
                            onClick={handleDelete}>
                            <ClearIcon fontSize='large' />
                        </IconButton>
                    ) : null}
                </Grid>
            </Grid>
        </Box>
    );
};
export default MessageCard;
