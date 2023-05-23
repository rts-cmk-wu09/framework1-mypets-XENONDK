import { styled } from "styled-components";

const StyledButton = styled.button`
background-color: #57419D;
color: white;
border-radius: 25px;
width: 200px;
height: 150px;
`

const Button = () => {
    return ( 
        <StyledButton>Skip</StyledButton>
     );
}
 
export default Button;