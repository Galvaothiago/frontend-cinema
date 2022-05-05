import { MovieCard, MovieCardProps } from "../../components/movieCard";
import { Container, ContainerMovie } from "./style";
import { Wrapper } from "../../globalStyle";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from '../../context/MovieContext'
import { HeaderContent } from "../../components/headerContent";
import { api } from "../../service/api";
export function Movies() {
    const [ dataMovie, setDataMovie ] = useState<MovieCardProps[]>()
    const quantity = dataMovie?.length
    const defaultQuantity = 0

    const getDateMovie =  async () => {
        const dataMovie = await api.get('/movies')

        setDataMovie(dataMovie?.data)
    }

    useEffect(() => {
        getDateMovie()
    }, [])

    const { handleDataModal } = useContext(MovieContext)

    return (
        <Wrapper>
            <Container>
                <HeaderContent title="Nossos filmes" showAddIcon={true} totalItems={quantity || defaultQuantity} />
                <ContainerMovie>
                    { dataMovie?.map(item => 
                        <MovieCard 
                            {...item}
                            imgPath={item.pathImg}
                            key={item?.id}
                            onClick={() => handleDataModal(item)} 
                            />
                    )}
                </ContainerMovie>
            </Container>
        </Wrapper>
    )
}