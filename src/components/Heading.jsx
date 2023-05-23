import styled from "styled-components";

const StyledHeading = styled((props) => props.as)`
    color: #666666;
    text-align: ${(props) => props.align};
    font-size: ${(props) => props.size}px;
    margin-top: 20px;
`

const Heading = (props) => {
    return ( <StyledHeading {...props}>My Pets</StyledHeading> );
}
 
export default Heading;