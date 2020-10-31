import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../typography"

const StyledSection = styled.section`
  position: relative;
  z-index: 0;
  background: #CFFFF9;
  padding: ${rhythm(1)};
`

const StyledDiv = styled.div`
  max-width: ${rhythm(36)};
  margin: 0 auto;
`

const InfoSection = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <h2>Focus your heart, strengthen your mind </h2>
        <p>Mental fitness is the practice of proactively strengthening your heart and mind to support all facets of your life. </p>
        <p>Myndset is a practical, skills-based approach to build confidence, optimism, resilience, energy, focus and heart into your everyday.</p>
      </StyledDiv>
    </StyledSection>
  )
}

export default InfoSection;