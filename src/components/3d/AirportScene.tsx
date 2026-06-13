"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function AirportScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06091a);

    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    camera.position.set(5, 5, 8);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const airportGroup = new THREE.Group();
    scene.add(airportGroup);

    // Runway
    const runwayGeom = new THREE.BoxGeometry(1.6, 0.05, 12.0);
    const runwayMat = new THREE.MeshPhongMaterial({ color: 0x111111 });
    const runway = new THREE.Mesh(runwayGeom, runwayMat);
    runway.position.set(0, 0, 0);
    airportGroup.add(runway);

    // Flashing Runway center line markers
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lineGeom = new THREE.PlaneGeometry(0.15, 0.8);
    for (let z = -5; z <= 5; z += 2) {
      const line = new THREE.Mesh(lineGeom, lineMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.03, z);
      airportGroup.add(line);
    }

    // Runway Edge Lights
    const blueLightMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const redLightMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const lightGeom = new THREE.SphereGeometry(0.04, 8, 8);
    for (let z = -6.0; z <= 6.0; z += 1.5) {
      const isRed = z === -6.0 || z === 6.0;
      const leftLight = new THREE.Mesh(lightGeom, isRed ? redLightMat : blueLightMat);
      leftLight.position.set(-0.85, 0.06, z);
      const rightLight = new THREE.Mesh(lightGeom, isRed ? redLightMat : blueLightMat);
      rightLight.position.set(0.85, 0.06, z);
      airportGroup.add(leftLight);
      airportGroup.add(rightLight);
    }

    // Terminal Building
    const terminalGroup = new THREE.Group();
    const mainBuildingGeom = new THREE.BoxGeometry(2.5, 0.8, 1.8);
    const mainBuildingMat = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const mainBuilding = new THREE.Mesh(mainBuildingGeom, mainBuildingMat);
    mainBuilding.position.set(-3, 0.4, -2.5);
    terminalGroup.add(mainBuilding);

    // Hangar
    const hangarGeom = new THREE.CylinderGeometry(0.9, 0.9, 2.0, 16, 1, false, 0, Math.PI);
    const hangarMat = new THREE.MeshPhongMaterial({ color: 0x4a90e2, side: THREE.DoubleSide });
    const hangar = new THREE.Mesh(hangarGeom, hangarMat);
    hangar.rotation.z = Math.PI / 2;
    hangar.rotation.y = Math.PI / 2;
    hangar.position.set(-3, 0.1, 1.5);
    terminalGroup.add(hangar);

    // Control Tower
    const towerBaseGeom = new THREE.CylinderGeometry(0.18, 0.25, 2.0, 8);
    const towerBase = new THREE.Mesh(towerBaseGeom, mainBuildingMat);
    towerBase.position.set(-2.8, 1.0, -0.5);
    terminalGroup.add(towerBase);

    const towerCabGeom = new THREE.CylinderGeometry(0.35, 0.25, 0.5, 8);
    const towerCabMat = new THREE.MeshPhongMaterial({ color: 0x00ffff, transparent: true, opacity: 0.7 });
    const towerCab = new THREE.Mesh(towerCabGeom, towerCabMat);
    towerCab.position.set(-2.8, 2.15, -0.5);
    terminalGroup.add(towerCab);
    airportGroup.add(terminalGroup);

    // Rotating Radar Dish
    const radarGeom = new THREE.BoxGeometry(0.3, 0.08, 0.08);
    const radarMat = new THREE.MeshPhongMaterial({ color: 0xe63946 });
    const radar = new THREE.Mesh(radarGeom, radarMat);
    radar.position.set(-2.8, 2.45, -0.5);
    airportGroup.add(radar);

    // Flying Cargo Airplane
    const airplaneGroup = new THREE.Group();
    // Fuselage
    const fuselageGeom = new THREE.CylinderGeometry(0.16, 0.16, 1.3, 16);
    const fuselageMat = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const fuselage = new THREE.Mesh(fuselageGeom, fuselageMat);
    fuselage.rotation.z = Math.PI / 2;
    airplaneGroup.add(fuselage);

    // Wings
    const wingGeom = new THREE.BoxGeometry(1.6, 0.05, 0.35);
    const wingMat = new THREE.MeshPhongMaterial({ color: 0x2ec4b6 });
    const wings = new THREE.Mesh(wingGeom, wingMat);
    wings.position.set(0.1, 0, 0);
    airplaneGroup.add(wings);

    // Tail Fin
    const tailGeom = new THREE.BoxGeometry(0.35, 0.3, 0.05);
    const tail = new THREE.Mesh(tailGeom, wingMat);
    tail.position.set(-0.55, 0.2, 0);
    airplaneGroup.add(tail);

    airplaneGroup.position.set(0, 1.8, 0);
    airportGroup.add(airplaneGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0x4a90e2, 0.8);
    sunLight.position.set(5, 12, 5);
    scene.add(sunLight);

    // Flash light effect
    const strobe = new THREE.PointLight(0xffffff, 2, 8);
    strobe.position.set(0, 0.2, 4);
    scene.add(strobe);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Rotate Radar
      radar.rotation.y = time * 3.5;

      // Animate airplane flight trajectory (orbiting the airport)
      const radius = 4.5;
      const angle = time * 0.55;
      airplaneGroup.position.x = Math.sin(angle) * radius;
      airplaneGroup.position.z = Math.cos(angle) * radius;
      airplaneGroup.position.y = 1.6 + Math.sin(time * 1.5) * 0.45;
      
      // Face airplane in the direction of flight
      airplaneGroup.rotation.y = angle + Math.PI / 2;

      // Strobe beacon flash
      strobe.intensity = Math.sin(time * 9) > 0.8 ? 2.5 : 0;

      // Slowly rotate the airport base
      airportGroup.rotation.y = time * 0.035;

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
