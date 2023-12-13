import { useGLTF,Box, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Bar = () => {
    const img = useGLTF("./daease.glb")
  return (
    <div>
        <Canvas style={{height:'100vh',width:'100vw'}}>
            <ambientLight intensity={.3}/>
            <pointLight/>
            <directionalLight/>
            <OrbitControls/>
            <primitive scale={.6} rotation={[0,-Math.PI * .25,0]} position={[0,-2,0]} object={img.scene}/>
        </Canvas>
    </div>
  )
}

export default Bar