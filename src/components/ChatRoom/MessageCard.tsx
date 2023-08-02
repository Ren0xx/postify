import { Avatar, Box, Paper, Stack, Grid, Link } from "@mui/material";
import slugify from "slugify";
import { formatted } from "@/utils/dates/helperFuncs";
type MessageProps = {
    content: string;
    updatedAt: Date | undefined;
    image?: string | null;
    name?: string | null;
};
const MessageCard = (props: MessageProps) => {
    const { content, updatedAt, image, name } = props;
    return (
        <Box
            sx={{
                flexGrow: 1,
                p: 0.2,
                m: 0,
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
                            <p>{formatted(updatedAt || new Date())}</p>
                        </Box>
                        <Box>
                            <p>{content}</p>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};
export default MessageCard;
