import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import Mailchimp from 'react-mailchimp-form'
// import { rhythm } from "../typography"
import Colors from "../colors"

const StyledDiv = styled.div`
  form {
    display: flex;
    flex-wrap: wrap;
  
    input, button, .msg-alert {
      flex: 0 1 100%;
      width: 100%;
      margin-bottom: .5em;
      height: 2em;
      padding: 4px .5em;
      border-radius: 6px;
      border: none;
    };

    .msg-alert p{
      background: #cffffa;
    }

    button {
      background: ${Colors.blue0}; 
      color: ${Colors.blue3};
      cursor: pointer;

      &:hover {
        background: ${Colors.blue2}; 
        color: ${Colors.blue0}; 
      }
    }
  };

  @media screen and (min-width: 640px) {
    form {
      input, button {
        flex-basis: calc(33% - .5em);
        width: calc(33% - .5em);
        margin-right: .5em;
      }
    }
  }
`

const EmailSection = () => {
  return (
    <StyledDiv>
      <Mailchimp
        action="https://myndset.us2.list-manage.com/subscribe/post?u=e88de07af0bfd5eb78fc8d316&amp;id=f12a43a511"
        fields={[
          {
            name: 'FNAME',
            placeholder: 'Your name',
            type: 'text',
            required: true
          },
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          },
        ]}

        
          messages = {
            {
              sending: "Sending...",
              success: "Got it! Thanks for subscribing — we'll be in touch.",
              error: "Oops, something went wrong on our end.",
              empty: "Please enter an email address and name.",
              duplicate: "You're good! This email address is already subscribed.",
              button: "Sign Up"
            }
        } 
      />
    </StyledDiv>
  )
}

export default EmailSection;