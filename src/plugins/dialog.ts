import { pushModal, popModal } from "jenesius-vue-modal";
import { toast } from "vuetify-sonner";
import confirmDialog from "~/components/dialog/confirm.vue";

type ConfirmProps = {
  title: string;
  details: string;
  cancelText?: string;
  confirmText?: string;
  confirmOnly?: boolean;
  onCancel?: Function;
  onConfirm?: Function;
};

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dialog: {
        confirm: {
          open: (options: ConfirmProps) =>
            pushModal(
              confirmDialog,
              {
                title: options.title,
                details: options.details,
                cancelText: options.cancelText || "ยกเลิก",
                confirmText: options.confirmText || "ตกลง",
                confirmOnly: options.confirmOnly || false,
                onCancel: options.onCancel || popModal,
                onConfirm: options.onConfirm || popModal,
              },
              { backgroundClose: false },
            ),
          close: () => popModal(),
        },
        toast,
      },
    },
  };
});
