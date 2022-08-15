import styled from "styled-components";

const Title = styled.h1`
  font-family: "Heebo", sans-serif;
  font-weight: 400;
`;

const HeroText = () => (
  <div
    className="masthead"
    data-context="page.masthead"
    data-hover-hint="mastheadOptions"
  >
    <div className="masthead-contents">
      <div className="masthead-text js-masthead-text">
        <div data-context="page.masthead" data-hover-hint="mastheadTitle">
          <Title
            className="js-inline-text-editable preserve-whitespace main-text rich-text module-text"
            data-text-keypath="customizations.masthead.title.text"
          >
            Hi, I'm Noel! 👋
          </Title>
        </div>
        <div data-context="page.masthead" data-hover-hint="mastheadText">
          <p
            className="js-inline-text-editable preserve-whitespace main-text rich-text module-text"
            data-text-keypath="page.masthead.text.text"
          >
            I'm passionate about designing experiences that are simple &amp;
            meaningful. I'm most excited about understanding the whys &amp;
            delving into the research. See some of my work below &amp; also have
            a look at some of my smaller projects with motion &amp; web under
            <a href="Experiments"> Experiments 👨‍🔬</a>.
          </p>
        </div>
        <div className="masthead-buttons"></div>
      </div>
    </div>
  </div>
);

const Hero = () => <HeroText />;

export default Hero;
