import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../typography"
import Colors from "../colors"
import EmailSection from "../components/EmailSection"

const StyledSection = styled.section`
  position: relative;
  z-index: 0;
  padding: ${rhythm(1)};
  background: ${Colors.blue1};
  color: ${Colors.blue3};
`

const StyledDiv = styled.div`
  max-width: ${rhythm(24)};
  margin: 0 auto 2rem auto;
`
const StyledH2 = styled.h2`
  max-width: 75%;
  margin-bottom: 1em;
`
const StyledSpan = styled.span`
  position: relative;
  top: 0.15em;
  letter-spacing:-0.07em;
`

const InfoSection = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledH2>Why don’t we give the same attention to our mind as we do to our body?
          <br/>
          <StyledSpan>••••••</StyledSpan>
        </StyledH2>
        <p>Myndy is a practical, skills-based approach for you to build confidence, optimism, resilience, and energy into your everyday.</p>
        <p>Life is busy, complex and challenging, so we’re here to bring you a new model for mental fitness, Myndy.</p>
        <p>Mental Fitness is the practice of proactively helping you to strengthen your heart and mind to support all facets of your life.</p>
        <p>We are in the process of building new tools, products and experiences for you. If you’re interested in learning about upcoming programming and product launches, please share your email here:</p>
        <EmailSection />
      </StyledDiv>
    </StyledSection>
  )
}

export default InfoSection;