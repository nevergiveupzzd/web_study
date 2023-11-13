<template>
      <!-- 统计和清空 -->
    <footer class="footer">
      <!-- 统计 -->
      <span class="todo-count">合 计:<strong> {{count}} </strong></span>
      <!-- 清空 -->
      <button class="clear-completed" @click="clear">
        清空任务
      </button>
    </footer>
</template>

<script>
    export default {
        props:{
            count:Number,
        },
        methods:{
            clear(){
                this.$emit('clear')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>