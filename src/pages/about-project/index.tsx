import { Box, Link, Typography } from "@mui/material";
import { AnimatedText } from "@/components/Animations/TextAnimations";
import { PageTransition } from "@/components/Animations/PageTransition";
export default function AboutProject() {
    const about = (
        <Typography variant='body1' fontSize={20} m={4}>
            Moja praca inżynierska koncentruje się na stworzeniu aplikacji
            internetowej, która umożliwia użytkownikom tworzenie pokoi
            działających w czasie rzeczywistym.
        </Typography>
    );
    const technologies = (
        <Typography variant='body1' fontSize={20} m={4}>
            Projekt wykorzystuje technologie takie jak Next.js, TypeScript,
            Prisma i trpc, tworząc tzw. &apos; t3 stack &apos; który zapewnia
            wydajność i skalowalność.
        </Typography>
    );
    const functionalities = (
        <Typography variant='body1' fontSize={20} m={4}>
            Oprócz tego, użytkownicy mają możliwość dodawania swoich znajomych
            oraz edytowania swoich danych osobowych, w tym opisu i nazwy.
        </Typography>
    );
    const contact = (
        <Typography variant='body1' fontSize={20} m={4}>
            Jeśli jesteś zainteresowany kontaktem ze mną, napisz do{" "}
            <Link
                variant='h6'
                underline='none'
                color='info.main'
                component='a'
                href='mailto:adamzaleski00@gmail.com?subject=Hello&body=Hello,%20how%20are%20you?'>
                mnie.
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
                O tym projekcie
            </Typography>
            <AnimatedText
                texts={[about, technologies, functionalities, contact]}
            />
        </Box>
    );
}
