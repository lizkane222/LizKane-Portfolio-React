import React from 'react';
import styled from 'styled-components';

const WrapperNavStyled = styled.div`
  min-height: 7vh;
  max-height: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  background-color: none;
  h1 {
    font-size: 45px;
  }
  p {
    font-size: 22px;
  }
`;

export default function WrapperNav({ children }) {
  return <WrapperNavStyled>{children}</WrapperNavStyled>;
}