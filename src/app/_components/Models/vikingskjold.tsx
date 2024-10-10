
import React, { useRef } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { GroupProps, useFrame, useLoader } from '@react-three/fiber'
import { Group, TextureLoader } from 'three'

export function Vikingeskjold(props: GroupProps) {
  const { nodes, materials } = useGLTF('/Vikingeskjold.glb')
  const colormap = useTexture("/Shield_Decal.png")
  const meshRef = useRef<Group>(null!)

  useFrame((state, delta) => (meshRef.current.rotation.y += delta /2))
  
  return (
    <group {...props} dispose={null} ref={meshRef}>
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error weird things
        geometry={nodes.bræt!.geometry}
        material={materials.WhiteOakSolidNaturalMediumGloss}
        scale={0.01}
      >
        <Decal
            debug
            position={[0,0,2]}
            rotation={[0,0,0]}
            scale={40}

        >
            <meshStandardMaterial map={colormap}/>

        </Decal>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error weird things

        geometry={nodes.skjoldring!.geometry}
        material={materials.BrassSatin}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error weird things

        geometry={nodes.Solid3!.geometry}
        material={materials.BrassSatin}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error weird things

        geometry={nodes.Solid4!.geometry}
        material={materials.BrassSatin}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error weird things

        geometry={nodes.Solid5!.geometry}
        material={materials.BrassSatin}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error weird things

        geometry={nodes.kuppel!.geometry}
        material={materials.BrassSatin}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error weird things
        geometry={nodes.rem!.geometry}
        material={materials.Brown}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error weird things

        geometry={nodes.søm.geometry}
        material={materials.BrassSatin}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error weird things

        geometry={nodes.søm2.geometry}
        material={materials.BrassSatin}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error weird things

        geometry={nodes.Solid10.geometry}
        material={materials.BrassSatin}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/Vikingeskjold.glb')