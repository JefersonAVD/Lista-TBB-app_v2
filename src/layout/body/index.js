import { Container } from "@mui/system"


const Body = ({children}) => {

    return(
        <Container maxWidth="lg">
            {children}
        </Container>
    )
}

export default Body;