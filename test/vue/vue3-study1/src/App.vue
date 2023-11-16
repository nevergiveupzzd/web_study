<!-- 加上 setup 允许在 script 中直接编写组合式API  -->
<script setup>
import SonText1 from './components/SonText1.vue';
import SonText2 from './components/SonText2.vue';
import { provide, ref } from 'vue'
const fData = ref('父组件')
provide('key',fData)
</script>

<template>
  <!-- 不在要求唯一根元素 -->
  <header>
    
  </header>
  <main>
   
  </main>
  <SonText1></SonText1>
  <SonText2></SonText2>
</template>

<style scoped>
</style>