<template>
  <div v-if="$props.data.length > 0">
    <v-data-table
      :headers="$props.headers"
      :items="$props.data"
      :items-per-page-options="items_per_page"
      :page="$props.paging.page"
      :items-per-page="$props.paging.per_page"
    >
      <template
        v-for="({ title, key }, index) in $props.headers"
        :key="index"
        #[`header.${key}`]="{ isSorted, column, sortBy }"
      >
        <div>
          <v-icon
            v-if="isSorted(column) && sortBy[0].key === key && $props.sortable"
            color="white"
            class="pr-2"
          >
            <i :class="getSortIcon(sortBy[0].order)"></i>
          </v-icon>
          <span class="text-white font-weight-black">{{ title }}</span>
        </div>
      </template>
      <template
        v-for="({ key }, i) in $props.headers"
        :key="i"
        #[`item.${key}`]="{ item, index }: { item: any; index: number }"
      >
        <div>
          <slot
            :name="[`data.${key}`]"
            v-bind="item[key]"
            :data="item"
            :this-data="item[key]"
            :index="index"
          >
            {{ item[key] }}
          </slot>
        </div>
      </template>
      <template #bottom="{ page, pageCount, itemsPerPage }">
        <v-row v-if="!hideDefaultFooter">
          <v-col cols="8">
            <v-pagination
              :model-value="page"
              :length="pageCount"
              :total-visible="7"
              density="comfortable"
              @update:model-value="handlePageChange"
            ></v-pagination>
          </v-col>
          <v-col cols="2" class="d-flex flex-column justify-center">
            <v-label>
              {{ $props.data.length }} items of {{ $props.paging.total }}
            </v-label>
          </v-col>
          <v-col cols="2">
            <v-select
              :items="items_per_page"
              :model-value="itemsPerPage"
              variant="outlined"
              density="compact"
              hide-details
              @update:model-value="handlePerPageChange"
            ></v-select>
          </v-col>
        </v-row>
      </template>
    </v-data-table>
  </div>
  <div v-else>
    <slot name="nodata">
      <common-no-data />
    </slot>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { HeaderProp, Paging } from "~/types/table.type";

export default defineNuxtComponent({
  props: {
    headers: {
      type: Array as PropType<HeaderProp>,
      required: true,
    },
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
    sortable: {
      type: Boolean,
      required: false,
      default: false,
    },
    paging: {
      type: Object as PropType<Paging>,
      required: true,
    },
    hideDefaultFooter: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: {
    "update:paging": null,
  },
  data() {
    return {
      items: this.$props.data,
      items_per_page: [
        { value: 50, title: "50" },
        { value: 100, title: "100" },
        { value: 150, title: "150" },
        { value: 200, title: "200" },
      ],
      pagi: {
        ...this.$props.paging,
      },
    };
  },
  methods: {
    getSortIcon(mode: any) {
      switch (mode) {
        case "asc":
          return "ph ph-sort-ascending";

        case "desc":
          return "ph ph-sort-descending";

        default:
          return "";
      }
    },
    handlePerPageChange(e: number) {
      this.pagi.per_page = e;
      this.pagi.page = 1;

      this.$emit("update:paging", this.pagi);
    },
    handlePageChange(e: number) {
      this.pagi.page = e;

      this.$emit("update:paging", this.pagi);
    },
  },
});
</script>

<style></style>
