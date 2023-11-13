<template>
   <!-- 输入框 -->
   <header class="header">
      <h1>小黑记事本</h1>
      <input placeholder="请输入任务" class="new-todo" v-model="todoName" 
      @keyup.enter="handleAdd" />
      <button class="add" @click="handleAdd">添加任务</button>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                todoName:''
            }
        },
        methods:{
            handleAdd(){
                if(this.todoName.trim() === ''){
                    alert('请输入任务名称')
                    return
                }
                this.$emit('add',this.todoName)
                this.todoName = ''
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>