import { Box, Button } from "@mui/material";
const AdminSection = () => {
    return (
        <Box sx={{ display: "flex", gap: "0.5em" }} component='ul'>
            <Button variant='contained'>Dodaj tagi</Button>
            <Button variant='contained' color='error'>
                Usuń pokój
            </Button>
            <Button variant='contained' color='error'>
                Wyrzuć użytkowników{" "}
            </Button>
        </Box>
    );
};

export default AdminSection;
