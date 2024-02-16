<template>
  <v-dialog
    v-model="open"
    scrollable
    :eager="$props.eager"
    persistent
    :height="height"
    :width="modalWidth"
    :fullscreen="isMobile"
    :max-height="isMobile ? '100vh' : '90vh'"
    :transition="isMobile ? 'dialog-bottom-transition' : 'dialog-transition'"
  >
    <v-overlay
      :model-value="loading"
      contained
      class="align-center justify-center"
    >
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-card width="100%">
      <v-card-title>
        <div class="d-flex flex-row">
          <slot name="title">
            <span>{{ $props.title }}</span>
          </slot>
          <v-spacer></v-spacer>

          <div class="d-flex flex-row t-gap-2">
            <v-btn
              :text="$props.cancelButtonText"
              variant="outlined"
              color="secondary"
              @click="close"
            />
            <v-btn
              :disabled="!$props.isValid"
              :text="$props.okButtonText"
              color="secondary"
              variant="flat"
              @click="save"
            />
          </div>
        </div>
      </v-card-title>
      <v-card-text class="mb-3">
        <slot />
      </v-card-text>

      <!-- <v-card-actions>
        <slot name="foot" />
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
type ModalSize = "sm" | "md" | "lg" | "xl" | "full";
export default defineNuxtComponent({
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
    size: {
      type: String as PropType<ModalSize>,
      required: false,
      default: "lg",
    },
    title: {
      type: String,
      required: false,
      default: () => "",
    },
    isValid: {
      type: Boolean,
      required: false,
      default: () => true,
    },
    height: {
      type: String,
      required: false,
      default: () => "fit-content",
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    okButtonText: {
      type: String,
      required: false,
      default: () => "บันทึก",
    },
    cancelButtonText: {
      type: String,
      required: false,
      default: () => "ยกเลิก",
    },
    eager: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  emits: {
    close: null,
    save: null,
  },
  computed: {
    open() {
      return this.$props.active;
    },
    isMobile() {
      return this.$vuetify.display.mobile;
    },
    modalWidth() {
      const size = this.$vuetify.display.mobile ? "full" : this.$props.size;
      let width = "0";
      switch (size) {
        case "sm":
          width = "20vw";
          break;
        case "md":
          width = "40vw";
          break;
        case "lg":
          width = "60vw";
          break;
        case "xl":
          width = "80vw";
          break;
        case "full":
          width = "100vw";
          break;
        default:
          width = "50vw";
          break;
      }
      return width;
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      this.$emit("save");
    },
  },
});
</script>
