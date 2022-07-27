import Header from "../../components/Header";
import Hero from "../../components/Hero";
import PageWrapper from "../../components/PageWrapper";

const ProjectLink = ({ children }) => {
  return <div>{children}</div>;
};

const Grid = ({ children }) => {
  return <div>{children}</div>;
};

const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <Hero />
      <Grid>
        <ProjectLink>
          <a href="../projects/giveback.jsx">GiveBack</a>
        </ProjectLink>
        <ProjectLink>
          <a href="../projects/safeonline.jsx">SafeOnline</a>
        </ProjectLink>
        <ProjectLink>
          <a href="../projects/bbc.jsx">BBC</a>
        </ProjectLink>
        <ProjectLink>
          <a href="../projects/myskin.jsx">MySkin</a>
        </ProjectLink>
        <ProjectLink>
          <a href="../projects/cueshty.jsx">Cueshty</a>
        </ProjectLink>
      </Grid>
    </PageWrapper>
  );
};

export default Home;
