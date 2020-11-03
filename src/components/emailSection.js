import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Mailchimp from 'react-mailchimp-form'
import { rhythm } from "../typography"
import Colors from "../colors"

const StyledMailchimp = styled(Mailchimp)`
  input {
    height: 2em;
    padding: 4px .5em;
    border-radius: 6px;
    border: none;
  }
  button {
    height: 2em;
    padding: 4px 1em;
    margin-left: 1em;
    border-radius: 6px;
    border: none;
    background: ${Colors.blue0}; 
    color: ${Colors.blue3};
  }
  
`

const EmailSection = () => {
  return (
    <StyledMailchimp
      action="https://jakezien.us2.list-manage.com/subscribe/post?u=2fc3991f80b7a0fcf69b5cda7&amp;id=24f0673a38"
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'Email',
          type: 'email',
          required: true
        }
      ]} 
    />
  )
}

export default EmailSection;