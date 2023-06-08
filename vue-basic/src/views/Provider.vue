<script lang="ts">
import Inject from './component/Inject.vue';

export default {
  provide: {
    isLogin: true,
  },
  components: { Inject }
}
</script>
<template>
  <h1>Provider(optional)</h1>
  <Inject />
</template>
