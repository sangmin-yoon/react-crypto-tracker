import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>por</H1>
    </Container>
  );
}

export default App;
