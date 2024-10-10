"use client"
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh, Vector3} from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Vikingeskjold } from "./Models/vikingskjold";

type props = {
    model: string
}


export default function ModelViewer({model}: props) {
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)

    return (
        <Canvas>
            <ambientLight intensity={Math.PI /2}/>
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Box position={new Vector3(-1.2, 0, 0)} />
            <Vikingeskjold scale={10}/>
        </Canvas>
    )
}

function ModelHandler({model}: props) {
    const gltf = useLoader(GLTFLoader, "/Vikingeskjold.glb")

    return <primitive object={gltf}/>
}

function Box(props: {position: Vector3}) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef<Mesh>(null!)
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        position={props.position}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
    }