"use client";

import { useEffect } from "react";

export default function ParticlesBackground() {
  const loadParticles = () => {
    const rootStyles = getComputedStyle(document.documentElement);
    const particleColor = rootStyles.getPropertyValue("--component-color").trim();

    // 🔄 Destroy existing instance
    if (window.pJSDom && window.pJSDom.length) { // pJSDom is a global variable used by Particles.js to store all active particle instances.
      window.pJSDom[0].pJS.fn.vendors.destroypJS(); // destroy existing
      window.pJSDom = [];
    }

    // 🔄 Recreate particles with current color
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: particleColor },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: particleColor,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "bounce",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 0.7 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.async = true;

    script.onload = () => {
      loadParticles();

      // Optional: observe changes to the `class` attribute on <html> to re-load particles
      const observer = new MutationObserver(() => { // MutationObserver is a built-in browser API that watches for changes in the DOM (HTML structure).
        loadParticles();
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"], // only watch class attribute
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom.forEach((p) => p.destroy());
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
}
