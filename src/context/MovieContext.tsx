import { createContext, ReactNode, useState } from "react";
import { ModalMovie } from "../components/modalMovie";

interface CildrenProp {
    children: ReactNode
}

interface MovieModalProps {
    isOpenModal: boolean,
    openModal: () => void,
    closeModal: () => void
} 

export const MovieContext = createContext({} as MovieModalProps);

export function MovieProvider({ children }: CildrenProp) {
    const [ isOpenModal, setIsOpenModal] = useState<boolean>(false)

    const openModal = () => {
        setIsOpenModal(true)
        console.log('modal opened')
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }
    return (
        <MovieContext.Provider
            value={{
                isOpenModal,
                openModal,
                closeModal
            }}
        >
            { children }
            { isOpenModal && <ModalMovie /> }
        </MovieContext.Provider>
    )
}