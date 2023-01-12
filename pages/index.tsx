import Head from "next/head";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Navigation } from "../components/Navigation";
import styled from "styled-components";

type ProjectType = {
  title: string;
  description: string;
  link: string;
  image: string;
  type?: string;
};

const projects: ProjectType[] = [
  {
    title: "Private Uncollateralized Lending Protocol",
    description:
      "I used Solidity & Foundry to develop the smart contract for a lending model using self-sovereign identification.",
    link: "https://ethglobal.com/showcase/pulp-bfx1i",
    image:
      "https://res.cloudinary.com/dzfyk3r12/image/upload/v1673550276/projects_2Fbfx1i_2Fimages_2FScreen_20Shot_202022-10-08_20at_209.53.07_20PM_yawemf.png",
    type: "Hackathon",
  },
  {
    title: "Coven Cats",
    description:
      "I used NextJS, Typescript, Foundry, Solidity, Infura, to develop this project. Explored upgradeable contracts and web3 libraries.",
    link: "https://www.covencats.xyz/",
    image:
      "https://res.cloudinary.com/dzfyk3r12/image/upload/v1673549802/Screen_Shot_2023-01-12_at_1.55.39_PM_yvvcvr.png",
    type: "Side Project",
  },
  {
    title: "Mighty Axolotl",
    link: "https://www.mightyaxolotl.com/",
    description:
      "I used NextJS, Typescript, Infura, Hardhat, Solidity to develop Mighty Axolotl.",
    image:
      "https://res.cloudinary.com/dzfyk3r12/image/upload/v1673549822/Screen_Shot_2023-01-12_at_1.56.58_PM_bcyz86.png",
    type: "Side Project",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Naama Portfolio / Blog</title>
        <meta name="description" content="Naama Portfolio and Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <Navigation />
        <ProjectContainer>
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              link={project.link}
              description={project.description}
              image={project.image}
              type={project.type}
            />
          ))}
        </ProjectContainer>
      </Container>
      <Footer>
        <div>
          <a target="_blank" href="mailto:0naama0@gmail.com">
            Email
          </a>
          <br />
          <a target="_blank" href="https://linkedin.com/in/naamapaulemont">
            LinkedIn
          </a>
          <br />
          <a target="_blank" href="https://twitter.com/0naama">
            Twitter
          </a>
        </div>
      </Footer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 24px;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-self: center;
    justify-self: center;
    gap: 24px;
  }
`;

const Footer = styled.footer`
  padding: 4px;
  background-color: #58382d;
  color: white;
`;
