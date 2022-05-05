import styled from 'styled-components'
import { colors } from '../../globalStyle'

export const Container = styled.div`
    width: 16.85rem;
    height: 22rem;
    border-radius: 32px 0 32px 0;
    background-color: ${colors.white};
    transition: all .3s;
    cursor: pointer;
    img {
        width: 16.85rem;
        height: 22rem;
        border-radius: 32px 0 32px 0;
    }
    &:hover {
        transform: scale(1.035);
        -webkit-box-shadow: -1px 3px 87px -40px rgba(0,0,0,1);
        -moz-box-shadow: -1px 3px 87px -40px rgba(0,0,0,1);
        box-shadow: -1px 3px 87px -40px rgba(0,0,0,1);
    }
`