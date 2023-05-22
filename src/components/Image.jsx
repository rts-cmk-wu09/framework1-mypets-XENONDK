import { styled} from "styled-components";

const StyledImg = styled.img`
width: auto;
height: ${(props => props.height)};
`

const Image = (props) => {
    return ( 
        <StyledImg { ... props} />
     );
}
 
export default Image;