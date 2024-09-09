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
          path:'/home/music',
          component:()=>import('@/views/home/components/musicList.vue')
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

export default router
