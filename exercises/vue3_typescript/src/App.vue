<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item>
        <v-list-item-title class="text-h6">Application</v-list-item-title>
        <v-list-item-subtitle>subtext</v-list-item-subtitle>
      </v-list-item>

      <v-list density="compact" nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="{ name: item.title }"
          :prepend-icon="item.icon"
          :title="item.title"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false);
const items = [
  { title: 'Home', icon: 'mdi-view-dashboard' },
  { title: 'Names', icon: 'mdi-view-dashboard' },
  { title: 'About', icon: 'mdi-help-box' },
];
</script>
