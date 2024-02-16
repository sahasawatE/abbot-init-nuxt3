<template>
  <v-app>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <div>
          <slot />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { useTheme } from "vuetify";

export default {
  name: "DefaultLayout",
  setup() {
    const theme = useTheme();

    theme.global.name.value = "light";
  },
};
</script>

<style></style>
