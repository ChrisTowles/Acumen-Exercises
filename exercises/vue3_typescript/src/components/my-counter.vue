<template>
  <div>
    <v-btn > Click me to increase counter:</v-btn>
    <br />
    <br />
    <h2>Count: {{ count }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

function clickBtn() {
  count.value += 1;
}
</script>
