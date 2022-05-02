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
    imgPath: string,
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
}

export function MovieCard({imgPath, onClick}: test) {
    return (
        <Container onClick={onClick}>
            <img src={imgPath} alt={imgPath} />
        </Container>
    )
}