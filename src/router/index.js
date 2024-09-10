import { useUserStore } from '@/stores/modules/user'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:()=>import('@/views/home/index.vue'),
      redirect:'/home/music',
      children:[
        {
          path:'/home/music',
          component:()=>import('@/views/home/components/music.vue')
        },
        {
          path:'/home/musicvideo',
          component:()=>import('@/views/home/components/musicVideo.vue')
        },
        {
          path:'/home/musiclist',
          component:()=>import('@/views/home/components/musicList.vue')
        },
        {
          path:'/home/userinfo',
          component:()=>import('@/views/home/components/userInfo.vue'),
          meta:{
            show:true
          },
        },
        {
          path:'/home/musicdetail',
          component:()=>import ('@/views/home/components/musicDetail.vue'),
          meta:{
            show:true
          }
        },
        {
          path:'/home/musicvideodetail',
          component:()=>import ('@/views/home/components/musicvideoDetail.vue'),
          meta:{
            show:true
          }
        },
        {
          path:'/home/musiclistdetail',
          component:()=> import ('@/views/home/components/musicListDetail.vue')
        }
      ]
    },
    {
      path:'/login',
      component:()=>import('@/views/login/index.vue')
    },
  ]
})
//路由守卫
router.beforeEach((to,from)=>{
  const userStore = useUserStore()
  if(!userStore.userInfo.token && to.path !=='/login'){
    if(to.path === '/home/musiclist'){
      return '/login'
    }
    else if(to.path === '/home/userinfo'){
      return 'login'
    }
    else if(to.path === '/home/musiclistdetail'){
      return '/login'
    }
  }
})
export default router
