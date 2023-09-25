import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");
  // "Earth" (https://skfb.ly/6VCKF) by denis_cliofas is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

  return (
    <>
      <OrbitControls
        autoRotate={true}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <mesh>
        <hemisphereLight
          intensity={7}
          position={[0, 5, 1]}
          groundColor="black"
        />
        <pointLight intensity={5} position={[2, 2, 2]} />
        <primitive
          object={earth.scene}
          scale={12}
          position-y={0}
          rotation-y={0}
        />
      </mesh>
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows={true}
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
