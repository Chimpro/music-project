import { ref } from "vue"

//解析歌词数据
export const changeLyrics = (dataStr) => {
    const lines = dataStr.split('\n')
    const lyricsData = []
    for (const line of lines) {
        const match = line.match(/(\d{2}):(\d{2})(.+)/)
        if (match) {
            const [, minutes, seconds, content] = match
            const timestamp = parseInt(minutes) * 60 + parseInt(seconds)
            lyricsData.push({ timestamp, content })
        }
    }
    return lyricsData
}
