import { Environment } from "@react-three/drei";
import { ShaderPlane } from "./shader-plane";

export const Scene = () => {
  return (
    <group>
      <Environment files="/background-1k.hdr" />
      <ambientLight intensity={0.2} />
      <directionalLight intensity={0.4} position={[10, 10, 10]} />
      <ShaderPlane />
    </group>
  );
};
