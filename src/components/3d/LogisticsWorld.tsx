"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function LogisticsWorld() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06091a);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Group to rotate everything
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Globe Sphere (wireframe with glowing shader/color)
    const globeGeometry = new THREE.SphereGeometry(1.8, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x111e38,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globeGroup.add(globe);

    // Inner glowing sphere
    const innerGeom = new THREE.SphereGeometry(1.78, 32, 32);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x0f274a,
      transparent: true,
      opacity: 0.8,
      shininess: 30,
    });
    const innerGlobe = new THREE.Mesh(innerGeom, innerMat);
    globeGroup.add(innerGlobe);

    // 2. Add Office/Hub Points
    const hubs = [
      { name: "Singapore", lat: 1.3521, lon: 103.8198 },
      { name: "Dubai", lat: 25.2048, lon: 55.2708 },
      { name: "Rotterdam", lat: 51.9244, lon: 4.4777 },
      { name: "New York", lat: 40.7128, lon: -74.006 },
      { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
      { name: "London", lat: 51.5074, lon: -0.1278 },
      { name: "Shanghai", lat: 31.2304, lon: 121.4737 },
    ];

    const convertLatLngToVector3 = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      const x = -(radius * Math.sin(phi) * Math.sin(theta));
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.cos(theta);

      return new THREE.Vector3(x, y, z);
    };

    const pointGeometry = new THREE.SphereGeometry(0.04, 16, 16);
    const pointMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });

    const points: THREE.Vector3[] = [];
    hubs.forEach((hub) => {
      const pos = convertLatLngToVector3(hub.lat, hub.lon, 1.8);
      points.push(pos);

      const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
      pointMesh.position.copy(pos);
      globeGroup.add(pointMesh);
    });

    // 3. Draw Bezier Curve Logistics Connections
    const createConnectionArc = (p1: THREE.Vector3, p2: THREE.Vector3) => {
      const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const dist = p1.distanceTo(p2);
      midPoint.normalize().multiplyScalar(1.8 + dist * 0.35); // Height based on distance

      const curve = new THREE.QuadraticBezierCurve3(p1, midPoint, p2);
      const pointsArray = curve.getPoints(30);

      const arcGeometry = new THREE.BufferGeometry().setFromPoints(pointsArray);
      const arcMaterial = new THREE.LineBasicMaterial({
        color: 0x4a90e2,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
      });

      const arcLine = new THREE.Line(arcGeometry, arcMaterial);
      globeGroup.add(arcLine);
    };

    // Connect Singapore to all other hubs
    const sgPos = points[0];
    for (let i = 1; i < points.length; i++) {
      createConnectionArc(sgPos, points[i]);
    }

    // Connect New York to London and Rotterdam
    createConnectionArc(points[3], points[5]);
    createConnectionArc(points[3], points[2]);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x00ffff, 0.8);
    directionalLight1.position.set(5, 3, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x4a90e2, 0.5);
    directionalLight2.position.set(-5, -3, -5);
    scene.add(directionalLight2);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / width) * 2 - 1;
      const y = -((event.clientY - rect.top) / height) * 2 + 1;

      targetRotationY = x * 0.5;
      targetRotationX = y * 0.5;
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto-rotation
      globeGroup.rotation.y += 0.003;

      // Mouse interactive adjustment
      globeGroup.rotation.y += (targetRotationY - mouseX) * 0.05;
      globeGroup.rotation.x += (targetRotationX - mouseY) * 0.05;

      mouseX += (targetRotationY - mouseX) * 0.05;
      mouseY += (targetRotationX - mouseY) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full rounded-2xl overflow-hidden" />;
}
