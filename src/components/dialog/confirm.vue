<template>
  <v-card width="400" class="t-drop-shadow-xl">
    <v-card-text class="d-flex flex-column align-center">
      <v-icon size="100" color="warning">
        <i class="ph ph-warning-circle"></i>
      </v-icon>
      <span class="text-h5 my-3">{{ $props.title }}</span>
      <span class="text-body-1 text-grey-darken-1">
        {{ $props.details }}
      </span>
    </v-card-text>
    <v-card-actions class="t-pointer-events-auto">
      <v-spacer></v-spacer>
      <v-btn
        v-if="!confirmOnly"
        variant="text"
        color="error"
        @click="handleClickCancel"
      >
        {{ $props.cancelText }}
      </v-btn>
      <v-btn variant="text" color="primary" @click="handleClickConfirm">
        {{ $props.confirmText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { popModal } from "jenesius-vue-modal";
export default defineNuxtComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    cancelText: {
      type: String,
      required: true,
    },
    confirmText: {
      type: String,
      required: true,
    },
    confirmOnly: {
      type: Boolean,
      required: false,
    },
    onCancel: {
      type: Function,
      required: true,
    },
    onConfirm: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClickCancel() {
      this.$props.onCancel();
    },
    handleClickConfirm() {
      this.$props.onConfirm();
      popModal();
    },
  },
});
</script>
