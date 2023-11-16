<script setup>
import {useText1Store} from '@/store/text1.js'
const text1Store = useText1Store()
console.log(text1Store.data1);

</script>
<template>
    <button @click="text1Store.data1.push(666)">添加</button>
    <div>{{ text1Store.data1 }}</div>
</template>
<style scoped>
div{
 width: 100%;
 height: 300px;
 border-bottom: 1px solid black;
}
</style>