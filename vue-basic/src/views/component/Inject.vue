<script lang="ts">
export default {
  inject: {
    localIsLogin: { from: 'isLogin' }
  }
  // inject: ['isLogin'],
}
</script>
<template>
  <h3>inject(optional)</h3>
  <p>{{ this.localIsLogin }}</p>
</template>
