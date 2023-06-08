<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/todo">Todo</RouterLink>
    <RouterLink to="/optional">Optional</RouterLink>
    <RouterLink to="/setup">Setup</RouterLink>
    <RouterLink to="/class">Class</RouterLink>
    <RouterLink to="/condition">condition</RouterLink>
    <RouterLink to="/model">model</RouterLink>
    <RouterLink to="/lifecycle">lifecycle</RouterLink>
    <RouterLink to="/lifecycle2">lifecycle(setup)</RouterLink>
    <RouterLink to="/component">component</RouterLink>
    <RouterLink to="/component2">component(setup)</RouterLink>
    <RouterLink to="/provider">provider</RouterLink>
    <RouterLink to="/provider2">provider(setup)</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
