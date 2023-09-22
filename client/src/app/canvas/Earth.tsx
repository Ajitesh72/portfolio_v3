import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../loader";

// Define a custom shader for the gradient material
const gradientShader = {
  uniforms: {
    color1: { value: new THREE.Color(0x0000ff) }, // Start color (blue)
    color2: { value: new THREE.Color(0x00ffff) }, // End color (light blue)
  },
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec3 vNormal;
    void main() {
      // Calculate a gradient based on the Y-coordinate of the normal
      float gradient = clamp(vNormal.y, 0.0, 1.0);
      vec3 finalColor = mix(color1, color2, gradient);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
};

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // Create the gradient material using the custom shader
  const material = new THREE.ShaderMaterial({
    uniforms: gradientShader.uniforms,
    vertexShader: gradientShader.vertexShader,
    fragmentShader: gradientShader.fragmentShader,
  });

  // Assign the material to the 3D object
  earth.scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = material;
    }
  });

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
