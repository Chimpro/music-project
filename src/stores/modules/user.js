import { defineStore } from "pinia";
import { ref } from "vue";
import { userGetUserInfo } from "@/apis/use";

export const useUserStore = defineStore('user',()=>{
    const token = ref('')
    const setToken = (newToken)=>{
        token.value = newToken
    }
    const removeToken = ()=>{
        token.value = ''
    }

    const userInfo = ref({})
    const getUserInfo = async()=>{
        const res = await userGetUserInfo()
        userInfo.value = res.data
    }



    return {
        token,
        setToken,
        removeToken,
        userInfo,
        getUserInfo
    }
},{
    persist:true
})