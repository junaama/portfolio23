import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export const Navigation = () => {
  const tabs = [
    { title: "Projects", path: "/" },
    // { title: "Blog (coming soon)", path: "" },
  ];

  const router = useRouter();
  const currentTab = tabs.find((tab) => tab.path === router.pathname);

  return (
    <>
      <Container>
        {tabs.map((tab, index) => (
          <>
            {index > 0 && <Divider>|</Divider>}

            <StyledLink
              href={tab.path}
              $decorate={currentTab?.path === tab.path}
            >
              {tab.title}
            </StyledLink>
          </>
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  height: 36px;
  color: #e0dbd5;
  background-color: #58382d;
  font-size: 24px;
  margin: 0 -60px;
  justify-content: center;
  align-items: center;
  font-family: "Semplicita-Medium", sans-serif;
`;

const Divider = styled.p`
  padding: 0 4px;
`;
const StyledLink = styled(Link)<{ $decorate: boolean }>`
  padding: 4px;
  font-family: "Semplicita-Medium", sans-serif;
  color: #e0dbd5;
  @media (hover: hover) {
    &:hover {
      color: #adc3e0;
    }
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  text-decoration: ${({ $decorate }) => ($decorate ? "underline" : "none")};
`;
