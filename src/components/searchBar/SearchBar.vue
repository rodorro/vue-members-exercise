<template>
  <div :class="$style.div">
    <v-text-field
      :value="searchText"
      @input="onSearch"
    />
    <v-btn small @click="onLoad">Load</v-btn>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "SearchBarComponent",
  props: {
    searchText: String,
    onSearch: {} as PropOptions<(value: string) => void>,
    onLoad: {} as PropOptions<() => void>
  }
});
</script>

<style module>
  .div {
    display: flex;
  }
</style>
