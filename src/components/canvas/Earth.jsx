import { Suspense } from "react";
import WebGLGuard from "./WebGLGuard";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => (
  <WebGLGuard fallback={<div className="h-full grid place-items-center"><div className="w-[55%] aspect-square rounded-full bg-[radial-gradient(circle_at_35%_30%,#67e8f9,#0e7490_45%,#082f49_75%)] shadow-[0_0_100px_rgba(34,211,238,.35)]" /></div>}>
  <Canvas
    frameloop="always"
    dpr={[1, 1.75]}
    gl={{ preserveDrawingBuffer: true, alpha: true }}
    camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls autoRotate autoRotateSpeed={1.2} enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Earth />
      <Preload all />
    </Suspense>
  </Canvas>
  </WebGLGuard>
);

export default EarthCanvas;
