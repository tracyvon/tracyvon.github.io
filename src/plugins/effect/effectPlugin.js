import { onMounted, defineComponent, h } from "vue";
import { Popper, PopperShape } from "@moefy-canvas/theme-popper";
import { Sakura } from "@moefy-canvas/theme-sakura";
import { defineClientConfig } from "@vuepress/client";

const popperConfig = {
  shape: PopperShape.Star,
  size: 1.75,
  numParticles: 10,
};

const sakuraConfig = {
  numPatels: 30,
};

const canvasOptions = {
  opacity: 1,
  zIndex: 5,
};

const Effect = defineComponent({
  name: "Effect",
  setup() {
    onMounted(() => {
      const el1 = document.getElementById("moefy-canvas1");
      const popper = new Popper(popperConfig, canvasOptions);
      // @ts-ignore
      popper.mount(el1);

      const el2 = document.getElementById("moefy-canvas2");
      const sakura = new Sakura(sakuraConfig, canvasOptions);
      // @ts-ignore
      sakura.mount(el2);
    });
    const el1 = h("canvas", { id: "moefy-canvas1" });
    const el2 = h("canvas", { id: "moefy-canvas2" });
    return () => h("div", [el1, el2]);
  },
});

export default defineClientConfig({
  rootComponents: [Effect],
});
