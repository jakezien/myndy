import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Scene from "../Scene"


const StyledSection = styled.section`
  min-height: 440px;
  height: 75vh;
  position: relative;
  z-index: 0;
  text-align: center;
  color: #0672DD;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledDiv = styled.div`
  position: relative;
  z-index: 0;

`

const StyledH1 = styled.h1`
  font-family: 'Verlag';
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 2em;
  margin: 0;
  line-height: 1;
`

const StyledH2 = styled.h2`
  font-weight: 700;
  margin: 0;
  line-height: 1;
`

const HeroSection = () => {
  return (
    <StyledSection>
      <Scene/>
      <StyledDiv>
        <h4>Focused heart</h4>
        <StyledH1>Myndset</StyledH1>
        <StyledH2>is mental fitness.</StyledH2>
        <h4>Strong mind</h4>
      </StyledDiv>
    </StyledSection>
  )
}

export default HeroSection;