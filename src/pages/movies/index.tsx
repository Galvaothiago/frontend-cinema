import { MovieCard } from "../../components/movieCard";
import { Container, ContainerMovie, Header } from "./style";
import { IoMdAdd } from 'react-icons/io'
import { Wrapper } from "../../globalStyle";
import { useContext } from "react";
import { MovieContext } from '../../context/MovieContext'
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
                <Header>
                    <h3>Nossos filmes</h3>
                    <div>
                        <div>
                            <IoMdAdd />
                        </div>
                        <span>Total: {images.length}</span>
                    </div>
                </Header>
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

