import React, { useEffect, useState, useRef } from "react"
import Matter from "matter-js"
import MatterAttractors from "matter-attractors"

const STATIC_DENSITY = 15
const PARTICLE_SIZE = 6
const PARTICLE_BOUNCYNESS = 0.9


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

  const setupSimulation = () => {

  }

  useEffect(() => {
    let Engine = Matter.Engine
    let Events = Matter.Events
    let Render = Matter.Render
    let World = Matter.World
    let Body = Matter.Body
    let Bodies = Matter.Bodies
    let Mouse = Matter.Mouse
    let Common = Matter.Common
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
        background: "rgba(0, 255, 0, 0.15)",
        wireframes: false,
      },
    })

    const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      render: {
        fillStyle: "blue",
      },
    })

    let heartPath = '<path d="M3860.61,2344.93C3864.34,2350.03 3870.23,2353.04 3876.5,2353.04C3882.77,2353.04 3888.66,2350.03 3892.39,2344.93C3961.26,2249.35 4077.55,2253.59 4137.97,2309.7C4203.35,2370.4 4203.35,2491.8 4137.97,2613.2C4097.01,2694.7 3998.44,2792.43 3907.89,2855.57C3888.94,2868.58 3864.06,2868.58 3845.11,2855.57C3754.56,2792.43 3655.99,2694.7 3615.03,2613.2C3549.66,2491.8 3549.66,2370.4 3615.03,2309.7C3675.45,2253.59 3791.74,2249.35 3860.61,2344.93Z" style="fill:white;"/>'
    let heartVertices = Svg.pathToVertices(heartPath, 30)

    World.add(world, Bodies.fromVertices(400, 80, [heartVertices], {
        render: {
            fillStyle: '#fff',
            strokeStyle: '#000',
            lineWidth: 0
        }
    }, true));

    const earth = Bodies.polygon(  
      render.options.width / 2,
      render.options.height / 2,
      13,
      100, 
      {
      isStatic: true,

      plugin: {
        attractors: [
          function(bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            };
          }
        ]
      },

      render: {
        fillStyle: "blue",
      },
    })


    World.add(world, earth)

    for (var i = 0; i < 300; i += 1) {
      var body = Bodies.circle(
        Common.random(0, render.options.width), 
        Common.random(0, render.options.height),
        8
      );

      World.add(world, body);
    }

    var mouse = Mouse.create(render.canvas);

    Events.on(engine, 'afterUpdate', function() {
        if (!mouse.position.x) {
          return;
        }

        // smoothly move the attractor body towards the mouse
        Body.translate(earth, {
            x: (mouse.position.x - earth.position.x) * 0.25,
            y: (mouse.position.y - earth.position.y) * 0.25
        });
    });


    Engine.run(engine)
    Render.run(render)

    setContraints(boxRef.current.getBoundingClientRect())
    setScene(render)

    window.addEventListener("resize", handleResize)
  }, [])


  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


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
        height: "100%"
      }}
    > 
      <canvas ref={canvasRef}/>
    </div>
  )
}

export default Scene