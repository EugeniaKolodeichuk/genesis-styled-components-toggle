import React from "react";
import styled from "styled-components";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 78vh;
  background: black;
  font-size: 24px;
  border: none;
  resixe: none;
  color: ${({ color }) => color || "white"};
`;

const Console = (props) => {
  return <StyledConsole {...props} />;
};

export default Console;
