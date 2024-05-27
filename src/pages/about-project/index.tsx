import { Box, Link, Typography } from "@mui/material";
import { AnimatedText } from "@/components/Animations/TextAnimations";
import { PageTransition } from "@/components/Animations/PageTransition";

export default function AboutProject() {
    const about = (
        <Typography variant='body1' fontSize={20} m={4}>
            My engineering project focuses on creating a web application that
            allows users to create real-time rooms.
        </Typography>
    );
    const technologies = (
        <Typography variant='body1' fontSize={20} m={4}>
            The project utilizes technologies such as Next.js, TypeScript,
            Prisma, and trpc, forming the so-called 't3 stack' which ensures
            performance and scalability.
        </Typography>
    );
    const functionalities = (
        <Typography variant='body1' fontSize={20} m={4}>
            Additionally, users have the ability to add their friends and edit
            their personal information, including description and name.
        </Typography>
    );
    const contact = (
        <Typography variant='body1' fontSize={20} m={4}>
            If you are interested in contacting me, write to{" "}
            <Link
                variant='h6'
                underline='none'
                color='info.main'
                component='a'
                href='mailto:adamzaleski00@gmail.com?subject=Hello&body=Hello,%20how%20are%20you?'>
                me.
            </Link>
        </Typography>
    );
    return (
        <Box
            component={PageTransition}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                my: 4,
                px: 8,
            }}>
            <Typography variant='h2' gutterBottom textAlign={"center"}>
                About this project
            </Typography>
            <AnimatedText
                texts={[about, technologies, functionalities, contact]}
            />
        </Box>
    );
}
