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
import { styles } from "../../style";

const Ball = (props) => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow={true} receiveShadow={true} scale={2.75}>
        <sphereGeometry args={[1, 200, 200]} />
        <meshStandardMaterial
          color="#4b4363"
          polygonOffset={true}
          polygonOffsetFactor={-5}
          flatShading={true}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={useTexture(props.imgUrl)}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => (
  <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<Loader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Ball imgUrl={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;
