<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue';

const count = ref(0);
const obj = ref({ name: 'dao' })
const obj2 = reactive({ name: 'ju' })

const add = () => {
  count.value += 1;
}

const double = computed(() => count.value * 2);

const setObjName = () => {
  obj.value.name = 'lang';
}

const setObjName2 = () => {
  obj2.name = 'long';
}

watch(count,
  async (newData, oldData) => {
    const { data } = await new Promise((resolve) => resolve({ data: [] }));
  },
  {
    immediate: true, // 创建侦听器时，立即执行一遍回调。
  }
)

</script>
<template>
  <h1>setup</h1>
  <hr />
  <h2>ref</h2>
  <div>{{ count }}</div>
  <div>computed {{ double }}</div>
  <button @click="add">add</button>
  <hr />
  <h1>ref obj</h1>
  <div>obj.name {{ obj.name }}</div>
  <button @click="setObjName">change obj.name</button>
  <hr />
  <h1>reactive</h1>
  <div>obj2.name {{ obj2.name }}</div>
  <button @click="setObjName2">change obj2.name</button>
</template>
