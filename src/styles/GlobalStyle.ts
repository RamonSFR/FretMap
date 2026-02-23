import { createGlobalStyle } from 'styled-components'

export const colors = {
  yellow1: '#f9dc5c',
  white: '#fcfaefff',
  lightYellow: '#fcefb4',
  darkYellow1: '#fae588',
  darkYellow2: '#f9dc5c',
  black: '#333',
  grey: 'rgba(255, 255, 255, 0.27)'
}

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-family: 'Funnel Sans', sans-serif;
    background-color: ${colors.white};
    color: ${colors.black};
  }
`

export default GlobalStyle
