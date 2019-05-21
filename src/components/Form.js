import React from 'react';
import styled from 'styled-components'

const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: 0;
  
  & + & {
    margin-top: 24px;
  }
`
const Label = styled.label` 
  margin-bottom: 8px;
  display: block;
  color: #2b2e4a;
}
`
const Input = styled.input`
padding: 8px;
  width: 100%;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #bdc3c7;
  border-left: 0;
  transition: border-bottom-color .15s ease-in;
  
  &:focus {
    outline: 0;
    border-bottom-color: #3fc1c9;
  }
`
const TextArea = styled.textarea`
padding: 8px;
  width: 100%;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #bdc3c7;
  border-left: 0;
  transition: border-bottom-color .15s ease-in;
  resize: vertical;


  
  &:focus {
    outline: 0;
    border-bottom-color: #3fc1c9;
  }
`

const StyledButton = styled.input`
  margin-right: auto;
  margin-left: auto;
  display: block;
  padding: 8px 16px;
  font-size: 16px;
  color: #fff;
  background-color: #3fc1c9;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color .15s ease-in;
  
  &:focus:active {
    background-color: darken(#3fc1c9, 8%);
  }
  
  &:focus {
    outline: 0;
  }
  
  &:hover {
    background-color: lighten(#3fc1c9, 15%);
  }
`
const Form = () => (
  <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">

    <input type="hidden" name="bot-field" />

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
        <TextArea name="message" id="message" rows="6" required />
      </Label>
    </Fieldset>
    <StyledButton type="submit" value="Send Message" className="special" />

  </form>
)

const StyledForm = styled(Form)`
margin-right: auto;
margin-left: auto;
max-width: 320px;
`

export default StyledForm;