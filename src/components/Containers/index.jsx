import styled from "styled-components";

const StyledP = styled.p`
  padding: 10px 0;
`;

const StyledContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContentContainer = ({ children }) => (
  <StyledContentContainer>{children}</StyledContentContainer>
);

export { ContentContainer, StyledP };
