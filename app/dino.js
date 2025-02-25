import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function DinoModel() {
  const { scene } = useGLTF("/models/dino.glb");
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

export default function DinoCanvas() {
  return (
    <Canvas className="w-full h-screen">
      <ambientLight intensity={0.5} />
      <DinoModel />
    </Canvas>
  );
}
