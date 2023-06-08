<script lang="ts">
export default {
  props: ['title', 'titleText', 'name', 'age'],
  emits: ['submit-event'],
  methods: {
    submit() {
      const { title, name, age } = this;
      this.$emit('submit-event', { title, name, age })
    }
  }
}
</script>
<template>
  <h3>child(optional)</h3>
  <p>{{ title }} - {{ titleText }}</p>
  <p>{{ name }} - {{ age }}</p>
  <button @click="$emit('submit-event', { title, name, age })">submit</button>
  <button @click="submit">submit</button>
</template>
