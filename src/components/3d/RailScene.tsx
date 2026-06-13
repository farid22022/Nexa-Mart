"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function RailScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06091a);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(4, 5, 7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const railGroup = new THREE.Group();
    scene.add(railGroup);

    // Ground terrain
    const terrainGeom = new THREE.BoxGeometry(12, 0.2, 12);
    const terrainMat = new THREE.MeshPhongMaterial({ color: 0x141b2d });
    const terrain = new THREE.Mesh(terrainGeom, terrainMat);
    terrain.position.y = -0.1;
    railGroup.add(terrain);

    // Rail Track Sleepers & Rails (Ring path or linear path)
    // We'll build a circular railway track
    const trackRadius = 4.2;
    const railRadius = 0.02;

    const createCircularTrack = () => {
      const trackPoints = [];
      const sleeperCount = 80;

      // Rails (dual lines)
      const buildRail = (offset: number) => {
        const pathPoints = [];
        for (let i = 0; i <= 64; i++) {
          const theta = (i / 64) * Math.PI * 2;
          pathPoints.push(
            new THREE.Vector3(
              Math.sin(theta) * (trackRadius + offset),
              0.05,
              Math.cos(theta) * (trackRadius + offset)
            )
          );
        }
        const railCurve = new THREE.CatmullRomCurve3(pathPoints);
        const railGeom = new THREE.TubeGeometry(railCurve, 64, railRadius, 8, true);
        const railMat = new THREE.MeshPhongMaterial({ color: 0xcccccc, specular: 0x888888 });
        const railTube = new THREE.Mesh(railGeom, railMat);
        railGroup.add(railTube);
      };

      buildRail(-0.15);
      buildRail(0.15);

      // Sleepers (wooden planks)
      const sleeperGeom = new THREE.BoxGeometry(0.5, 0.03, 0.1);
      const sleeperMat = new THREE.MeshPhongMaterial({ color: 0x5c4033 });

      for (let i = 0; i < sleeperCount; i++) {
        const theta = (i / sleeperCount) * Math.PI * 2;
        const sleeper = new THREE.Mesh(sleeperGeom, sleeperMat);
        sleeper.position.set(Math.sin(theta) * trackRadius, 0.02, Math.cos(theta) * trackRadius);
        sleeper.rotation.y = theta + Math.PI / 2;
        railGroup.add(sleeper);
      }
    };

    createCircularTrack();

    // Freight Train
    const trainGroup = new THREE.Group();
    const trainCars: THREE.Group[] = [];

    const carColors = [0xe63946, 0x4a90e2, 0xffa500, 0x2ec4b6];

    // Create Locomotive (front engine car)
    const createLocomotive = () => {
      const loco = new THREE.Group();
      const bodyGeom = new THREE.BoxGeometry(0.7, 0.45, 0.3);
      const bodyMat = new THREE.MeshPhongMaterial({ color: 0xe63946 });
      const body = new THREE.Mesh(bodyGeom, bodyMat);
      body.position.y = 0.25;
      loco.add(body);

      const cabGeom = new THREE.BoxGeometry(0.35, 0.65, 0.3);
      const cab = new THREE.Mesh(cabGeom, bodyMat);
      cab.position.set(-0.15, 0.35, 0);
      loco.add(cab);

      const windshieldGeom = new THREE.BoxGeometry(0.02, 0.18, 0.25);
      const windshieldMat = new THREE.MeshPhongMaterial({ color: 0x00ffff, transparent: true, opacity: 0.8 });
      const windshield = new THREE.Mesh(windshieldGeom, windshieldMat);
      windshield.position.set(0.36, 0.35, 0);
      loco.add(windshield);

      loco.position.y = 0.05;
      return loco;
    };

    // Create Freight Cargo car
    const createCargoCar = (color: number) => {
      const car = new THREE.Group();
      const flatbedGeom = new THREE.BoxGeometry(0.75, 0.08, 0.3);
      const flatbedMat = new THREE.MeshPhongMaterial({ color: 0x333333 });
      const flatbed = new THREE.Mesh(flatbedGeom, flatbedMat);
      flatbed.position.y = 0.09;
      car.add(flatbed);

      const cargoGeom = new THREE.BoxGeometry(0.7, 0.35, 0.28);
      const cargoMat = new THREE.MeshPhongMaterial({ color: color });
      const cargo = new THREE.Mesh(cargoGeom, cargoMat);
      cargo.position.y = 0.3;
      car.add(cargo);

      car.position.y = 0.05;
      return car;
    };

    // Instantiate and couple cars
    const loco = createLocomotive();
    trainGroup.add(loco);
    trainCars.push(loco);

    for (let i = 0; i < 4; i++) {
      const carColor = carColors[i % carColors.length];
      const car = createCargoCar(carColor);
      trainGroup.add(car);
      trainCars.push(car);
    }

    railGroup.add(trainGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00ffff, 0.8);
    keyLight.position.set(5, 10, 5);
    scene.add(keyLight);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.0065;

      // Animate each train car coupled along the circular path
      const spacing = 0.18; // Spacing along the circle angle
      trainCars.forEach((car, index) => {
        const carAngle = time - index * spacing;
        
        car.position.x = Math.sin(carAngle) * trackRadius;
        car.position.z = Math.cos(carAngle) * trackRadius;
        
        // Rotate car to align with track direction
        car.rotation.y = carAngle + Math.PI / 2;
      });

      // Slowly rotate whole scene
      railGroup.rotation.y = time * 0.15;

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
