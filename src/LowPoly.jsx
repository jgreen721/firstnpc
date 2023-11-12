import React from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import { Environment, useGLTF, useAnimations, OrbitControls, useProgress } from '@react-three/drei'
import * as THREE from "three"
import "./App.css"

const CustomFella = ()=>{
    const lowPolyGuy = useGLTF("./lowpolylumberjack_noarmature.glb")
    const { actions, mixer } = useAnimations(lowPolyGuy.animations, lowPolyGuy.scene);
   


    console.log(actions,mixer)


  useFrame((state, delta) => {
    mixer.update(delta);
  });

  // Play all animations when the component mounts
  React.useEffect(() => {
    // actions.forEach((action) => {
    //   action.play();
    // });

    lowPolyGuy.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
    })
    //  console.log("animation",clip.uuid);
  }, []);


  return (
      <>

<group>
    <primitive scale={1.5} rotation={[0,Math.PI,0]} position={[0,-3,0]} object={lowPolyGuy.scene}/>
</group>
</>
  )

}

const LowPoly = () => {

    const progress = useProgress();
    console.log(progress)







  return (
      progress.progress !== 100 ? <h1>Loading... </h1> :
    <div style={{height:'100vh',textAlign:"center",padding:'2rem'}}>
        <header>
              <h1>First NPC</h1>
      <small>Whose hat data properties didnt entirely carry over (should be parent-ed to Head)</small>
      </header>
        <Canvas style={{height:'100%'}}>
            <OrbitControls/>
            <Environment preset="city"/>
<CustomFella/>
        </Canvas>
    </div>

  )
}

export default LowPoly