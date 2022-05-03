import { MovieCard } from "../../components/movieCard";
import { Container, ContainerMovie } from "./style";
import { IoMdAdd } from 'react-icons/io'
import { Wrapper } from "../../globalStyle";
import { useContext } from "react";
import { MovieContext } from '../../context/MovieContext'
import { HeaderContent } from "../../components/headerContent";
export function Movies() {
    const images = [
        'Aladdin',
        'Brightburn - Filho das Trevas',
        'Godzilla II: Rei dos Monstros',
        'Hellboy', 'Kardec: A História por Trás do Nome',
        'Rocketman',
        'Vingadores: Ultimato'
    ]

    const { openModal } = useContext(MovieContext)

    return (
        <Wrapper>
            <Container>
                <HeaderContent title="Nossos filmes" showAddIcon={true} totalItems={images.length} />
                <ContainerMovie>
                    { images.map((image, index) => 
                        <MovieCard 
                            key={`${index}-${image}`} 
                            onClick={openModal} 
                            imgPath={`../src/assets/movies/${image}.jpg`}/>
                    )}
                </ContainerMovie>
            </Container>
        </Wrapper>
    )
}

