import { Canvas } from "@react-three/fiber";
import { Scene } from "./scene";
import { OrbitControls } from "@react-three/drei";
export const Experience = () => {
  return (
    <>
      <Canvas>
        <color attach="background" args={["slategray"]} />
        <Scene />
        <OrbitControls />
      </Canvas>
    </>
  );
};
