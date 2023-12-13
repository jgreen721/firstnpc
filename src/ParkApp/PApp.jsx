import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text,ScrollControls } from '@react-three/drei'
import Experience3 from "./Experience3"


const PApp = () => {
  return (
    <div className="papp">
        <h1>Welcome to Your 3d-Scene</h1>
        <Canvas style={{background:'black'}}>
            <ambientLight intensity={.2}/>
            <directionalLight intensity={4}/>
            <OrbitControls/>
            <ScrollControls pages={4}>
            <Suspense fallback={<Text color="red">Loading...</Text>}>
                <Experience3/>
            </Suspense>
            </ScrollControls>
        </Canvas>
    </div>
  )
}

export default PApp