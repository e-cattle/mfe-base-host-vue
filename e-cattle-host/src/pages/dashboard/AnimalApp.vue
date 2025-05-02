<template>
  <BodyTemperature v-if="!!BodyTemperature" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const BodyTemperature = defineAsyncComponent(
  () => import('animalApp/BodyTemperature')
)
</script>
