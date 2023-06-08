<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    add() {
      this.count += 1;
    },
    async getData() {
      const { data } = await new Promise((resolve) => resolve({ data: [] }))
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  },
  watch: {
    count: {
      handler(newData, oldData) {
        // dom 操作 or 请求
        this.getData()
      },
      immediate: true, // 创建侦听器时，立即执行一遍回调。
    }
  },
}
</script>

<template>
  <h1>optional</h1>
  <button @click="this.add">add</button>
  <div>{{ count }}</div>
  <div>computed {{ double }}</div>
</template>
