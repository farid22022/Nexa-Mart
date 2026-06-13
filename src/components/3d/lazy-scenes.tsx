"use client";

import dynamic from "next/dynamic";

const fallback = <div className="h-full w-full bg-muted/20 rounded-xl animate-pulse-slow" />;

export const LazyHero3DScene = dynamic(
  () => import("./Hero3DScene").then((m) => m.Hero3DScene),
  { ssr: false }
);

export const LazyLogisticsWorld = dynamic(
  () => import("./LogisticsWorld").then((m) => m.LogisticsWorld),
  { ssr: false, loading: () => fallback }
);

export const LazySmartWarehouseScene = dynamic(
  () => import("./SmartWarehouseScene").then((m) => m.SmartWarehouseScene),
  { ssr: false, loading: () => fallback }
);

export const LazyPortScene = dynamic(
  () => import("./PortScene").then((m) => m.PortScene),
  { ssr: false, loading: () => fallback }
);

export const LazyAirportScene = dynamic(
  () => import("./AirportScene").then((m) => m.AirportScene),
  { ssr: false, loading: () => fallback }
);

export const LazyRailScene = dynamic(
  () => import("./RailScene").then((m) => m.RailScene),
  { ssr: false, loading: () => fallback }
);

export const LazyFleetScene = dynamic(
  () => import("./FleetScene").then((m) => m.FleetScene),
  { ssr: false, loading: () => fallback }
);

export const LazyContainerScene = dynamic(
  () => import("./ContainerScene").then((m) => m.ContainerScene),
  { ssr: false, loading: () => fallback }
);
