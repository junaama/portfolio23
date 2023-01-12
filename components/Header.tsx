import styled from "styled-components";

export const Header = () => {
  return (
    <Background>
      <HeaderTitle>Naama Paulemont's Website</HeaderTitle>
    </Background>
  );
};

const Background = styled.div`
  background-color: black;
  margin: 0 auto;
  padding: 8px;
  height: 60px;
  display: flex;
  align-items: center;
`;
const HeaderTitle = styled.h1`
  color: #e0dbd5;
  text-align: center;
  width: 100%;
  font-family: "Semplicita-Medium", sans-serif;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
