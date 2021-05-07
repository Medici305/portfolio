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

    html {
        scroll-behavior: smooth;
    }

    h1 {
        font-family: "Ibarra Real Nova", serif;
        font-size: 4rem;
        line-height: 5rem;
        color: rgb(51, 50, 61);
    // Responsive
        @media (max-width: 768px) {
            font-size: 2.5rem;
            line-height: 3.5rem;
            margin-top: 1rem;
        }
    }

    h2 {
        font-family: "Ibarra Real Nova", serif;
        letter-spacing: -0.36px;
        text-align: center;
        font-size: 3rem;
        color: rgb(51, 50, 61);
    }

    h3 {
        font-family: "Ibarra Real Nova", serif;
        letter-spacing: -0.36px;
        text-align: center;
        font-size: 2rem;
        font-weight: 400;
        color: rgb(51, 50, 61);
        text-align: left;
    }

    h4 {
        margin: 1rem 0;
        color: #5fb4a8;
    }

    p {
        font-size: 1rem;
        line-height: 2rem;
        letter-spacing: 0;
        color: #939398;
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

      .line {
    width: 100%;
    height: 0.05rem;
    background: #e2e2e2;
  }
`;

export default GlobalStyle;
