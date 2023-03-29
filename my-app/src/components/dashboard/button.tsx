import { StyledButton } from "./styles/button.styled";



const Button = (props: { text: string; formText: string }) => {
    const text: string = props.text
    const formText:string = props.formText
    return ( 
        <StyledButton className="btn" type="submit">{ text || formText }</StyledButton>
     );
}
 
export default Button;