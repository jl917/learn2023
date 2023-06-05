<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';
import { storeToRefs } from 'pinia';

const store = useTodoStore();
const { items } = storeToRefs<any>(store);

const onCancel = (id: string) => {
  store.actionCancel(id)
}

const onDone = (id: string) => {
  store.actionDone(id)
}

const onRemove = (id: string) => {
  store.actionRemove(id);
}

</script>
<template>
  <div>
  <div class="flex mb-4 items-center" v-for="item in items">
    <p v-if="item.isDone === false" class="w-full text-grey-darkest">{{ item.text }}</p>
    <p v-else="item.isDone === false" class="w-full line-through text-gray-300">{{ item.text }}</p>
    <button v-if="item.isDone === false" @click="() => onDone(item.id)"
      class="flex-no-shrink p-2 ml-4 mr-2 rounded text-white text-green bg-sky-500 hover:bg-sky-700">Done</button>
      <button v-else @click="() => onCancel(item.id)"
        class="flex-no-shrink p-2 ml-4 mr-2 rounded text-white text-gray bg-green-500 hover:bg-green-700">Cancel</button>
      <button @click="() => onRemove(item.id)" class="flex-no-shrink p-2 ml-2 rounded text-white bg-red-500 hover:bg-red-700">Remove</button>
    </div>
  </div>
</template>