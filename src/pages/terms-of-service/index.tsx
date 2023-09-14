import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PageTransition } from "@/components/Animations/PageTransition";
export default function TermsOfService() {
    return (
        <PageTransition>
            <Typography variant='h4' textAlign='center' my={4}>
                Warunki korzystania z serwisu
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term1-content'
                    id='term1-header'>
                    <Typography>Postanowienia ogólne</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1.1. Niniejszy Regulamin określa zasady korzystania z
                        serwisu internetowego.
                        <br />
                        1.2. Korzystanie z serwisu oznacza akceptację warunków
                        zawartych w Regulaminie.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term2-content'
                    id='term2-header'>
                    <Typography>Zakres Usług</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        2.1. Serwis oferuje następujące usługi:
                        <br />
                        - Tworzenie pokojów tematycznych, w których użytkownicy
                        mogą dyskutować na wybrane tematy.
                        <br />
                        - Real-time czat umożliwiający użytkownikom prowadzenie
                        rozmów w czasie rzeczywistym.
                        <br />
                        - Edycja profilu użytkownika, co pozwala na
                        personalizację i dostosowanie swojego profilu.
                        <br />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term3-content'
                    id='term3-header'>
                    <Typography>Warunki korzystania</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        3.1. Użytkownik zobowiązuje się do korzystania z serwisu
                        zgodnie z obowiązującymi przepisami prawa.
                        <br />
                        3.2. Użytkownik zobowiązuje się do niepublikowania
                        treści o charakterze obraźliwym, niezgodnym z prawem lub
                        naruszającym prawa innych osób.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term4-content'
                    id='term4-header'>
                    <Typography>Odpowiedzialność</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        4.1. Administracja serwisu nie ponosi odpowiedzialności
                        za treści zamieszczane przez użytkowników.
                        <br />
                        4.2. Serwis zastrzega sobie prawo do usunięcia treści
                        naruszających Regulamin.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term5-content'
                    id='term5-header'>
                    <Typography>Prywatność</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        5.1. Serwis dba o prywatność użytkowników i przetwarza
                        dane zgodnie z obowiązującymi przepisami.
                        <br />
                        5.2. Więcej informacji na temat przetwarzania danych
                        znajduje się w Polityce Prywatności.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='term6-content'
                    id='term6-header'>
                    <Typography>Postanowienia końcowe</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        6.1. Regulamin jest wiążący dla wszystkich użytkowników
                        serwisu.
                        <br />
                        6.2. Serwis zastrzega sobie prawo do zmiany Regulaminu.
                        <br />
                        6.3. Wszelkie spory rozstrzygane są przez sądy właściwe
                        dla siedziby serwisu.
                        <br />
                        Data ostatniej aktualizacji: 12.09.2023
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </PageTransition>
    );
}
