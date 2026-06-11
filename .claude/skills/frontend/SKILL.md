---
name: frontend
description: >
  Use this skill to build premium, production-quality 3D websites and interactive web experiences
  across any JavaScript framework. Triggers include: any request for a 3D hero section, WebGL
  scene, interactive product showcase, particle system, scroll-driven 3D animation, immersive
  landing page, Three.js scene, GLSL shader, GPU-accelerated canvas animation, or any site
  described as "premium", "immersive", "cinematic", or "next-gen". Also triggers when the user
  wants depth, parallax beyond CSS, or physically-based rendering in the browser — regardless of
  whether they are using React, Next.js, Vue, Nuxt, Svelte, SvelteKit, Astro, or plain HTML/JS.
  Do NOT use for standard 2D layouts, dashboards, or forms — use frontend-design instead unless
  3D is genuinely part of the brief.
---

# Premium 3D Website Skill

Approach this as the lead creative technologist at a boutique studio known for sites that make people stop scrolling and say "how did they do that." The work is technically precise and visually arresting — not gratuitously complex, but exactly as ambitious as the brief demands.

---

## Step 0: Identify the Framework

Before writing a single line, confirm which framework the project uses. This changes imports, lifecycle hooks, SSR handling, and asset loading. Ask if not stated.

| Framework | 3D Renderer | Animation | Scroll | Notes |
|---|---|---|---|---|
| **Vanilla HTML / JS** | Three.js (CDN) | GSAP CDN | Lenis CDN | Claude artifacts; no bundler |
| **React + Vite** | `@react-three/fiber` + `drei` | GSAP or `@react-spring/three` | Lenis | Preferred for component-heavy 3D UIs |
| **Next.js (App Router)** | R3F in `'use client'` component | GSAP | Lenis | `dynamic(..., { ssr: false })` for canvas |
| **Next.js (Pages Router)** | R3F via `dynamic` import | GSAP | Lenis | Same SSR guard, different import path |
| **Vue 3 + Vite** | Three.js in `onMounted` composable | GSAP | Lenis | No R3F; use raw Three.js or TresJS |
| **Nuxt 3** | Three.js in `<ClientOnly>` or plugin | GSAP | Lenis | `process.client` guard for window refs |
| **Svelte / SvelteKit** | Three.js in `onMount` | GSAP | Lenis | `import { onMount }` from 'svelte'; SSR guard |
| **Astro** | Three.js island with `client:only` | GSAP | Lenis | Astro components are static; 3D lives in framework islands |

---

## Core Library Stack

Always reason about which libraries are actually needed before importing anything.

| Layer | Library | When |
|---|---|---|
| 3D / WebGL | **Three.js r160+** | Universal — all frameworks except R3F |
| React 3D abstraction | **@react-three/fiber + @react-three/drei** | React and Next.js only |
| Vue 3D abstraction | **TresJS** | Vue 3 / Nuxt — optional but ergonomic |
| Shader authoring | **GLSL** (raw or `vite-plugin-glsl`) | Custom materials, distortion, noise |
| Animation | **GSAP 3 + ScrollTrigger** | All frameworks |
| Smooth scroll | **Lenis** | All frameworks; pairs with GSAP ticker |
| Physics (optional) | **Rapier (WASM)** | Rigid body sim, cloth, spring constraints |

---

## Framework-Specific Setup

---

### 1. Vanilla HTML / JS (Claude Artifacts, CDN)

Use for Claude artifacts, quick prototypes, or static pages with no bundler.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #050505; overflow: hidden; }
    canvas { display: block; }
  </style>
</head>
<body>
<canvas id="c"></canvas>
<script type="importmap">
{
  "imports": {
    "three": "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js"
  }
}
</script>
<script type="module">
import * as THREE from 'three';

const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 200);
camera.position.set(0, 1, 5);

const clock = new THREE.Clock();

window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
});

(function tick() {
  const delta = clock.getDelta();
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
})();
</script>
</body>
</html>
```

> Three.js **r128** is the version on cdnjs. Do NOT use newer version strings in importmaps — they won't resolve. In React artifacts, `three`, `@react-three/fiber`, and `@react-three/drei` are importable directly.

---

### 2. React + Vite

Install:
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm i three @react-three/fiber @react-three/drei gsap lenis
npm i -D vite-plugin-glsl  # for .glsl file imports
```

`vite.config.js`:
```javascript
import glsl from 'vite-plugin-glsl';
export default { plugins: [react(), glsl()] };
```

**Canvas component pattern** — isolate Three.js/R3F in its own component:
```jsx
// src/components/Scene.jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';

function Mesh() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.5;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 4]} />
      <meshStandardMaterial metalness={1} roughness={0.1} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}           // clamps pixel ratio 1–2×
      style={{ position: 'fixed', inset: 0 }}
    >
      <Environment preset="city" />
      <directionalLight position={[3, 5, 2]} intensity={3.5} color="#fff0d0" />
      <ambientLight intensity={0.15} />
      <Mesh />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
```

**R3F key rules:**
- Use `useFrame` for per-frame updates — never `requestAnimationFrame` inside R3F components.
- Access the raw renderer/scene via `useThree`: `const { gl, scene, camera } = useThree();`
- Use `<Suspense fallback={<Loader />}>` around anything that loads async assets.
- Dispose manually in `useEffect` cleanup for non-R3F-managed resources.
- Post-processing: `npm i @react-three/postprocessing`

```jsx
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
// Inside <Canvas>:
<EffectComposer>
  <Bloom luminanceThreshold={0.85} intensity={0.4} radius={0.6} />
  <Vignette eskil={false} offset={0.1} darkness={0.8} />
</EffectComposer>
```

---

### 3. Next.js — App Router (`app/`)

**Critical rule: WebGL only runs in the browser. Never let Three.js reach the server.**

```
app/
  page.tsx           ← server component — imports the scene dynamically
  components/
    Scene.tsx        ← 'use client' — all Three.js / R3F lives here
```

`app/page.tsx` (server component):
```tsx
import dynamic from 'next/dynamic';

// ssr: false prevents any Three.js code from running at build time
const Scene = dynamic(() => import('./components/Scene'), { ssr: false });

export default function Home() {
  return (
    <main>
      <Scene />
      <div className="content relative z-10">...</div>
    </main>
  );
}
```

`app/components/Scene.tsx` (client component):
```tsx
'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 45 }}
      dpr={[1, 2]}
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
    >
      <SpinningMesh />
    </Canvas>
  );
}

function SpinningMesh() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => { ref.current.rotation.y += delta * 0.5; });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.3, 200, 32]} />
      <meshStandardMaterial metalness={0.9} roughness={0.1} color="#4060ff" />
    </mesh>
  );
}
```

**GSAP + Lenis in Next.js App Router:**
```tsx
'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function ScrollScene() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  // ...
}
```

**Asset loading in Next.js:**
```tsx
// Use next/image for textures if they're in /public
// For GLB/GLTF models, place in /public/models/ and useGLTF('/models/model.glb')
import { useGLTF } from '@react-three/drei';
useGLTF.preload('/models/hero.glb');  // call outside component to prefetch
```

**`next.config.js` for GLSL:**
```javascript
const nextConfig = {
  webpack(config) {
    config.module.rules.push({ test: /\.(glsl|vert|frag)$/, use: 'raw-loader' });
    return config;
  },
};
```

---

### 4. Next.js — Pages Router (`pages/`)

Same SSR rule applies, slightly different dynamic import syntax:

```tsx
// pages/index.tsx
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('../components/Scene'), { ssr: false });
```

Everything else (canvas component, GSAP, Lenis) is identical to App Router above.

---

### 5. Vue 3 + Vite

Install:
```bash
npm create vite@latest my-app -- --template vue
cd my-app
npm i three gsap lenis
npm i -D vite-plugin-glsl
```

**Composable pattern** — encapsulate the entire Three.js scene in a composable:

```javascript
// src/composables/useThreeScene.js
import * as THREE from 'three';
import { onMounted, onBeforeUnmount, ref } from 'vue';

export function useThreeScene(canvasRef) {
  let renderer, scene, camera, clock, raf;

  function init() {
    const canvas = canvasRef.value;
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 200);
    camera.position.set(0, 1, 5);
    clock = new THREE.Clock();

    // Add lights, meshes, etc. here
    tick();
  }

  function tick() {
    const delta = clock.getDelta();
    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  }

  function onResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  }

  onMounted(() => {
    init();
    window.addEventListener('resize', onResize);
  });

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf);
    renderer.dispose();
    window.removeEventListener('resize', onResize);
  });

  return { scene, camera, renderer };
}
```

**Vue SFC component:**
```vue
<!-- src/components/Scene.vue -->
<template>
  <canvas ref="canvasRef" class="fixed inset-0 w-full h-full" />
</template>

<script setup>
import { ref } from 'vue';
import { useThreeScene } from '@/composables/useThreeScene';

const canvasRef = ref(null);
useThreeScene(canvasRef);
</script>
```

**TresJS (optional — Vue equivalent of R3F):**
```bash
npm i @tresjs/core @tresjs/cientos
```
```vue
<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera :position="[0, 1, 5]" />
    <TresMesh>
      <TresTorusKnotGeometry :args="[1, 0.3, 200, 32]" />
      <TresMeshStandardMaterial color="#4060ff" :metalness="0.9" :roughness="0.1" />
    </TresMesh>
    <TresDirectionalLight :position="[3, 5, 2]" :intensity="3.5" />
  </TresCanvas>
</template>
<script setup>
import { TresCanvas } from '@tresjs/core';
import { TresMesh, TresPerspectiveCamera, TresDirectionalLight,
         TresTorusKnotGeometry, TresMeshStandardMaterial } from '@tresjs/core';
</script>
```

---

### 6. Nuxt 3

Install:
```bash
npx nuxi init my-app
cd my-app
npm i three gsap lenis @tresjs/nuxt
```

`nuxt.config.ts`:
```typescript
export default defineNuxtConfig({
  modules: ['@tresjs/nuxt'],
});
```

**Critical rule: Nuxt renders on the server by default. Wrap any canvas in `<ClientOnly>`.**

```vue
<!-- pages/index.vue -->
<template>
  <div>
    <ClientOnly>
      <Scene />
      <template #fallback>
        <div class="scene-placeholder" />  <!-- static poster while JS loads -->
      </template>
    </ClientOnly>
    <div class="content">...</div>
  </div>
</template>
<script setup>
import Scene from '~/components/Scene.vue';
</script>
```

**Composable with `process.client` guard:**
```javascript
// composables/useThreeScene.js
export function useThreeScene(canvasRef) {
  if (!process.client) return {};   // bail on server
  // ... same onMounted/onBeforeUnmount pattern as Vue 3 above
}
```

**Or use a Nuxt plugin:**
```typescript
// plugins/three.client.ts  ← .client suffix = browser only
export default defineNuxtPlugin(() => {
  // Safe to use window, document, THREE here
});
```

---

### 7. Svelte / SvelteKit

Install:
```bash
npm create svelte@latest my-app
cd my-app
npm i three gsap lenis
npm i -D vite-plugin-glsl
```

`vite.config.js`:
```javascript
import { sveltekit } from '@sveltejs/kit/vite';
import glsl from 'vite-plugin-glsl';
export default { plugins: [sveltekit(), glsl()] };
```

**Svelte component — `onMount` is the SSR guard:**
```svelte
<!-- src/lib/components/Scene.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';

  let canvas;
  let renderer, scene, camera, clock, raf;

  onMount(() => {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 200);
    camera.position.set(0, 1, 5);
    clock = new THREE.Clock();

    window.addEventListener('resize', onResize);
    tick();

    // onMount can return a cleanup function
    return () => {
      cancelAnimationFrame(raf);
      renderer.dispose();
      window.removeEventListener('resize', onResize);
    };
  });

  function tick() {
    const delta = clock.getDelta();
    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  }

  function onResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  }
</script>

<canvas bind:this={canvas} style="position:fixed;inset:0;width:100%;height:100%" />
```

**SvelteKit page using the scene:**
```svelte
<!-- src/routes/+page.svelte -->
<script>
  import Scene from '$lib/components/Scene.svelte';
</script>

<Scene />
<main class="relative z-10">...</main>
```

**Svelte stores for reactive 3D state:**
```javascript
// src/lib/stores/sceneStore.js
import { writable } from 'svelte/store';
export const scrollProgress = writable(0);  // 0→1; drive from Lenis
```

---

### 8. Astro

Install:
```bash
npm create astro@latest my-app
cd my-app
npx astro add react   # or vue, svelte — for the 3D island
npm i three @react-three/fiber @react-three/drei gsap lenis
```

**Key concept: Astro pages are static HTML. 3D lives in a framework island with `client:only`.**

```astro
---
// src/pages/index.astro
import Scene from '../components/Scene.jsx';   // React component
---
<html>
  <body>
    <!--
      client:only="react" — ships zero JS for this component until hydration.
      client:load — hydrates immediately on page load (use for above-fold 3D).
      client:visible — hydrates when scrolled into view (use for 3D sections below fold).
    -->
    <Scene client:only="react" />

    <main class="relative z-10">
      <h1>Hello World</h1>
    </main>
  </body>
</html>
```

`src/components/Scene.jsx` — identical to the React + Vite canvas component above.

**Passing props from Astro to the 3D island:**
```astro
<Scene client:only="react" color="#4060ff" intensity={2.5} />
```
```jsx
// Scene.jsx
export default function Scene({ color = '#ffffff', intensity = 1 }) { ... }
```

**Astro + Vue island:**
```astro
import VueScene from '../components/Scene.vue';
<VueScene client:only="vue" />
```

**Astro + Svelte island:**
```astro
import SvelteScene from '../components/Scene.svelte';
<SvelteScene client:only="svelte" />
```

---

## GLSL Shader Imports (All Bundled Frameworks)

With `vite-plugin-glsl` installed, import shaders as strings:

```javascript
// vertex.glsl and fragment.glsl are separate files
import vertexShader   from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

const mat = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms: { ... } });
```

In **Next.js** use `raw-loader` instead (see Next.js section above).
In **Vanilla HTML**, inline shaders as template literals — no file imports.

---

## Shared Patterns (Framework-Agnostic)

The following sections apply identically regardless of framework. Adapt lifecycle calls (useEffect / onMounted / onMount) as appropriate.

---

### Scene Architecture

```javascript
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap at 2× — never 3×+
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
renderer.outputColorSpace = THREE.SRGBColorSpace;   // r152+; use outputEncoding on r128
```

### Lighting (3-Point Setup)

```javascript
const key  = new THREE.DirectionalLight(0xfff0d0, 3.5);  key.position.set(3, 5, 2);   scene.add(key);
const fill = new THREE.DirectionalLight(0xc8d8ff, 0.8);  fill.position.set(-4, 2, -1); scene.add(fill);
const rim  = new THREE.DirectionalLight(0xffffff, 1.2);  rim.position.set(0, -2, -5);  scene.add(rim);
scene.add(new THREE.AmbientLight(0xffffff, 0.15));
// Environment map for PBR realism:
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new THREE.RoomEnvironment()).texture;
```

Rules: ambient ≤ 0.3, warm key + cool fill, HDRI env for any MeshStandard/Physical material.

### Materials

| Use case | Material |
|---|---|
| Realistic | `MeshStandardMaterial` (roughness + metalness) |
| Glass / clearcoat | `MeshPhysicalMaterial` (transmission, ior) |
| Unlit / stylised | `MeshBasicMaterial` |
| Custom | `ShaderMaterial` / `RawShaderMaterial` |
| Toon | `MeshToonMaterial` + `gradientMap` |

### Scroll Animation

```javascript
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);

gsap.timeline({
  scrollTrigger: { trigger: '#wrapper', start: 'top top', end: 'bottom bottom', scrub: 1.5 }
})
.to(camera.position, { z: -2, x: 1.5 }, 0)
.to(meshGroup.rotation, { y: Math.PI }, 0.5);
```

Always lerp in the render loop; never set positions directly:
```javascript
camera.position.lerp(targetPos, delta * 5);
camera.quaternion.slerp(targetQuat, delta * 5);
```

### Particle Systems

```javascript
const count = 8000;
const pos = new Float32Array(count * 3).map(() => (Math.random() - 0.5) * 20);
const geo = new THREE.BufferGeometry();
geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
const mat = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 0 } },
  vertexShader: `uniform float uTime; void main() {
    vec3 p = position;
    p.y += sin(uTime * 0.3 + position.x * 2.0) * 0.3;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = 3.0 * (1.0 / -gl_Position.z);
  }`,
  fragmentShader: `void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    if (d > 0.5) discard;
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0 - d * 2.0);
  }`,
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
});
scene.add(new THREE.Points(geo, mat));
// tick: mat.uniforms.uTime.value = clock.getElapsedTime();
```

### GLSL Utilities

```glsl
float fresnel = pow(1.0 - dot(vNormal, vViewDir), 3.0);   // rim glow
vec2 uv = gl_FragCoord.xy / uResolution.xy;                // screen UV
float remap(float v, float a, float b, float c, float d) { return c + (v-a)/(b-a)*(d-c); }
```

### Post-Processing

```javascript
import { EffectComposer }  from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass }      from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(w, h), 0.4, 0.6, 0.85));
// tick: composer.render() instead of renderer.render()
```

R3F equivalent: `@react-three/postprocessing` with `<EffectComposer><Bloom /><Vignette /></EffectComposer>`.

### Mouse Interaction

```javascript
const pointer = new THREE.Vector2();
window.addEventListener('mousemove', (e) => {
  pointer.x =  (e.clientX / innerWidth)  * 2 - 1;
  pointer.y = -(e.clientY / innerHeight) * 2 + 1;
});
// tick: smooth parallax
camera.position.x += (pointer.x * 0.5 - camera.position.x) * 0.05;
camera.position.y += (pointer.y * 0.3 - camera.position.y) * 0.05;
camera.lookAt(scene.position);
```

### Model Loading (GLTF/GLB)

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
const draco = new DRACOLoader();
draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
const loader = new GLTFLoader();
loader.setDRACOLoader(draco);
loader.load('/models/hero.glb', ({ scene: model }) => scene.add(model));
```

R3F: `const { scene } = useGLTF('/models/hero.glb');`
Vue/TresJS: `<TresGLTFModel path="/models/hero.glb" />`

---

## Performance Budget

| Device | Target FPS | Max triangles | Max draw calls | Texture budget |
|---|---|---|---|---|
| High-end desktop | 60 | 1–2M | 100 | 512 MB |
| Mid laptop / tablet | 60 | 300K | 50 | 128 MB |
| Mobile | 30–60 | 100K | 30 | 64 MB |

Rules: merge static geometry, use `InstancedMesh` for repeated objects, KTX2 compressed textures, never `new THREE.Vector3()` in the render loop, always dispose on unmount.

```javascript
const isMobile = /Mobi|Android/i.test(navigator.userAgent) || innerWidth < 768;
// Branch: fewer particles, no shadow maps, skip post-processing on mobile
```

---

## Aesthetic Principles

**Depth over flatness.** Fog, DOF, and scale create spatial layers — not just small/large objects.

**Motion has weight.** Use GSAP easing (`power3.inOut`, `elastic.out`). Lerp/slerp everything — never teleport.

**Restraint in geometry.** One hero mesh executed perfectly beats ten competing for attention.

**Emissive for magic.** Emissive colour + bloom = futuristic with zero extra geometry.

**Dark backgrounds for 3D.** Light backgrounds require much more careful lighting. Default dark unless the brief demands otherwise.

---

## Common Premium Patterns

**Morphing geometry:**
```javascript
geo.morphAttributes.position = [targetPositions];
gsap.to(mesh.morphTargetInfluences, { 0: 1, duration: 1.5, ease: 'power3.inOut' });
```

**Image plane distortion shader:**
```glsl
uniform sampler2D uTexture; uniform float uTime; varying vec2 vUv;
void main() {
  vec2 uv = vUv;
  uv.y += sin(uv.x * 8.0 + uTime) * 0.015;
  uv.x += cos(uv.y * 6.0 + uTime * 0.7) * 0.010;
  gl_FragColor = texture2D(uTexture, uv);
}
```

**Project 3D → screen space for DOM labels:**
```javascript
const v = mesh.position.clone().project(camera);
label.style.transform = `translate(${(v.x*.5+.5)*innerWidth}px,${(v.y*-.5+.5)*innerHeight}px)`;
```

---

## Checklist Before Delivery

**Universal**
- [ ] Pixel ratio capped at 2
- [ ] Resize handler updates camera + renderer
- [ ] Render loop uses `clock.getDelta()` not elapsed time
- [ ] `prefers-reduced-motion` respected — kill animations if set
- [ ] Mobile fallback: simpler scene or static poster under 768px
- [ ] No `new THREE.X()` allocations inside the render loop
- [ ] Canvas z-index layered correctly under HTML content
- [ ] Loading screen with fade-in reveal for heavy asset loads
- [ ] Tested in Chrome, Firefox, Safari (WebGL differs on iOS)

**React / R3F**
- [ ] Canvas component wrapped in `<Suspense>`
- [ ] `useEffect` cleanup disposes non-R3F-managed resources
- [ ] Post-processing via `@react-three/postprocessing`, not manual EffectComposer

**Next.js**
- [ ] Canvas imported via `dynamic(..., { ssr: false })`
- [ ] Canvas component has `'use client'` directive (App Router)
- [ ] `useGLTF.preload()` called at module level for key models
- [ ] GSAP and Lenis initialised and destroyed in `useEffect`

**Vue / Nuxt**
- [ ] Three.js initialised only inside `onMounted`
- [ ] `cancelAnimationFrame` + `renderer.dispose()` in `onBeforeUnmount`
- [ ] Nuxt: canvas wrapped in `<ClientOnly>`
- [ ] No `window`/`document` references at module scope

**Svelte / SvelteKit**
- [ ] All Three.js in `onMount` — not top-level script
- [ ] Cleanup returned from `onMount` (auto-called on destroy)
- [ ] `bind:this={canvas}` used instead of `document.getElementById`

**Astro**
- [ ] 3D component uses `client:only="<framework>"`
- [ ] Above-fold 3D uses `client:load`; below-fold uses `client:visible`
- [ ] Static `<noscript>` / poster image fallback provided