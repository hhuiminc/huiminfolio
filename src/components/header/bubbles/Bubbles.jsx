import React from 'react'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const Bubbles = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        // console.log(container);
      };
      return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: false,
              zIndex: 0
            },
            background: {
              color: {
                value: "none",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
                bounce: {
                  horizontal: true,
                },
              },
            },
            particles: {
              color: {
                value: "#fff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 2.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 400,
                },
                value: 40,
              },
              opacity: {
                value: 0.9,
                random: true,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 6, max: 13 },
              },
            },
            detectRetina: true,
          }}
        />
      );
}

export default Bubbles