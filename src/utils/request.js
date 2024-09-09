import axios from 'axios'
import { useUserStore } from '@/stores/modules/user'
const baseURL = 'http://192.168.154.197:3000'
const http = axios.create({
    baseURL,
    timeout:10000
})


//请求拦截器
http.interceptors.request.use((config)=>{
    const userStore = useUserStore() 
    if(userStore.token){
        config.headers.token = userStore.token
    }
    return config
},(error)=>{
    return Promise.reject(error)
})


//响应拦截器
http.interceptors.response.use((res)=>{
    if(res.code === '200'){
    //响应成功返回data
    return res.data
    }
    ElMessage({ message: res.data.message || '服务异常', type: 'error' })
    return Promise.reject(res.msg)
},(error)=>{
    return Promise.reject(error)
})

export default http