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
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    *::selection {
        color: ${Theme.colors.warning.warning500};
        background: rgb(32, 35, 41);
    }

    input,
    button,
    select,
    textarea,
    optgroup,
    option {
        font-family: inherit;
        font-size: inherit;
        font-weight: ${Theme.typography.fontWeights.Bold};
        font-style: inherit;
        color: inherit;
    }

    ul,
    ol {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    a:visited {
        color: inherit;
    }

    a:hover {
        color: ${Theme.colors.warning.warning500};
    }

    body {
        font-family: 'Segoe UI', 'Roboto', sans-serif;
        line-height: 24px;
        color: ${Theme.colors.light.light100};
        background-color: ${Theme.colors.dark.dark900};
        overflow: hidden;
    }
`
