import React from 'react';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: 0;
  
  & + & {
    margin-top: 5px;
  }
`
const Label = styled.label` 
  margin-bottom: 8px;
  display: block;
  color: #8EE4AF;
}
`
const Input = styled.input`
padding: 6px;
  width: 100%;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #8EE4AF;
  border-left: 0;
  transition: border-bottom-color .15s ease-in;
  
  &:focus {
    outline: 0;
    border-bottom-color: #2D7466;
  }
`
const TextArea = styled.textarea`
margin-bottom: 10px;
padding: 8px;
width: 100%;
border-top: 0;
border-right: 0;
border-bottom: 1px solid #8EE4AF;
border-left: 0;
transition: border-bottom-color .15s ease-in;
resize: vertical;

&:focus {
  outline: 0;
  border-bottom-color: #2D7466;
    
}
`

const StyledButton = styled.input`
  display:block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  padding: 8px 16px;
  font-size: 16px;
  color: ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.secondaryLight};
  border: 0;
  border-radius: 4px;
  width: 40%;

  &:hover {
    background: ${props => props.theme.colors.primaryLight};
    transition-property: background;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
`
const Form = () => (

  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

    <input type="hidden" name="form-name" value="contact" />

    <Fieldset>
      <Label htmlFor="name">
        Name
        <Input type="text" name="name" id="name" required />
      </Label>
    </Fieldset>
    <Fieldset>
      <Label htmlFor="email">
        Email
        <Input type="text" name="email" id="email" required />
      </Label>
    </Fieldset>
    <Fieldset>
      <Label htmlFor="message">
        Message
        <TextArea name="message" id="message" rows="12" required />
      </Label>
    </Fieldset>
    <StyledButton type="submit" value="Send" />
  </form>

)

const StyledForm = styled(Form)`
height: 100%;
margin-right: auto;
margin-left: auto;
max-width: 320px;
`

export default StyledForm;