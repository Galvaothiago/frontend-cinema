import { HeaderContent } from "../../components/headerContent";
import { Wrapper } from "../../globalStyle";
import { Container } from "./style";

export function Cinema() {
    return (
        <Wrapper>
            <Container>
                <HeaderContent title="Nossos cinemas" totalItems={5}/>
            </Container>
        </Wrapper>
    )
}