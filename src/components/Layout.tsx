import { Container } from "@mui/material";
import { type ElementType } from "react";
const Layout = ({ children, surroundComponentName }: { children: React.ReactNode, surroundComponentName: ElementType}) => {
    return (
        <Container maxWidth='lg' component={surroundComponentName}>
            {children}
        </Container>
    );
};
export default Layout;
