<template>
  <v-app>
    <v-app-bar>
      <template #prepend>
        <div class="t-cursor-pointer" @click="handleClickLogo">
          <v-img
            src="/images/logo.png"
            width="80"
            class="t-pointer-events-none"
          ></v-img>
        </div>
      </template>
      <template #append>
        <div class="d-flex flex-row t-gap-2">
          <v-btn text="สมัครสมาชิก"></v-btn>
          <v-btn color="secondary" text="เข้าสู่ระบบ" variant="flat"></v-btn>
        </div>
      </template>
    </v-app-bar>
    <v-main>
      <v-container class="t-h-full">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { useTheme } from "vuetify";

export default {
  name: "GuestLayout",
  setup() {
    const theme = useTheme();

    theme.global.name.value = "guest";
  },
  methods: {
    handleClickLogo() {
      console.log("logo");
    },
  },
};
</script>

<style></style>
