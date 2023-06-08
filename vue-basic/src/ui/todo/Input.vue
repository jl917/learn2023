<script setup lang="ts">
import { Ref, ref } from 'vue'
import { useTodoStore } from '@/stores/todo';

const text: Ref<string> = ref('');
const store = useTodoStore()

const onAdd = (e: any) => {
  e.preventDefault();
  if (!text.value) {
    return alert('값이 없음.');
  }
  store.addItem(text.value.trim());
  text.value = '';
}
</script>
<template>
  <form>
    <div class="flex mt-4">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"
        v-model="text">
      <button type="submit" class="flex-no-shrink p-2 border-2 rounded text-teal border-teal" @click="onAdd">Add</button>
    </div>
  </form>
</template>