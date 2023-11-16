import { defineStore, storeToRefs } from "pinia"
import {ref} from 'vue'
import {useText1Store} from './text1'

export const useText2Store = defineStore('text2',() => {
    const text1Store = useText1Store()
    const { data1 } = storeToRefs(text1Store)
    console.log(data1);
    const data2 = ref([4,5,6])
    // console.log(data2);
    return {
        data2
    }
})