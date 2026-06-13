"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Trail, Float } from "@react-three/drei";
import * as THREE from "three";
import { Plane, Globe, Shield, Thermometer } from "lucide-react";

/* ─── data ─────────────────────────────────────────────── */
const services = [
  {
    title: "Express Cargo",
    description:
      "Fast global delivery with priority handling and real-time tracking.",
    icon: Plane,
  },
  {
    title: "Charter Services",
    description:
      "Dedicated aircraft solutions for urgent and oversized shipments.",
    icon: Globe,
  },
  {
    title: "Dangerous Goods",
    description:
      "Certified transportation for hazardous and regulated cargo.",
    icon: Shield,
  },
  {
    title: "Temperature Controlled",
    description: "Cold-chain logistics for pharmaceuticals and perishables.",
    icon: Thermometer,
  },
];

/* ─── 3-D sub-components (only exist inside <Canvas>) ──── */

/** Stylised airplane built from basic geometries */
function AirplaneMesh() {
  const group = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // gentle bank + pitch oscillation
    group.current.rotation.z = Math.sin(t * 0.4) * 0.12;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.05;
  });

  return (
    <group ref={group}>
      {/* fuselage */}
      <mesh>
        <cylinderGeometry args={[0.12, 0.18, 2.2, 16]} />
        <meshStandardMaterial color="#e8eaf6" metalness={0.6} roughness={0.2} />
      </mesh>
      {/* nose cone */}
      <mesh position={[0, 1.3, 0]}>
        <coneGeometry args={[0.12, 0.5, 16]} />
        <meshStandardMaterial color="#e8eaf6" metalness={0.6} roughness={0.2} />
      </mesh>
      {/* main wings */}
      <mesh position={[0, 0.1, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[3.2, 0.06, 0.55]} />
        <meshStandardMaterial color="#c5cae9" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* wing sweep — left */}
      <mesh position={[-1.1, 0.1, 0.15]} rotation={[0, -0.22, 0]}>
        <boxGeometry args={[1.0, 0.05, 0.42]} />
        <meshStandardMaterial color="#c5cae9" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* wing sweep — right */}
      <mesh position={[1.1, 0.1, 0.15]} rotation={[0, 0.22, 0]}>
        <boxGeometry args={[1.0, 0.05, 0.42]} />
        <meshStandardMaterial color="#c5cae9" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* tail fin */}
      <mesh position={[0, -0.7, -0.28]}>
        <boxGeometry args={[0.06, 0.55, 0.55]} />
        <meshStandardMaterial color="#c5cae9" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* horizontal stabilisers */}
      <mesh position={[0, -0.82, -0.2]}>
        <boxGeometry args={[1.1, 0.05, 0.28]} />
        <meshStandardMaterial color="#c5cae9" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* engine left */}
      <mesh position={[-1.0, -0.08, 0.28]}>
        <cylinderGeometry args={[0.13, 0.15, 0.55, 12]} />
        <meshStandardMaterial color="#9fa8da" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* engine right */}
      <mesh position={[1.0, -0.08, 0.28]}>
        <cylinderGeometry args={[0.13, 0.15, 0.55, 12]} />
        <meshStandardMaterial color="#9fa8da" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* red accent stripe */}
      <mesh position={[0, 0.05, 0.19]}>
        <boxGeometry args={[3.4, 0.04, 0.04]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
}

/** Orbiting plane wrapped in a glowing trail */
function OrbitingPlane({
  radius,
  speed,
  tilt,
  offset,
}: {
  radius: number;
  speed: number;
  tilt: number;
  offset: number;
}) {
  const ref = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.5) * 0.6,
      Math.sin(t) * radius * Math.cos(tilt)
    );
    // face direction of travel
    ref.current.rotation.y = -t + Math.PI / 2;
  });

  return (
    <Trail
      width={0.6}
      length={6}
      color="#dc2626"
      attenuation={(t) => t * t}
    >
      <group ref={ref}>
        <mesh>
          <coneGeometry args={[0.05, 0.22, 8]} />
          <meshStandardMaterial color="#e8eaf6" metalness={0.6} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.35, 0.04, 0.12]} />
          <meshStandardMaterial color="#c5cae9" metalness={0.5} roughness={0.3} />
        </mesh>
      </group>
    </Trail>
  );
}

/** Slowly rotating Earth sphere */
function Earth() {
  const mesh = useRef<THREE.Mesh>(null!);

  // latitude/longitude grid lines baked into the texture procedurally
  const texture = useMemo(() => {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;

    // deep ocean background
    ctx.fillStyle = "#0d1b4b";
    ctx.fillRect(0, 0, size, size);

    // rough continent shapes (simplified patches)
    const landColor = "#1a3a2a";
    const patches: [number, number, number, number][] = [
      [60, 80, 120, 160],   // N. America
      [190, 90, 60, 130],   // Europe/Africa
      [270, 100, 100, 120], // Asia
      [170, 260, 80, 60],   // S. America
      [280, 300, 80, 50],   // Australia
    ];
    ctx.fillStyle = landColor;
    patches.forEach(([x, y, w, h]) => {
      ctx.beginPath();
      ctx.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    // lat/lon grid
    ctx.strokeStyle = "rgba(99,179,237,0.18)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 12; i++) {
      // longitude lines
      ctx.beginPath();
      ctx.moveTo((i / 12) * size, 0);
      ctx.lineTo((i / 12) * size, size);
      ctx.stroke();
      // latitude lines
      ctx.beginPath();
      ctx.moveTo(0, (i / 12) * size);
      ctx.lineTo(size, (i / 12) * size);
      ctx.stroke();
    }

    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame(({ clock }) => {
    mesh.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.9, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.1}
        roughness={0.7}
      />
      {/* atmosphere glow */}
      <mesh>
        <sphereGeometry args={[2.02, 64, 64]} />
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.07}
          side={THREE.BackSide}
        />
      </mesh>
    </mesh>
  );
}

/** Flight-path arcs as animated dashed curves */
function FlightPaths() {
  const paths = useMemo(() => {
    return [
      { from: [1.8, 0.3, 0.5], to: [-1.2, 0.8, -1.4] },
      { from: [-1.6, 0.2, 0.8], to: [0.4, -1.0, 1.6] },
      { from: [0.5, 1.7, 0.6], to: [-0.8, -0.4, -1.8] },
      { from: [1.0, -1.5, 0.8], to: [-1.8, 0.6, 0.3] },
    ].map(({ from, to }) => {
      const start = new THREE.Vector3(...(from as [number, number, number]));
      const end = new THREE.Vector3(...(to as [number, number, number]));
      const mid = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(3.2);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(60);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return geometry;
    });
  }, []);

  return (
    <>
      {paths.map((geo, i) => (
        <line key={i}>
          <primitive object={geo} attach="geometry" />
          <lineBasicMaterial
            color="#dc2626"
            transparent
            opacity={0.35}
          />
        </line>
      ))}
    </>
  );
}

/* ─── isolated 3-D scene wrapper ───────────────────────── */
function AirFreight3DScene() {
  return (
    // This div is fully self-contained — pointer-events & z-index
    // stay inside; nothing bleeds out to the page layout.
    <div className="h-[500px] border rounded-xl overflow-hidden mb-16 relative bg-[#060d1f]">
      <Canvas
        camera={{ position: [0, 1.5, 6], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: "#060d1f" }}
      >
        {/* lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-4, 2, -4]} intensity={0.6} color="#3b82f6" />
        <pointLight position={[0, 0, 0]} intensity={0.3} color="#dc2626" />

        {/* stars */}
        <Stars
          radius={80}
          depth={40}
          count={1800}
          factor={3}
          saturation={0}
          fade
          speed={0.4}
        />

        {/* earth */}
        <Earth />

        {/* arcs */}
        <FlightPaths />

        {/* hero plane — floating above globe */}
        <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.4}>
          <group position={[0, 3.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <AirplaneMesh />
          </group>
        </Float>

        {/* orbiting mini-planes */}
        <OrbitingPlane radius={2.8} speed={0.28} tilt={0.3} offset={0} />
        <OrbitingPlane radius={2.5} speed={0.22} tilt={-0.5} offset={2.1} />
        <OrbitingPlane radius={3.1} speed={0.18} tilt={0.9} offset={4.5} />
      </Canvas>

      {/* overlay label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="text-xs tracking-widest text-white/30 uppercase font-mono">
          Live Route Simulation
        </span>
      </div>
    </div>
  );
}

/* ─── page ──────────────────────────────────────────────── */
export default function AirFreightPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">
        <span className="text-red-600 font-semibold">GLOBAL AIR LOGISTICS</span>

        <h1 className="text-5xl font-bold mt-4 mb-6">Air Freight Solutions</h1>

        <p className="max-w-3xl text-muted-foreground mb-12">
          Accelerate global trade with express cargo, charter flights,
          temperature-controlled transportation, and international airport
          connectivity.
        </p>

        {/* 3D scene — fully isolated in its own div/Canvas */}
        <AirFreight3DScene />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <service.icon className="w-10 h-10 mb-4 text-red-600" />
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <StatCard title="Airports" value="320+" />
          <StatCard title="Countries" value="120+" />
          <StatCard title="Daily Flights" value="2,500+" />
          <StatCard title="On-Time Rate" value="98.4%" />
        </div>
      </section>
    </main>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="border rounded-xl p-6 text-center">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-muted-foreground mt-2">{title}</div>
    </div>
  );
}