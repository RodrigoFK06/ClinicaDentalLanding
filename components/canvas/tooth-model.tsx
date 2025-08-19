"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import type * as THREE from "three"

function ToothGeometry() {
  const meshRef = useRef<any>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
  })

  return (
    <mesh ref={meshRef}>
      {/* Tooth Crown */}
      <group>
        {/* Main Crown */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.8, 1.2, 1.5, 8]} />
          <meshStandardMaterial
            color="#f8f9fa"
            roughness={0.1}
            metalness={0.1}
            emissive="#ffffff"
            emissiveIntensity={0.05}
          />
        </mesh>

        {/* Tooth Root */}
        <mesh position={[0, -0.8, 0]}>
          <cylinderGeometry args={[0.4, 0.8, 1.2, 8]} />
          <meshStandardMaterial color="#f0f0f0" roughness={0.2} metalness={0.05} />
        </mesh>

        {/* Enamel Highlight */}
        <mesh position={[0, 0.8, 0.3]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.1} transparent opacity={0.8} />
        </mesh>
      </group>
    </mesh>
  )
}

export default function ToothModel() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#6C5CE7" />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#22D3EE" />

        {/* Environment */}
        <Environment preset="studio" />

        {/* 3D Tooth */}
        <ToothGeometry />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </motion.div>
  )
}
