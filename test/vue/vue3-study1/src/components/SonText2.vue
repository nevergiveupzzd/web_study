<script setup>
import {useText2Store} from '@/store/text2.js'
const text2Store = useText2Store()

// console.log(text2Store);
// console.log(text2Store.data2);
</script>
<template>
    <div>{{ text2Store.data2 }}</div>
</template>
<style scoped>
div{
 width: 100%;
 height: 300px;
}
</style>