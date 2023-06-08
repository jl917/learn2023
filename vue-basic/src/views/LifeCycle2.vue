<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

onBeforeMount(() => { console.log('onBeforeMount') });
onMounted(() => { console.log('onMounted') });
onBeforeUnmount(() => { console.log('onBeforeUnmount') });
onUnmounted(() => { console.log('onUnmounted') });
onBeforeUpdate(() => { console.log('onBeforeUpdate') });
onUpdated(() => { console.log('onUpdated') });

const count = ref(0);

const add = () => {
  count.value += 1;
}

</script>
<template>
  <h1>LifeCycle</h1>
  <button @click="add">{{ count }}</button>
</template>
