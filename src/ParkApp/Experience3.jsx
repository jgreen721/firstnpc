import React, {useRef, useLayoutEffect} from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from "gsap"

const Experience3 = () => {
    const img = useGLTF("./island3.glb")
    const islandRef = useRef();
    const scroll = useScroll();
    const tl = useRef();


    useFrame((state,delta)=>{
        console.log(scroll.offset);
    })

    useLayoutEffect(()=>{
        tl.current = gsap.timeline()
    })
  return (
    <group ref={islandRef}>
        <primitive scale={.2} object={img.scene}/>
    </group>
  )
}

export default Experience3