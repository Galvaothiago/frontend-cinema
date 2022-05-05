import { Container } from "./style";

export interface MovieCardProps  {
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

export function MovieCard({imgPath, onClick}: MovieCardProps) {
    return (
        <Container onClick={onClick}>
            <img src={imgPath} alt={imgPath} />
        </Container>
    )
}