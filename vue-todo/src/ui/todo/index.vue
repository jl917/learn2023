<script setup lang="ts">
import Wrap from '@/ui/layout/Wrap.vue';
import Header from '@/ui/todo/Header.vue';
import Input from '@/ui/todo/Input.vue';
import List from '@/ui/todo/List.vue';
</script>
<template>
  <Wrap>
    <Header>
      <Input />
    </Header>
    <List />
  </Wrap>
</template>