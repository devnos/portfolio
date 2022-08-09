import styled from "styled-components";
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import { PageTitle, Subheader } from "../../components/Headers";
import { StyledP, ContentContainer } from "../../components/Containers";

const Avatar = styled.img`
  max-width: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const StyledWavingHand = styled.span`
  font-size: 120px;
  animation-name: wave-animation;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const WavingHand = () => <StyledWavingHand>👋</StyledWavingHand>;

const AboutAvatar = () => (
  <Avatar src="/images/picture.png" alt="waving avatar" />
);

const AvatarContainer = () => {
  return (
    <>
      <WavingHand />
      <AboutAvatar />
    </>
  );
};
const About = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentContainer>
        <PageTitle>About</PageTitle>
        <AvatarContainer />
        <Subheader>Hi again!</Subheader>
        <b>Some facts about me</b>
        <StyledP>
          I'm a UX designer with a first class honours degree in Digital Design,
          who believes in the importance of understanding users’ behavior,
          identifying their pain points & discovering how these can be addressed
          to make experiences easier & more efficient.
        </StyledP>
        <StyledP>
          Coming from a digital design & media technology background, I also
          have experience with all things digital from coding to video editing,
          frontend development & motion graphics.
        </StyledP>
        <StyledP>
          In my everyday life I'm all about problem-solving & making life
          easier, so Notion is one of my favorite tools. When I'm not designing
          experiences, you'll find me tinkering with my Notion setup ⚙️, out on
          a walk on a sunny day ☀️, cooking or baking 👨‍🍳, or binge-watching a
          comedy show 📺.
        </StyledP>
        <b>Curious about how I work?</b>
        <StyledP>
          My weapons of choice are <a href="https://miro.com/">Miro</a> for
          brainstorming ideas, moodboards, card sorting & focus groups +{" "}
          <a href="https://figma.com/">Figma </a>
          for anything from user flows to wireframes, high-fidelity prototypes &
          quick illustrations. I'm definitely experimenting with Figma’s FigJam
          as an additional tool for brainstorming as well 👀.
          <br />
          Notion is my go-to for note-taking & creating knowledge hubs for work
          & personal projects, because of the easy way it allows you to
          connected pages and databases. Feel free to ask me about how I use
          Notion as my recipe database & meal planning tool 👨‍🍳.
        </StyledP>
        <b>📄 Looking for my CV?</b>
        <StyledP>
          <a href="https://drive.google.com/drive/folders/1eVCkJYtzOzzNfXuQ8BXgZ_ZCw1rSgOCX">
            You can find my CV here
          </a>
          . If you have any questions, please don't hesitate to contact me! 😁
        </StyledP>
        <StyledP>
          Thanks for checking out my work! If you would like to talk business or
          just have a chat you can contact me here, on{" "}
          <a href="https://www.instagram.com/noelsantotomas/">Instagram</a>
          or <a href="https://www.linkedin.com/in/noelsantotomas/">LinkedIn</a>.
        </StyledP>
      </ContentContainer>
    </PageWrapper>
  );
};

export default About;
