import { 
    InfoMovie,
    CloseModal,
    Container,
    Content,
    Modal,
    TitleMovie,
    ContainerInfo, 
    GradientBackground,
    Classification,
    Genre,
    OtherInfo,
    Synopsis,
    ContainerIdMovie
} from "./style";

import { RiCloseCircleFill, RiOpenSourceLine } from 'react-icons/ri'
import { DataMovieProps, MovieContext } from "../../context/MovieContext";
import { useContext, useState } from "react";
import { AgeRating } from "../ageRating";
import { CgTimer } from 'react-icons/cg'
import { MdOutlineDateRange, MdContentCopy } from 'react-icons/md'
import { FiMoreVertical } from 'react-icons/fi'


export function ModalMovie({ ...props } ) {
    const { id, classification, duration, genre, name, release, synopsis } = props.content

    const { closeModal } = useContext(MovieContext)
    const [ showIdMovie, setShowIdMovie ] = useState<boolean>(false)
    
    const handleShowIdMovie = () => {
        setShowIdMovie(oldState => !oldState)
    }

    const copyCodeToClipboard = (id: string) => {
        if(!navigator.clipboard) {
            alert("Do not supported")
            return
        }

        navigator.clipboard.writeText(id)
        alert("ID copiado para sua area de transferência!")
        handleShowIdMovie()
    }

    const separateGenre = (genre: string) => {
        const genres = genre?.split(',')

        return genres
    }

    const createBackgroundName = (name: string) => {
        const nameSeparateByColon = name.split(':')
        const nameSeparateByHifen = name.split('-')

        const hasColon = nameSeparateByColon.length > 1
        const hasHifen = nameSeparateByHifen.length > 1
        
        if(hasColon) return nameSeparateByColon[0].trim()
        if(hasHifen) return nameSeparateByHifen[0].trim()
        
        return name

    }

    const formatDate = (date: string) => {
        const newDate = new Date(date)
        
        const day = newDate.getDate()
        const mounth = newDate.getMonth() + 1 // sum  plus 1 because the mounth start from zero
        const year = newDate.getFullYear()

        return `${day}/${mounth}/${year}`
    }

    formatDate(release)
    return (
        <Container>
            <Modal>
                <CloseModal>
                    <RiCloseCircleFill onClick={closeModal}/>
                </CloseModal>
                <Content>
                    <TitleMovie>{name}</TitleMovie>
                    <InfoMovie bg={createBackgroundName(name)}>
                        <GradientBackground>
                            <ContainerInfo>
                                <Classification>
                                    <span>classificação:</span>
                                    <AgeRating age={String(classification)} />
                                </Classification>
                                <Genre>
                                    <span>Gênero:</span>
                                    <div>
                                        { separateGenre(genre).map((genre, i) => 
                                            <span key={`${i}-${genre}`}>{genre}</span>
                                        )}
                                    </div>
                                </Genre>
                                <OtherInfo>
                                    <div>
                                        <CgTimer/>
                                        <span>{`${duration}min`}</span>
                                    </div>
                                    <div>
                                        < MdOutlineDateRange />
                                        <span>{formatDate(release)}</span>
                                    </div>
                                </OtherInfo>
                                <Synopsis>
                                    <span>Sinopse:</span>
                                    <p>{synopsis}</p>
                                </Synopsis>
                                <ContainerIdMovie>
                                    <div onClick={handleShowIdMovie}>
                                        mostrar ID do filme
                                        < FiMoreVertical />
                                    </div>
                                    { showIdMovie && 
                                        <div>
                                            <span>{id}</span>
                                            < MdContentCopy onClick={() => copyCodeToClipboard(id)}/>
                                        </div>}
                                </ContainerIdMovie> 
                            </ContainerInfo>
                        </GradientBackground>
                    </InfoMovie>
                </Content>
            </Modal>
        </Container>
    )
}