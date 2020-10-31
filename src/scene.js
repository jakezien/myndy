import React, { useEffect, useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Matter from "matter-js"
import MatterAttractors from "matter-attractors"

if (typeof window !== 'undefined') {
  window.decomp = require('poly-decomp');
}

const STATIC_DENSITY = 15
const PARTICLE_SIZE = 6
const PARTICLE_BOUNCYNESS = 0.9
const HEART_SVG_PATH = 'M75.056,18.917c0.95,1.284 2.451,2.043 4.048,2.043c1.598,-0 3.098,-0.759 4.049,-2.043c17.545,-24.076 47.172,-23.008 62.565,-8.874c16.657,15.289 16.657,45.869 0,76.448c-10.435,20.53 -35.547,45.147 -58.616,61.051c-4.828,3.277 -11.167,3.277 -15.995,0c-23.069,-15.904 -48.181,-40.521 -58.616,-61.051c-16.655,-30.579 -16.655,-61.159 -0,-76.448c15.393,-14.134 45.019,-15.202 62.565,8.874Z'
const COLORS = [
  '#68272d',
  '#ff4a26','#ff4a26',
  '#ffa899','#ffa899',
  '#ffd4bf',

  '#b75b00',
  '#fea600','#fea600',
  '#fff100',
  '#fffbb1',

  '#236136',
  '#0cc045',
  '#8fffa1','#8fffa1',
  '#c9ffd5',

  '#1e3967',
  '#1675da','#1675da','#1675da', '#1675da', '#1675da',
  '#85f3ff',
  '#cffffa',

  // '#423d34',
  '#90856f',
  '#cbc5b9',
  '#f5f1ea'
]

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

  const [someStateValue, setSomeStateValue] = useState(false)

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect())
  }

  const handleClick = () => {
    setSomeStateValue(!someStateValue)
  }

  var scaleFactor = 0.01

  useEffect(() => {
    let Engine = Matter.Engine
    let Events = Matter.Events
    let Render = Matter.Render
    let World = Matter.World
    let Body = Matter.Body
    let Bodies = Matter.Bodies
    let Mouse = Matter.Mouse
    let Common = Matter.Common
    let Constraint = Matter.Constraint
    let Vertices = Matter.Vertices
    let Svg = Matter.Svg

    let engine = Engine.create()

    let world = engine.world;
    world.gravity.scale = 0;

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        background: 'transparent',
        wireframes: false,
      },
    })

    Events.on(render, "afterRender", () => {
      if (Math.random() > 0.98) {
        scaleFactor = scaleFactor + 0.01
        if (scaleFactor > 1) 
          scaleFactor = 1
        console.log(scaleFactor)  
      }    
    })

    let attractorFunction = (bodyA, bodyB) => {
      return {
        x: (bodyA.position.x - bodyB.position.x) * 1e-6 * scaleFactor,
        y: (bodyA.position.y - bodyB.position.y) * 1e-6 * scaleFactor,
      };
    }


    const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      render: {
        fillStyle: "blue",
      },
    })


    const heart = Matter.Bodies.fromVertices(
      render.element.offsetWidth/2,
      render.element.offsetHeight/2 - 40,
      createHeartVertices(), {
        isStatic: true,
        restitution: 0.4,
        plugin: {
          attractors: [attractorFunction]
        },
        render: {
          fillStyle: "white"
        }
      }
    )
    Body.scale(heart, 1.33, 1.33)
    World.add(world, heart)


    // Add dots
    for (var i = 0; i < 300; i += 1) {
      let x = Common.random(render.options.width * -1, render.options.width * 3)
      let y = Common.random(render.options.width * -1, render.options.height * 3)

      var body = Bodies.circle(x, y, 7, {
        frictionStatic: 0.2,
        restitution: 0.8,
        render: {
          fillStyle: Common.choose(COLORS)
        }
      })

      // World.add(world, [body, constraint]);
      World.add(world, [body]);
    }



    // Make earth follow mouse
    var mouse = Mouse.create(render.canvas);

    Events.on(engine, 'afterUpdate', function() {
      if (!mouse.position.x) {
        return;
      }

      // Body.translate(heart, {
      //   x: (mouse.position.x - heart.position.x) * 0.25,
      //   y: (mouse.position.y - heart.position.y) * 0.25
      // });

      Body.translate(heart, {
        x: (render.options.width/2 - heart.position.x) * 0.1,
        y: (render.options.height/2 - heart.position.y) * 0.5 
      });
    });

    // if (!someStateValue) {
    //   earth.plugin.attractors = [attractorFunction] 
    // } else {
    //   earth.plugin.attractors = []
    // }


    // Light the fuse
    Engine.run(engine)
    Render.run(render)

    setContraints(boxRef.current.getBoundingClientRect())
    setScene(render)

    window.addEventListener("resize", handleResize)
  }, [someStateValue])

  // Clean up event listener…?
  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // React to window changes
  useEffect(() => {
    if (constraints) {
      let {width, height} = constraints

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