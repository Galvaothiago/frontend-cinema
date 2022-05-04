import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter','Ubuntu', sans-serif;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }  
    }
`

export const colors = {
    grayLight: '#e9ecef',
    grayMedium: '#ced4da',
    grayDark: '#495057',
    blueLight: '#00b4d8',
    blueLightOpacity: 'rgba(0, 180, 216, .35)',
    blueMedium: '#0077b6',
    blueDark: '#03045e',
    blueOpacity: 'rgba(247, 253, 255, .6)',    
    redLight: '#ff4d6d',
    redMedium: '#ef233c',
    redDark: '#d00000',
    greenLight: '#80ed99',
    greenMedium: '#57cc99',
    greenDark: '#007200',
    yellowLight: '#ffee99',
    yellowMedium: '#ffe14c',
    yellowDark: '#fdc500',
    orangeMedium: '#f77f00',
    black: '#212529',
    blackOpacity: 'rgba(33, 37, 41, .85)',
    white: '#ffff',
}

export const ContainerApp = styled.div`
    width: 100vw;
    height: 100vh;

    overflow: hidden;
    background-color: ${colors.grayMedium};
`

export const Main = styled.main`
    width: 100vw;
    height: calc(100vh - 5rem);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow-y: auto;
`

