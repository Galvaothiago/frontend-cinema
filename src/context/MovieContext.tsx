import { createContext, ReactNode, useState } from "react";
import { ModalMovie } from "../components/modalMovie";

interface CildrenProp {
    children: ReactNode
}

export interface DataMovieProps {
    id?: string,
    name: string,
    genre: string,
    duration: number,
    classification: number,       
    release: string,
    pathImg: string,
    synopsis: string
}

interface MovieModalProps {
    isOpenModal: boolean,
    showFormMovie: boolean,
    openModal: () => void,
    closeModal: () => void,
    handleDataModal: (item: DataMovieProps) => void,
    handleShowForm: () => void
} 

export const MovieContext = createContext({} as MovieModalProps);

export function MovieProvider({ children }: CildrenProp) {
    const [ isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [ dataMovie, setDataMovie ] = useState<DataMovieProps>()

    const [ showFormMovie, setShowFormMovie ] = useState<boolean>(false)
    
    const handleShowForm = () => {
        setShowFormMovie(oldState => !oldState)
    }

    const openModal = () => {
        setIsOpenModal(true)
    }

    const handleDataModal = (item: DataMovieProps ) => {
        openModal()
        setDataMovie(item)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }
    return (
        <MovieContext.Provider
            value={{
                isOpenModal,
                showFormMovie,
                openModal,
                handleShowForm,
                handleDataModal,
                closeModal
            }}
        >
            { children }
            { isOpenModal && <ModalMovie content={dataMovie}/> }
        </MovieContext.Provider>
    )
}