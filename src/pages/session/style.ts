import styled from 'styled-components'
import { colors } from '../../globalStyle'

export const Container = styled.div`
    max-width: 1366px;
    width: 100%;
    height: 100%;
    padding: 2rem;


`

export const Content = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: auto;

    gap: 1rem;


    padding: 4rem 2rem;
`


export const InputSearch = styled.div`
    width: 100%;
    height: 5rem;

    display: grid;
    place-items: center;
    margin-top: 2rem;

    div { 
        display: flex;
        gap: 1em;
        align-items: center;
        justify-content: center;

        input {
            width: 30rem;
            height: 3rem;
            padding: 1rem;

            outline: none;
            border: 1px solid ${colors.grayLight};
            border-radius: 30px;
            font-size: 1.1rem;

            &::placeholder {
                font-size: .9rem;
                font-weight: 300;
                font-style: italic;
            }
        }
        svg {
            font-size: 2rem;
            color: ${colors.grayDark};
            cursor: pointer;
        }
    }
`

export const DayWeek = styled.div`
    width: 25rem;
    display: flex;
    align-items: flex-start;

    span {
        padding: 1rem 1rem;
        background-color: red;
        transform: skew(-10deg);
        border: 1px solid ${colors.grayMedium};
        color: ${colors.grayDark};
        background-color: ${colors.white};
    }
`
export const CardInfo = styled.div`
    width: 50rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ;
    gap: 1.5rem;

`

export const Info = styled.div`
    width: 25rem;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${colors.white};

    margin-bottom: 1rem;

        
    background-color: ${colors.white};
    background: linear-gradient(85deg, rgba(247,247,247,0.07326680672268904) 0%, rgba(242,241,241,1) 45%);

    -webkit-box-shadow: -8px 4px 42px -24px rgba(0,0,0,0.75);
    -moz-box-shadow: -8px 4px 42px -24px rgba(0,0,0,0.75);
    box-shadow: -8px 4px 42px -24px rgba(0,0,0,0.75);

    > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: .8rem;

            p {
                margin-bottom: 1rem
            }

            span {
                font-weight: 600;
            }
        }

    > span {
        padding: .3rem 1rem;
        border-radius: 10px;
        border: 1px solid ${colors.blueLight};
        color: ${colors.blueLight};
    }

`