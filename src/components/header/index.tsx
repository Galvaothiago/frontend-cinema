import { useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../../globalStyle";
import { Container, Menu } from "./style";

export function Header() {
    const options = ['Filmes', 'Cinemas', 'Sessões']
    const linkPath = ['/movies', '/cinemas', '/sessions']

    const [ linkSelected, setLinkSelected ] = useState<string>('')

    const handleChangeLinkStyle = (option: string) => {
        setLinkSelected(option)
    }
    return (
        <Container>
            <Menu>
                { options.map((option, index) => (
                    <Link
                        style={{ backgroundColor: `${linkSelected === option ? `${colors.blueLight}` : ''}`
                        }}  
                        key={`${index}-${option}`} 
                        onClick={() => handleChangeLinkStyle(option)}
                        to={linkPath[index]}>{option}
                    </Link>)
                )}
            </Menu>
        </Container>
    )
}