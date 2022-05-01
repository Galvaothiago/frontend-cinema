import styled from 'styled-components'
import { colors } from '../../globalStyle'

export const Container = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .2rem;

    background-color: ${colors.blueDark};

    -webkit-box-shadow: -1px 3px 45px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 3px 45px -3px rgba(0,0,0,0.75);
    box-shadow: -1px 3px 45px -3px rgba(0,0,0,0.75);
`

export const Menu = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > a {
        max-width: 6rem;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;

        font-size: 1rem;
        text-align: center;
        transition: all .2s;
        text-decoration: none;
        cursor: pointer;

        color: ${colors.white};
        border-radius: 4px;

        &:hover {
            color: ${colors.grayMedium};
        }
    }
`