"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ShippingAnimation() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const sequence = [
      { duration: 3000, scene: 0 }, // Building
      { duration: 4000, scene: 1 }, // Drone to truck
      { duration: 4000, scene: 2 }, // Drone to ship
    ];

    let currentScene = 0;
    const timers: NodeJS.Timeout[] = [];

    const scheduleScenes = () => {
      let time = 0;
      sequence.forEach((item, index) => {
        timers.push(
          setTimeout(() => {
            setActiveScene(item.scene);
          }, time)
        );
        time += item.duration;
      });

      // Loop animation
      timers.push(
        setTimeout(() => {
          setActiveScene(0);
          scheduleScenes();
        }, time)
      );
    };

    scheduleScenes();

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      {/* Building Scene */}
      {activeScene === 0 && <BuildingScene />}

      {/* Drone to Truck Scene */}
      {activeScene === 1 && <DroneToTruckScene />}

      {/* Drone to Ship Scene */}
      {activeScene === 2 && <DroneToShipScene />}
    </div>
  );
}

function BuildingScene() {
  return (
    <motion.div
      className="flex h-full w-full items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative h-96 w-80">
        {/* Building shadow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent blur-2xl"
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Building structure */}
        <motion.div
          className="relative h-full w-full"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main building body */}
          <div className="absolute bottom-0 h-80 w-full bg-gradient-to-b from-blue-600 to-blue-800 rounded-t-3xl shadow-2xl">
            {/* Windows grid */}
            <div className="grid grid-cols-4 gap-3 p-6">
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-lg bg-yellow-300 shadow-md"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.08,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>

            {/* Building base */}
            <div className="absolute bottom-0 h-16 w-full bg-gradient-to-b from-blue-900 to-slate-900">
              {/* Entrance doors */}
              <div className="flex gap-4 justify-center items-end h-full pb-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-12 bg-slate-700 rounded-t-lg shadow-md border-2 border-slate-600"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Roof antenna */}
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-2 h-16 bg-red-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Flag on top */}
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 ml-8"
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-12 h-8 bg-blue-400 rounded-r-lg shadow-lg" />
          </motion.div>
        </motion.div>
      </div>

      {/* Company name label */}
      <motion.div
        className="absolute bottom-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="text-xl font-bold text-slate-800 dark:text-slate-200">
          Nexa Mart Warehouse
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Where it all begins
        </p>
      </motion.div>
    </motion.div>
  );
}

function DroneToTruckScene() {
  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-200 to-emerald-100 dark:from-blue-900 dark:via-blue-800 dark:to-slate-700" />

      {/* Clouds */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-12 bg-white/80 rounded-full blur-lg dark:bg-slate-600/40"
          style={{ top: `${20 + i * 25}%` }}
          animate={{ x: [0, 100, 0] }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative w-full h-full flex items-center justify-center">
        {/* Drone */}
        <motion.div
          className="absolute flex flex-col items-center"
          initial={{ x: -300, y: -200, opacity: 0 }}
          animate={{
            x: [-300, 0, 200],
            y: [-200, 0, 100],
            opacity: 1,
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          {/* Drone body */}
          <div className="relative w-12 h-12 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center dark:bg-slate-800">
            {/* Camera */}
            <div className="w-2 h-2 bg-red-500 rounded-full absolute bottom-2" />
            {/* Propellers */}
            {[
              "top-0 left-0",
              "top-0 right-0",
              "bottom-0 left-0",
              "bottom-0 right-0",
            ].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full origin-center ${pos}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>

          {/* Drone shadow */}
          <div className="absolute top-16 w-16 h-2 bg-black/10 rounded-full blur-lg" />
        </motion.div>

        {/* Truck path */}
        <motion.div
          className="absolute bottom-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        >
          {/* Truck */}
          <motion.div
            className="relative w-48 h-20 bg-gradient-to-b from-red-500 to-red-700 rounded-xl shadow-2xl flex items-center justify-between px-4"
            animate={{ x: [0, 60, 0] }}
            transition={{ duration: 3, ease: "easeInOut", delay: 2.5 }}
          >
            {/* Cabin */}
            <div className="w-16 h-20 bg-gradient-to-b from-red-400 to-red-600 rounded-lg shadow-lg flex items-center justify-center">
              <div className="w-8 h-10 bg-blue-300 rounded-sm" />
            </div>

            {/* Cargo box */}
            <div className="flex-1 h-full bg-red-600 rounded-r-lg border-2 border-red-700" />

            {/* Wheels */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-700"
                style={{ left: `${20 + i * 50}px` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </motion.div>

          {/* Road */}
          <div className="mt-4 w-96 h-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full shadow-lg opacity-50" />
        </motion.div>
      </div>

      {/* Label */}
      <motion.div
        className="absolute bottom-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="text-lg font-bold text-slate-800 dark:text-slate-200">
          Ground Delivery
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Fast truck logistics network
        </p>
      </motion.div>
    </motion.div>
  );
}

function DroneToShipScene() {
  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-600 dark:from-blue-900 dark:via-slate-800 dark:to-slate-900" />

      {/* Sun reflection */}
      <motion.div
        className="absolute top-12 right-20 w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-30"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Ocean waves */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-blue-700/40 opacity-60"
          style={{
            clipPath: `polygon(0% 100%, 0% ${50 + i * 10}%, 100% ${40 + i * 10}%, 100% 100%)`,
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative w-full h-full flex items-center justify-center">
        {/* Drone */}
        <motion.div
          className="absolute flex flex-col items-center"
          initial={{ x: -300, y: -200, opacity: 0 }}
          animate={{
            x: [-300, 0, 150],
            y: [-200, -50, 50],
            opacity: 1,
            rotate: [0, 8, 0, -8, 0],
          }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          <div className="relative w-12 h-12 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center dark:bg-slate-800">
            <div className="w-2 h-2 bg-red-500 rounded-full absolute bottom-2" />
            {[
              "top-0 left-0",
              "top-0 right-0",
              "bottom-0 left-0",
              "bottom-0 right-0",
            ].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full origin-center ${pos}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>
          <div className="absolute top-16 w-16 h-2 bg-black/10 rounded-full blur-lg" />
        </motion.div>

        {/* Ship */}
        <motion.div
          className="absolute bottom-32 flex flex-col items-center"
          initial={{ opacity: 0, y: 100, x: -200 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-56 h-32"
            animate={{ x: [0, 40, 0] }}
            transition={{ duration: 3, ease: "easeInOut", delay: 2.5 }}
          >
            {/* Ship hull */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-blue-900 to-blue-950 rounded-b-3xl shadow-2xl border-4 border-slate-700">
              {/* Cargo containers */}
              <div className="flex gap-2 justify-center items-end h-full pb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-14 bg-orange-500 rounded-lg shadow-lg border border-orange-600"
                  />
                ))}
              </div>
            </div>

            {/* Cabin/Wheelhouse */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-20 h-16 bg-white rounded-lg shadow-lg border-2 border-gray-400 dark:bg-slate-700 dark:border-slate-600 flex items-center justify-center">
              <div className="w-8 h-10 bg-blue-400 rounded-sm" />
            </div>

            {/* Smokestack/Funnel */}
            <motion.div
              className="absolute bottom-32 left-1/2 -translate-x-1/2 w-4 h-12 bg-gray-700 rounded-full shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Smoke puffs */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute bottom-44 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-400 rounded-full opacity-60"
                animate={{
                  y: [-40 - i * 15, -100 - i * 15],
                  x: [-10 + i * 5, 10 + i * 5],
                  opacity: [0.6, 0],
                  scale: [1, 1.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Flag */}
            <motion.div
              className="absolute -top-2 right-4 w-12 h-6 bg-red-500 shadow-lg"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Water waves effect */}
          <div className="absolute bottom-0 w-72 h-8 bg-gradient-to-t from-blue-700/60 to-transparent" />
        </motion.div>
      </div>

      {/* Label */}
      <motion.div
        className="absolute bottom-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="text-lg font-bold text-white drop-shadow-lg">
          Global Maritime
        </p>
        <p className="text-sm text-white/80 drop-shadow-lg">
          Worldwide ocean shipping
        </p>
      </motion.div>
    </motion.div>
  );
}
