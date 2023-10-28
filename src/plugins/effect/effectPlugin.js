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
      const el = document.getElementById("moefy-canvas");
      const popper = new Popper(popperConfig, canvasOptions);
      // @ts-ignore
      popper.mount(el);

      const sakura = new Sakura(sakuraConfig, canvasOptions);
      // @ts-ignore
      sakura.mount(el);
    });
    const el = h("canvas", { id: "moefy-canvas" });
    return () => el;
  },
});

export default defineClientConfig({
  rootComponents: [Effect],
});
