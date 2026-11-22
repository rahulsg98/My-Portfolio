import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <span className="canvas-loader" />
        <p className="font-mono text-xs text-white/70">{progress.toFixed(0)}%</p>
      </div>
    </Html>
  );
};

export default Loader;
