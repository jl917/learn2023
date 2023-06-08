<script lang="ts">
export default {
  data() { return { count: 0 } },
  methods: {
    add(){
      this.count += 1;
    }
  },
  // 생성 및 삭제시
  beforeCreate() { console.log('beforeCreate') },
  created() { console.log('created') },
  beforeMount() { console.log('beforeMount') },
  mounted() { console.log('mounted') },
  beforeUnmount() { console.log('beforeUnmount') },
  unmounted() { console.log('unmounted') },
  // 업데이트시
  beforeUpdate() { console.log('beforeUpdate') },
  updated() { console.log('updated') }
}
</script>
<template>
  <h1>LifeCycle</h1>
  <button @click="add">{{ count }}</button>
</template>
