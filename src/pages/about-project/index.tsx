import { Box, Link, Typography } from "@mui/material";
import { AnimatedText } from "@/components/Animations/TextAnimations";
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
            Jeśli jesteś zainteresowany kontaktem ze mną, przejdź do sekcji{" "}
            <Link href='/contact-me'>Kontakt</Link>.
        </Typography>
    );
    return (
        <Box
            component='main'
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
            <Typography variant='body1' fontSize='1.5rem'></Typography>

            <br />
            <Typography variant='body1' fontSize='1.5rem'></Typography>
            <AnimatedText
                texts={[about, technologies, functionalities, contact]}
            />
        </Box>
    );
}
