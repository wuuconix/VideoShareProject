let search = window.location.search
let videoUrl = search.slice(search.indexOf("=") + 1)
let input = document.querySelector("input")

const updateVideo = (url) => {
    let video = document.querySelector("video")
    let source = document.querySelector("source")
    source.src = url
    video.load() //调用load加载视频
}

if (videoUrl) { //提供了视频url
    updateVideo(videoUrl)
    input.classList.add("hide")
} else { //没有提供
    input.addEventListener('keypress', (e) => {
        if (e.key == "Enter") {
            let videoUrl = input.value
            let url = window.location.origin + `/?url=${videoUrl}`
            window.location.replace(url)
        }
    })
}
