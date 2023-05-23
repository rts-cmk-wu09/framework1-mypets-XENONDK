import styled from "styled-components";

const StyledHeading = styled((props) => props.as)`
    color: #666666;
`

const Heading = (props) => {
    return ( <StyledHeading {...props}>lopps</StyledHeading> );
}
 
export default Heading;