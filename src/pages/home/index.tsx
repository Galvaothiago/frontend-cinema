import { Container, Footer, Main } from "./style";
import { GiFilmProjector } from 'react-icons/gi'
import { colors } from "../../globalStyle";
import { useEffect, useState } from "react";

const iconColors = [
    colors.grayDark,
    colors.blueMedium,
    colors.blueDark
]
export function Home() {
    const [ currentColor, setCurrentColor ] = useState<string>(iconColors[0])
    const LINKEDIN = "https://www.linkedin.com/in/thiago-galvao-155062208/"
    let countColor = 1 // start from second position
    const TIME = 4000 // Four seconds
    
    useEffect(() => {
        changeIconColorAuto(iconColors)
    }, [])
    
    useEffect(() => {
        const subscription = () => changeIconColorAuto(iconColors)

        return () => subscription()
    }, [countColor])

    const changeIconColorAuto = (colors: string[]) => {
        setInterval(() => {
            if(countColor >= colors.length) countColor = 0

            setCurrentColor(colors[countColor])
            countColor++
        }, TIME)
    }

    return (
        <Container>
            <Main bgColor={currentColor}>
                <div>
                    < GiFilmProjector />
                    <h4>Bem vindo(a), veja os filmes em lançamentos e escolha sua sessão hoje mesmo.</h4>
                </div>
            </Main>
            <Footer>
                <a href={LINKEDIN} target="_blank">Made by Thiago Galvão &hearts;</a>
            </Footer>
        </Container>
    )
}