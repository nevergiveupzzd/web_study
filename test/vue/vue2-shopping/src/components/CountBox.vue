<template>
    <div class="count-box">
        <button @click="handelSub" class="minus">-</button>
        <input @change="handkeChange" :value="value" type="text">
        <button @click="handelAdd" class="add">+</button>
    </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handelSub () {
      if (this.value <= 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },
    handelAdd () {
      this.$emit('input', this.value + 1)
    },
    handkeChange (e) {
      const num = +e.target.value
      //   输入了不合法的文本，回退原来的 value 值
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }
  }
}
</script>

<style lang="less" scoped>
    .count-box{
        width: 110px;
        display: flex;
        .add, .minus {
            width: 30px;
            height: 30px;
            outline: none;
            border: none;
            background-color: #efefef;
        }
        input {
            width: 40px;
            height: 30px;
            outline: none;
            border: none;
            margin: 0 5px;
            background-color: #efefef;
            text-align: center;
        }
    }
</style>
