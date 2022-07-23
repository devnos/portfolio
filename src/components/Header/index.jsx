import { useState } from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { Menu, ResponsiveMenu, ResponsiveMenuButton } from "../Menu";

const Container = styled.div`
  float: left;
  width: 30%;
`;

const StyledMenu = styled(Menu)`
  visibility: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <ResponsiveMenu
        isOpen={isMobileMenuOpen}
        close={() => setMobileMenuOpen(false)}
      />
      <StyledMenu />
      <Container>
        <Logo />
        <ResponsiveMenuButton onClick={() => setMobileMenuOpen(true)} />
      </Container>
    </header>
  );
};

export default Header;
