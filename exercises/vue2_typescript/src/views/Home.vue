<template>
  <div>
    <h1>Home</h1>
    <v-card>
      <v-card-text>
        <my-counter />
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


import MyCounter from '../components/my-counter.vue'; 

export default defineComponent({
  components: {
    MyCounter,
  },
});

</script>
