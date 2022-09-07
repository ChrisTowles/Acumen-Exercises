<template>
  <div>
    <v-btn> Click me to increase counter:</v-btn>
    <br />
    <br />
    <h2>Count:{{count}}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
