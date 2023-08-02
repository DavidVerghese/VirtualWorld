import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import earth from '../textures/earth.jpeg';
import moon from '../textures/moon.jpeg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import SpinningGlobe from './SpinnningGlobe';

const Galaxy = () => {
  const groupRef = useRef();
  const earthTexture = useLoader(TextureLoader, earth);
  const moonTexture = useLoader(TextureLoader, moon);

  useFrame((state, delta) => {
    // Rotate the group with the two shapes around the Y axis
    groupRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={groupRef}>
       <SpinningGlobe toRotate={false} position={[4, 0, -3]} texture={earthTexture} />
       <SpinningGlobe toRotate={true} position={[-3, 0, -5]} texture={moonTexture} />
    </group>
  );
};

export default Galaxy;