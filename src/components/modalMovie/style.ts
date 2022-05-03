import styled from 'styled-components';
import { colors } from '../../globalStyle';

interface BackgroundProp {
    bg: string
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;

    padding: 2rem;
    background-color: ${colors.blackOpacity};
    position: fixed;
    inset: 0;
`

export const Modal = styled.div`
    max-width: 60rem;
    width: 100%;
    height: 45rem;

    position: relative;
`
export const CloseModal = styled.div`
    width: 100%;
    height: 4rem;
    display: grid;
    place-items: center;

    position: absolute;
    top: -4rem;

    svg {
        font-size: 3rem;
        color: ${colors.white};
        cursor: pointer;
        transition: all .2s;
        &:hover {
            filter: brightness(.7);
        }
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;

    padding: 2rem 1rem;

`

export const TitleMovie = styled.h3`
    width: 100%;
    height: auto;
    padding: 1rem;

    text-align: center;
    word-wrap: break-word;
    font-weight: 400;
    font-size: 1.5rem;
    border-radius: 8px;
    color: ${colors.white};
    background: linear-gradient(271deg, rgba(247,247,247,.07) 0%, rgba(24,24,24,.85) 51%);
`

export const InfoMovie = styled.div<BackgroundProp>`
    width: 100%;
    height: 90%;
    
    margin-top: 1rem;
    background-image: ${({ bg }) => `url(../src/assets/movies/${bg}.jpg)`};
    background-position: 50% 20%;

    @media(max-width: 480px) {
        background-position: center;
        background-size: 100%;
    }
`
export const GradientBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    background: linear-gradient(85deg, rgba(247,247,247,.07) 0%, rgba(24,24,24,.85) 51%);

    @media(max-width: 480px) {
        justify-content: center;
    }
`

export const ContainerInfo = styled.div`
    flex: .45;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    @media(max-width: 480px) {
        flex: 1;
    }

`

export const Classification = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding-top: 1rem;
    color: ${colors.grayLight};

    span {
        font-size: 1.1rem;
        font-weight: 400;
    }
`
export const Genre = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    color: ${colors.grayLight};

    > span {
        font-size: 1.1rem;
        font-weight: 400;
    }

    > div {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        gap: .8rem;
        text-transform: uppercase;

        span {
            width: auto;
            padding: .2rem .5rem;
            font-size: .9rem;
            border: 2px solid ${colors.grayLight};
            transform: skew(-10deg);
        }
    }
`

export const OtherInfo = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${colors.white};

    div {
        display: flex;
        align-items: center;
        gap: .3rem;

        span {
            font-size: .8rem;
            font-weight: 600;
        }
    }
`
export const Synopsis = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: ${colors.white};

    span {
        font-size: 1.1rem;
        font-weight: 400;
    }

    p {
        font-size: .8rem;
        font-weight: 300;
        text-align: center;
        word-wrap: break-word;
    }
`

export const ContainerIdMovie = styled.div`
    width: 100%;
    height: 8rem;
    display: grid;
    place-items: center;
    padding: 1rem;

    position: relative;

    div:nth-child(1) {
        display: flex;
        align-items: center;
        gap: .3rem;
        position: absolute;
        top: .5rem;
        right: 0;

        cursor: pointer;
        color: ${colors.white};
        font-size: .7rem;
        transition: all .3s;
        svg {
            cursor: pointer;
            
        }

        &:hover {
            filter: brightness(.7);
        }
    }

    div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: ${colors.grayLight};

        span {
            font-size: .9rem;
            font-weight: 600;
            padding: .4rem 1rem;
    
            background-color: ${colors.blueLightOpacity};
            border-radius: 30px;
        }

        svg {
            font-size: 1.3rem;
            cursor: pointer;

            transition: all .3s;

            &:hover {
                filter: brightness(.6);
            }
        }
    }
`