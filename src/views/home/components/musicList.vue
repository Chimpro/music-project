<template>
    <el-card class="page-container">
        <!-- header -->
        <template #header>
            <div class="header">
                <span>我的歌单</span>
                <div class="btn">
                    <el-button type="primary" @click="addList">添加歌单</el-button>
                </div>
            </div>
        </template>
        <!-- 歌单container -->
        <div class="musiclist">
            <el-table :data="musicList" style="width: 100%">
                <el-table-column index width="50" />
                <el-table-column prop="name" label="歌单名" width="180" />
                <el-table-column label="操作" align="center">
                    <!-- row就是当前行的数据，$index就是序号 -->
                    <template #default="{ row }">
                        <el-button :icon="Promotion" circle @click="goMusicList"></el-button>
                        <el-button :icon="Edit" circle type="primary" plain @click="onEdit(row,)"></el-button>
                        <el-button :icon="Delete" circle type="danger" plain @click="onDelete(row)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 弹框 -->
        <el-dialog v-model="dialogVisible" title="添加歌单" width="500" :before-close="handleClose">
            <span>添加歌单</span>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        确认
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </el-card>
</template>

<script setup>
import {
    Promotion,
    Delete,
    Edit
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const dialogVisible = ref(false)
const musicList = ref([
    {
        name: '我喜欢'
    }
])

//歌单详情页
const goMusicList = () => {
    router.push('/home/musiclistdetail')
}
//添加歌单
const addList = () => {
    dialogVisible.value = true
}
//编辑歌单
const onEdit = (row) => {
    console.log(row)
}
//删除歌单
const onDelete = (row) => {
    console.log(row)
}
</script>


<style scoped lang="scss">
.page-container {
    margin: 10px;
    min-height: 100%;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>