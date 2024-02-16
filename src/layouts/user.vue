<template>
  <v-app>
    <client-only>
      <v-sonner position="top-right" />
    </client-only>

    <v-overlay
      persistent
      :model-value="loading"
      class="align-center justify-center t-bg-slate-300/20"
    >
      <div class="d-flex flex-column align-center t-gap-8">
        <v-progress-circular
          color="primary"
          indeterminate
          :size="56"
        ></v-progress-circular>

        <v-btn
          v-show="show_cancel_loading"
          color="error"
          @click="handleCancelLoading"
        >
          ปิด
        </v-btn>
      </div>
    </v-overlay>

    <user-drawer :drawer="drawer" />
    <user-app-bar @click-drawer="drawer = !drawer" />
    <v-main>
      <v-container fluid>
        <v-breadcrumbs :items="$store.ui.getBreadcrumbs"></v-breadcrumbs>
        <v-card>
          <v-card-text>
            <slot />
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>

    <widget-container-modal />
  </v-app>
</template>

<script lang="ts">
import { useTheme } from "vuetify";
import { VSonner } from "vuetify-sonner";
import "vuetify-sonner/style.css";
import { container } from "jenesius-vue-modal";

import drawer from "./user-elm/drawer.vue";
import appbar from "./user-elm/appbar.vue";
export default {
  name: "UserLayout",
  components: {
    UserDrawer: drawer,
    UserAppBar: appbar,
    VSonner,
    WidgetContainerModal: container,
  },
  setup() {
    const theme = useTheme();

    theme.global.name.value = "light";

    const drawer = ref(true);
    const show_cancel_loading = ref(false);
    const timeout_id = ref<any>(null);

    return {
      drawer,
      show_cancel_loading,
      timeout_id,
    };
  },
  computed: {
    loading() {
      const l = this.$store.ui.getLoading;

      if (l) {
        this.timeout();
      } else {
        clearTimeout(this.timeout_id);
      }

      return l;
    },
  },
  methods: {
    handleCancelLoading() {
      this.$store.ui.setLoading(false);
      this.show_cancel_loading = false;
    },
    timeout() {
      this.timeout_id = setTimeout(() => {
        this.show_cancel_loading = true;
      }, 3000);
    },
  },
};
</script>

<style></style>
