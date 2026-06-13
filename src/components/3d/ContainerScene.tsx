"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Badge } from "@/components/ui/badge";

export function ContainerScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [telemetry, setTelemetry] = useState({
    temp: "18.2 °C",
    humidity: "45.0%",
    weight: "22,400 kg",
    seal: "SECURED (ID: #NX-8890)",
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06091a);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(2.5, 2.0, 3.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const containerGroup = new THREE.Group();
    scene.add(containerGroup);

    // Shipping Container Box (Stylized ribs)
    const containerMat = new THREE.MeshPhongMaterial({
      color: 0x4a90e2,
      specular: 0x050505,
      shininess: 50,
    });

    const containerWidth = 2.4;
    const containerHeight = 1.0;
    const containerDepth = 1.0;

    // Base Main Box
    const mainBoxGeom = new THREE.BoxGeometry(containerWidth, containerHeight, containerDepth);
    const mainBox = new THREE.Mesh(mainBoxGeom, containerMat);
    containerGroup.add(mainBox);

    // Ribs (columns across the sides to make it look like a real shipping container)
    const ribGeom = new THREE.BoxGeometry(0.04, containerHeight + 0.04, containerDepth + 0.04);
    const ribMat = new THREE.MeshPhongMaterial({ color: 0x3b75c4 });

    for (let x = -containerWidth / 2 + 0.1; x < containerWidth / 2; x += 0.18) {
      const rib = new THREE.Mesh(ribGeom, ribMat);
      rib.position.set(x, 0, 0);
      containerGroup.add(rib);
    }

    // Door handles and latch bars (vertical cylinders on right end)
    const lockBarGeom = new THREE.CylinderGeometry(0.012, 0.012, containerHeight - 0.1, 8);
    const lockBarMat = new THREE.MeshPhongMaterial({ color: 0xcccccc });
    const lockBar1 = new THREE.Mesh(lockBarGeom, lockBarMat);
    lockBar1.position.set(containerWidth / 2 - 0.02, 0, 0.2);
    const lockBar2 = new THREE.Mesh(lockBarGeom, lockBarMat);
    lockBar2.position.set(containerWidth / 2 - 0.02, 0, -0.2);
    containerGroup.add(lockBar1);
    containerGroup.add(lockBar2);

    // Hotspot sensor indicators (glowing green spheres)
    const sensorGeom = new THREE.SphereGeometry(0.035, 16, 16);
    const sensorMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const sensor = new THREE.Mesh(sensorGeom, sensorMat);
    sensor.position.set(0, containerHeight / 2 + 0.04, 0);
    containerGroup.add(sensor);

    // Floor platform grid under container
    const grid = new THREE.GridHelper(5, 10, 0x1d3557, 0x111e38);
    grid.position.y = -containerHeight / 2 - 0.05;
    scene.add(grid);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0x00ffff, 0.85);
    sunLight.position.set(5, 8, 5);
    scene.add(sunLight);

    // Rotating interactive helper
    let targetRotationY = 0;
    let targetRotationX = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / width) * 2 - 1;
      const y = -((event.clientY - rect.top) / height) * 2 + 1;

      targetRotationY = x * 1.5;
      targetRotationX = y * 0.8;
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse lerping
      containerGroup.rotation.y += (targetRotationY - mouseX) * 0.05;
      containerGroup.rotation.x += (targetRotationX - mouseY) * 0.05;

      mouseX += (targetRotationY - mouseX) * 0.05;
      mouseY += (targetRotationX - mouseY) * 0.05;

      // Pulse sensor glow
      const time = Date.now() * 0.005;
      const scale = 1.0 + Math.sin(time) * 0.15;
      sensor.scale.set(scale, scale, scale);

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

    // Simulate real-time telemetry changes
    const interval = setInterval(() => {
      setTelemetry((prev) => {
        const currentTemp = parseFloat(prev.temp);
        const diff = (Math.random() - 0.5) * 0.4;
        const newTemp = (currentTemp + diff).toFixed(1);
        return {
          ...prev,
          temp: `${newTemp} °C`,
        };
      });
    }, 3000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
      renderer.dispose();
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-center gap-6 border rounded-xl p-5 bg-[#06091a]">
      {/* 3D Canvas side */}
      <div ref={containerRef} className="flex-1 w-full h-[320px] lg:h-[400px] cursor-grab active:cursor-grabbing" />

      {/* Telemetry info side */}
      <div className="w-full lg:w-80 space-y-4 text-white">
        <h3 className="font-bold text-lg border-b border-white/10 pb-2">Container Telemetry</h3>
        <div className="grid gap-3 text-sm">
          <div className="flex justify-between p-3 rounded bg-white/5 border border-white/10">
            <span className="text-white/60">Internal Temperature:</span>
            <span className="font-semibold text-primary">{telemetry.temp}</span>
          </div>
          <div className="flex justify-between p-3 rounded bg-white/5 border border-white/10">
            <span className="text-white/60">Internal Humidity:</span>
            <span className="font-semibold text-teal-400">{telemetry.humidity}</span>
          </div>
          <div className="flex justify-between p-3 rounded bg-white/5 border border-white/10">
            <span className="text-white/60">Gross Weight:</span>
            <span className="font-semibold text-amber-400">{telemetry.weight}</span>
          </div>
          <div className="flex flex-col p-3 rounded bg-white/5 border border-white/10 gap-1.5">
            <span className="text-white/60">Security Seal Status:</span>
            <span className="font-bold text-green-400 text-xs">{telemetry.seal}</span>
          </div>
        </div>
        <p className="text-[11px] text-white/40 leading-relaxed">
          * Telemetry indices are fetched dynamically from active container IoT beacons. Hover and drag above to rotate container.
        </p>
      </div>
    </div>
  );
}
