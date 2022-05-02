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

import { RiCloseCircleFill } from 'react-icons/ri'
import { MovieContext } from "../../context/MovieContext";
import { useContext, useState } from "react";
import { AgeRating } from "../ageRating";
import { CgTimer } from 'react-icons/cg'
import { MdOutlineDateRange, MdContentCopy } from 'react-icons/md'
import { FiMoreVertical } from 'react-icons/fi'

export function ModalMovie() {
    const { closeModal } = useContext(MovieContext)
    const ID_MOVIE = '6270488c10042bed4bca602b'
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

    return (
        <Container>
            <Modal>
                <CloseModal>
                    <RiCloseCircleFill onClick={closeModal}/>
                </CloseModal>
                <Content>
                    <TitleMovie>Aladdin</TitleMovie>
                    <InfoMovie>
                        <GradientBackground>
                            <ContainerInfo>
                                <Classification>
                                    <span>classificação:</span>
                                    <AgeRating age={'16'} />
                                </Classification>
                                <Genre>
                                    <span>Gênero:</span>
                                    <div>
                                        <span>Drama</span>
                                        <span>Terror</span>
                                    </div>
                                </Genre>
                                <OtherInfo>
                                    <div>
                                        <CgTimer/>
                                        <span>{`${91}min`}</span>
                                    </div>
                                    <div>
                                        < MdOutlineDateRange />
                                        <span>{'23/05/2019'}</span>
                                    </div>
                                </OtherInfo>
                                <Synopsis>
                                    <span>Sinopse:</span>
                                    <p>{'Um jovem humilde descobre uma lâmpada mágica...'}</p>
                                </Synopsis>
                                <ContainerIdMovie>
                                    <div onClick={handleShowIdMovie}>
                                        mostrar ID do filme
                                        < FiMoreVertical />
                                    </div>
                                    { showIdMovie && 
                                        <div>
                                            <span>{ID_MOVIE}</span>
                                            < MdContentCopy onClick={() => copyCodeToClipboard(ID_MOVIE)}/>
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