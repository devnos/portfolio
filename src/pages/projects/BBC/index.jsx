import {
  StyledP,
  ContentContainer,
} from "../../../components/Containers/index";
import Header from "../../../components/Header";
import { PageTitle, Subheader } from "../../../components/Headers";
import PageWrapper from "../../../components/PageWrapper";
import ProjectCoverImage from "../../../components/ProjectCover";

const BBC = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentContainer>
        <PageTitle>BBC Trips</PageTitle>
        <ProjectCoverImage src="/images/BBCTrips/BBC Cover.png" />
        <Subheader>Project Overview</Subheader>
        <StyledP>
          <b>BBC Trips</b> is a website that provides young audiences (18-24
          years old) with relevant travel inspiration ranging from places to
          see, where to eat, guides, tips & more. It also serves as a platform
          to introduce them to existing travel content available across the BBC.
        </StyledP>
        <Subheader>The Challenge</Subheader>
        <StyledP>
          The <strong>BBC</strong> is the world’s leading public service
          broadcaster & its core purpose is to
          <strong> provide a universal service</strong>. They provide a wide
          range of programmes, content & services for all audiences on
          television, radio & digitally.
        </StyledP>
        <StyledP>
          However, a challenge they are currently facing is engaging younger
          audiences & initial efforts have been made by commissioning content
          aimed at younger audiences on BBC iPlayer & introducing the dedicated
          BBC Sounds platform for on-demand radio, music & podcasts.
        </StyledP>
        <Subheader>Research</Subheader>
        <StyledP>
          Secondary research was conducted to gain a better understanding of the
          target audience & their behavior towards travel.
        </StyledP>
        <StyledP>
          <ul>
            <li>
              -{" "}
              <strong>
                Youth travel is the fastest growing sector in tourism
              </strong>{" "}
              as young adults are prioritizing travel & take an average of 2.8
              leisure trips a year.
            </li>
            <li>
              - BBC currently provides travel content across their platforms.
              However, while they have a journalism product called BBC Travel,
              there is no dedicated platform for travel inspiration aimed at
              young adults.
            </li>
          </ul>
        </StyledP>
        <StyledP>
          <strong>🧑 Persona Development</strong>
        </StyledP>
        <StyledP>
          Research into the behavior, needs & motivations of the current young
          generation (Generation Z) was conducted to get a clear image of who
          the user could be. The information collected was used to create user
          personas which served as guidelines to create the optimal experience &
          ensure that all decisions concerning the design, functionality &
          content are targeting the right people.
        </StyledP>
        <Subheader></Subheader>
        <StyledP></StyledP>
        <Subheader></Subheader>
        <StyledP></StyledP>
        <Subheader></Subheader>
        <StyledP></StyledP>
        <Subheader></Subheader>
        <StyledP></StyledP>
        <Subheader></Subheader>
        <StyledP></StyledP>
      </ContentContainer>
    </PageWrapper>
  );
};

export default BBC;
