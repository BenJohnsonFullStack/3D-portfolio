/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
// const Computers = () => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <pointLight />
//       <primitive object={computer.scene} />
//     </mesh>
//   );
// };

const ComputersCanvas = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <Canvas
      frameloop="demand"
      shadows={true}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <mesh>
          <hemisphereLight intensity={2.25} groundColor="black" />
          <pointLight />
          <spotLight
            position={[-1, 5, 1]}
            angle={0.4}
            penumbra={1}
            intensity={50}
            castShadow={true}
          />
          <primitive
            object={computer.scene}
            scale={0.75}
            position={[0, -3.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </mesh>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
