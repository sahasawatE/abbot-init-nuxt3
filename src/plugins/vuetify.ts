import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";

const guest = {
  dark: false,
  colors: {
    surface: "#123661",
    background: "#164176",
    "surface-bright": "#123661",
    "surface-light": "#123661",
    "surface-variant": "#123661",
    "on-surface-variant": "#123661",
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
        rounded: true,
        // rounded: "lg",
      },
      VTextField: {
        variant: "underlined",
        color: "primary",
      },
      VDivider: {
        thickness: "1",
        class: ["border-opacity-100"],
      },
    },
  });
  app.vueApp.use(vuetify);
});
