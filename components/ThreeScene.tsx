import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Geometry: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Custom shader for a liquid metal / wireframe hybrid look
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#D4FF00') },
    }),
    []
  );

  const vertexShader = `
    varying vec2 vUv;
    varying float vDistortion;
    uniform float uTime;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Distortion logic
      float distortion = sin(pos.x * 2.0 + uTime) * sin(pos.y * 3.0 + uTime) * 0.2;
      pos += normal * distortion;
      vDistortion = distortion;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    varying float vDistortion;
    uniform vec3 uColor;

    void main() {
      float intensity = 0.6 + vDistortion * 2.0;
      vec3 glow = uColor * intensity;
      
      // Wireframe effect simulated via grid
      float grid = step(0.9, sin(vUv.x * 50.0) * sin(vUv.y * 50.0));
      
      gl_FragColor = vec4(glow, 0.4 + grid * 0.6);
    }
  `;

  useFrame((state) => {
    const { clock, mouse } = state;
    if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
    if (meshRef.current) {
        // Gentle rotation
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
        meshRef.current.rotation.z = clock.getElapsedTime() * 0.05;
        
        // Mouse interaction
        meshRef.current.rotation.x += (mouse.y * 0.5 - meshRef.current.rotation.x) * 0.1;
        meshRef.current.rotation.y += (mouse.x * 0.5 - meshRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <icosahedronGeometry args={[1, 64]} />
      {/* Fallback standard material if shader fails or for simpler look */}
      <meshStandardMaterial 
        color="#1a1a1a" 
        wireframe={true} 
        emissive="#D4FF00"
        emissiveIntensity={0.5}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
};

export const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#D4FF00" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="white" />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Geometry />
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};