import { defineStore } from "pinia";

import type { Menu } from "~/types/menu.type";

export const mainStore = defineStore("main-store", {
  state: (): { menus: Menu[]; notification: number } => {
    return {
      menus: [
        {
          child: [],
          icon: "ph-fill ph-house",
          title: "หน้าหลัก",
          to: "dashboard",
        },
      ],
      notification: 20,
    };
  },

  actions: {
    setMenu(menus: Menu[]) {
      this.menus = menus;
    },
    setNotification(noti: number) {
      this.notification = noti;
    },
  },

  getters: {
    getMenu: (state): Menu[] => {
      return state.menus;
    },
    getNotification: (state): number => {
      return state.notification;
    },
  },
});
