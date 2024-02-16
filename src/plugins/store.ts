import { uiStore } from "~/stores/ui";
import { mainStore } from "~/stores/index";

export default defineNuxtPlugin(() => {
  const ui = uiStore();
  const main = mainStore();
  return {
    provide: {
      store: {
        ...main,
        ui,
      },
    },
  };
});
