<script lang="ts" setup>
import Child2 from './component/Child2.vue';

const person = { name: 'lang', age: 23 };

const submit = (props: any) => {
  console.log('submit', props);
}
</script>
<template>
  <h1>Component(setup)</h1>
  <Child2 title="world" titleText="antd" v-bind="person" @submit-event="submit" />
</template>
