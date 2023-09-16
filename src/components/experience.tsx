import { Canvas } from "@react-three/fiber";
import { Scene } from "./scene";
import { OrbitControls } from "@react-three/drei";
export const Experience = () => {
  /* Device Pixel Ratio */
  const DPR = 1.0;
  return (
    <>
      <Canvas camera={{ position: [0, 0, 6] }} dpr={DPR}>
        <color attach="background" args={["slategray"]} />
        <Scene />
        <OrbitControls />
      </Canvas>
    </>
  );
};
