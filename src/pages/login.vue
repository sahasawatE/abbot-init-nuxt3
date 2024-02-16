<template>
  <div class="d-flex flex-column justify-center t-h-[80vh]">
    <v-row align="center">
      <v-col>
        <div class="d-flex flex-column t-gap-4">
          <span class="t-text-4xl t-font-bold">Application name</span>
          <span class="t-text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias odit
            eveniet, perspiciatis suscipit architecto odio aliquam voluptas
            vitae earum reprehenderit nostrum rerum optio cum neque labore
            aperiam dolorum soluta accusantium.
          </span>
          <v-img src="/images/landing/landing.png" height="300"></v-img>
        </div>
      </v-col>
      <v-col cols="5">
        <v-card>
          <v-card-text class="d-flex flex-column ma-3 t-gap-4">
            <span class="font-weight-bold t-text-4xl"> เข้าสู่ระบบ </span>
            <v-form ref="login-form" lazy-validation class="pt-4">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="ชื่อผู้ใช้"
                    variant="outlined"
                    :hide-details="false"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="รหัสผ่าน"
                    variant="outlined"
                    :hide-details="false"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn text="เข้าสู่ระบบ" block></v-btn>
                </v-col>
                <v-col cols="12">
                  <div class="d-flex flex-row align-center t-gap-3">
                    <v-divider></v-divider>
                    <span class="text-grey">หรือ</span>
                    <v-divider></v-divider>
                  </div>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    text="เข้าสู่ระบบด้วยระบบ OTP"
                    block
                    color="secondary"
                  ></v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  setup() {
    definePageMeta({
      layout: "guest",
    });
  },
});
</script>

<style></style>
