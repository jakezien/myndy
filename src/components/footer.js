import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../typography"
import Colors from "../colors"

const StyledFooter = styled.footer`
  position: relative;
  z-index: 0;
  background: ${Colors.blue0};
  padding: ${rhythm(1)};
  color: ${Colors.blue1};
  border: none;
  margin: 0;
`

const StyledDiv = styled.div`
  max-width: ${rhythm(32)};
  margin: 0 auto;
  text-align: center;
`
const StyledH4 = styled.h4`
  font-weight: 400;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <StyledH4>&copy; 2020 Alden Collective, LLC. All Rights Reserved.</StyledH4>
      </StyledDiv>
    </StyledFooter>
  )
}

export default Footer;