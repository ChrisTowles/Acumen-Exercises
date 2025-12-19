<template>
  <v-container>
    <h1>Names</h1>
    <v-card>
      <v-card-text>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const names = ref(['Chris', 'Paul', 'Douglas', 'Jordan']);
</script>
