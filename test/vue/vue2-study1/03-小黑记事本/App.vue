<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain v-show="list.length>0" :list="list" @del="handleDel"></TodoMain>
    <TodoFooter v-show="list.length>0" :count="list.length" @clear="handleClear"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  data () {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        {id:1,name:'打篮球',},
        {id:2,name:'看电影',},
        {id:3,name:'逛街',},
      ]
    }
  },
  methods:{
    handleAdd(todoName){
      this.list.unshift({id:+new Date,name:todoName})
    },
    handleDel(id){
      this.list=this.list.filter(item => item.id != id)
    },
    handleClear(){
      this.list=[]
    }
  },
  watch:{
    list:{
      deep:true,
      handler(newValue){
        localStorage.setItem('list',JSON.stringify(newValue))
      }
    }
  },
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  
}
</script>

<style>

</style>
