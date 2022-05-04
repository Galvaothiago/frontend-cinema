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
    synopsis: string
}

interface MovieModalProps {
    isOpenModal: boolean,
    openModal: () => void,
    closeModal: () => void,
    handleDataModal: (item: DataMovieProps) => void
} 

export const MovieContext = createContext({} as MovieModalProps);

export function MovieProvider({ children }: CildrenProp) {
    const [ isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [ dataMovie, setDataMovie ] = useState<DataMovieProps>()

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
                openModal,
                handleDataModal,
                closeModal
            }}
        >
            { children }
            { isOpenModal && <ModalMovie content={dataMovie}/> }
        </MovieContext.Provider>
    )
}