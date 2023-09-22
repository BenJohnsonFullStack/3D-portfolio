/* eslint-disable react/no-unknown-property */
import { OrbitControls, useGLTF } from "@react-three/drei";

const Computer = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <mesh>
        <hemisphereLight intensity={1.75} groundColor="black" />
        <pointLight position={[0, -2.25, 0]} />
        <spotLight
          position={[-1, 5, 1]}
          angle={0.4}
          penumbra={1}
          intensity={70}
          castShadow={true}
        />
        <primitive
          object={computer.scene}
          scale={0.75}
          position={[0, -5.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  );
};

export default Computer;
