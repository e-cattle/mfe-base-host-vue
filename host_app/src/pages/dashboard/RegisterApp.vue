<!--
<template>
  <div class="d-flex justify-center align-center w-100 h-screen-header">
    <qr-code-scan class="w-75 h-75" />
  </div>
</template>

<script setup></script>
-->

<template>
  <div class="d-flex justify-center align-center w-100 h-screen-header">
    <qr-code-scan class="w-75 h-75" />
    <ScanQrCode v-if="!!ScanQrCode" />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const ScanQrCode = defineAsyncComponent(
  () => import('registerDevice/ScanQrCode')
)
</script>
