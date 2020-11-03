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
    margin-right: 1em;
  }
  button {
    height: 2em;
    padding: 4px 1em;
    border-radius: 6px;
    border: none;
    background: ${Colors.blue0}; 
    color: ${Colors.blue3};

    &:hover {
      background: ${Colors.blue0}; 
    }
  }
  
`

const EmailSection = () => {
  return (
    <StyledMailchimp
      action="https://myndset.us2.list-manage.com/subscribe/post?u=e88de07af0bfd5eb78fc8d316&amp;id=f12a43a511"
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'Email',
          type: 'email',
          required: true
        },
        {
          name: 'FNAME',
          placeholder: 'Your name',
          type: 'text',
          required: true
        }
      ]}

      
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address.",
            button: "Subscribe"
          }
      } 
    />
  )
}

export default EmailSection;