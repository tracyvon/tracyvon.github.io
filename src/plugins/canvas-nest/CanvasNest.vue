<template>
  <ClientOnly></ClientOnly>
</template>

<script setup>
import CanvasNest from "canvas-nest.js";
import { onMounted, onUnmounted } from "vue";

const config = {
  opacity: 0.8,
  count: 120,
  zIndex: 10,
};

let cn;

onMounted(() => {
  cn = new CanvasNest(document.body, config);
});

onUnmounted(() => {
  cn && cn.destroy();
});
</script>

<style>
#canvasNext {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -2;
  opacity: 0.7;
}
</style>
