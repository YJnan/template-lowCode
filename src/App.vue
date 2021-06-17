<template>
  <router-view #="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </router-view>
</template>

<script setup>
import { provide } from 'vue'


</script>

<style lang="scss">
@import 'assets/style/common';
</style>

