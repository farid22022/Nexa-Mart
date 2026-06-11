'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function TruckCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x06091a)

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 3

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Create truck
    const truckGroup = new THREE.Group()

    // Cabin
    const cabinGeometry = new THREE.BoxGeometry(0.8, 0.6, 0.8)
    const cabinMaterial = new THREE.MeshPhongMaterial({ color: 0xffa500 })
    const cabin = new THREE.Mesh(cabinGeometry, cabinMaterial)
    cabin.position.set(-0.6, 0.4, 0)
    truckGroup.add(cabin)

    // Cargo
    const cargoGeometry = new THREE.BoxGeometry(1.8, 0.8, 0.9)
    const cargoMaterial = new THREE.MeshPhongMaterial({ color: 0xff8c00 })
    const cargo = new THREE.Mesh(cargoGeometry, cargoMaterial)
    cargo.position.set(0.5, 0.4, 0)
    truckGroup.add(cargo)

    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.2, 32)
    const wheelMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 })

    const wheels = [
      [-0.8, 0, 0.5],
      [-0.8, 0, -0.5],
      [1.0, 0, 0.5],
      [1.0, 0, -0.5],
    ]

    wheels.forEach(([x, y, z]) => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial)
      wheel.rotation.z = Math.PI / 2
      wheel.position.set(x, y, z)
      truckGroup.add(wheel)
    })

    scene.add(truckGroup)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Animation
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      truckGroup.rotation.y += 0.005
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="h-full w-full" />
}
