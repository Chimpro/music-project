import { defineStore } from "pinia";
import { ref } from "vue";
import { userLoginService } from "@/apis/use";

export const useUserStore = defineStore('user',()=>{
    // const token = ref('')
    // const setToken = (newToken)=>{
    //     token.value = newToken
    // }
    // const removeToken = ()=>{
    //     token.value = ''
    //}

    //获取用户数据并保存 
    const userInfo = ref({})
    const getUserInfo = async({username,password})=>{
        const res = await userLoginService({username,password})
        userInfo.value = res.data
    }

    //退出时清除用户数据
    const clearUserInfo=()=>{
        userInfo.value = {}
    }



    return {
        // token,
        // setToken,
        // removeToken,
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist:true
})