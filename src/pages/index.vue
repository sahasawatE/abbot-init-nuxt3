<template>
  <v-row align="center">
    <v-col>
      <div class="d-flex flex-column t-gap-4">
        <span class="font-weight-bold t-text-4xl">
          Application <span class="text-secondary">name</span>
        </span>
        <span class="t-text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          quidem necessitatibus consequatur dolorem, ad vel accusantium, nostrum
          nisi similique beatae quae? Minus nulla ea veritatis eveniet quas
          tenetur officiis reiciendis.
        </span>
        <v-row class="pt-8">
          <v-col cols="auto">
            <v-btn text="สมัครสมาชิก" color="white"></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn text="เข้าสู่ระบบ" color="secondary" to="/login"></v-btn>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col>
      <v-img src="/images/landing/landing.png" height="500"></v-img>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineNuxtComponent({});
</script>
