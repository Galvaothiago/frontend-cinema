import { createGlobalStyle } from 'styled-components'

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
    blueMedium: '#0077b6',
    blueDark: '#03045e',
    redLight: '#ff4d6d',
    redMedium: '#ef233c',
    redDark: '#d00000',
    greenLight: '#80ed99',
    greenMedium: '#57cc99',
    greenDark: '#007200',
    yellowLight: '#ffee99',
    yellowMedium: '#ffe14c',
    yellowDark: '#fdc500'
}