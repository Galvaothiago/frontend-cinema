import styled from 'styled-components'
import { colors } from '../../globalStyle'

export const Container = styled.div`
    max-width: 1366px;
    width: 100%;
    height: auto;
    padding: 2rem;

`

export const Header = styled.header`
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: relative;
    margin-top: 16rem;

    background-color: ${colors.grayLight};

    div:nth-child(1) {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        svg {
            font-size: 2rem;
            color: ${colors.grayDark};
            cursor: pointer;
        }

    }

    p {
        font-size:1.1rem;
        font-weight: 400;
        font-style: italic;
    }

    > svg {
        font-size: 1.2rem;
        color: ${colors.grayDark};

        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
    }
    
`

export const ContainerButton = styled.div`
    max-width: 25rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        width: 7.5rem;
        height: 2.5rem;
        background-color: none;
        border-radius: 5px;

        font-size: .8rem;
        text-transform: uppercase;
        color: ${colors.white};
        border: 2px solid ${colors.redDark};
        background-color: ${colors.redLight};
        cursor: pointer;

    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 1rem;
    align-items: center;
`

export const Form = styled.form`
    flex: .55;
    height: 100%;
    padding: 2rem;

    > div {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;;

            label {
                font-size: 1.3rem;
                margin-bottom: .5rem;
                font-weight: bold;
                color: ${colors.grayDark};
            }

            input {
                width: 100%;
                height: 2.6rem;
                border-radius: 5px;
                outline: none;
                border: 2px solid ${colors.grayLight};
                background-color: ${colors.white};

                padding: 1rem;

                font-size: 1.2rem;
            }
        }

    div:nth-child(4) {
        display: flex;
        flex-direction: row;

        justify-content: space-between;

        > div {
            display: flex;
            flex-direction: column;
        }

        input {
            width: 100%;
        }

    }

    div:nth-child(5) {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 2rem;

        justify-content: space-between;

        div:nth-child(1) {
            display: flex;
            flex-direction: column;
            select {
                width: 13rem;
                height: 2rem;
                border-radius: 5px;
                outline: none;
                border: 2px solid ${colors.grayLight};
                background-color: ${colors.white};
            }
        }

        div:nth-child(2) {
            display: flex;
            flex-direction: column;
            textarea {
                width: 20rem;
                height: 9rem;
                border-radius: 5px;
                padding: 1rem;
                font-size: 1.1rem;
                outline: none;
                border: 2px solid ${colors.grayLight};
                background-color: ${colors.white};
            }
        }
    }

    div:nth-child(6) {
        width: 100%;
        height: 3rem;
        margin-top: 2rem;

        button {
            width: 100%;
            height:100%;

            text-transform: uppercase;
            font-size: 1.1rem;
            color: ${colors.white};
            background-color: ${colors.blueLight};
            border-radius: 5px;
            border: 0;
            outline: none;
            transition: all .3s;
            cursor: pointer;

            &:hover {
                filter: brightness(.85);
            }
        }
    }
`
export const Icon = styled.div`
    flex: .45;
    height: 100vh;
    display: grid;
    place-items: center;

    svg {
        font-size: 10rem;
        color: ${colors.grayDark};
    }
`