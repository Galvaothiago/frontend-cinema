import { Container } from "./style";

// interface MovieCardProps {
//     content: {
//         id: string,
//         name: string,
//         genre: string,
//         duration: number,
//         classification: number,
//         release: string,
//         synopsis: string

//     }
// }
interface test {
    imgPath: string
}

export function MovieCard({imgPath}: test) {
    return (
        <Container>
            <img src={imgPath} alt={imgPath} />
        </Container>
    )
}