import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PageTransition } from "@/components/Animations/PageTransition";
export default function PrivacyPolicy() {
    return (
        <PageTransition>
            <Typography variant='h2' textAlign={"center"} my={4}>
                Polityka prywatności
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'>
                    <Typography>1. Wprowadzenie</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Niniejsza Polityka Prywatności określa, w jaki sposób
                        zbieramy, przechowujemy, używamy i chronimy Twoje dane
                        osobowe. Prosimy o dokładne zapoznanie się z jej
                        treścią, aby zrozumieć nasze zasady i praktyki związane
                        z prywatnością.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2a-content'
                    id='panel2a-header'>
                    <Typography>2. Rodzaje Zbieranych Danych</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        2.1. Dane osobowe: Możemy zbierać informacje, takie jak
                        imię, nazwisko, adres e-mail i inne dane kontaktowe,
                        które nam udostępniasz w celu korzystania z naszych
                        usług.
                        <br />
                        2.2. Dane techniczne: Podczas korzystania z naszej
                        strony internetowej możemy automatycznie zbierać dane
                        techniczne, takie jak adres IP, przeglądarka
                        internetowa, system operacyjny i inne informacje
                        dotyczące używanych urządzeń.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel3a-content'
                    id='panel3a-header'>
                    <Typography>3. Cel Zbierania Danych</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        3.1. Twoje dane osobowe zbieramy w celu świadczenia
                        usług, dostosowywania treści do Twoich potrzeb oraz
                        analizy naszego ruchu internetowego.
                        <br />
                        3.2. Dane techniczne są wykorzystywane w celu
                        zapewnienia bezpieczeństwa, diagnostyki i ulepszania
                        naszych usług.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel4a-content'
                    id='panel4a-header'>
                    <Typography>4. Udostępnianie Danych</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        4.1. Nie udostępniamy Twoich danych osobowych osobom
                        trzecim bez Twojej zgody, chyba że jest to wymagane
                        przez prawo.
                        <br />
                        4.2. Możemy udostępniać dane techniczne dostawcom usług
                        technicznych w celu zapewnienia prawidłowego
                        funkcjonowania naszej strony.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel5a-content'
                    id='panel5a-header'>
                    <Typography>5. Bezpieczeństwo Danych</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        5.1. Działamy w celu zabezpieczenia Twoich danych przed
                        nieuprawnionym dostępem lub ujawnieniem.
                        <br />
                        5.2. Wprowadzamy odpowiednie środki bezpieczeństwa, ale
                        prosimy o uwagę, że żadna metoda przekazywania danych
                        przez Internet nie jest w 100% bezpieczna.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel6a-content'
                    id='panel6a-header'>
                    <Typography>6. Twoje Prawa</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        6.1. Masz prawo dostępu do swoich danych osobowych, ich
                        poprawiania, usuwania lub ograniczania przetwarzania.
                        <br />
                        6.2. Możesz w każdej chwili wycofać zgodę na
                        przetwarzanie danych lub zgłosić sprzeciw wobec
                        przetwarzania.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel7a-content'
                    id='panel7a-header'>
                    <Typography>7. Zmiany w Polityce Prywatności</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        7.1. Możemy czasami aktualizować naszą Politykę
                        Prywatności. Każda zmiana zostanie opublikowana na
                        naszej stronie internetowej.
                        <br />
                        7.2. Korzystając z naszych usług po wprowadzeniu zmian,
                        akceptujesz nową wersję Polityki Prywatności.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel8a-content'
                    id='panel8a-header'>
                    <Typography>8. Kontakt</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        8.1. W przypadku pytań lub uwag dotyczących Polityki
                        Prywatności, prosimy o kontakt za pośrednictwem naszych
                        danych kontaktowych.
                        <br />
                        Data ostatniej aktualizacji: 10.09.2023
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </PageTransition>
    );
}
