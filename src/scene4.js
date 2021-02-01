import React, { useEffect, useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as THREE from "three"
import Colors from "./colors"

const PARTICLE_RADIUS = 4

const Scene = () => {

  function vertexShader() {
    return `
      varying vec3 vUv; 

      void main() {
        vUv = position; 

        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewPosition; 
      }
    `
  }

  function fragmentShader() {
    return `
      uniform vec3 colorA; 
      uniform vec3 colorB; 
      varying vec3 vUv;

      void main() {
        gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);
      }
    `
  }

  return (<div id="sceneeee"></div>)

}



export default Scene;
