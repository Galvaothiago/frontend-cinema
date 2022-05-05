import styled from 'styled-components'
import { colors } from '../../globalStyle'

export const Container = styled.div`
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
            padding: .4rem;
            border-radius: 5px;
        
            background-color: ${colors.blueLight};
            color: white;
            cursor: pointer;
            a {
                width: 100%;
                height: 100%;
                display: grid;
                place-items: center; 
                svg {
                    font-size: 1.3rem;
                    color: ${colors.white};
                }
            }
        }
    }
`