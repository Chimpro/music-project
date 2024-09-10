<script setup>
import { useRouter } from 'vue-router';
// import { userGetUserInfo } from '@/apis/use';
import { useUserStore } from '@/stores/modules/user'
import { onMounted } from 'vue';
const router = useRouter()
const userStore = useUserStore()
const goDetail = () => {
    router.push('/home/userinfo')
}
const confirm = () => {
    //清空token
    userStore.clearUserInfo()
    //退到登录页
    router.push('/login')
}
const toLogin = () => {
    router.push('/login')
}
//获取user对象
// onMounted(() => {
//     userGetUserInfo()
// })
</script>

<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="userStore.userInfo.token">
                    <li @click="goDetail"><a href="javascript:;">个人信息</a></li>
                    <li>
                        <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认"
                            cancel-button-text="取消">
                            <template #reference>
                                <a href="javascript:;">退出登录</a>
                            </template>
                        </el-popconfirm>
                    </li>
                </template>

                <template v-else>
                    <li><a href="javascript:;" @click="toLogin">请先登录</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>


<style scoped lang="scss">
.app-topnav {
    background: #333;

    ul {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;

        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;
                text-decoration: none;

                i {
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover {
                    color: #333;
                }
            }

            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>
