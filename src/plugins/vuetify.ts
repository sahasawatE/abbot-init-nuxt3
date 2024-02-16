import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";

const guest = {
  dark: false,
  colors: {
    surface: "#046B5C",
    background: "#045E4D",
    "surface-bright": "#FFFFFF",
    "surface-light": "#FFFFFF",
    "surface-variant": "#FFFFFF",
    "on-surface-variant": "#FFFFFF",
    primary: "#046B5C",
    "primary-darken-1": "#046B5C",
    secondary: "#C49A6C",
    "secondary-darken-1": "#9E7C57",
    error: "#D64242",
    info: "#0AA1F5",
    success: "#34C25C",
    warning: "#FFAF24",
  },
};

const light = {
  dark: false,
  colors: {
    background: "#EFF5F2",
    surface: "#FFFFFF",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242",
    "on-surface-variant": "#EEEEEE",
    primary: "#046B5C",
    "primary-darken-1": "#046B5C",
    secondary: "#C49A6C",
    "secondary-darken-1": "#9E7C57",
    error: "#D64242",
    info: "#0AA1F5",
    success: "#34C25C",
    warning: "#FFAF24",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    blueprint: md3,
    ssr: true,
    theme: {
      defaultTheme: "light",
      themes: {
        light,
        guest,
      },
    },
    defaults: {
      VCard: {
        flat: true,
        color: "white",
        rounded: "xl",
      },
      VBtn: {
        variant: "flat",
        rounded: "lg",
      },
      VTextField: {
        variant: "underlined",
        color: "primary",
        hideDetails: true,
        hideSpinButtons: true,
      },
      VDivider: {
        thickness: "1",
        class: ["border-opacity-100"],
      },
    },
  });
  app.vueApp.use(vuetify);
});
