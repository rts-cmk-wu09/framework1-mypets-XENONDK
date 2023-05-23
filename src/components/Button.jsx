import { styled } from "styled-components";

const StyledButton = styled.button`
background-color: #57419D;
color: white;
border-radius: 25px;
width: 300px;
height: 50px;
align-self: center;
font-size: 20px;
margin-top: ${(props) => props.margin}
`

const Button = (props) => {
    return ( 
        <StyledButton {...props}>Skip</StyledButton>
     );
}
 
export default Button;