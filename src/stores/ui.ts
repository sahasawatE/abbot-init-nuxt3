import { defineStore } from "pinia";

export const uiStore = defineStore("ui-store", {
  state(): { breadcrumbs: string[]; loading: boolean } {
    return {
      breadcrumbs: ["หน้าหลัก"],
      loading: false,
    };
  },

  actions: {
    setBreadcrumbs(breadcrumbs: string[]) {
      this.breadcrumbs = breadcrumbs;
    },
    setLoading(loading: boolean) {
      this.loading = loading;
    },
  },

  getters: {
    getBreadcrumbs: (state): string[] => {
      return state.breadcrumbs;
    },
    getLoading: (state): boolean => {
      return state.loading;
    },
  },
});
