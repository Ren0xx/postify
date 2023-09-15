
import { createTheme } from '@mui/material/styles';
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#5C6BC0',
        },
        secondary: {
            main: '#d94863',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 525,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

});