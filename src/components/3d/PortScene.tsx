"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function PortScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06091a);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(5, 5, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const portGroup = new THREE.Group();
    scene.add(portGroup);

    // Ocean plane
    const oceanGeom = new THREE.PlaneGeometry(20, 20, 16, 16);
    const oceanMat = new THREE.MeshPhongMaterial({
      color: 0x0a244d,
      shininess: 80,
      specular: 0x00ffff,
      flatShading: true,
    });
    const ocean = new THREE.Mesh(oceanGeom, oceanMat);
    ocean.rotation.x = -Math.PI / 2;
    ocean.position.y = -0.5;
    portGroup.add(ocean);

    // Dock (quayside concrete slab)
    const dockGeom = new THREE.BoxGeometry(10, 0.8, 4);
    const dockMat = new THREE.MeshPhongMaterial({ color: 0x222222 });
    const dock = new THREE.Mesh(dockGeom, dockMat);
    dock.position.set(-2, -0.1, -3);
    portGroup.add(dock);

    // Container Cargo stacks on dock
    const containerColors = [0x00ffff, 0x4a90e2, 0xffa500, 0x2ec4b6];
    const boxGeom = new THREE.BoxGeometry(0.8, 0.4, 0.4);

    for (let x = -5; x < -1; x += 1.0) {
      for (let z = -4.5; z < -2; z += 0.5) {
        const heightVal = Math.floor(Math.random() * 4) + 1;
        for (let y = 0; y < heightVal; y++) {
          const colIndex = Math.floor(Math.random() * containerColors.length);
          const cargo = new THREE.Mesh(
            boxGeom,
            new THREE.MeshPhongMaterial({ color: containerColors[colIndex] })
          );
          cargo.position.set(x + (Math.random() - 0.5) * 0.1, y * 0.4 + 0.5, z);
          portGroup.add(cargo);
        }
      }
    }

    // Cargo Ship
    const shipGroup = new THREE.Group();
    // Hull
    const hullGeom = new THREE.BoxGeometry(5.5, 0.7, 1.2);
    const hullMat = new THREE.MeshPhongMaterial({ color: 0x1d3557 });
    const hull = new THREE.Mesh(hullGeom, hullMat);
    shipGroup.add(hull);

    // Cabin
    const cabinGeom = new THREE.BoxGeometry(0.8, 1.0, 0.8);
    const cabinMat = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const cabin = new THREE.Mesh(cabinGeom, cabinMat);
    cabin.position.set(-2.0, 0.85, 0);
    shipGroup.add(cabin);

    // Cargo containers loaded on ship
    for (let sx = -1.0; sx <= 2.2; sx += 0.9) {
      for (let sy = 0; sy < 2; sy++) {
        const cargoBox = new THREE.Mesh(
          boxGeom,
          new THREE.MeshPhongMaterial({ color: containerColors[Math.floor(Math.random() * containerColors.length)] })
        );
        cargoBox.position.set(sx, sy * 0.4 + 0.55, 0);
        shipGroup.add(cargoBox);
      }
    }

    shipGroup.position.set(1.5, 0, 1);
    portGroup.add(shipGroup);

    // Gantry Crane
    const craneGroup = new THREE.Group();
    // Pillars
    const legGeom = new THREE.BoxGeometry(0.1, 2.5, 0.1);
    const legMat = new THREE.MeshPhongMaterial({ color: 0xe63946 });
    const leg1 = new THREE.Mesh(legGeom, legMat);
    leg1.position.set(-0.5, 1.25, -2.5);
    const leg2 = new THREE.Mesh(legGeom, legMat);
    leg2.position.set(0.5, 1.25, -2.5);
    craneGroup.add(leg1);
    craneGroup.add(leg2);

    // Boom/Girder
    const boomGeom = new THREE.BoxGeometry(0.2, 0.2, 4.0);
    const boom = new THREE.Mesh(boomGeom, legMat);
    boom.position.set(0, 2.5, -1.5);
    craneGroup.add(boom);

    // Trolley & Spreader (cargo lifter)
    const trolleyGeom = new THREE.BoxGeometry(0.4, 0.15, 0.4);
    const trolleyMat = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const trolley = new THREE.Mesh(trolleyGeom, trolleyMat);
    trolley.position.set(0, 2.35, -1.0);
    craneGroup.add(trolley);
    portGroup.add(craneGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0x00ffff, 0.9);
    sunLight.position.set(10, 15, 5);
    scene.add(sunLight);

    // Red beacon lighting
    const beacon = new THREE.PointLight(0xff0000, 1.5, 10);
    beacon.position.set(-2, 1.5, 0);
    scene.add(beacon);

    // Animation variables
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Animate ocean vertices/waves
      const posAttr = ocean.geometry.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);
        const waveHeight = Math.sin(x * 0.5 + time) * 0.12 + Math.cos(y * 0.5 + time) * 0.12;
        posAttr.setZ(i, waveHeight);
      }
      ocean.geometry.computeVertexNormals();
      posAttr.needsUpdate = true;

      // Animate trolley back and forth carrying container
      trolley.position.z = -1.8 + Math.sin(time * 0.8) * 1.2;

      // Rotate whole dock scene slowly for parallax
      portGroup.rotation.y = time * 0.04;

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
