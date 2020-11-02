import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../typography"

const StyledSection = styled.section`
  position: relative;
  z-index: 0;
  background: #CFFFF9;
  padding: ${rhythm(1)};
  color: #0672DD;
`

const StyledDiv = styled.div`
  max-width: ${rhythm(32)};
  margin: 0 auto;
`
const StyledH2 = styled.h2`
  max-width: 75%;
`

const InfoSection = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledH2>Why don’t we give the same attention to our mind as we do to our body?</StyledH2>
        <p>That’s why we’re here to bring you a new model for mental fitness*, Myndset. Mental Fitness is the practice of proactively strengthening your heart and mind to support all facets of your life.</p>
        <p>Myndset is a practical, skills-based approach to build confidence, optimism, resilience, energy, focus and heart into your everyday.</p>
        <p>If you’re interested in learning more about what we can do for you, please share your email here:</p>
      </StyledDiv>
    </StyledSection>
  )
}

export default InfoSection;