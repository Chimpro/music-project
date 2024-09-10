<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { userRegisterService, userLoginService } from '@/apis/use'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/modules/user';
import { ElMessage } from 'element-plus';
import { onMounted, ref, watch } from 'vue'
const isRegister = ref(false)
const router = useRouter()
const userStore = useUserStore()
//数据绑定
const formData = ref({
    username: '',
    password: '',
    repassword: ''
})

//绑定校验规则
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 1, max: 12, message: '用户名必须是1-12位的字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { pattern: /^\S{1,12}$/, message: '密码必须是1-12位的非空字符', trigger: 'blur' }
    ],
    repassword: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { pattern: /^\S{6,12}$/, message: '密码必须是6-12位的非空字符', trigger: 'blur' },
        {
            validator: (rule, value, callback) => {
                if (value !== formData.value.password) {
                    callback(new Error('两次输入的密码不一致'))
                } else {
                    callback()
                }
            }, trigger: 'blur'
        }
    ]
}

const form = ref()
//注册预校验
const register = async () => {
    await form.value.validate()
    await userRegisterService(formData.value)
    ElMessage.success('注册成功')
    isRegister.value = false
}

//登录预校验
// //     await form.value.validate()
// await useLoginService(formData.value)
//     //调用settoken方法，将token传入pinia中
//     // useUserStore.setToken(res.token)
//     ElMessage.success('登录成功')
//     router.push('/home/music')
const login = () => {
    const { username, password } = formData.value
    form.value.validate(async (valid) => {
        //valid：所有表单校验通过才为true
        if (valid) {
            await userStore.getUserInfo({ username, password })
            ElMessage({ type: 'success', message: '登陆成功' })
            router.push('/home/music')
        }
    })
}

//登陆注册切换时，输入框重置
watch(isRegister, () => {
    formData.value = {
        username: '',
        password: '',
        repassword: ''
    }
})

onMounted(() => {

})
</script>

<template>
    <el-row class="login-page">
        <el-col :span="12" class="bg"></el-col>

        <el-col :span="6" :offset="3" class="form">
            <!-- 注册 -->
            <el-form ref="form" size="large" autocomplete="off" v-if="isRegister" :model="formData" :rules="rules">
                <el-form-item>
                    <h1>注册</h1>
                </el-form-item>

                <el-form-item prop="username">
                    <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="formData.username"></el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input :prefix-icon="Lock" type="password" placeholder="请输入密码"
                        v-model="formData.password"></el-input>
                </el-form-item>

                <el-form-item prop="repassword">
                    <el-input :prefix-icon="Lock" type="password" placeholder="请输入再次密码"
                        v-model="formData.repassword"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="register">
                        注册
                    </el-button>
                </el-form-item>

                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="isRegister = false">
                        ← 返回
                    </el-link>
                </el-form-item>
            </el-form>
            <!-- 登录 -->
            <el-form ref="form" size="large" autocomplete="off" :model="formData" :rules="rules" v-else>
                <el-form-item>
                    <h1>登录</h1>
                </el-form-item>

                <el-form-item prop="username">
                    <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="formData.username"></el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input name="password" :prefix-icon="Lock" type="password" placeholder="请输入密码"
                        v-model="formData.password"></el-input>
                </el-form-item>

                <el-form-item class="flex">
                    <div class="flex">
                        <el-checkbox>记住我</el-checkbox>
                        <el-link type="primary" :underline="false">忘记密码？</el-link>
                    </div>
                </el-form-item>

                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space @click="login">登录</el-button>
                </el-form-item>

                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="isRegister = true">
                        注册 →
                    </el-link>
                </el-form-item>

            </el-form>
        </el-col>
    </el-row>

</template>

<style lang="scss" scoped>
.login-page {
    height: 100vh;
    background-color: #fff;

    .bg {
        background: url('@/assets/sllh-login.png');
        margin-top: 20px;
        margin-left: 20px;
        background-repeat: no-repeat;
        border-radius: 20px
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;

        .title {
            margin: 0 auto;
        }

        .button {
            width: 100%;
        }

        .flex {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }

    h1 {
        font-weight: bolder;
        font-size: 20px;
    }
}
</style>
