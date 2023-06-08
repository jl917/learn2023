import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'
import { TodoItem } from '@/types/todo';

export const useTodoStore = defineStore('todo', () => {
  const defaultItems = window.localStorage.getItem('items');
  const items: Ref<TodoItem[]> = ref(defaultItems ? JSON.parse(defaultItems) : []);

  function save() {
    window.localStorage.setItem('items', JSON.stringify(items.value));
  }

  function addItem(text: string) {
    console.log(items.value);
    items.value.unshift({
      id: `${new Date().getTime()}`,
      isDone: false,
      text,
    })
    save();
  }

  function actionDone(id: string) {
    items.value = items.value.map(e => {
      if (e.id === id) {
        e.isDone = true;
      }
      return e;
    });
    save();
  }

  function actionCancel(id: string) {
    items.value = items.value.map(e => {
      if (e.id === id) {
        e.isDone = false;
      }
      return e;
    });
    save();
  }

  function actionRemove(id: string) {
    console.log(id);
    items.value = items.value.filter(e => e.id !== id);
    console.log(items.value);
    save();
  }

  return { items, addItem, actionDone, actionCancel, actionRemove }
})
