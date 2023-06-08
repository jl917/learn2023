<script lang="ts">
import Child from './component/Child.vue';

export default {
  data() {
    return { person: { name: 'dao', age: 19 } }
  },
  methods:{
    submit(props: any){
      console.log('submit', props);
    }
  },
  components: { Child }
}
</script>
<template>
  <h1>Component(optional)</h1>
  <Child title="hello" titleText="titleText" v-bind="this.person" @submit-event="submit" />
</template>
