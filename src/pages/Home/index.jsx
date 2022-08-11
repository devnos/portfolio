import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";
import Hero from "../../components/Hero";
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

const Project = styled.a`
  position: relative;
  width: calc(100% / 3);

  @media (max-width: 768px) {
    width: 100%;
  }

  .details {
    visibility: hidden;
    opacity: 0;
    padding: 1rem 2rem;
    color: #fff;
    transition: visibility 0.3s linear, opacity 0.3s linear;
  }

  .details > h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &:hover > .details {
    visibility: visible;
    opacity: 1;
  }

  :visited {
    color: inherit;
  }
`;

const ProjectCover = styled.img`
  width: 100%;
  height: auto;
`;

const ProjectDetails = styled.div`
  position: absolute;
  background-color: rgba(30, 149, 179, 0.75);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Date = styled.p`
  padding-bottom: 0px;
`;

const Tags = styled.p`
  font-weight: bold;
`;

const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <Hero />
      <Projects>
        <Project href={routeMap["GIVEBACK"]}>
          <ProjectCover src="images/covers/GiveBack_Cover.png" alt="GiveBack" />
          <ProjectDetails className="details">
            <h1>GiveBack</h1>
            <Date>2021</Date>
            <Tags>UX, UI</Tags>
          </ProjectDetails>
        </Project>
        <Project href={routeMap["SAFEONLINE"]}>
          <ProjectCover
            src="/images/covers/SafeOnline_Cover.png"
            alt="GiveBack"
          />
          <ProjectDetails className="details">
            <h1>SafeOnline</h1>
            <Date>2021</Date>
            <Tags>Branding, UX, UI</Tags>
          </ProjectDetails>
        </Project>
        <Project href={routeMap["BBC"]}>
          <ProjectCover src="/images/covers/BBC_Cover.png" alt="GiveBack" />
          <ProjectDetails className="details">
            <h1>BBC</h1>
            <Date>2020</Date>
            <Tags>UX, UI</Tags>
          </ProjectDetails>
        </Project>
        <Project href={routeMap["MYSKIN"]}>
          <ProjectCover src="/images/covers/MySkin_Cover.jpg" alt="GiveBack" />
          <ProjectDetails className="details">
            <h1>MySkin</h1>
            <Date>2021</Date>
            <Tags>UX, UI, Branding, Social Media</Tags>
          </ProjectDetails>
        </Project>
        <Project href={routeMap["CUESHTY"]}>
          <ProjectCover src="/images/covers/Cueshty_Cover.png" alt="GiveBack" />
          <ProjectDetails className="details">
            <h1>Cueshty</h1>
            <Date>2021</Date>
            <Tags>Branding, Motion Graphics</Tags>
          </ProjectDetails>
        </Project>
      </Projects>
      <Footer />
    </PageWrapper>
  );
};

export default Home;
