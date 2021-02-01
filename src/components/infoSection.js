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
  letter-spacing:-0.04em;
`

const StyledBigText = styled.p`
  display: block;
  font-size: 1.3em;
`

const InfoSection = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledH2>How do you work on your mind…<br/>so that it works for you?
          <br/>
          <StyledSpan>••••••</StyledSpan>
        </StyledH2>
        <StyledBigText>Mental fitness is a new category of mental health that is focused on activities that you can do to build strength, endurance and flexibility in your mind.</StyledBigText>
        <p>In other words, it is the proactive practice of strengthening our minds to deal with the ups and downs of our lives. Like the work we do to strengthen the muscles in our bodies, we can do exercises that do the same for our minds.</p>
        <p>We help professional humans deal with burnout, get unstuck, make progress, and/or feel better over time with our research-based, bespoke and practical approach to mental fitness that is simple, self-directed, and focused on outcomes. </p>
        <p>Through work with organizations such as MIT, this model has helped many individuals and institutions put their minds first.</p>
        <p>If you’re interested in joining us for your mental fitness journey, learning about upcoming programming and/or product launches, please reach out to us at <a href="mailto:hello@myndy.co">hello@myndy.co</a> or share your email here:</p>
        <EmailSection />
      </StyledDiv>
    </StyledSection>
  )
}

export default InfoSection;