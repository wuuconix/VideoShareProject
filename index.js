let search = window.location.search
let code = ""
let videoUrl = ""
if (search.slice(0, 3) == "?c=") //输入了4位shortCode
    code = search.slice(3)
else if (search.slice(0, 5) == "?url=") //输入了完整的url
    videoUrl = search.slice(5)

let input = document.querySelector("input")

const updateVideo = (url) => {
    let video = document.querySelector("video")
    let source = document.querySelector("source")
    source.src = url
    video.load() //调用load加载视频
}

if (code) {
    updateVideo(`https://1drv.conix.tk/${code}`)
    input.classList.add("hide")
} else if (videoUrl) { //提供了视频url
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
