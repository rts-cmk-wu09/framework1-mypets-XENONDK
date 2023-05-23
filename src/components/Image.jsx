import { styled} from "styled-components";

const StyledImg = styled.img`
max-width: ${(props => props.height)}px;
height: auto;
`

const Image = (props) => {
    return ( 
        <StyledImg { ... props} />
     );
}
 
export default Image;