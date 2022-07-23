import styled from "styled-components";

const Title = styled.h1`
  font-family: "Heebo", sans-serif;
  font-weight: 400;
`;

const HeroText = () => (
  <div
    class="masthead"
    data-context="page.masthead"
    data-hover-hint="mastheadOptions"
  >
    <div class="masthead-contents">
      <div class="masthead-text js-masthead-text">
        <div data-context="page.masthead" data-hover-hint="mastheadTitle">
          <Title
            decorator="inlineTextEditable"
            contenteditable="false"
            class="js-inline-text-editable preserve-whitespace main-text rich-text module-text"
            data-text-keypath="customizations.masthead.title.text"
            value="Hi, I'm Noel! 👋"
          >
            Hi, I'm Noel! 👋
          </Title>
        </div>
        <div data-context="page.masthead" data-hover-hint="mastheadText">
          <p
            decorator="inlineTextEditable"
            contenteditable="false"
            class="js-inline-text-editable preserve-whitespace main-text rich-text module-text"
            data-text-keypath="page.masthead.text.text"
            value="I'm passionate about designing experiences that are simple &amp; meaningful. I'm most excited about understanding the whys &amp; delving into the research. See some of my work below &amp; also have a look at some of my smaller projects with motion &amp; web under Experiments 👨‍🔬."
          >
            I'm passionate about designing experiences that are simple &amp;
            meaningful. I'm most excited about understanding the whys &amp;
            delving into the research. See some of my work below &amp; also have
            a look at some of my smaller projects with motion &amp; web under
            Experiments 👨‍🔬.
          </p>
        </div>
        <div class="masthead-buttons"></div>
      </div>
    </div>
  </div>
);

const Hero = () => <HeroText />;

export default Hero;
