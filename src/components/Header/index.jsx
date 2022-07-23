import styled from "styled-components";

const LogoText = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 800;
`;

const LogoContainer = styled.div`
  float: left;
  width: 30%;
`;

const PageTitle = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 200;
`;

const Logo = () => {
  return (
    <div className="logo-wrap" data-hover-hint="logo">
      <LogoText className="logo e2e-site-logo-text logo-image has-rollover">
        <a href="/work" className="image-normal image-link">
          NoelSantoTomas
        </a>
      </LogoText>
      <div className="logo-secondary logo-secondary-text">
        <a href="/work" className="preserve-whitespace">
          UX Designer
        </a>
      </div>
    </div>
  );
};

const ResponsiveMenuIcon = () => (
  <div className="hamburger-click-area js-hamburger">
    <div className="hamburger">
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
);

const ResponsiveMenu = () => (
  <div className="js-responsive-nav">
    <div className="responsive-nav">
      <div className="close-responsive-click-area js-close-responsive-nav">
        <div className="close-responsive-button"></div>
      </div>
      <div className="nav-container">
        <nav data-hover-hint="nav">
          <div className="gallery-title">
            <a href="/work" className="active">
              Work
            </a>
          </div>
          <div className="page-title">
            <a href="/about">About</a>
          </div>
          <div className="page-title">
            <a href="/showreel">Showreel</a>
          </div>
          <div className="page-title">
            <a href="/experiments">Experiments</a>
          </div>
          <div className="page-title">
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </div>
    </div>
  </div>
);

const Menu = () => (
  <div className="nav-container">
    <nav data-hover-hint="nav">
      <PageTitle className="gallery-title">
        <a href="/work" className="active">
          Work
        </a>
      </PageTitle>
      <PageTitle className="page-title">
        <a href="/about">About</a>
      </PageTitle>
      <PageTitle className="page-title">
        <a href="/showreel">Showreel</a>
      </PageTitle>
      <PageTitle className="page-title">
        <a href="/experiments">Experiments</a>
      </PageTitle>
      <PageTitle className="page-title">
        <a href="/contact">Contact</a>
      </PageTitle>
    </nav>
  </div>
);

const Header = () => (
  <header className="site-header">
    <ResponsiveMenu />
    <Menu />
    <LogoContainer>
      <Logo />
      <ResponsiveMenuIcon />
    </LogoContainer>
  </header>
);

export default Header;
