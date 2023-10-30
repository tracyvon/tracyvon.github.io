import { defineClientConfig } from "@vuepress/client";
import { onMounted, onUnmounted } from "vue";
import CanvasNest from "./CanvasNest.vue";

const useCanvasNest = () => {
  const config = {
    // color: "249,240,70",
    // pointColor: "249,240,70",
    opacity: 0.8,
    count: 100,
    zIndex: 10,
  };

  let cn;

  onMounted(() => {
    import("canvas-nest.js").then((module) => {
      // console.log(module);
      const CanvasNest = module.default;
      cn = new CanvasNest(document.body, config);
    });
  });

  onUnmounted(() => {
    cn && cn.destroy();
  });
};

export default defineClientConfig({
  setup() {
    // useCanvasNest();
  },
  rootComponents: [CanvasNest],
});
