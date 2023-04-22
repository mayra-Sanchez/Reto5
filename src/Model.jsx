import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/static/model/rapunzel.glb");
  return (
    <group {...props} dispose={null} scale={5}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.GLTF_created_0_rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_7.geometry}
            material={materials["24_eyescolor_0.3_0_0.001"]}
            skeleton={nodes.Object_7.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_9.geometry}
            material={materials["24_eyeswhite_0.2_0_0.001"]}
            skeleton={nodes.Object_9.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_11.geometry}
            material={materials["24_hbase_0.4_0_0.001"]}
            skeleton={nodes.Object_11.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_13.geometry}
            material={materials["24_head_0.2_0_0.001"]}
            skeleton={nodes.Object_13.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_15.geometry}
            material={materials["24_skin_0.2_0_0.001"]}
            skeleton={nodes.Object_15.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_19.geometry}
            material={materials["24_teeth_0.7_0_0.001"]}
            skeleton={nodes.Object_19.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_17.geometry}
            material={materials["24_skirt_0.4_0_0.001"]}
            skeleton={nodes.Object_17.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_27.geometry}
            material={materials["25_hends_0.4_0_0.001"]}
            skeleton={nodes.Object_27.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_29.geometry}
            material={materials["25_lashes_0_0_0.001"]}
            skeleton={nodes.Object_29.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_31.geometry}
            material={materials["25_lashesb_0_0_0.001"]}
            skeleton={nodes.Object_31.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_33.geometry}
            material={materials["7_eyesdot_0_0_0.001"]}
            skeleton={nodes.Object_33.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_21.geometry}
            material={materials["24_top_0.4_0_0.001"]}
            skeleton={nodes.Object_21.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_23.geometry}
            material={materials["25_frill_0.4_0_0.001"]}
            skeleton={nodes.Object_23.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_25.geometry}
            material={materials["25_frillb_0.4_0_0.001"]}
            skeleton={nodes.Object_25.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/model/rapunzel.glb");