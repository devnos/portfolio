import { useState } from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { Menu, ResponsiveMenu, ResponsiveMenuButton } from "../Menu";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
`;

const StyledMenu = styled(Menu)`
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
      <Container>
        <Logo />
        <StyledMenu />
        <ResponsiveMenuButton onClick={() => setMobileMenuOpen(true)} />
      </Container>
    </header>
  );
};

export default Header;
