import { Theme } from '@/styles/Theme.styled'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 100%;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    input,
    button,
    select,
    textarea,
    optgroup,
    option {
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        font-style: inherit;
        color: inherit;
    }

    a:visited {
        color: inherit;
    }

    body {
        margin: 0;
        padding: 0;

        font-family: 'Roboto', sans-serif;
        line-height: 24px;
        color: ${Theme.colors.light.light100};

        background-color: ${Theme.colors.dark.dark900};
    }
`
