"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function FleetScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06091a);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(3.5, 4.0, 6.0);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const fleetGroup = new THREE.Group();
    scene.add(fleetGroup);

    // Highway Road (straight multilane track)
    const roadGeom = new THREE.BoxGeometry(3.2, 0.05, 15.0);
    const roadMat = new THREE.MeshPhongMaterial({ color: 0x1f1f1f });
    const road = new THREE.Mesh(roadGeom, roadMat);
    fleetGroup.add(road);

    // Lane separators (dotted white lines)
    const dashGeom = new THREE.PlaneGeometry(0.08, 0.6);
    const dashMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const dashes: THREE.Mesh[] = [];

    // Left dashed line
    for (let z = -7; z <= 7; z += 2) {
      const dashL = new THREE.Mesh(dashGeom, dashMat);
      dashL.rotation.x = -Math.PI / 2;
      dashL.position.set(-0.53, 0.03, z);
      fleetGroup.add(dashL);
      dashes.push(dashL);

      const dashR = new THREE.Mesh(dashGeom, dashMat);
      dashR.rotation.x = -Math.PI / 2;
      dashR.position.set(0.53, 0.03, z);
      fleetGroup.add(dashR);
      dashes.push(dashR);
    }

    // Road side barriers
    const barrierGeom = new THREE.BoxGeometry(0.12, 0.25, 15.0);
    const barrierMat = new THREE.MeshPhongMaterial({ color: 0x4a90e2 });
    const leftBarrier = new THREE.Mesh(barrierGeom, barrierMat);
    leftBarrier.position.set(-1.66, 0.15, 0);
    const rightBarrier = new THREE.Mesh(barrierGeom, barrierMat);
    rightBarrier.position.set(1.66, 0.15, 0);
    fleetGroup.add(leftBarrier);
    fleetGroup.add(rightBarrier);

    // Create a procedural delivery truck
    const createTruck = (colorVal: number) => {
      const truck = new THREE.Group();

      // Cabin
      const cabinGeom = new THREE.BoxGeometry(0.35, 0.35, 0.32);
      const cabinMat = new THREE.MeshPhongMaterial({ color: colorVal });
      const cabin = new THREE.Mesh(cabinGeom, cabinMat);
      cabin.position.set(0, 0.2, 0.45);
      truck.add(cabin);

      // Cargo trailer box
      const cargoGeom = new THREE.BoxGeometry(0.38, 0.45, 0.9);
      const cargoMat = new THREE.MeshPhongMaterial({ color: 0xffffff });
      const cargo = new THREE.Mesh(cargoGeom, cargoMat);
      cargo.position.set(0, 0.25, -0.15);
      truck.add(cargo);

      // Chassis
      const chassisGeom = new THREE.BoxGeometry(0.32, 0.08, 1.25);
      const chassisMat = new THREE.MeshPhongMaterial({ color: 0x222222 });
      const chassis = new THREE.Mesh(chassisGeom, chassisMat);
      chassis.position.set(0, 0.05, 0.05);
      truck.add(chassis);

      // Wheels
      const wheelGeom = new THREE.CylinderGeometry(0.08, 0.08, 0.08, 12);
      const wheelMat = new THREE.MeshPhongMaterial({ color: 0x111111 });
      const wheelPositions = [
        [-0.18, 0.05, 0.4],
        [0.18, 0.05, 0.4],
        [-0.18, 0.05, -0.1],
        [0.18, 0.05, -0.1],
        [-0.18, 0.05, -0.42],
        [0.18, 0.05, -0.42],
      ];

      wheelPositions.forEach(([wx, wy, wz]) => {
        const wheel = new THREE.Mesh(wheelGeom, wheelMat);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(wx, wy, wz);
        truck.add(wheel);
      });

      return truck;
    };

    // Instantiate multiple trucks on different lanes
    const truckColors = [0xe63946, 0x2ec4b6, 0xffa500];
    const trucksData = [
      { mesh: createTruck(truckColors[0]), laneX: -1.05, speed: 0.07, zPos: -5.0 },
      { mesh: createTruck(truckColors[1]), laneX: 0.0, speed: 0.055, zPos: 1.0 },
      { mesh: createTruck(truckColors[2]), laneX: 1.05, speed: 0.08, zPos: -2.0 },
    ];

    trucksData.forEach((truck) => {
      truck.mesh.position.set(truck.laneX, 0, truck.zPos);
      fleetGroup.add(truck.mesh);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0x00ffff, 0.85);
    sunLight.position.set(6, 12, 4);
    scene.add(sunLight);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Animate road stripes movement (scrolling road simulation)
      dashes.forEach((dash) => {
        dash.position.z += 0.1; // Scroll direction
        if (dash.position.z > 7.5) {
          dash.position.z = -7.5;
        }
      });

      // Animate trucks relative to scroll
      trucksData.forEach((truck) => {
        // Truck drives along highway
        truck.mesh.position.z += truck.speed;
        // Reset truck position when driving off edge
        if (truck.mesh.position.z > 7.5) {
          truck.mesh.position.z = -7.5;
        }
      });

      // Parallax rotation of scene
      fleetGroup.rotation.y = Math.sin(time * 0.15) * 0.25;

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
