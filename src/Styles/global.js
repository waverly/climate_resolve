// @flow
/* eslint-disable */

import { css } from "styled-components";
import normalized from "./normalized";

import { fetchColor } from "Utils/prismic-configuration";

// const color = "#00DDFF";
export const globalStyles = css`
  ${normalized}

  @font-face {
    font-family: "Din Round";
    src: url("fonts/DinRoundRegular.woff2") format("woff2"),
      url("fonts/DinRoundRegular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Din Round Bold";
    src: url("fonts/DINRoundPro-Black.woff2") format("woff2"),
      url("fonts/DINRoundPro-Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
  }

  html {
    font-size: 10px;
    font-family: "Din Round", Helvetica, sans-serif;
    font-weight: 300;
  }

  form {
    margin: 0;
  }

  body {
    padding: 0;
    font-family: "Din Round", Helvetica, sans-serif;
    background-color: #4e70c7;
  }

  button,
  input,
  select,
  option,
  textarea {
    background: white;
    font-family: "Din Round", Helvetica, sans-serif;
    font-weight: 300;
    border: none;
    outline: none;
    line-height: normal;
    padding: 0;
    border-radius: 0;
    color: #454545;
    padding: 10px;
    margin: 10px 0;
    border-radius: 3px;
    border: 1px solid black;
  }

  form {
    width: 90%;
    max-width: 400px;
  }

  label,
  legend {
    font-family: "Din Round Bold";
    color: #95cbea;
  }

  fieldset {
    padding: 0;
    border: none;
  }

  fieldset {
    label {
      font-family: "Din Round";
      color: white;
    }
    legend {
      margin-bottom: 2rem;
      font-size: 1.6rem;
    }
  }

  input {
    display: block;
  }

  input[type="text"] {
    width: 100%;
    margin-bottom: 20px;
  }

  select {
    height: 35px;
    margin-bottom: 20px;
  }

  button {
    cursor: pointer;
    background-color: white;
    /* color: #95cbea; */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  ol {
    font-weight: 300;
    margin: 0;
    letter-spacing: 1px;
    color: #1a1934;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Din Round Bold", sans-serif;
  }

  h2,
  h3,
  h4,
  h5,
  a {
    color: #95cbea;
  }

  p,
  li {
    color: white;
  }

  h2,
  h3,
  h4,
  p,
  span,
  a {
    font-size: 1.4rem;
    line-height: 2rem;

    @media (max-width: 768px),
      @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: landscape) {
      font-size: 1.6rem;
      line-height: 2.6rem;
    }
  }

  h1 {
    font-size: 36px;
    line-height: 44px;
    color: white;
    @media screen and (max-width: 1000px) {
      font-size: 26px;
      line-height: 32px;
    }
  }

  h2 {
    font-size: 30px;
    line-height: 38px;
    color: white;
    @media screen and (max-width: 1000px) {
      font-size: 22px;
      line-height: 32px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  #root,
  #reactRoot {
    height: 100%;
  }

  figure {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  .fade-wait-leave {
    opacity: 1;
    background: black;
    transition: all 0.5s;
  }
  .fade-wait-leave.fade-wait-leave-active {
    opacity: 0;
    transition: all 0.4s ease-in;
  }

  .fade-wait-enter {
    opacity: 1;
  }

  .fade-wait-enter.fade-wait-enter-active {
    opacity: 1;
    background: black;
    /* Delay the enter animation until the leave completes */
    transition: opacity 0.4s ease-in 0.6s;
  }

  .fade-wait-height {
    background: black;
    transition: height 10s ease-in-out;
  }
`;
