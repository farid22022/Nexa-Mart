'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function TitanicCanvas() {
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

    // Create ship
    const shipGroup = new THREE.Group()

    // Hull
    const hullGeometry = new THREE.BoxGeometry(2.0, 0.8, 0.6)
    const hullMaterial = new THREE.MeshPhongMaterial({ color: 0x2c3e50 })
    const hull = new THREE.Mesh(hullGeometry, hullMaterial)
    hull.position.set(0, 0, 0)
    shipGroup.add(hull)

    // Superstructure
    const superGeometry = new THREE.BoxGeometry(1.2, 0.6, 0.5)
    const superMaterial = new THREE.MeshPhongMaterial({ color: 0x34495e })
    const superstructure = new THREE.Mesh(superGeometry, superMaterial)
    superstructure.position.set(-0.2, 0.6, 0)
    shipGroup.add(superstructure)

    // Smokestack
    const stackGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.8, 32)
    const stackMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a1a })
    const stack = new THREE.Mesh(stackGeometry, stackMaterial)
    stack.position.set(-0.3, 1.3, 0)
    shipGroup.add(stack)

    // Mast
    const mastGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.2, 16)
    const mastMaterial = new THREE.MeshPhongMaterial({ color: 0x555555 })
    const mast = new THREE.Mesh(mastGeometry, mastMaterial)
    mast.position.set(0.3, 1.0, 0)
    shipGroup.add(mast)

    // Anchor
    const anchorGeometry = new THREE.BoxGeometry(0.08, 0.3, 0.08)
    const anchorMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 })
    const anchor = new THREE.Mesh(anchorGeometry, anchorMaterial)
    anchor.position.set(0.8, 0.5, 0.35)
    shipGroup.add(anchor)

    scene.add(shipGroup)

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
      shipGroup.rotation.y += 0.004
      // Gentle bobbing motion
      shipGroup.position.y = Math.sin(Date.now() * 0.0005) * 0.1
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
