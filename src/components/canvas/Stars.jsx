import { useMemo, useRef, Suspense } from "react";
import WebGLGuard from "./WebGLGuard";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Layer = ({ count, radius, color, size, speed }) => {
  const ref = useRef();
  const positions = useMemo(() => random.inSphere(new Float32Array(count * 3), { radius }), [count, radius]);
  useFrame((_, delta) => {
    ref.current.rotation.x -= delta * speed;
    ref.current.rotation.y -= delta * speed * 0.66;
  });
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color={color} size={size} sizeAttenuation depthWrite={false} />
    </Points>
  );
};

// One fixed WebGL canvas behind the whole page
const StarsCanvas = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none">
    <WebGLGuard>
  <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <group rotation={[0, 0, Math.PI / 4]}>
          <Layer count={2200} radius={1.3} color="#c4b5fd" size={0.0022} speed={0.03} />
          <Layer count={900} radius={1.1} color="#67e8f9" size={0.0026} speed={0.045} />
          <Layer count={500} radius={1.2} color="#f9a8d4" size={0.003} speed={0.02} />
        </group>
      </Suspense>
    </Canvas>
  </WebGLGuard>
  </div>
);

export default StarsCanvas;
