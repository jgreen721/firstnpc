import React from 'react'
import {Canvas} from "@react-three/fiber"
import {Environment, useGLTF, OrbitControls} from "@react-three/drei"


const Experience = ()=>{
    const img = useGLTF("./island.glb")

    return (
        <group>
            <primitive scale={.3} position={[0,-1,0]} object={img.scene}/>
        </group>
    )
}

const MyScene = () => {
  return (
    <div>
        <Canvas style={{height:"100vh"}}>
            <Environment preset="city" background={false}/>
            <OrbitControls/>
            <Experience/>
        </Canvas>
    </div>
  )
}

export default MyScene