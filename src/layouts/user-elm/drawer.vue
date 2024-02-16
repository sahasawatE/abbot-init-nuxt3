<template>
  <client-only>
    <v-navigation-drawer :model-value="$props.drawer">
      <div class="py-5">
        <!-- <v-img src="/images/logo-banner2.png" height="35"></v-img> -->
      </div>
      <v-list v-model:opened="open" nav mandatory>
        <div v-for="(m, i) in $store.getMenu" :key="i">
          <v-list-group v-if="m.child.length" :value="m.title">
            <template #activator="{ props }">
              <v-list-item v-bind="props">
                <template #prepend>
                  <div class="d-flex flex-row align-center t-gap-4">
                    <v-icon>
                      <i :class="m.icon"></i>
                    </v-icon>
                    <span> {{ m.title }} </span>
                  </div>
                </template>
              </v-list-item>
            </template>

            <v-list-item
              v-for="(sm, j) in m.child"
              :key="`${i}-${j}`"
              :to="sm.to"
              :value="sm.title"
              exact
            >
              <template #prepend>
                <div class="d-flex flex-row align-center t-gap-4">
                  <v-icon>
                    <i :class="sm.icon"></i>
                  </v-icon>
                  <span> {{ sm.title }} </span>
                </div>
              </template>
            </v-list-item>
          </v-list-group>

          <v-list-item v-else :to="m.to" exact :value="m.title">
            <template #prepend>
              <div class="d-flex flex-row align-center t-gap-4">
                <v-icon>
                  <i :class="m.icon"></i>
                </v-icon>
                <span> {{ m.title }} </span>
              </div>
            </template>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </client-only>
</template>

<script lang="ts">
export default {
  name: "UserNavigationDrawer",
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const open = ref([""]);

    return { open };
  },
};
</script>

<style></style>
