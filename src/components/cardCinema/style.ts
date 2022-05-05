import styled from 'styled-components'
import { colors } from '../../globalStyle'

export const Container = styled.div`
    max-width: 48rem;
    width: 100%;
    height: 12rem;
    display: flex;
    background-color: ${colors.grayLight};

    border-radius: 60px 10px 60px 10px;

    -webkit-box-shadow: -11px 10px 14px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: -11px 10px 14px -10px rgba(0,0,0,0.75);
    box-shadow: -11px 10px 14px -10px rgba(0,0,0,0.75);
`

export const Info = styled.div`
    flex: .7;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    padding: 1.5rem;

    h3 {
        font-size: 1.4rem;
    }
    span {
       width: 100%;
       text-align: center;
       color: ${colors.grayDark};
       font-weight: 700;
    }
`

export const Img = styled.div`
    flex: .3;
    height: 100%;

    display: grid;
    place-items: center;
    background-color: ${colors.blueMedium};
    border-radius: 60px 0 0 10px;
    transition: all .3s;
    cursor: pointer;

    &:hover {
        filter: opacity(.9);
    }

    svg { 
        font-size: 4.5rem;
        color: ${colors.blueDark};
    }
`