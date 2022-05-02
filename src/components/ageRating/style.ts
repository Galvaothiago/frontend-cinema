import styled from 'styled-components'
import { colors } from '../../globalStyle'

interface BgAgeRatingProp {
    bg: string
}

export const Container = styled.div<BgAgeRatingProp>`
    max-width: 2.1rem;
    width: 100%;
    height: 2.1rem;
    display: grid;
    place-items: center;
    border-radius: 3px;

    border: 1px solid ${colors.white}; 
    background-color: ${({ bg }) => bg};

    span {
        color: ${colors.white};
        font-weight: bold;
    }
`