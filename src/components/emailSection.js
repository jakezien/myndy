import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Mailchimp from 'react-mailchimp-form'
import { rhythm } from "../typography"



const StyledSection = styled.section`
  position: relative;
  z-index: 0;
  background: #CFFFF9;
  padding: 0 ${rhythm(1)} ${rhythm(1)} ${rhythm(1)};
  margin-top: 0;
  text-align: center;
  color: #0672DD;
`

const EmailSection = () => {
  return (
    <StyledSection>
      <Mailchimp
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
    </StyledSection>
  )
}

export default EmailSection;