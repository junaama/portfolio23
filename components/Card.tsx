import Image from "next/image";
import styled from "styled-components";

type Props = {
  image: string;
  title: string;
  description: string;
  link: string;
  type?: string;
};

export const Card = ({ image, title, description, link, type = "" }: Props) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} alt={title} width={225} height={120} />
      </ImageContainer>
      <FooterContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {type && <Type>Type: {type}</Type>}
        <a href={link}>Link</a>
      </FooterContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: #adc3e0;
  padding: 16px;
  width: 245px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ImageContainer = styled.div`
  width: 225px;
  height: 120px;
  align-self: center;
`;
const Title = styled.p`
  color: black;
  font-size: 20px;
  font-family: "Semplicita-Medium", sans-serif;
`;
const Description = styled.p`
  color: black;
  font-size: 14px;
  font-family: "Verdana", sans-serif;
`;
const Type = styled.p`
  font-style: italic;
`;
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

