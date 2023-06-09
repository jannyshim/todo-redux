import React from "react";
import styled from "styled-components";

interface ButtonProps {
  title: string;
  onclick: () => void;
}

function Button({ title, onclick }: ButtonProps) {
  return (
    <ButtonContainer onClick={onclick}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  width: fit-content;
  height: 30px;
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
`;

const ButtonText = styled.span`
  color: ${(props) => props.theme.fontPrimary};
`;

export default Button;
