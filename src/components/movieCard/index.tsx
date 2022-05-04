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
export interface test {
    imgPath?: string,
    onClick: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>,
        id?: string,
        name: string,
        genre: string,
        duration: number,
        classification: number,       
        release: string,
        synopsis: string
    
}

export function MovieCard({imgPath, onClick, content}: test) {
    return (
        <Container onClick={onClick}>
            <img src={imgPath} alt={imgPath} />
        </Container>
    )
}