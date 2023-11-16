import { defineStore } from "pinia"
import {ref} from 'vue'

export const useText1Store = defineStore('text1',() => {
    const data1 = ref([1,2,3])
    
    return {
        data1
    }
})