import styled from 'styled-components'
import { colors } from '../../globalStyle'

export const Container = styled.div`
    max-width: 1366px;
    width: 100%;
    height: 100%;

    padding: 4rem 2rem;
`
export const Header = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;justify-content: space-between;
    align-items: center;

    padding: 0 2rem;
    background-color: ${colors.grayLight};

    h3 { 
        font-size: 1.1rem;
        font-weight: 700;
    }

    > div { 
        display: flex;
        align-items: center;
        gap: 2em;

        div {
            display: grid;
            place-items: center; 
            padding: .4rem;
            border-radius: 5px;
        
            background-color: ${colors.blueLight};
            color: white;
            cursor: pointer;

            svg {
                font-size: 1.3rem;
                color: ${colors.white};
            }
            
        }
    }
`
export const ContainerMovie = styled.div`
    width: 100%;
    height: auto;

    padding: 4rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: 2.5rem;
    
`