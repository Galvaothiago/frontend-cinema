import { Container, Img, Info } from "./style";
import { MdLocationOn } from 'react-icons/md'

export interface CinemaProps {
    id?: string,
    name: string;
    state: string,
    city: string
}

export const CardCinema: React.FC<CinemaProps> = ({ name, state, city }) => {
    return (
        <Container>
            <Img>
                < MdLocationOn />
            </Img>
            <Info>
                <h3>{name}</h3>
                <span>{`${city} - ${state}`}</span>
            </Info>
        </Container>
    )
}