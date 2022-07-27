import styled from "styled-components";

const StyledP = styled.p`
  padding: 10px 0;
`;

const ContentContainer = ({ children }) => <div>{children}</div>;

export { ContentContainer, StyledP };
