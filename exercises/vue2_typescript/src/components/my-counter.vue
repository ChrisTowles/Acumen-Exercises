<template>
  <div>
    <v-btn> Click me to increase counter:</v-btn>
    <br />
    <br />
    <h2>Count:{{count}}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clickBtn() {
      this.count += 1;
    },
  },
});
</script>
<style scoped>

</style>
