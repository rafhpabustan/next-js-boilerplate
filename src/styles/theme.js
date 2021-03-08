import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import { getResponsiveFontSize } from 'utils/styles'

export default createGlobalStyle`
  ${reset}

  html {
    min-width: 360px;
    font-size: 62.5%;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1 {
    font-size: ${getResponsiveFontSize(3.6, 5.2)}
  }

  h2 {
    font-size: ${getResponsiveFontSize(2.4, 3.6)}
  }

  h3 {
    font-size: ${getResponsiveFontSize(1.8, 2.4)}
  }

  p {
    font-size: ${getResponsiveFontSize(1.6, 1.8)}
  }
`
