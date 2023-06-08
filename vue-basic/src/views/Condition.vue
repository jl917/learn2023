<script setup lang="ts">
import { reactive } from 'vue';

const arr = reactive<number[]>([]);

const push = () => {
  arr.push(new Date().getTime())
}

</script>
<template>
  <h1>Condition</h1>
  <button @click="push">push</button>
  <hr />
  <h2 v-if="arr.length % 2 === 1">单数</h2>
  <h2 v-else>双数</h2>
  <ul>
    <li v-for="item in arr">{{ item }}</li>
  </ul>
</template>
