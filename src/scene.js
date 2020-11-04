import React, { useEffect, useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "pathseg"
import Matter from "matter-js"
import MatterAttractors from "matter-attractors"
import Colors from "./colors"

if (typeof window !== 'undefined') {
  window.decomp = require('poly-decomp');
}

const STATIC_DENSITY = 15
const PARTICLE_SIZE = 7
const PARTICLE_BOUNCYNESS = 0.55
const HEART_SVG_PATH = 'M75.056,18.917c0.95,1.284 2.451,2.043 4.048,2.043c1.598,-0 3.098,-0.759 4.049,-2.043c17.545,-24.076 47.172,-23.008 62.565,-8.874c16.657,15.289 16.657,45.869 0,76.448c-10.435,20.53 -35.547,45.147 -58.616,61.051c-4.828,3.277 -11.167,3.277 -15.995,0c-23.069,-15.904 -48.181,-40.521 -58.616,-61.051c-16.655,-30.579 -16.655,-61.159 -0,-76.448c15.393,-14.134 45.019,-15.202 62.565,8.874Z'

const zeros = Colors.zeros;
const ones = Colors.ones;
const twos = Colors.twos;
const threes = Colors.threes;
const COLORS = zeros.concat(
  ones, ones, ones,
  twos, twos, twos, twos, twos,
  threes, threes, threes
)
  

const createHeartVertices = (length = 15) => {
  let heartSvgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  heartSvgPath.setAttribute("d", HEART_SVG_PATH);
  return Matter.Svg.pathToVertices(heartSvgPath, length)
}

const Scene = () => {

  Matter.use(MatterAttractors)

  const boxRef = useRef(null)
  const canvasRef = useRef(null)

  const [constraints, setContraints] = useState()
  const [scene, setScene] = useState()


   const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect())
  }



  const createFloor = () => {
    return Matter.Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      render: {
        fillStyle: "blue",
      },
    })
  }

  const createParticle = (point) => {
    let p = Matter.Bodies.circle(
      point.x, point.y, PARTICLE_SIZE, {
        restitution: PARTICLE_BOUNCYNESS,
        render: {
          fillStyle: Matter.Common.choose(COLORS)
        }
      })
    Matter.Body.setDensity(p, Math.random() * 0.125 + 0.002)
    return p
  }

  const projectFromPoint = (point, angle, radius) => {
    return {
      x: point.x + radius * Math.cos(angle),
      y: point.y + radius * Math.sin(angle)
    }
  }




  useEffect(() => {
    console.log('USEEFFECT SETUP')

    let Engine = Matter.Engine
    let Events = Matter.Events
    let Render = Matter.Render
    let World = Matter.World
    let Body = Matter.Body
    let Bodies = Matter.Bodies
    let Mouse = Matter.Mouse
    let Common = Matter.Common
    let Constraint = Matter.Constraint
    let MouseConstraint = Matter.MouseConstraint
    let Vertices = Matter.Vertices
    let Svg = Matter.Svg

    var render, heart
    var particles = []
    var scaleFactor = 0.001

    const createAttractorFunction = (scale = 1) => {

      return (bodyA, bodyB) => {

        let { min, max } = bodyA.bounds

        let w = max.x - min.x
        let h = max.y - min.y

        return {
          x: (bodyA.position.x - bodyB.position.x) * 1e-6 * scale,
          y: (bodyA.position.y + h/4 - bodyB.position.y) * 1e-6 * scale,
        };
      }
    }

    const createRandomParticle = () => {
      let w = render.element.offsetWidth
      let h = render.element.offsetHeight

      let center = {x: w/2, y: h/2}

      let heartRadius = 300

      let randomAngle = Math.random() * Math.PI * 2
      let randomRadius = Math.random() * Math.hypot(w, h)

      let projectedInnerRadiusPoint = projectFromPoint(center, randomAngle, heartRadius)
      let projectedPoint = projectFromPoint(projectedInnerRadiusPoint, randomAngle, randomRadius)
      let randomParticle = createParticle(projectedPoint)

      return randomParticle
    }

    // Create Engine and World
    const engine = Engine.create()
    let world = engine.world;
    world.gravity.scale = 0;

    // Create Render
    var render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        background: 'transparent',
        wireframes: false,
        // pixelRatio: 'auto'
      }
    })
    console.log('RENDER CREATE')

    // Create heart
    var heart = Bodies.fromVertices(
      render.element.offsetWidth/2,
      render.element.offsetHeight/2,
      createHeartVertices(), {
        isStatic: true,
        restitution: 0.4,
        plugin: {
          attractors: [createAttractorFunction(0.001)]
        },
        render: {
          fillStyle: "white"
        }
      }
    )
    console.log('CREATE HEART')
    Body.scale(heart, 2.25, 2.25)

 
    // Create mouse  
    var mouse = Mouse.create(render.canvas, {})
    var mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
      });
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
    World.add(world, mouseConstraint);
    console.log('MOUSE CREATE')
    


    World.add(world, heart);
    console.log('WORLD ADD HEART')

    // Add particles
    for (var i = 0; i < 750; i += 1) {
      particles.push(createRandomParticle())
      console.log('CREATE RANDOM PARTICLE')
    }
    World.add(world, particles);
    console.log('WORLD ADD PARTICLES')
    


    ////////////////////////
    // On every update…
    ////////////////////////
    Events.on(engine, 'afterUpdate', () => {
      // Move heart to center
      const { min, max } = heart.bounds
      let w = max.x - min.x
      let h = max.y - min.y

      Body.translate(heart, {
        x: (render.options.width/2 - heart.position.x) * 0.25,
        y: (render.options.height/2 - heart.position.y - h/4) * 0.25 
      });

      // increase attraction to heart 
      if (Math.random() > 0.95) {
        let sf = Math.min(1.25, scaleFactor += 0.1)
        heart.plugin.attractors = [createAttractorFunction(sf)]
        // console.log(scaleFactor)
      }
    });



    // Light the fuse
    Engine.run(engine)
    Render.run(render)

    setContraints(boxRef.current.getBoundingClientRect())
    setScene(render)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  // React to window changes
  useEffect(() => {
    if (constraints) {
      let {width, height} = constraints
      console.log('CONSTRAINTS ', constraints)

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width
      scene.bounds.max.y = height
      scene.options.width = width
      scene.options.height = height
      scene.canvas.width = width
      scene.canvas.height = height

      // Dynamically update floor
      // const floor = scene.engine.world.bodies[0]
      
      // Matter.Body.setPosition(floor, {
      //   x: width / 2,
      //   y: height + STATIC_DENSITY / 2,
      // })
      
      // Matter.Body.setVertices(floor, [
      //   { x: 0, y: height },
      //   { x: width, y: height },
      //   { x: width, y: height + STATIC_DENSITY },
      //   { x: 0, y: height + STATIC_DENSITY },
      // ])
    }
  }, [scene, constraints])



  return (
    <div
      ref={boxRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0
      }}
    > 
      <canvas ref={canvasRef}/>
    </div>
  )
}

export default Scene