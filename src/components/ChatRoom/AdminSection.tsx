import { Box, Button } from "@mui/material";
const AdminSection = () => {
    return (
        <Box sx={{ display: "flex", gap: "0.5em" }}>
            <Button>Dodaj tagi</Button>
            <Button color='error'>Usuń pokój</Button>
            <Button color='error'>Wyrzuć użytkowników </Button>
        </Box>
    );
};

export default AdminSection;
