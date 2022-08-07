import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  white-space: nowrap;
  justify-content: center;
  padding-top: 70px;
  padding-bottom: 70px;
`;

const SocialNetwork = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #eeeeee;
  text-align: center;
  line-height: 40px;

  &:hover,
  &:visited,
  &:active {
    background-color: #1e95b3;
    text-decoration: none;
  }

  &:visited,
  &:active {
    background-color: #eeeeee;
    text-decoration: none;
  }
`;

const Footer = () => (
  <FooterContainer>
    <SocialNetwork>
      <FontAwesomeIcon icon={faLinkedinIn} />
    </SocialNetwork>

    <SocialNetwork>
      <FontAwesomeIcon icon={faInstagram} />
    </SocialNetwork>
  </FooterContainer>
);

export default Footer;
