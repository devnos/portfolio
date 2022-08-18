import styled from "styled-components";

const StyledCover = styled.img`
    max-width: 700px;
`;


const ProjectCoverImage = props => <StyledCover src={props.src}/>;


export default ProjectCoverImage;