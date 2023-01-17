import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <Background>
        <HeaderTitle>Hello! I'm Naama</HeaderTitle>
      </Background>
      <Description>
        I'm a software engineer. Previously Product Engineer at{" "}
        <StyledLink href="https://opensea.io/" target="_blank" rel="noreferrer">
          OpenSea
        </StyledLink>
        . I interned at{" "}
        <StyledLink
          href="https://www.synsormed.com/"
          rel="noreferrer"
          target="_blank"
        >
          SynsorMed
        </StyledLink>
        {""}
        and{" "}
        <StyledLink
          href="https://www.sugarliving.com/"
          rel="noreferrer"
          target="_blank"
        >
          Sugar
        </StyledLink>
        . I studied Computer Science & Linguistics at Arcadia University. <br />{" "}
        I love riding my bike around Brooklyn, knitting,{" "}
        <StyledLink
          href="https://newyorkmyc.org/"
          rel="noreferrer"
          target="_blank"
        >
          foraging fungi every weekend
        </StyledLink>
        , and Minecraft!
        <br /> Feel free to{" "}
        <StyledLink
          href="https://twitter.com/0naama"
          rel="noreferrer"
          target="_blank"
        >
          DM me
        </StyledLink>{" "}
        or say hi{" "}
        <StyledLink
          href="mailto:0naama0@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          0naama0@gmail.com
        </StyledLink>{" "}
      </Description>
    </>
  );
};

const Background = styled.div`
  margin: 0 auto;
  padding: 8px;
  display: flex;
  align-items: center;
`;
const HeaderTitle = styled.h1`
  text-align: left;
  width: 100%;
  font-family: "Semplicita-Medium", sans-serif;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const Description = styled.p`
  width: 100%;
  font-family: "Semplicita-Medium", sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 0 60px;
  line-height: 22px;
  @media (max-width: 500px) {
    padding: 0 24px;
  }
`;

const StyledLink = styled.a`
  color: #58382d;
`;
