"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function SmartWarehouseScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06091a);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(4, 5, 6);
    camera.lookAt(0, 1, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Group for warehouse contents
    const warehouseGroup = new THREE.Group();
    scene.add(warehouseGroup);

    // Floor Grid
    const gridHelper = new THREE.GridHelper(12, 24, 0x1d3557, 0x111e38);
    gridHelper.position.y = 0;
    warehouseGroup.add(gridHelper);

    // Racks
    const rackMaterial = new THREE.MeshPhongMaterial({ color: 0x333333, specular: 0x111111 });
    const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xffa500 });
    const greenBoxMaterial = new THREE.MeshPhongMaterial({ color: 0x2ec4b6 });

    const createRack = (xOffset: number, zOffset: number) => {
      const rackGroup = new THREE.Group();
      
      // Vertical pillars
      const pillarGeom = new THREE.CylinderGeometry(0.04, 0.04, 2.5, 8);
      const positions = [
        [-1, 1.25, -0.4],
        [-1, 1.25, 0.4],
        [1, 1.25, -0.4],
        [1, 1.25, 0.4],
      ];
      positions.forEach(([x, y, z]) => {
        const pillar = new THREE.Mesh(pillarGeom, rackMaterial);
        pillar.position.set(x, y, z);
        rackGroup.add(pillar);
      });

      // Shelves (levels)
      const shelfGeom = new THREE.BoxGeometry(2.1, 0.05, 0.9);
      [0.2, 1.0, 1.8].forEach((yHeight) => {
        const shelf = new THREE.Mesh(shelfGeom, rackMaterial);
        shelf.position.set(0, yHeight, 0);
        rackGroup.add(shelf);

        // Put boxes on shelves
        for (let bx = -0.8; bx <= 0.8; bx += 0.5) {
          if (Math.random() > 0.25) {
            const isGreen = Math.random() > 0.5;
            const boxGeom = new THREE.BoxGeometry(0.35, 0.35, 0.35);
            const box = new THREE.Mesh(boxGeom, isGreen ? greenBoxMaterial : boxMaterial);
            box.position.set(bx, yHeight + 0.2, (Math.random() - 0.5) * 0.3);
            rackGroup.add(box);
          }
        }
      });

      rackGroup.position.set(xOffset, 0, zOffset);
      warehouseGroup.add(rackGroup);
    };

    // Instantiate rack rows
    createRack(-2.5, -2);
    createRack(-2.5, 0);
    createRack(-2.5, 2);
    createRack(2.5, -2);
    createRack(2.5, 0);
    createRack(2.5, 2);

    // Automated Guided Vehicles (AGV)
    const agvGroup = new THREE.Group();
    const agvBaseGeom = new THREE.BoxGeometry(0.6, 0.15, 0.45);
    const agvBaseMat = new THREE.MeshPhongMaterial({ color: 0x4a90e2 });
    const agvBase = new THREE.Mesh(agvBaseGeom, agvBaseMat);
    agvBase.position.y = 0.1;
    agvGroup.add(agvBase);

    // Box on top of AGV
    const agvBoxGeom = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const agvBox = new THREE.Mesh(agvBoxGeom, boxMaterial);
    agvBox.position.y = 0.35;
    agvGroup.add(agvBox);
    warehouseGroup.add(agvGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
    mainLight.position.set(5, 10, 5);
    scene.add(mainLight);

    // Cyberpunk ambient blue & red laser light
    const pointLightBlue = new THREE.PointLight(0x00ffff, 2, 20);
    pointLightBlue.position.set(0, 2, 0);
    scene.add(pointLightBlue);

    // Animation variables
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Animate AGV moving back and forth in the aisle
      agvGroup.position.z = Math.sin(time * 0.8) * 3;
      agvGroup.position.x = 0;

      // Rotate warehouse scene slowly to provide parallax
      warehouseGroup.rotation.y = time * 0.05;

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
