import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

type Variant = "ivory" | "dark" | "white";

function Particles({ count, color, speed, spread }: { count: number; color: string; speed: number; spread: [number, number, number] }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, sizes } = useMemo(() => {
    const p = new Float32Array(count * 3);
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * spread[0];
      p[i * 3 + 1] = (Math.random() - 0.5) * spread[1];
      p[i * 3 + 2] = (Math.random() - 0.5) * spread[2];
      s[i] = Math.random() * 0.9 + 0.35;
    }
    return { positions: p, sizes: s };
  }, [count, spread]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.18;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.12) * 0.06;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial size={0.075} color={color} transparent opacity={0.55} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function MeshField({ variant }: { variant: Variant }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.15) * 0.04;
  });

  const isIvory = variant === "ivory";
  const isDark = variant === "dark";

  return (
    <>
      <ambientLight intensity={isDark ? 0.7 : 1.0} />
      <directionalLight position={[3, 4, 2]} intensity={isDark ? 0.9 : 1.2} color={isDark ? "#D8C49A" : "#FFFFFF"} />
      <directionalLight position={[-3, 1, -2]} intensity={0.45} color={isIvory ? "#A7B7AA" : "#102E32"} />

      {/* subtle undulating plane */}
      <mesh ref={meshRef} position={[0, -0.9, -1.2]} rotation={[-Math.PI / 2.35, 0, 0]}>
        <planeGeometry args={[14, 8, 32, 18]} />
        <meshStandardMaterial
          color={isDark ? "#143A3E" : isIvory ? "#EDE9DE" : "#F7F5EE"}
          roughness={0.85}
          metalness={0.02}
          transparent
          opacity={isDark ? 0.95 : 0.95}
        />
      </mesh>

      {isDark ? (
        <Particles count={90} color="#D8C49A" speed={0.35} spread={[10, 4, 6]} />
      ) : isIvory ? (
        <Particles count={70} color="#102E32" speed={0.28} spread={[10, 5, 6]} />
      ) : (
        <Particles count={55} color="#D8C49A" speed={0.22} spread={[10, 4, 6]} />
      )}

      {/* soft blob */}
      <mesh position={[2.2, 0.6, -1.8]}>
        <sphereGeometry args={[1.1, 20, 20]} />
        <meshStandardMaterial color={isDark ? "#D8C49A" : "#A7B7AA"} transparent opacity={isDark ? 0.08 : 0.07} roughness={1} />
      </mesh>
      <mesh position={[-1.8, -0.2, -1.5]}>
        <sphereGeometry args={[0.9, 18, 18]} />
        <meshStandardMaterial color={isDark ? "#A7B7AA" : "#D8C49A"} transparent opacity={0.07} roughness={1} />
      </mesh>
    </>
  );
}

export default function SectionBg3D({ variant = "ivory", className = "" }: { variant?: Variant; className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <Canvas
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0.6, 3.6], fov: 42 }}
        style={{ background: "transparent" }}
      >
        <MeshField variant={variant} />
        <fog attach="fog" args={[variant === "dark" ? "#102E32" : variant === "ivory" ? "#F7F5EE" : "#FFFFFF", 4, 9]} />
      </Canvas>
    </div>
  );
}
