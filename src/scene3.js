import React, { useEffect, useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Particulate from "particulate" //???????????
import * as THREE from "three"
import "pathseg"
import Colors from "./colors"

const PARTICLE_RADIUS = 4

const Scene = () => {

  // ..................................................
  // Define particle chain system
  //

  var particleCount = 5;
  var relaxIterations = 2;

  var system = Particulate.ParticleSystem.create(particleCount, relaxIterations);
  var dist = Particulate.DistanceConstraint.create(10, [0, 1, 1, 2, 2, 3, 3, 4]);
  var pin = Particulate.PointConstraint.create([0, 0, 0], 0);
  var gravity = Particulate.DirectionalForce.create([0, -0.05, 0]);

  system.addConstraint(dist);
  system.addPinConstraint(pin);
  system.addForce(gravity);

  // ..................................................
  // Integrate with Three.js
  //

  var scene = new THREE.Scene();

  // Use system positions buffer
  var vertices = new THREE.BufferAttribute(system.positions, 3);

  // Use distance constraint indices
  var indices = new THREE.BufferAttribute(new Uint16Array(dist.indices));

  // Particles
  var dotsGeom = new THREE.BufferGeometry();
  dotsGeom.addAttribute('position', vertices);

  var dots = new THREE.PointCloud(dotsGeom,
    new THREE.PointCloudMaterial({ size : 2 }));

  // Connections
  var linesGeom = new THREE.BufferGeometry();
  linesGeom.addAttribute('position', vertices);
  linesGeom.addAttribute('index', indices);

  var lines = new THREE.Line(linesGeom,
    new THREE.LineBasicMaterial());

  scene.add(dots);
  scene.add(lines);

  function animate() {
    system.tick(1);
    dotsGeom.attributes.position.needsUpdate = true; // Flag to update WebGL buffer
    render();
  }


  return (<div id="sceneeee"></div>)
}

export default Scene;