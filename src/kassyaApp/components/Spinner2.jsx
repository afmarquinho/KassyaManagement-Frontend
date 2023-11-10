import styled from "styled-components";

const Spinner2 = () => {
  return (
    <DIV className="flex items-center justify-center mt-10">
      <span className="loader"></span>
    </DIV>
  );
};

export default Spinner2;
const DIV = styled.div`
  .loader {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #00cdd4;
    position: relative;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 0;
    background: #1a1abe;
    transform: rotate(0deg) translate(30px);
    animation: rotate 1s ease infinite;
  }
  .loader:after {
    animation-delay: 0.5s;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg) translate(30px);
    }
  }
`;

import React from 'react'


