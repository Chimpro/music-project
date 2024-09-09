<template>
    <div class="box">
        <div class="container">
            <div class="musicvideo">
                <video :src="musicvideoData.musicVideo"></video>
            </div>
            <div class="msg">
                <div class="singename">
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
const musicvideoData = {
    musicVideo: '../../../assets/musicvideo/musicvideo.mp4',
    singName: '稻香',
    author: '周杰伦'
}
</script>


<style scoped lang="scss">
.box {
    .container {
        .musicvideo {
            height: 600px;
            width: 1200px;
        }
    }
}
</style>