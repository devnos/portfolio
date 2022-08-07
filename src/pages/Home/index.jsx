import Header from "../../components/Header";
import Hero from "../../components/Hero";
import PageWrapper from "../../components/PageWrapper";
import routeMap from "../../constants/routeMap";
import Footer from "../../components/Footer";
import styled from "styled-components";

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Project = styled.div`
  position: relative;
  width: calc(100% / 3);

  @media (max-width: 768px) {
    width: 100%;
  }

  .details {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s linear, opacity 0.3s linear;
  }

  &:hover > .details {
    visibility: visible;
    opacity: 1;
  }
`;

const ProjectCover = styled.img`
  width: 100%;
  height: auto;
`;

const ProjectDetails = styled.div`
  position: absolute;
  background-color: rgba(30, 149, 179, 0.7);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <Hero />
      <Projects>
        <Project href={routeMap["GIVEBACK"]}>
          <ProjectCover src="/images/covers/giveback.png" alt="GiveBack" />
          <ProjectDetails className="details">
            <h1>GiveBack</h1>
          </ProjectDetails>
        </Project>
        <Project href={routeMap["SAFEONLINE"]}>
          <ProjectCover src="/images/covers/giveback.png" alt="GiveBack" />
          <ProjectDetails className="details">
            <h1>SafeOnline</h1>
          </ProjectDetails>
        </Project>
        <Project href={routeMap["BBC"]}>
          <ProjectCover src="/images/covers/giveback.png" alt="GiveBack" />
          <ProjectDetails className="details">
            <h1>BBC</h1>
          </ProjectDetails>
        </Project>
        <Project href={routeMap["MYSKIN"]}>
          <ProjectCover src="/images/covers/giveback.png" alt="GiveBack" />
          <ProjectDetails className="details">
            <h1>MySkin</h1>
          </ProjectDetails>
        </Project>
        <Project href={routeMap["CUESHTY"]}>
          <ProjectCover src="/images/covers/giveback.png" alt="GiveBack" />
          <ProjectDetails className="details">
            <h1>Cueshty</h1>
          </ProjectDetails>
        </Project>
      </Projects>
      <Footer />
    </PageWrapper>
  );
};

export default Home;
