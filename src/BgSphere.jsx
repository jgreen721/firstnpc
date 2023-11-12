import React from 'react'
import { Sphere } from '@react-three/drei'
import { LayerMaterial,Gradient } from 'lamina'
import * as THREE from "three"

const BgSphere = () => {
    const img = new THREE.TextureLoader().load("./bluesky.jpeg")
  return (
    <>
    <Sphere scale={1500}>
        {/* <LayerMaterial side={THREE.BackSide}>
            <Gradient colorA="skyblue" colorB="white" axes="y" start={0} end={.5}/>
        </LayerMaterial> */}
        <meshBasicMaterial side={THREE.BackSide} map={img}/>
    </Sphere>
    </>
  )
}

export default BgSphere