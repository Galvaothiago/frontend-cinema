import { MovieCard } from "../../components/movieCard";
import { Container, ContainerMovie, Header } from "./style";
import { IoMdAdd } from 'react-icons/io'

export function Movies() {
    const images = [
        'Aladdin',
        'Brightburn - Filho das Trevas',
        'Godzilla II: Rei dos Monstros',
        'Hellboy', 'Kardec: A História por Trás do Nome',
        'Rocketman',
        'Vingadores: Ultimato'
    ]

    return (
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
                { images.map(image => <MovieCard imgPath={`../src/assets/movies/${image}.jpg`}/>) }
            </ContainerMovie>
        </Container>
    )
}

