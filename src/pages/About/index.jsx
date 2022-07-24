import styled from "styled-components";
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";

const Avatar = styled.img`
  max-width: 250px;
`;

const AboutAvatar = () => (
    <Avatar src="/images/picture.png" alt="waving avatar" />
  );

const About = () => {
  return (
    <PageWrapper>
      <Header />
      <PageTitle>About</PageTitle>
      <AboutAvatar />
      <h1>Hi again!</h1>
      <b>Some facts about me</b>
      <p>I'm a UX designer with a first class honours degree in Digital Design, 
        who believes in the importance of understanding users’ behavior, identifying 
        their pain points & discovering how these can be addressed to make experiences 
        easier & more efficient.</p>
      <p>Coming from a digital design & media technology background, I also have
        experience with all things digital from coding to video editing, frontend
        development & motion graphics.</p>
      <p>In my everyday life I'm all about problem-solving & making life easier,
        so Notion is one of my favorite tools. When I'm not designing experiences,
        you'll find me tinkering with my Notion setup ⚙️, out on a walk on a sunny
        day ☀️, cooking or baking 👨‍🍳, or binge-watching a comedy show 📺.</p>
      <b>Curious about how I work?</b>
      <p>
      My weapons of choice are <a href="https://miro.com/">Miro</a> for brainstorming 
      ideas, moodboards, card sorting & focus groups + <a href="https://figma.com/">Figma </a>
      for anything from user flows to wireframes, high-fidelity prototypes & quick
      illustrations. I'm definitely experimenting with Figma’s FigJam as an additional
       tool for brainstorming as well 👀.<br/>
       Notion is my go-to for note-taking & creating knowledge hubs for work & personal
        projects, because of the easy way it allows you to connected pages and databases.
         Feel free to ask me about how I use Notion as my recipe database & meal planning tool 👨‍🍳.
      </p>
      <b>📄 Looking for my CV?</b>
      <p><a href="https://drive.google.com/drive/folders/1eVCkJYtzOzzNfXuQ8BXgZ_ZCw1rSgOCX">You can 
      find my CV here</a>. If you have any questions, please don't hesitate to contact me! 😁</p>
      <p>Thanks for checking out my work! If you would like to talk business or just have a chat
       you can contact me here, on <a href="https://www.instagram.com/noelsantotomas/">Instagram</a>
        or <a href="https://www.linkedin.com/in/noelsantotomas/">LinkedIn</a>.</p>
    </PageWrapper>
  );
};

export default About;
