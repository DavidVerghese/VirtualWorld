import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import earth from '../textures/earth.jpeg';
import moon from '../textures/moon.jpeg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import SpinningGlobe from './SpinnningGlobe';
import { useGLTF } from '@react-three/drei'


const Galaxy = () => {
  const groupRef = useRef();

    // how to load texture: https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures
  
  const earthTexture = useLoader(TextureLoader, earth);
  const moonTexture = useLoader(TextureLoader, moon);

  // loading 3d shape from online: https://docs.pmnd.rs/react-three-fiber/tutorials/loading-models
  
  function Astronaut() {
    const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
   return (<primitive object={gltf.scene} />)
  }
  
  useFrame((state, delta) => {
    // Rotate the group with the two shapes around the Y axis
    groupRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={groupRef}>
       <SpinningGlobe toRotate={false} position={[4, 0, -5]} texture={earthTexture} />
      <SpinningGlobe toRotate={true} position={[-3, 0, -5]} texture={moonTexture} />
      <Astronaut />
    </group>
  );
};

export default Galaxy;