import { useEffect, useRef } from "react";
import { Uniform, Vector2 } from "three";
import type { Mesh, ShaderMaterial } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";

export const ShaderPlane = (props: Mesh) => {
  const meshRef = useRef<Mesh>(null!);
  const { viewport } = useThree();

  const uniforms = {
    uTime: new Uniform(0.0),
    uResolution: new Uniform(new Vector2()),
  };

  useEffect(() => {
    console.log("viewport", viewport);
  }, []);
  useFrame(({ clock }, delta) => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as ShaderMaterial;
    material.uniforms.uTime.value = clock.getElapsedTime();
    material.uniforms.uResolution.value = new Vector2(
      window.innerWidth * viewport.dpr,
      window.innerHeight * viewport.dpr
    );
  });
  return (
    <mesh {...props} ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};
