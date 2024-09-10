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
    const token = userStore.userInfo.token
    //如果token存在，那么发送请求的请求头中的token等于token
    if(token){
        config.headers.token = token
    }
    return config
},(error)=>{
    return Promise.reject(error)
})


//响应拦截器
http.interceptors.response.use((res)=>{
    // if(res.code === '200'){
    // //响应成功返回data
    // return res.data
    // }
    // ElMessage({ message: res.data.message || '服务异常', type: 'error' })
    return res.data
},(error)=>{
    return Promise.reject(error)
})

export default http