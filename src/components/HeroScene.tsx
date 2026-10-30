'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 4]} />
        <MeshDistortMaterial
          color="#00F0FF"
          emissive="#00F0FF"
          emissiveIntensity={0.15}
          roughness={0.2}
          metalness={0.8}
          distort={0.2}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function HolographicRing({ radius, speed, axis }: { radius: number; speed: number; axis: 'x' | 'y' | 'z' }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const t = clock.getElapsedTime() * speed;
      if (axis === 'x') ringRef.current.rotation.x = t;
      else if (axis === 'y') ringRef.current.rotation.y = t;
      else ringRef.current.rotation.z = t;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.01, 16, 100]} />
      <meshStandardMaterial
        color="#0066FF"
        emissive="#0066FF"
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particleData = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2 + Math.random() * 2;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 0.94; colors[i * 3 + 2] = 1; // cyan
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 0.4; colors[i * 3 + 2] = 1; // blue
      } else {
        colors[i * 3] = 0.55; colors[i * 3 + 1] = 0.36; colors[i * 3 + 2] = 0.96; // purple
      }
    }

    return { positions, colors };
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particleData.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={200}
          array={particleData.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (pointer.x * 0.2 - groupRef.current.rotation.y) * 0.02;
      groupRef.current.rotation.x += (pointer.y * 0.1 - groupRef.current.rotation.x) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <CoreSphere />
      <HolographicRing radius={1.8} speed={0.3} axis="y" />
      <HolographicRing radius={2.0} speed={0.2} axis="x" />
      <HolographicRing radius={2.2} speed={0.15} axis="z" />
      <FloatingParticles />
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00F0FF" />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#8B5CF6" />
      <pointLight position={[0, 5, -5]} intensity={0.3} color="#0066FF" />
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
