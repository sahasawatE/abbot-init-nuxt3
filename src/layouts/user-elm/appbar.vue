<template>
  <v-app-bar>
    <template #prepend>
      <div>
        <v-btn icon @click="$emit('click-drawer')">
          <v-icon>
            <i class="ph-bold ph-list"></i>
          </v-icon>
        </v-btn>
      </div>
    </template>
    <template #append>
      <div class="d-flex flex-row align-center t-gap-4">
        <v-menu offset="6" :close-on-content-click="false">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon>
              <v-badge
                v-if="$store.getNotification > 0"
                color="red"
                :content="$store.getNotification"
              >
                <v-icon>
                  <i class="ph-bold ph-bell"></i>
                </v-icon>
              </v-badge>
              <v-icon v-else>
                <i class="ph-bold ph-bell"></i>
              </v-icon>
            </v-btn>
          </template>
          <v-card rounded="lg">
            <v-virtual-scroll :height="500" :items="noti" class="py-1">
              <template #default="{ item, index }">
                <v-list-item
                  width="400"
                  height="80"
                  :subtitle="item.message"
                  :value="index"
                  @click="handleClickNoti(index)"
                >
                  <template #prepend>
                    <v-avatar :color="item.color">
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-avatar>
                  </template>
                  <template #title>
                    <div
                      class="d-flex flex-row justify-space-between pb-2 align-baseline"
                    >
                      <span>{{ item.title }}</span>
                      <span class="t-text-sm">
                        {{ utils.dateViewFull(item.timestamp) }}
                      </span>
                    </div>
                  </template>
                </v-list-item>
              </template>
            </v-virtual-scroll>
          </v-card>
        </v-menu>
        <div
          class="t-cursor-pointer t-p-[2px] t-bg-white t-w-fit t-rounded-full"
        >
          <v-avatar size="40" color="white">
            <v-img
              src="https://picsum.photos/300/300"
              width="40"
              class="t-pointer-events-none"
            ></v-img>
          </v-avatar>
        </div>
      </div>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
export default {
  name: "UserAppBar",
  emits: {
    "click-drawer": null,
  },
  data() {
    return {
      noti: [
        {
          title: "New Message Received",
          message: "You have received a new message from John Doe.",
          timestamp: "2024-02-14T10:30:00",
          color: "#FF5733",
          icon: "mdi-email",
        },
        {
          title: "Meeting Reminder",
          message: "Don't forget about the meeting today at 2 PM.",
          timestamp: "2024-02-14T08:00:00",
          color: "#FFC300",
          icon: "mdi-calendar-clock",
        },
        {
          title: "Weather Update",
          message:
            "Expect heavy rain in the evening. Remember to carry an umbrella!",
          timestamp: "2024-02-14T12:00:00",
          color: "#36A2EB",
          icon: "mdi-weather-rainy",
        },
        {
          title: "Package Delivered",
          message: "Your package has been successfully delivered.",
          timestamp: "2024-02-14T14:45:00",
          color: "#FFC300",
          icon: "mdi-package-variant-closed",
        },
        {
          title: "Payment Received",
          message: "You've received a payment of $50 from Alice.",
          timestamp: "2024-02-14T16:20:00",
          color: "#FF5733",
          icon: "mdi-currency-usd",
        },
        {
          title: "Appointment Reminder",
          message: "Your dentist appointment is tomorrow at 9 AM.",
          timestamp: "2024-02-15T09:00:00",
          color: "#FF5733",
          icon: "mdi-tooth",
        },
        {
          title: "Flight Reminder",
          message: "Your flight to Paris departs in 3 hours.",
          timestamp: "2024-02-15T12:00:00",
          color: "#FFC300",
          icon: "mdi-airplane-takeoff",
        },
        {
          title: "Task Deadline",
          message: "Don't forget to submit your report by EOD.",
          timestamp: "2024-02-15T17:00:00",
          color: "#FF5733",
          icon: "mdi-calendar-check-outline",
        },
        {
          title: "Appointment Confirmation",
          message: "Your appointment with Dr. Smith is confirmed.",
          timestamp: "2024-02-16T11:30:00",
          color: "#36A2EB",
          icon: "mdi-calendar-check",
        },
        {
          title: "Product Recall Notice",
          message:
            "There has been a product recall for item #12345. Please return it for a refund.",
          timestamp: "2024-02-16T13:00:00",
          color: "#FF5733",
          icon: "mdi-alert-circle",
        },
        {
          title: "Maintenance Reminder",
          message:
            "Scheduled maintenance will be performed on your server tonight at 11 PM.",
          timestamp: "2024-02-16T23:00:00",
          color: "#FFC300",
          icon: "mdi-wrench",
        },
        {
          title: "School Event",
          message: "Don't forget about the school play tomorrow at 7 PM.",
          timestamp: "2024-02-17T19:00:00",
          color: "#36A2EB",
          icon: "mdi-school",
        },
        {
          title: "Security Alert",
          message: "Unusual login activity detected on your account.",
          timestamp: "2024-02-18T10:15:00",
          color: "#FF5733",
          icon: "mdi-security",
        },
        {
          title: "Newsletter Subscription",
          message:
            "Welcome to our newsletter subscription! Expect exciting updates.",
          timestamp: "2024-02-19T08:00:00",
          color: "#36A2EB",
          icon: "mdi-email-newsletter",
        },
        {
          title: "Vacation Reminder",
          message:
            "Your vacation to Hawaii starts next week! Don't forget to pack sunscreen.",
          timestamp: "2024-02-21T09:00:00",
          color: "#FFC300",
          icon: "mdi-beach",
        },
        {
          title: "Birthday Reminder",
          message: "It's Bob's birthday today! Send him your best wishes.",
          timestamp: "2024-02-22T00:00:00",
          color: "#36A2EB",
          icon: "mdi-cake-variant",
        },
        {
          title: "Job Interview Reminder",
          message:
            "Your job interview is scheduled for next Thursday at 11 AM.",
          timestamp: "2024-02-22T11:00:00",
          color: "#FF5733",
          icon: "mdi-briefcase",
        },
        {
          title: "Health Checkup Reminder",
          message:
            "It's time for your annual health checkup. Schedule an appointment today.",
          timestamp: "2024-02-23T09:30:00",
          color: "#FFC300",
          icon: "mdi-hospital",
        },
        {
          title: "Subscription Renewal",
          message:
            "Your subscription to XYZ service is expiring soon. Renew now to avoid interruption.",
          timestamp: "2024-02-25T14:00:00",
          color: "#FF5733",
          icon: "mdi-refresh",
        },
        {
          title: "Library Book Due",
          message:
            "Your library book is due tomorrow. Remember to return it on time.",
          timestamp: "2024-02-29T17:00:00",
          color: "#36A2EB",
          icon: "mdi-book",
        },
      ],
    };
  },
  methods: {
    handleClickNoti(i: number) {
      console.log(i);
    },
  },
};
</script>

<style></style>
