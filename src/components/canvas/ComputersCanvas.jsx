/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import Loader from "../Loader";

const Computer = React.lazy(() => import("./Computer"));

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows={true}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
