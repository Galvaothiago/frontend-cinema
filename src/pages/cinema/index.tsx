import { useEffect, useState } from "react";
import { CardCinema, CinemaProps } from "../../components/cardCinema";
import { HeaderContent } from "../../components/headerContent";
import { Wrapper } from "../../globalStyle";
import { api } from "../../service/api";
import { Container, ContainerCinema } from "./style";


export function Cinema() {
    const [ dataCinema, setDateCinema ] = useState<CinemaProps[]>([]);

    const getData = async () => {
        const infoCinema = await api('/cinemas')

        setDateCinema(infoCinema.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Wrapper>
            <Container>
                <HeaderContent title="Nossos cinemas" totalItems={5}/>
                <ContainerCinema>
                    { dataCinema.map((content) => <CardCinema 
                                                        key={content.id} 
                                                        name={content.name} 
                                                        state={content.state} 
                                                        city={content.city}/>) }
                </ContainerCinema>
            </Container>
        </Wrapper>
    )
}