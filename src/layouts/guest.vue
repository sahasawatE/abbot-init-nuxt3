<template>
  <v-app>
    <v-app-bar title="Application name" color="primary">
      <template #append>
        <div class="d-flex flex-row align-center t-gap-4">
          <v-btn text="TH" variant="tonal" rounded size="small">
            <template #prepend>
              <v-icon>
                <i class="ph ph-translate"></i>
              </v-icon>
            </template>
          </v-btn>
          <div class="d-flex flex-row t-gap-2">
            <v-btn text="สมัครสมาชิก" variant="tonal"></v-btn>
            <v-btn
              text="เข้าสู่ระบบ"
              color="secondary"
              variant="flat"
              to="/login"
            ></v-btn>
          </div>
        </div>
      </template>
    </v-app-bar>
    <v-main>
      <v-container class="t-min-h-[80vh]">
        <slot />
      </v-container>
    </v-main>
    <v-footer color="background">Copyright © {{ footerYear }}</v-footer>
  </v-app>
</template>

<script lang="ts">
import moment from "moment";
import { useTheme } from "vuetify";

export default {
  name: "GuestLayout",
  setup() {
    const theme = useTheme();

    theme.global.name.value = "guest";
  },
  computed: {
    footerYear() {
      return moment().get("year");
    },
  },
};
</script>

<style></style>
