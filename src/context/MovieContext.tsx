import { createContext, ReactNode } from "react";

interface CildrenProp {
    children: ReactNode
}
export const MovieContext = createContext({});

export function MovieProvide({ children }: CildrenProp) {
    return (
        <MovieContext.Provider
            value={{

            }}
        >
            { children }
        </MovieContext.Provider>
    )
}