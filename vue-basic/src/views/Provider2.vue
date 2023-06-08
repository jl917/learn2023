<script lang="ts" setup>
import { provide } from 'vue';
import Inject2 from './component/Inject2.vue';

provide('isLogin', false);
</script>
<template>
  <h1>Provider(setup)</h1>
  <Inject2 />
</template>
