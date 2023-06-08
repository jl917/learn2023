<script lang="ts" setup>
const { title, titleText, name, age } = defineProps({
  title: String,
  titleText: String,
  name: String,
  age: Number,
});
const emit = defineEmits(['submit-event']);
const submit = () => {
  emit('submit-event', { title, name, age });
}
</script>
<template>
  <h3>child2(setup)</h3>
  <p>{{ title }} - {{ titleText }}</p>
  <p>{{ name }} - {{ age }}</p>
  <button @click="$emit('submit-event', { title, name, age })">submit</button>
  <button @click="submit">submit</button>
</template>
