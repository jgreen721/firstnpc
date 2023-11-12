import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import Experience from "./Experience"
import './App.css'

function App() {

  return (
    <div className="app">
      <Canvas>
        {/* <OrbitControls enableZoom={true}/> */}
        <Environment preset="city" background={true}/>
        <ScrollControls pages={5} damping={.2}>
          <Experience/>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App

