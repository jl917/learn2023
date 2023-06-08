<script setup lang="ts">
import { reactive } from 'vue';

  const s = reactive({
    isActive: true,
    hasError: false,
  })
</script>
<template>
  <h1>class</h1>
  <div class="acitve">static</div>
  <div :class="s">dynamic</div>
  <div :class="['active', 'round']">array</div>
</template>
