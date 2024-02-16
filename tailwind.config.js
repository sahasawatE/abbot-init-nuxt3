/** @type {import('tailwindcss').Config} */
export default {
  prefix: "t-",
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
    // "./src/sts-modules/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
