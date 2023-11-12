import React, {useMemo, useRef} from 'react'
import Airplane from './Airplane'
import BgSphere from "./BgSphere"
import { Float, PerspectiveCamera, useGLTF, useScroll } from '@react-three/drei'
import * as THREE from "three"
import { useFrame, useThree } from '@react-three/fiber'
import { updatePlaneAxis, updateControls } from './controls'
const POINT_TOTAL = 300;


const x = new THREE.Vector3(1,0,0);
const y = new THREE.Vector3(0,1,0);
const z = new THREE.Vector3(0,0,1);


const Experience = () => {
    const scroll = useScroll()
    const cameraRef = useRef();
    const planeRef = useRef();
    const {camera} = useThree();
    const img = useGLTF("./jumpyguy.glb")



     const mixer = new THREE.AnimationMixer();

    // Add all animations to the mixer
    img.animations.forEach((clip) => {
       const action = mixer.clipAction(clip);
    //   action.play();
    console.log("animation",clip.uuid);
    });
  
    //  useFrame((state, delta) => mixer.update(delta));

    // console.log(img)

    // console.log(camera)

    const points =[
        new THREE.Vector3(0,0,0),
        new THREE.Vector3(-30,-10,-100),
        new THREE.Vector3(0,0,-200),
        new THREE.Vector3(5,20,-300),
        new THREE.Vector3(0,0,-400),
        new THREE.Vector3(5,-10,-500),
        new THREE.Vector3(0,0,-600),
        new THREE.Vector3(0,0,-700),
        new THREE.Vector3(0,0,-800),
        new THREE.Vector3(0,0,-900),
        new THREE.Vector3(0,0,-1000),
        new THREE.Vector3(75,0,-1000),
        new THREE.Vector3(75,-10,-900),
        new THREE.Vector3(75,0,-800),
        new THREE.Vector3(75,20,-700),
        new THREE.Vector3(75,0,-600),
        new THREE.Vector3(50,-10,-500),
        new THREE.Vector3(50,0,-400),
        new THREE.Vector3(35,0,-300),
        new THREE.Vector3(25,0,-200),
        new THREE.Vector3(25,0,-20),
        new THREE.Vector3(0,0,0),
    ]

    const line = useMemo(()=>{
        return new THREE.CatmullRomCurve3(
            points,
            false,
            "catmullrom",
            .5
        )
    },[points]);

    const lPoints = useMemo(()=>{
        return line.getPoints(POINT_TOTAL)
    })


    const shape = useMemo(()=>{
        const shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(0,1)
        return shape;
    })

    let prev;
    let hasTurned = false;
    let counter = 0;
    let currIdx = 0;

    // useFrame((state,delta)=>{
        // updatePlaneAxis(x,y,z,planeRef.current.position,cameraRef.current)
        // const rotMatrix = new THREE.Matrix4().makeBasis(x,y,z)

        // const matrix = new THREE.Matrix4().multiply(new THREE.Matrix4().makeTranslation(planeRef.current.x,planeRef.current.y,planeRef.current.z).multiply(rotMatrix))

        // planeRef.current.matrixAutoupdate = false;
        // planeRef.current.matrix.copy(matrix);
        // planeRef.current.matrixWorldNeedsUpdate = true;


        // const cameraMatrix = new THREE.Matrix4().multiply(new THREE.Matrix4().makeTranslation(cameraRef.current.position.x,cameraRef.current.position.y,cameraRef.current.position.z))
        // .multiply(rotMatrix).multiply(new THREE.Matrix4().makeRotationX(-.2)).multiply(new THREE.Matrix4().makeTranslation(0,0.015,.3))


        // cameraRef.current.matrixAutoupdate = false;
        // cameraRef.current.matrix.copy(cameraMatrix);
        // cameraRef.current.matrixWorldNeedsUpdate = true;
        // // if(!hasTurned){
        // console.log(matrix);
        // hasTurned = true;
        // }

        // cameraRef.current.position.z -=.01;
        // planeRef.current.position.z -=.03;
        

    
     

        //  cameraRef.current.position.lerp(currPos,delta * 35)
        //  prev = currPos;

        // cameraRef.current.position.z -=.01;

    //     updateControls(planeRef.current)
        


    // })


    



  return (
    <>
    <BgSphere/>
    {/* <group>
        <PerspectiveCamera ref={cameraRef} fov={75} position={[0,0,5]} makeDefault/>
        <group ref={planeRef} position={[0,0,0]}>
            <Float floatIntensity={1.5} speed={2}>
                <Airplane scale={1} rotation={[0,1.5,0]}/>
            </Float>
        </group>
    </group>
    <group position={[0,-2,0]}>
        <mesh>
            <extrudeGeometry args={
                [shape,
                {
                    steps:POINT_TOTAL,
                    extrudePath:line,
                    
                }
                ]}/>
        </mesh>
    </group> */}
    <group>
        <primitive object={img.scene}/>
    </group>
    </>
  )
}

export default Experience