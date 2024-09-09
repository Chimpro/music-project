import request from '@/utils/request'

//注册
export const useRegisterService = ({username,password,repassword})=>{
    return request({
        url:'/user/register',
        method:'POST',
        data:{
            username,
            password,
            repassword
        }
    })
}

//登录
export const useLoginService = ({username,password})=>{
    return request({
        url:'/user/login',
        method:'POST',
        data:{
            username,
            password
        }
    })
}

//获取用户数据
export const userGetUserInfo = ()=>{
    return request({
        url:'/user/info',
        method:'GET'
    })
}