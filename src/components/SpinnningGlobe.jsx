import { useRef } from 'react';
import React from 'react';
import { useFrame } from '@react-three/fiber'

const SpinningGlobe = ({texture, position, toRotate}) => {

  const myEarth = React.useRef();

  // how to do a rotation: https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations

  useFrame(({ clock }) => {
    if (toRotate) {
      myEarth.current.rotation.y = clock.getElapsedTime()
    } 
  });
    

  return (<mesh position={position} ref={myEarth} rotation={[0, 0, 0]} >
    <sphereGeometry args={[3, 32, 32]} />
    <meshStandardMaterial map={texture} />
  </mesh>)
};

export default SpinningGlobe;