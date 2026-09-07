"use client";

import React, {
  Suspense,
  useMemo,
  useRef,
} from "react";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Html,
  OrbitControls,
} from "@react-three/drei";

import * as THREE from "three";


// ============================================================
// TYPES
// ============================================================

type GlobeProps = {
  activeService?: string | null;
};


// ============================================================
// COLORS
// ============================================================

const CYAN = "#00c8ff";
const GREEN = "#45d66a";


// ============================================================
// DIGITAL GLOBE
// ============================================================

function DigitalGlobe() {
  const globeRef =
    useRef<THREE.Group>(null);

  const glowRef =
    useRef<THREE.Mesh>(null);


  // ==========================================================
  // GLOBE POINTS
  // ==========================================================

  const globeGeometry = useMemo(() => {
    const count = 4200;

    const positions =
      new Float32Array(count * 3);

    const colors =
      new Float32Array(count * 3);

    const cyanColor =
      new THREE.Color(CYAN);

    const greenColor =
      new THREE.Color(GREEN);

    for (let i = 0; i < count; i++) {

      const phi =
        Math.acos(
          -1 +
            (2 * i) / count
        );

      const theta =
        Math.sqrt(
          count * Math.PI
        ) * phi;

      const radius = 2.35;

      const x =
        radius *
        Math.cos(theta) *
        Math.sin(phi);

      const y =
        radius *
        Math.cos(phi);

      const z =
        radius *
        Math.sin(theta) *
        Math.sin(phi);


      positions[i * 3] = x;

      positions[i * 3 + 1] = y;

      positions[i * 3 + 2] = z;


      const color =
        Math.random() > 0.82
          ? greenColor
          : cyanColor;


      colors[i * 3] =
        color.r;

      colors[i * 3 + 1] =
        color.g;

      colors[i * 3 + 2] =
        color.b;
    }


    const geometry =
      new THREE.BufferGeometry();


    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3
      )
    );


    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(
        colors,
        3
      )
    );


    return geometry;

  }, []);


  // ==========================================================
  // ROTATION
  // ==========================================================

  useFrame((state, delta) => {

    if (!globeRef.current)
      return;


    globeRef.current.rotation.y +=
      delta * 0.045;


    if (glowRef.current) {

      const pulse =
        1 +
        Math.sin(
          state.clock.elapsedTime * 1.5
        ) *
          0.025;


      glowRef.current.scale.set(
        pulse,
        pulse,
        pulse
      );
    }

  });


  return (

    <group ref={globeRef}>

      {/* ======================================================
          ATMOSPHERIC SPHERE
      ======================================================= */}

      <mesh ref={glowRef}>

        <sphereGeometry
          args={[
            2.38,
            64,
            64,
          ]}
        />

        <meshBasicMaterial
          color={CYAN}
          transparent
          opacity={0.055}
          side={THREE.BackSide}
        />

      </mesh>


      {/* ======================================================
          GLOBE POINT CLOUD
      ======================================================= */}

      <points
        geometry={globeGeometry}
      >

        <pointsMaterial
          size={0.022}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={
            THREE.AdditiveBlending
          }
        />

      </points>


      {/* ======================================================
          INNER DARK CORE
      ======================================================= */}

      <mesh>

        <sphereGeometry
          args={[
            0.78,
            48,
            48,
          ]}
        />

        <meshBasicMaterial
          color="#031a31"
          transparent
          opacity={0.96}
        />

      </mesh>


      {/* ======================================================
          CORE RING
      ======================================================= */}

      <mesh>

        <torusGeometry
          args={[
            0.86,
            0.025,
            16,
            100,
          ]}
        />

        <meshBasicMaterial
          color={GREEN}
          transparent
          opacity={0.8}
        />

      </mesh>


      {/* ======================================================
          NEXIFY CORE TEXT
      ======================================================= */}

      <Html
        center
        position={[0, 0, 0]}
        distanceFactor={5}
        zIndexRange={[10, 0]}
      >

        <div
          className="
            pointer-events-none
            select-none
            text-center
            flex
            flex-col
            items-center
            justify-center
            w-[190px]
          "
        >

          <div
            className="
              text-[9px]
              font-bold
              tracking-[0.5em]
              text-cyan-tech
            "
          >
            NEXIFY
          </div>


          <div
            className="
              mt-2
              text-[21px]
              font-black
              tracking-[-0.04em]
              text-white
              whitespace-nowrap
            "
          >
            DIGITAL
            <span className="text-green-brand">
              CORE
            </span>
          </div>


          <div
            className="
              mt-2
              text-[7px]
              uppercase
              tracking-[0.22em]
              text-white/40
            "
          >
            Intelligent Technology
          </div>

        </div>

      </Html>

    </group>
  );
}


// ============================================================
// ORBIT RING
// ============================================================

function OrbitRing({
  radius,
  rotation,
  color,
  speed,
}: {
  radius: number;
  rotation: [
    number,
    number,
    number
  ];
  color: string;
  speed: number;
}) {

  const ringRef =
    useRef<THREE.Mesh>(null);


  useFrame((_, delta) => {

    if (!ringRef.current)
      return;


    ringRef.current.rotation.z +=
      delta * speed;

  });


  return (

    <mesh
      ref={ringRef}
      rotation={rotation}
    >

      <torusGeometry
        args={[
          radius,
          0.009,
          12,
          160,
        ]}
      />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.28}
        depthWrite={false}
      />

    </mesh>

  );
}


// ============================================================
// FLOATING PARTICLES
// ============================================================

function FloatingParticles() {

  const particlesRef =
    useRef<THREE.Points>(null);


  const geometry =
    useMemo(() => {

      const count = 500;

      const positions =
        new Float32Array(
          count * 3
        );


      for (
        let i = 0;
        i < count;
        i++
      ) {

        const radius =
          2.7 +
          Math.random() * 1.5;


        const theta =
          Math.random() *
          Math.PI *
          2;


        const phi =
          Math.acos(
            2 *
              Math.random() -
              1
          );


        positions[i * 3] =
          radius *
          Math.sin(phi) *
          Math.cos(theta);


        positions[i * 3 + 1] =
          radius *
          Math.cos(phi);


        positions[i * 3 + 2] =
          radius *
          Math.sin(phi) *
          Math.sin(theta);

      }


      const geo =
        new THREE.BufferGeometry();


      geo.setAttribute(
        "position",
        new THREE.BufferAttribute(
          positions,
          3
        )
      );


      return geo;

    }, []);


  useFrame(
    (state, delta) => {

      if (
        !particlesRef.current
      )
        return;


      particlesRef.current.rotation.y +=
        delta * 0.035;


      particlesRef.current.rotation.x =
        Math.sin(
          state.clock.elapsedTime *
            0.2
        ) * 0.04;

    }
  );


  return (

    <points
      ref={particlesRef}
      geometry={geometry}
    >

      <pointsMaterial
        color={CYAN}
        size={0.018}
        transparent
        opacity={0.65}
        depthWrite={false}
        blending={
          THREE.AdditiveBlending
        }
      />

    </points>

  );
}


// ============================================================
// MOVING DATA DOTS
// ============================================================

function DataOrbit({
  color,
  radius,
  speed,
}: {
  color: string;
  radius: number;
  speed: number;
}) {

  const groupRef =
    useRef<THREE.Group>(null);


  useFrame((_, delta) => {

    if (!groupRef.current)
      return;


    groupRef.current.rotation.y +=
      delta * speed;

  });


  return (

    <group ref={groupRef}>

      <mesh
        position={[
          radius,
          0,
          0,
        ]}
      >

        <sphereGeometry
          args={[
            0.045,
            12,
            12,
          ]}
        />

        <meshBasicMaterial
          color={color}
        />

      </mesh>


      <mesh
        position={[
          -radius,
          0,
          0,
        ]}
      >

        <sphereGeometry
          args={[
            0.025,
            12,
            12,
          ]}
        />

        <meshBasicMaterial
          color={color}
        />

      </mesh>

    </group>

  );
}


// ============================================================
// MAIN 3D SCENE
// ============================================================

function GlobeScene() {

  return (

    <>

      {/* Lighting */}

      <ambientLight
        intensity={0.5}
      />


      <pointLight
        position={[
          4,
          3,
          5,
        ]}
        color={CYAN}
        intensity={4}
        distance={12}
      />


      <pointLight
        position={[
          -4,
          -2,
          3,
        ]}
        color={GREEN}
        intensity={3}
        distance={10}
      />


      {/* Globe */}

      <DigitalGlobe />


      {/* Outer orbital systems */}

      <OrbitRing
        radius={2.75}
        rotation={[
          Math.PI / 2.7,
          0.3,
          0,
        ]}
        color={CYAN}
        speed={0.15}
      />


      <OrbitRing
        radius={3.05}
        rotation={[
          Math.PI / 2.15,
          -0.25,
          0,
        ]}
        color={GREEN}
        speed={-0.11}
      />


      <OrbitRing
        radius={3.35}
        rotation={[
          Math.PI / 3,
          0.45,
          0,
        ]}
        color={CYAN}
        speed={0.07}
      />


      {/* Moving dots */}

      <DataOrbit
        radius={3}
        speed={0.5}
        color={CYAN}
      />


      <DataOrbit
        radius={3.3}
        speed={-0.32}
        color={GREEN}
      />


      {/* Floating particles */}

      <FloatingParticles />


      {/* Camera controls */}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.18}
        minPolarAngle={
          Math.PI / 2.5
        }
        maxPolarAngle={
          Math.PI / 1.7
        }
      />

    </>

  );
}


// ============================================================
// PUBLIC COMPONENT
// ============================================================

export const NexifyGlobe: React.FC<
  GlobeProps
> = () => {

  return (

    <div
      className="
        relative
        w-full
        h-full
        min-h-[520px]
        lg:min-h-[700px]
      "
    >

      {/* Glow behind globe */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[400px]
          h-[400px]
          lg:w-[650px]
          lg:h-[650px]
          rounded-full
          bg-cyan-tech/10
          blur-[120px]
          pointer-events-none
        "
      />


      {/* Three.js */}

      <Canvas
        camera={{
          position: [
            0,
            0,
            8,
          ],
          fov: 42,
        }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >

        <Suspense
          fallback={null}
        >

          <GlobeScene />

        </Suspense>

      </Canvas>

    </div>

  );
};


export default NexifyGlobe;