import './App.css';
import SpinningGlobe from './components/SpinnningGlobe';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import earth from './textures/earth.jpeg';
import moon from './textures/moon.jpeg';

function App() {

  // how to load texture: https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures
  const earthTexture = useLoader(TextureLoader, earth);
  const moonTexture = useLoader(TextureLoader, moon);

  return (
    <div className="App">
      <h1>Welcome to Outer Space!</h1>
      <Canvas className="canvas">
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <SpinningGlobe toRotate={true} position={[4, 0, -3]} texture={earthTexture} />
        <SpinningGlobe toRotate={true} position={[-4, 0, -5]} texture={moonTexture} />
     </Canvas>
    </div>
  );
}

export default App;
