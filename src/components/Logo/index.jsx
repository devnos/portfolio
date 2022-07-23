import styled from "styled-components";

const LogoText = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 800;
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

export default Logo;
