<template>
    <div class="user">
        <el-descriptions title="个人信息" direction="vertical" border style="margin: 20px">
            <el-descriptions-item label="姓名">神里绫华</el-descriptions-item>
            <el-descriptions-item label="性别">女</el-descriptions-item>
            <el-descriptions-item label="爱好">
                哈哈
            </el-descriptions-item>
            <el-descriptions-item label="个性签名">
                我是山里灵活的狗
            </el-descriptions-item>
        </el-descriptions>
        <div class="write">
            <el-button type="primary">编辑信息</el-button>
            <el-button type="warning" @click="$router.back()">退出</el-button>
        </div>
    </div>
</template>

<script setup>

</script>


<style scoped lang="scss">
.user {
    margin-left: 10px;
    margin-right: 10px;

    .write {
        margin-left: 85%;
        display: flex;
    }
}
</style>