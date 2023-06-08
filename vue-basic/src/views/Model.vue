<script setup lang="ts">
import { ref } from 'vue';

const inputText = ref('');
const inputTextArea = ref('');
const inputCheck = ref(false);
const inputChecks = ref([]);
const inputRadio = ref('');
const inputSelect = ref('All');

</script>

<template>
  <h1>Model</h1>
  <hr />
  <div>{{ inputText || 'no value' }}</div>
  <h2>input</h2>
  <input type="text" v-model="inputText" />
  <hr />

  <h2>textarea</h2>
  <div>{{ inputTextArea || 'no value' }}</div>
  <textarea type="text" v-model="inputTextArea" />
  <hr />

  <h2>checkbox</h2>
  <label>
    <input type="checkbox" v-model="inputCheck" />
    {{ inputCheck }}
  </label>

  <hr />
  <h2>checkboxs</h2>
  <div>{{ inputChecks }}</div>
  <label>
    <input type="checkbox" v-model="inputChecks" value="dao" />
    dao
  </label>
  <label>
    <input type="checkbox" v-model="inputChecks" value="lang" />
    lang
  </label>
  <label>
    <input type="checkbox" v-model="inputChecks" value="ju" />
    ju
  </label>

  <hr />
  <h2>radio</h2>
  <div>{{ inputRadio || 'no value' }}</div>
  <label>
    <input type="radio" v-model="inputRadio" value="dao" />
    dao
  </label>
  <label>
    <input type="radio" v-model="inputRadio" value="lang" />
    lang
  </label>
  <label>
    <input type="radio" v-model="inputRadio" value="ju" />
    ju
  </label>

  <hr />
  <h2>select</h2>
  <div>{{ inputSelect || 'no value' }}</div>
  <select v-model="inputSelect">
    <option value="All">All</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
</template>
