import styled, { css } from "styled-components";
import routeMap from "../../constants/routeMap";
import { useLocation } from "react-router-dom";

const MenuItem = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  padding-left: 10px;
  padding-right: 10px;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
    padding: 0 0 30px;
  }
`;

const MenuLink = styled.a`
  color: #000000;
  font-size: 18px;
  font-style: normal;
  line-height: 28px;

  &:hover {
    color: rgb(14, 97, 119);
  }

  ${({ href, currentPath }) =>
    href === currentPath &&
    css`
      color: #0e6177;
    `};
`;

const StyledButton = styled.button`
  border: 0;
  padding: 0;
  position: relative;
  width: 24px;
  overflow: visible;
  background: transparent;

  && > i {
    display: block;
    height: 2px;
    margin-bottom: 4px;
    background-color: #000;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ResponsiveNav = styled.div`
  display: none;
  opacity: 0;
  visibility: hidden;

  @media (max-width: 768px) {
    background-color: rgb(255, 255, 255);
    inset: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    overflow: auto;
    padding: 50px 5% 0px;
    position: fixed;
    text-align: center;
    transition: visibility 0s ease 0.2s, opacity 0.2s ease 0s;
    z-index: 99999;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      transition: visibility 0s ease 0s, opacity 0.2s ease 0s;
      visibility: visible;
    `};
`;

const CloseButton = styled.div`
  border: 0;
  padding: 0;
`;

const ResponsiveMenuButton = ({ onClick }) => (
  <div className="hamburger-click-area js-hamburger">
    <StyledButton onClick={onClick}>
      <i></i>
      <i></i>
      <i></i>
    </StyledButton>
  </div>
);

const ResponsiveMenu = ({ isOpen, close }) => {
  const location = useLocation(); // Hook

  return (
    <ResponsiveNav isOpen={isOpen}>
      <CloseButton
        className="close-responsive-click-area js-close-responsive-nav"
        onClick={close}
      >
        <div className="close-responsive-button"></div>
      </CloseButton>
      <div>
        <nav>
          <MenuItem>
            <MenuLink href={routeMap["HOME"]} currentPath={location.pathname}>
              Work
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href={routeMap["ABOUT"]} currentPath={location.pathname}>
              About
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              href={routeMap["SHOWREEL"]}
              currentPath={location.pathname}
            >
              Showreel
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              href={routeMap["EXPERIMENTS"]}
              currentPath={location.pathname}
            >
              Experiments
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              href={routeMap["CONTACT"]}
              currentPath={location.pathname}
            >
              Contact
            </MenuLink>
          </MenuItem>
        </nav>
      </div>
    </ResponsiveNav>
  );
};

const Menu = (props) => {
  const location = useLocation(); // Hook

  return (
    <div className="nav-container" {...props}>
      <nav data-hover-hint="nav">
        <MenuItem>
          <MenuLink href={routeMap["HOME"]} currentPath={location.pathname}>
            Work
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href={routeMap["ABOUT"]} currentPath={location.pathname}>
            About
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href={routeMap["SHOWREEL"]} currentPath={location.pathname}>
            Showreel
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink
            href={routeMap["EXPERIMENTS"]}
            currentPath={location.pathname}
          >
            Experiments
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href={routeMap["CONTACT"]} currentPath={location.pathname}>
            Contact
          </MenuLink>
        </MenuItem>
      </nav>
    </div>
  );
};

export { Menu, ResponsiveMenu, ResponsiveMenuButton };
