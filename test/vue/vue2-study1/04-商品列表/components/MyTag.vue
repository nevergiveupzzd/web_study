<template>
    <div class="my-tag">
        <input v-if="isEdit" ref="inp" v-focus @blur="isEdit = false" :value="value" @keyup.enter="handleEnter" class="input" type="text" placeholder="输入标签" />
        <div v-else class="text" @dblclick="handleClick">
            {{ value }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: String
    },
    data() {
        return {
            isEdit: false,
        }
    },
    methods: {
        handleClick() {
            this.isEdit = true
            // 等dom更新完，再获取焦点
            // this.$nextTick(()=>{
            //     this.$refs.inp.focus()
            // })
        },
        handleEnter(e){
            // 非空处理
            if(e.target.value.trim() === ''){
                return alert('标签内容不能为空')
            }
            this.$emit('input',e.target.value)
            this.isEdit = false
        },
    }
}
</script>

<style lang="less" scoped>
.my-tag {
    cursor: pointer;

    .input {
        appearance: none;
        outline: none;
        border: 1px solid #ccc;
        width: 100px;
        height: 40px;
        box-sizing: border-box;
        padding: 10px;
        color: #666;

        &::placeholder {
            color: #666;
        }
    }
}
</style>