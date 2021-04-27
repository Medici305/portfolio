import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Public Sans', sans-serif;
    }

    h2 {
        font-family: "Ibarra Real Nova", serif;
        font-size: 2rem;
        line-height: 3rem;
        letter-spacing: -0.36px;
        text-align: center;
        // Responsive
        @media (max-width: 578px) {
            font-size: 3rem;
            line-height: 3.5rem;
            margin-top: 1rem;
        }
    }

    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
    }

    a {
        text-decoration: none;
        font-size: .7rem;
        letter-spacing: 2px;
        line-height: 1.4rem;
        text-transform: uppercase;
        color: black;
    }

    hr {
      width: 80%;
      border-radius: 4rem;
    }

    svg {
        color: black;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
    }

    .fa-bars, .fa-times {
        display: none;
        // Responsive
        @media (max-width: 578px) {
            display: inline;
        }
    }
`;

export default GlobalStyle;
