import { useRef, useState } from "react";
import { Uniform, Color } from "three";
import type { Mesh, ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";

export const ShaderBox = (props: Mesh) => {
  const meshRef = useRef<Mesh>(null!);
  const [active, setActive] = useState(false);

  const uniforms = {
    uTime: new Uniform(0.0),
    uColorA: { type: "vec3", value: new Color("aquamarine") },
    uColorB: { type: "vec3", value: new Color("orchid") },
    uColorC: { type: "vec3", value: new Color("turquoise") },
  };
  useFrame(({ clock }, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta;
    const material = meshRef.current.material as ShaderMaterial;
    material.uniforms.uTime.value = clock.getElapsedTime();
  });
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};
