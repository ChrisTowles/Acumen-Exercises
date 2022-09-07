<template>
  <v-container>
    <h1>Names</h1>
    <v-card>
      <v-card-text>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      names: ['Chris', 'Paul', 'Douglas', 'Jordan'],
    };
  },
  components: {

  },
});

</script>
