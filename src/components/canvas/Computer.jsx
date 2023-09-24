import { OrbitControls, useGLTF } from "@react-three/drei";

const Computer = ({ isMobile }) => {
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
        <pointLight position={[0, -2.1, 0]} intensity={2} />
        <spotLight
          position={[-1, 5, 1]}
          angle={0.4}
          penumbra={1}
          intensity={50}
          castShadow={true}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -5.25, -1.15] : [0, -5.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  );
};

export default Computer;
