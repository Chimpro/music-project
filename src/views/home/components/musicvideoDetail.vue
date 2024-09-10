<template>
    <div class="box">
        <el-button @click="back">返回</el-button>
        <div class="container">
            <div class="musicvideo">
                <video src="../../../assets/musicvideo/musicvideo.mp4"></video>
            </div>
            <div class="msg">
                <div class="singname">
                    {{ musicvideoData.singName }}
                </div>
                <div class="author">
                    {{ musicvideoData.author }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const musicvideoData = {
    musicVideo: '../../../assets/musicvideo/musicvideo.mp4',
    singName: '稻香',
    author: '周杰伦'
}

//返回
function back() {
    router.back()
}
</script>


<style scoped lang="scss">
.box {
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .musicvideo {
            margin-top: 20px;
            margin-bottom: 30px;

            video {
                height: 500px;
                width: 1000px;
            }
        }

        .msg {
            width: 600px;
            display: flex;
            justify-content: space-around;

            .singname,
            .author {
                font-size: 30px;
                font-weight: bold;
            }
        }
    }
}
</style>