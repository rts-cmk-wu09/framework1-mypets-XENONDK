import { styled} from "styled-components";

const StyledImg = styled.img`
width: ${(props => props.width)};
height: auto;
margin-top: 50px;

`

const Image = (props) => {
    return ( 
        <StyledImg { ... props} />
     );
}
 
export default Image;