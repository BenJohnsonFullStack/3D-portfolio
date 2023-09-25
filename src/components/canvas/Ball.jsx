import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import Loader from "../Loader";

const Ball = ({ imgUrl, index }) => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow={true} receiveShadow={true} scale={2.75}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={index < 10 ? index + 7 : index + 1}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <sphereGeometry args={[1, 200, 200]} />
        <meshStandardMaterial
          color={index % 2 === 0 ? "#4b4363" : "#6d65b5"}
          polygonOffset={true}
          polygonOffsetFactor={-5}
          flatShading={true}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={useTexture(imgUrl)}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, index }) => (
  <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<Loader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Ball imgUrl={icon} index={index} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;
