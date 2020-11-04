import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Scene from "../Scene"


const StyledSection = styled.section`
  min-height: 440px;
  height: 60vh;
  position: relative;
  z-index: 0;
  text-align: center;
  color: #0672DD;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 640px) {
    height: 75vh;
  }
`

const StyledDiv = styled.div`
  position: relative;
  z-index: 0;
  pointer-events: none;
`

const StyledH1 = styled.h1`
  font-family: 'Verlag';
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 2em;
  margin: 2rem 0 0 0;
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

const HeroSection = () => {
  return (
    <StyledSection>
      <Scene/>
      <StyledDiv>
        <StyledH1>Myndset</StyledH1>
        <StyledH2>mental fitness</StyledH2>
        <StyledH4>Focused heart,<br/>Strong mind</StyledH4>
      </StyledDiv>
    </StyledSection>
  )
}

export default HeroSection;