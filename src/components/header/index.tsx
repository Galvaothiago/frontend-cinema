import { useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../../globalStyle";
import { Container, Home, Menu } from "./style";
import { RiHomeSmileFill } from 'react-icons/ri'
export function Header() {
    const options = ['Filmes', 'Cinemas', 'Sessões']
    const linkPath = ['/movies', '/cinemas', '/sessions']

    const defaultPath = 'Home'
    const [ linkSelected, setLinkSelected ] = useState<string>(defaultPath)

    const handleChangeLinkStyle = (option: string) => {
        setLinkSelected(option)
    }
    return (
        <Container>
            <Menu>
                <Home>
                    <Link 
                        to="/" 
                        onClick={() => handleChangeLinkStyle('Home')}
                        >
                        <RiHomeSmileFill style={{ color: `${linkSelected === 'Home' ? `${colors.blueLight}` : ''}`}}/>
                    </Link>
                </Home>
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