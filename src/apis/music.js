import request from '@/utils/request'

//获取歌单数据
export const musicGetMusicList = () => {
    return request({
        url:'music/list',
        method:'GET'
    })
}

//获取歌曲数据
export const musicGetMusic = ()=>{
    return request({
        url:'music/musics',
        method:'GET'
    })
}

//获取mv数据
export const musicGetMusicvideo=()=>{
    return request({
        url:'music/musics',
        method:'GET'
    })
}