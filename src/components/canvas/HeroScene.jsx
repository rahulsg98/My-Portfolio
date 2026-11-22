import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Preload } from "@react-three/drei";
import WebGLGuard from "./WebGLGuard";

const Satellite = ({ radius, angle, color, size = 0.07 }) => (
  <mesh position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
    <sphereGeometry args={[size, 24, 24]} />
    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.5} toneMapped={false} />
  </mesh>
);

const OrbitRing = ({ radius, tilt, color, speed, satellites = 2 }) => {
  const spin = useRef();
  useFrame((_, delta) => {
    spin.current.rotation.z += delta * speed;
  });
  const angles = useMemo(
    () => Array.from({ length: satellites }, (_, i) => (i / satellites) * Math.PI * 2 + radius),
    [satellites, radius]
  );
  return (
    <group rotation={tilt}>
      <group ref={spin}>
        <mesh>
          <torusGeometry args={[radius, 0.006, 16, 220]} />
          <meshBasicMaterial color={color} transparent opacity={0.45} toneMapped={false} />
        </mesh>
        {angles.map((a, i) => (
          <Satellite key={i} radius={radius} angle={a} color={color} size={i === 0 ? 0.09 : 0.055} />
        ))}
      </group>
    </group>
  );
};

const Core = ({ compact }) => {
  const parallax = useRef();
  const orb = useRef();
  const shell = useRef();

  useFrame((state, delta) => {
    const { x, y } = state.mouse;
    const g = parallax.current;
    g.rotation.y += (x * 0.5 - g.rotation.y) * 0.04;
    g.rotation.x += (-y * 0.35 - g.rotation.x) * 0.04;
    orb.current.rotation.y += delta * 0.2;
    shell.current.rotation.y -= delta * 0.08;
    shell.current.rotation.x += delta * 0.05;
  });

  return (
    <group ref={parallax} scale={compact ? 0.72 : 1}>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={1.1}>
        <mesh ref={orb} scale={1.55}>
          <icosahedronGeometry args={[1, 48]} />
          <MeshDistortMaterial
            color="#6d28d9"
            emissive="#3b0764"
            emissiveIntensity={0.6}
            roughness={0.12}
            metalness={0.55}
            distort={0.4}
            speed={1.6}
          />
        </mesh>
        <mesh ref={shell} scale={2.25}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial color="#67e8f9" wireframe transparent opacity={0.12} />
        </mesh>
      </Float>
      <OrbitRing radius={2.9} tilt={[1.15, 0.1, 0.35]} color="#22d3ee" speed={0.35} satellites={3} />
      <OrbitRing radius={3.5} tilt={[1.45, -0.45, -0.4]} color="#f472b6" speed={-0.22} satellites={2} />
      <OrbitRing radius={4.1} tilt={[1.3, 0.6, 0.9]} color="#c084fc" speed={0.15} satellites={1} />
      <Sparkles count={90} scale={[10, 8, 6]} size={2.2} speed={0.35} color="#c4b5fd" opacity={0.8} />
    </group>
  );
};

const OrbFallback = () => (
  <div className="absolute inset-0 grid place-items-center">
    <div className="w-[60%] aspect-square rounded-full bg-[radial-gradient(circle_at_35%_30%,#a78bfa,#6d28d9_45%,#1e1b4b_75%)] shadow-[0_0_120px_rgba(139,92,246,.5)] animate-pulse" />
  </div>
);

const HeroScene = ({ compact = false }) => (
  <WebGLGuard fallback={<OrbFallback />}>
  <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 9], fov: 45 }} gl={{ antialias: true, alpha: true }}>
    <ambientLight intensity={0.35} />
    <pointLight position={[5, 4, 5]} intensity={2.2} color="#22d3ee" />
    <pointLight position={[-5, -3, 3]} intensity={2} color="#f472b6" />
    <directionalLight position={[0, 5, 5]} intensity={0.8} />
    <Suspense fallback={null}>
      <Core compact={compact} />
    </Suspense>
    <Preload all />
  </Canvas>
  </WebGLGuard>
);

export default HeroScene;
