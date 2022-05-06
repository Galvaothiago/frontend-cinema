import { HeaderContent } from "../../components/headerContent";
import { CardInfo, Container, Content, DayWeek, Info, InputSearch } from "./style";
import { BsSearch } from 'react-icons/bs';
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { RiOpenSourceLine } from "react-icons/ri";
import { Wrapper } from "../../globalStyle";

interface SessionProp {
    dayWeek: string,
    schedule: string,
    movie: {
        name: string,
        genre: string,
        duration: number,
        classification: string,
        release: string,
        pathImg: string,
        synopsis: string,
        id?: string
    },
    cinema: {
        name: string,
        city: string,
        state: string,
        id: string
    },
    id: string
}

export function Session() {
    const [ idCinema, setIdCinema ] = useState<string>('')
    const [ session, setSession ] = useState<SessionProp[]>([])
    const [ showSession, setShowSession ] = useState<boolean>(false)
 
    const getCinema = async () => {
        setShowSession(false)

        try {
            const session = await api.get(`sessions/${idCinema}`)
            setSession(session.data)
            setIdCinema('')
            setShowSession(true)

        } catch(err) {
            console.log(err)
        }
    }
    
    return (
        <Wrapper>
            <Container>
                <HeaderContent title="Sessões" totalItems={5}/>
                <InputSearch>
                    <div>
                        <input value={idCinema} onChange={(e) => setIdCinema(e.target.value)} type="text" placeholder="Digite aqui o ID do cinema que deseja ver a sessão..." />
                        < BsSearch onClick={getCinema}/>
                    </div>
                </InputSearch>
                <Content>
                    <CardInfo>
                        { showSession && session.map((session) => 
                            <>
                                <DayWeek>
                                    <span>{session?.dayWeek}</span>
                                </DayWeek>
                                <Info>
                                    <div>
                                        <p>{`${session?.cinema?.name} - ${session.cinema?.city}`}</p>
                                        <span>{session?.movie?.name}</span>
                                    </div>
                                    <span>{session?.schedule}</span>
                                </Info>
                            </>)
                        }
                    </CardInfo>
                </Content>
            </Container>
        </Wrapper>
    )
}