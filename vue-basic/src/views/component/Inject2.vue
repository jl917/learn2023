<script lang="ts" setup>
import { inject } from 'vue';

const isLogin = inject('isLogin');

</script>
<template>
  <h3>inject(setup)</h3>
  <p>{{ isLogin }}</p>
</template>
