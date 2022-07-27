import Header from "../../components/Header";
import Hero from "../../components/Hero";
import PageWrapper from "../../components/PageWrapper";
import routeMap from "../../constants/routeMap";
import styled from "styled-components";

const StyledProjectLink = styled.div`
  width: 33.3333%;
  height: 200px;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`;

const ProjectLink = ({ children }) => {
  return <StyledProjectLink>{children}</StyledProjectLink>;
};

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <Hero />
      <Grid>
        <ProjectLink>
          <a href={routeMap["GIVEBACK"]}>GiveBack</a>
        </ProjectLink>
        <ProjectLink>
          <a href={routeMap["SAFEONLINE"]}>SafeOnline</a>
        </ProjectLink>
        <ProjectLink>
          <a href={routeMap["BBC"]}>BBC</a>
        </ProjectLink>
        <ProjectLink>
          <a href={routeMap["MYSKIN"]}>MySkin</a>
        </ProjectLink>
        <ProjectLink>
          <a href={routeMap["CUESHTY"]}>Cueshty</a>
        </ProjectLink>
      </Grid>
    </PageWrapper>
  );
};

export default Home;
