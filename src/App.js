import './App.css';
import SpinningGlobe from './components/SpinnningGlobe';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import earth from './textures/earth.jpeg';
import moon from './textures/moon.jpeg';
import { OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';
import Galaxy from './components/Galaxy';
function App() {

  // how to load texture: https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures
  const earthTexture = useLoader(TextureLoader, earth);
  const moonTexture = useLoader(TextureLoader, moon);
  return (
    <div className="App">
      <h1>Welcome to Outer Space!</h1>
      <div>
        Click and drag to move around.
      </div>
      <Canvas className="canvas">
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />

        <Galaxy/>
        {/* orbit controls: https://sbcode.net/react-three-fiber/orbit-controls/ */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
