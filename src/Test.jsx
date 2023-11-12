import { Canvas, useFrame } from '@react-three/fiber'
import { Box,Plane } from '@react-three/drei'
import React, {useRef} from 'react'


const Experience =()=>{

  const platformRef = useRef();

  useFrame((state,delta)=>{
    if(platformRef.current){
      platformRef.current.position.x += .02;
    }
    if(platformRef.current.position.x > 3.5){
      platformRef.current.position.x = -5
    }

  })


  return(
    <group ref={platformRef} position={[-3,-4,0]}>
    <Plane args={[5,1,]}>
      <meshBasicMaterial color="red"/>
    </Plane>

    <Plane position={[6,0,0]} args={[4,1]}>
      <meshBasicMaterial color="blue"/>
    </Plane>
  </group>
  )
}

const Test = () => {

  return (
    <div style={{height:'100vh'}}>
      <Canvas>
        <color attach="background" args={["black"]}/>
        <Experience/>
    
      </Canvas>
    </div>
  )
}

export default Test