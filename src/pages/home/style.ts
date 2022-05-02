import styled, { keyframes } from 'styled-components'
import { colors } from '../../globalStyle'

interface IconBgProp {
    bgColor: string
}

const bounceEffect = keyframes`
  0% {
    transform:  translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
`

export const Container = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
`

export const Main = styled.div<IconBgProp>`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    gap: 2rem;

    > div {
        max-width: 35rem;
        width: 100%;
        height: 25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4rem;

        padding: 0 1rem;
        margin-bottom: 6rem;

        svg {
            font-size: 8rem;
            color: ${({ bgColor }) => bgColor};
            filter: opacity(.6);
            animation: ${bounceEffect} 2s infinite ease-in-out;
            transition: color 1.5s;
        }

        h4 {
            font-size: 1.3rem;
            font-weight: 300;
            text-transform: uppercase;
            color: ${({ bgColor }) => bgColor};
            line-height: 2rem;
            letter-spacing: 2px;
            width: 100%;
            text-align: center;
            word-wrap: break-word;
            transition: color 1.5s;
        }
    }

`

export const Footer = styled.footer`
    width: 100%;
    height: 5rem;
    display: grid;
    place-items: center;

    position: absolute;
    bottom: 0;

    a {
        font-size: .8rem;
        font-weight: 300;
        text-decoration: none;
        color: inherit;
        transition: color .2s;
        &:hover {
            color: ${colors.blueMedium}
        }
    }

`