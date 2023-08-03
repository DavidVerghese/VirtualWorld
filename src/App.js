import './App.css';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import earth from './textures/earth.jpeg';
import moon from './textures/moon.jpeg';
import { OrbitControls, Stars, Cloud } from '@react-three/drei';
import React from 'react';
import Galaxy from './components/Galaxy';
import SpinningGlobe from './components/SpinnningGlobe';
import sun from './textures/sun.jpeg';
function App() {

  

  return (
    <div className="App">
      <h1>Welcome to Outer Space!</h1>
      <div>
        Click and drag to move around.
      </div>
      <Canvas className="canvas">
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />

        <Galaxy />
        <Stars />
        <Stars position={[0,1,0]} />
        <Cloud  position={[0, 0, -20]} />
        <Cloud  position={[0, 1, -20]} />
        {/* orbit controls: https://sbcode.net/react-three-fiber/orbit-controls/ */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
