import React from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
	0%, 100% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-60px);
  }
`;

const Container = styled.div`
  position: relative;
`;

const FloatingPanIcon = styled.img`
  width: 128px;
  animation: ${float} 2s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
  @media (max-width: 500px) {
    width: 64px;
  }
`;

export const Spinner: React.FC = () => {
  return (
    <Container>
      <FloatingPanIcon src={require("../../assets/img/logo.png")} />
    </Container>
  );
};
