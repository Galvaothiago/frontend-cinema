import { MovieCard, test } from "../../components/movieCard";
import { Container, ContainerMovie } from "./style";
import { IoMdAdd } from 'react-icons/io'
import { Wrapper } from "../../globalStyle";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from '../../context/MovieContext'
import { HeaderContent } from "../../components/headerContent";
import { api } from "../../service/api";
export function Movies() {
    const images = [
        'Aladdin',
        'Brightburn - Filho das Trevas',
        'Godzilla II: Rei dos Monstros',
        'Hellboy', 'Kardec: A História por Trás do Nome',
        'Rocketman',
        'Vingadores: Ultimato'
    ]

    const [ dataMovie, setDataMovie ] = useState<test[]>()
    // const empty = dataMovie.length === 0

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
                <HeaderContent title="Nossos filmes" showAddIcon={true} totalItems={images.length} />
                <ContainerMovie>
                    { dataMovie?.map(item => 
                        <MovieCard 
                            {...item}
                            imgPath={`../src/assets/movies/${item.name}.jpg`}
                            key={item?.id}
                            onClick={() => handleDataModal(item)} 
                            />
                    )}
                </ContainerMovie>
            </Container>
        </Wrapper>
    )
}

