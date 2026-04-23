<!-- Grain.svelte -->
<svg class="grain" xmlns="http://www.w3.org/2000/svg">
  <filter id="grain-filter">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
    <feColorMatrix type="saturate" values="0" />
  </filter>
  <rect width="100%" height="100%" filter="url(#grain-filter)" />
</svg>

<style>
  .grain {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.08;
    mix-blend-mode: overlay;
  }
</style>