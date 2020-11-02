import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../typography"

const StyledFooter = styled.footer`
  position: relative;
  z-index: 0;
  background: #1E3967;
  padding: ${rhythm(1)};
  color: #0672DD;
  border: none;
  margin: 0;
`

const StyledDiv = styled.div`
  max-width: ${rhythm(32)};
  margin: 0 auto;
  text-align: center;
`
const StyledH2 = styled.h2`
  max-width: 75%;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <h4>&copy; 2020 Alden Collective, LLC. All Rights Reserved.</h4>
      </StyledDiv>
    </StyledFooter>
  )
}

export default Footer;