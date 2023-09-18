import { Avatar, Box, Stack, Grid, Link, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import slugify from "slugify";
import { useRef, useMemo } from "react";
import { formattedToLocale } from "@/utils/dates/helperFuncs";
import { useSession } from "next-auth/react";
import DeleteMessageModal from "@/components/ChatRoom/DeleteMessageModal";
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
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const isAuthor = useMemo(
        () => creatorId === sessionData?.user.id || creatorId === undefined,
        [creatorId, sessionData?.user.id]
    );

    return (
        <Box
            sx={{
                flexGrow: 1,
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
            <Grid container>
                {!isSmallScreen && (
                    <Grid
                        item
                        xs={1}
                        md={0}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            pl: 2.5,
                        }}>
                        <Avatar
                            component={Link}
                            href={`/users/${slugify(creatorId ?? "not-found")}`}
                            src={image ?? ""}
                            alt='Not found'
                            sx={{ mt: 2, p: 0, alignSelf: "flex-start" }}
                        />
                    </Grid>
                )}
                <Grid
                    item
                    xs={12}
                    md={11}
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
                                href={`/users/${slugify(
                                    creatorId ?? "not-found"
                                )}`}>
                                <strong>{name}</strong>
                            </Link>
                            <p>{formattedToLocale(updatedAt || new Date())}</p>
                        </Box>
                        <p>{content}</p>
                    </Stack>
                    {isAuthor ? (
                        <DeleteMessageModal
                            deleteButtonRef={deleteButtonRef}
                            id={id}
                        />
                    ) : null}
                </Grid>
            </Grid>
        </Box>
    );
};
export default MessageCard;
