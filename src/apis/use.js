import http from '@/utils/request'

//注册
export const userRegisterService = ({username,password,repassword})=>{
    return http({
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
export const userLoginService = ({username,password})=>{
    return http({
        url:'/user/login',
        method:'POST',
        data:{
            username,
            password
        }
    })
}


//获取用户数据
// export const userGetUserInfo = ()=>{
//     return http({
//         url:'/user/info',
//         method:'GET'
//     })
// }