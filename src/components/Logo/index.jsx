import styled from "styled-components";
import routeMap from "../../constants/routeMap";

const LogoText = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 800;
`;

const Logo = () => {
  return (
    <div className="logo-wrap" data-hover-hint="logo">
      <LogoText className="logo">
        <a href={routeMap["HOME"]} className="image-normal image-link">
          NoelSantoTomas
        </a>
      </LogoText>
      <div className="logo-secondary logo-secondary-text">
        <a href={routeMap["HOME"]} className="preserve-whitespace">
          UX Designer
        </a>
      </div>
    </div>
  );
};

export default Logo;
