import React, {useState} from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import { Environment, useGLTF, useAnimations, OrbitControls, useProgress } from '@react-three/drei'
import * as THREE from "three"
import "./App.css"

const CustomFella = ({showCop})=>{
    const lowPolyGuy = useGLTF("./lowpolylumberjack_noarmature.glb");
    const jumpingCop = useGLTF("./jumpingcop.glb");
    const headScratcher = useGLTF("./headscratchingguy.glb");
    const { actions, mixer } = useAnimations(lowPolyGuy.animations, lowPolyGuy.scene);
    const { actions2, mixer:mixer2 } = useAnimations(jumpingCop.animations, jumpingCop.scene);
    const { actions3, mixer:mixer3 } = useAnimations(headScratcher.animations, headScratcher.scene);

console.log("JUMPING COP ",mixer2);
    // console.log(actions,mixer)


  useFrame((state, delta) => {
    mixer.update(delta);
      mixer2.update(delta);
      mixer3.update(delta);
    
  });

  // Play all animations when the component mounts
  React.useEffect(() => {
    // actions.forEach((action) => {
    //   action.play();
    // });
    // setActiveAction(actions);
    // setActiveMixer(mixer);

    lowPolyGuy.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
    })

    jumpingCop.animations.forEach((clip) => {
      const action = mixer2.clipAction(clip);
      action.play();
  })

  headScratcher.animations.forEach((clip) => {
    const action = mixer3.clipAction(clip);
    action.play();
})
    //  console.log("animation",clip.uuid);
  }, []);


  return (
      <>
{showCop ? 
<group>
    <primitive scale={1.25} rotation={[0,Math.PI,0]} position={[0,-3,0]} object={lowPolyGuy.scene}/>
</group>
:

<group>
    <primitive scale={.5} rotation={[0,Math.PI,0]} position={[0,-3,0]} object={headScratcher.scene}/>
</group>
}
</>
  )

}




{/* <group>
    <primitive scale={.5} rotation={[0,Math.PI,0]} position={[0,-3,0]} object={jumpingCop.scene}/>
</group> */}

const LowPoly = () => {
  const [showCop,setShowCop] = useState(false)

    const progress = useProgress();
    console.log(progress)







  return (
      progress.progress !== 100 ? <h1>Loading... </h1> :
    <div style={{height:'100vh',textAlign:"center",padding:'2rem'}}>
        <header>
              <h1>{!showCop ? "Second" : "First"} NPC</h1>
      <small>{showCop ? "Notice the hat data properties didnt entirely carry over (should be parent-ed to Head)" : "Or how some eyes geometries that got overlooked on parented weight-paint attributes and now get stretched/F up with animations"}</small>
      <div class="btn-div">
      <button onClick={()=>{
        console.log("toggle characters")
        setShowCop(!showCop)}}>Click to Switch Character</button>
        </div>
      </header>
        <Canvas style={{height:'100vh', position:'absolute',inset:0}}>
            <OrbitControls/>
            <Environment preset="city"/>
<CustomFella showCop={showCop}/>
        </Canvas>
    </div>

  )
}

export default LowPoly