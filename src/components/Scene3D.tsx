import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Panels() {
  const g1 = useRef<THREE.Group>(null);
  const g2 = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (g1.current) {
      g1.current.rotation.y = Math.sin(t * 0.22) * 0.18;
      g1.current.rotation.x = Math.sin(t * 0.14) * 0.06;
    }
    if (g2.current) {
      g2.current.rotation.y = Math.sin(t * 0.18 + 1.2) * -0.14;
      g2.current.position.y = Math.sin(t * 0.35) * 0.08;
    }
  });

  return (
    <>
      {/* soft ambient */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 5]} intensity={1.15} color="#FFF8E8" />
      <directionalLight position={[-4, 2, -3]} intensity={0.55} color="#A7B7AA" />
      <pointLight position={[0, 2, 3]} intensity={0.9} color="#D8C49A" distance={8} />

      <group ref={g1} position={[0.1, 0.18, 0]}>
        {/* layered glass plates */}
        <Float speed={0.9} rotationIntensity={0.08} floatIntensity={0.22}>
          <mesh position={[0, 0, 0.22]}>
            <boxGeometry args={[2.65, 1.55, 0.06]} />
            <meshPhysicalMaterial color="#F7F5EE" transparent opacity={0.92} roughness={0.18} metalness={0.02} clearcoat={0.6} clearcoatRoughness={0.18} />
          </mesh>
        </Float>
        <mesh position={[0.12, -0.06, 0.08]}>
          <boxGeometry args={[2.45, 1.35, 0.05]} />
          <meshPhysicalMaterial color="#FFFFFF" transparent opacity={0.7} roughness={0.22} metalness={0.01} />
        </mesh>
        <mesh position={[-0.08, 0.08, -0.08]}>
          <boxGeometry args={[2.3, 1.25, 0.05]} />
          <meshPhysicalMaterial color="#102E32" transparent opacity={0.14} roughness={0.35} />
        </mesh>
        {/* gold edge */}
        <mesh position={[1.02, 0.42, 0.32]}>
          <boxGeometry args={[0.42, 0.08, 0.02]} />
          <meshStandardMaterial color="#D8C49A" metalness={0.55} roughness={0.35} />
        </mesh>
        {/* tiny storefront dots */}
        <mesh position={[-0.58, -0.18, 0.38]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#102E32" />
        </mesh>
        <mesh position={[0.62, -0.28, 0.38]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#D8C49A" />
        </mesh>
      </group>

      {/* floating secondary chip */}
      <group ref={g2} position={[1.05, -0.62, 0.6]}>
        <Float speed={1.15} rotationIntensity={0.12} floatIntensity={0.35}>
          <mesh>
            <boxGeometry args={[0.95, 0.62, 0.06]} />
            <meshPhysicalMaterial color="#FFFFFF" roughness={0.2} metalness={0.02} clearcoat={0.5} />
          </mesh>
          <mesh position={[0, 0, 0.04]}>
            <planeGeometry args={[0.72, 0.08]} />
            <meshBasicMaterial color="#102E32" transparent opacity={0.14} />
          </mesh>
        </Float>
      </group>

      {/* ground haze */}
      <mesh position={[0, -1.08, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 3]} />
        <meshBasicMaterial color="#102E32" transparent opacity={0.55} />
      </mesh>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="h-[360px] w-full md:h-[420px] lg:h-[460px]">
      <Canvas dpr={[1, 1.9]} gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}>
        <PerspectiveCamera makeDefault position={[0.2, 0.35, 3.2]} fov={38} />
        <Panels />
        <fog attach="fog" args={["#102E32", 3.4, 7.5]} />
      </Canvas>
    </div>
  );
}
