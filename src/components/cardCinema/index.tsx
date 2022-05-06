import { Container, Img, Info } from "./style";
import { MdLocationOn, MdContentCopy } from 'react-icons/md'

export interface CinemaProps {
    id?: string,
    name: string;
    state: string,
    city: string
}

export const CardCinema: React.FC<CinemaProps> = ({ name, state, city, id }) => {

    const copyCodeToClipboard = (id: string) => {
        if(!navigator.clipboard) {
            alert("Do not supported")
            return
        }

        navigator.clipboard.writeText(id)
        alert("ID copiado para sua area de transferência!")
    }

    return (
        <Container>
            <Img>
                < MdLocationOn />
            </Img>
            <Info>
                <div>
                    <h3>{name}</h3>
                    <div>
                        <span>{id}</span>
                        < MdContentCopy onClick={() => copyCodeToClipboard(String(id))}/>
                    </div>
                </div>
                <span>{`${city} - ${state}`}</span>
            </Info>
        </Container>
    )
}