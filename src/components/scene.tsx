import { Environment } from "@react-three/drei";
import { Box } from "./box";
import { ShaderBox } from "./shader-cube";

export const Scene = () => {
  return (
    <group>
      <Environment files="/background-1k.hdr" />
      <ambientLight intensity={0.2} />
      <directionalLight intensity={0.4} position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <ShaderBox position={[1.2, 0, 0]} />
    </group>
  );
};
