import React, {useRef,useEffect, useState} from 'react'
import {Canvas, useFrame} from "@react-three/fiber";
import { Box, useGLTF, useAnimations, useScroll } from '@react-three/drei';


const Guy = ()=>{
    const img = useGLTF("./cardioguywithbones.glb")
    const boxGuy = useRef();
    const { actions, mixer } = useAnimations(img.animations, img.scene);
    const scroll = useScroll();
    const [isAlive,setIsAlive] = useState(true)
    const [isAnimating,setIsAnimating] = useState(true)

    useFrame((state,delta)=>{
        if(isAnimating){
        mixer.update(delta/2);
        if(isAlive){
        boxGuy.current.position.z += .03;
        if(boxGuy.current.position.z > 6){
            boxGuy.current.position.z = -5;
        }
    }
    else{
        if(isAnimating){
        img.animations.forEach(clip=>{
        if(clip.name == "Death"){
            let action = mixer.clipAction(clip);
            action.play();
            setTimeout(()=>setIsAnimating(false),2500)
        }
    })
}
    }
}

 
    })


    useEffect(()=>{

        img.animations.forEach(clip=>{
            console.log(clip.name)
            if(isAlive){
            if(clip.name == "Walk"){
                let action = mixer.clipAction(clip);
                action.play();
            }
        }
    
            // else if(turnChar && clip.name == "TurnAround"){
            //         let action = mixer.clipAction(clip);
            //         action.play();
            //     }
            
        })
    },[])


    return (
        <group onClick={()=>setIsAlive(false)} ref={boxGuy}>
            <primitive scale={.3} position={[0,-3.5,-5]} rotation={[0,Math.PI,0]} object={img.scene}/>
        </group>
    )
}


const PacingCardioGuy = () => {
  return (
    <div>
        <Canvas style={{height:'100vh'}}>
            <color attach="background" args={["black"]}/>
            <ambientLight intensity={.3}/>
            <pointLight/>
            <directionalLight intensity={1.2}/>
            <Guy/>
            <Box args={[35,2,25]} position={[0,-5,0]}>
                <meshLambertMaterial color="brown"/>
            </Box>
        </Canvas>
    </div>
  )
}

export default PacingCardioGuy