'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function A380Canvas() {
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

    // Create airplane
    const planeGroup = new THREE.Group()

    // Fuselage
    const fuselageGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2.0, 32)
    const fuselageMaterial = new THREE.MeshPhongMaterial({ color: 0x4a90e2 })
    const fuselage = new THREE.Mesh(fuselageGeometry, fuselageMaterial)
    fuselage.rotation.z = Math.PI / 2
    planeGroup.add(fuselage)

    // Cockpit
    const cockpitGeometry = new THREE.SphereGeometry(0.25, 32, 32)
    const cockpitMaterial = new THREE.MeshPhongMaterial({ color: 0x357abd })
    const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial)
    cockpit.position.set(-0.95, 0, 0)
    planeGroup.add(cockpit)

    // Wings
    const wingGeometry = new THREE.BoxGeometry(2.5, 0.1, 0.5)
    const wingMaterial = new THREE.MeshPhongMaterial({ color: 0x4a90e2 })
    const wings = new THREE.Mesh(wingGeometry, wingMaterial)
    wings.position.set(0, 0.15, 0)
    planeGroup.add(wings)

    // Tail
    const tailGeometry = new THREE.BoxGeometry(0.8, 0.3, 0.1)
    const tailMaterial = new THREE.MeshPhongMaterial({ color: 0x357abd })
    const tail = new THREE.Mesh(tailGeometry, tailMaterial)
    tail.position.set(0.85, 0.2, 0)
    planeGroup.add(tail)

    // Landing gear
    const gearGeometry = new THREE.BoxGeometry(0.1, 0.4, 0.1)
    const gearMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 })
    const gears = [
      [-0.4, -0.25, 0.3],
      [-0.4, -0.25, -0.3],
      [0.4, -0.25, 0.3],
      [0.4, -0.25, -0.3],
    ]

    gears.forEach(([x, y, z]) => {
      const gear = new THREE.Mesh(gearGeometry, gearMaterial)
      gear.position.set(x, y, z)
      planeGroup.add(gear)
    })

    scene.add(planeGroup)

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
      planeGroup.rotation.y += 0.003
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
