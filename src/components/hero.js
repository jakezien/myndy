import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import Scene from "../Scene"
import Colors from "../colors"


const StyledSection = styled.section`
  height: 50vh;
  min-height: 440px;
  max-height: 960px;
  position: relative;
  z-index: 0;
  text-align: center;
  color: ${Colors.blue1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 640px) {
    height: 65vh;
  }
`

const StyledDiv = styled.div`
  position: relative;
  z-index: 0;
  pointer-events: none;
`

const StyledH1 = styled.h1`
  font-family: 'Sen', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 2em;
  margin: .25rem 0;
  line-height: 1;
`

const StyledH2 = styled.h2`
  font-weight: 700;
  margin: 0;
  line-height: 1;
`

const StyledH4 = styled.h4`
  margin-top: .5rem;
`

const StyledImg = styled.img`
  height: 4em;
  width: auto;
  margin-bottom: 0;
`

const HeroSection = () => {
  return (
    <StyledSection>
      <Scene/>
      <StyledDiv>
        <StyledImg height='4em' src={'svg/logo.svg'} alt="Logo" />
        <StyledH1>Myndy</StyledH1>
        <StyledH2>Mental Fitness</StyledH2>
        {/*<StyledH4>Focused heart,<br/>Strong mind</StyledH4>*/}
      </StyledDiv>
    </StyledSection>
  )
}

export default HeroSection;