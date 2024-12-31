//选择音乐')
function choseMusic(e) {
    musicArray.forEach(function(i) {
        i.id=' '
    })
    e.id = 'active'

    document.getElementById('title').children[0].innerHTML = e.children[0].innerHTML
    document.getElementById('artist').children[0].innerHTML = e.children[1].innerHTML
    document.getElementById('CD').children[0].src = coverFilesArr[Number(e.getAttribute('data-index'))]
    musicAudio.pause()
    musicAudio.src = filesURL[Number(e.getAttribute('data-index'))]
    musicAudio.currentTime = 0
    musicAudio.play()
    if (interval == null) {
        startLyric()
    }
    currentLyric = 0
    
    document.getElementById('playButton').innerHTML = SVGPlayButton

    // alert('歌曲地址：' + filesURL[Number(e.getAttribute('data-index'))])
}

let music = document.getElementsByClassName('musicListChild')
let musicArray = []
function buzhidaomingzisuibianba() {
    music = document.getElementsByClassName('musicListChild')
    musicArray = []
    for (let i = 0; i < music.length; i++) {
        musicArray.push(music[i])
    }
    
    musicArray.forEach(function(e) {
        e.id=' '
        e.addEventListener('click', function() {
            choseMusic(e)
        })
    })
}
buzhidaomingzisuibianba()

//歌词
const lyrics = document.getElementById('lyricBox')
let lyricsArray = []
for (let i = 0; i < lyrics.children.length; i++) {
    lyricsArray.push(lyrics.children[i])
}

let currentLyric = 0
let interval = null
function showLyric(index) {
    lyricsArray.forEach(function(e) {
        e.style.display = 'none'
    })
    let last,now,next
    if (index-1 >= 0) {
        last = lyricsArray[index-1]
        last.style.display = 'block'
        last.setAttribute('class', 'last')
    }
    now = lyricsArray[index]
    if (index+1 < lyricsArray.length) {
        next = lyricsArray[index+1]
        next.style.display = 'block'
        next.setAttribute('class', 'next')
    }
    now.style.display = 'block'
    now.setAttribute('class', 'now')
}
// let lyricsArray = []
function startLyric() {
    interval = setInterval(function() {
        if (currentLyric >= lyricsArray.length) {
            currentLyric = 0
        }
        showLyric(currentLyric)
        currentLyric++

    }, 1000)
}



//把文件转成base64存储在json中
//每次请求创建临时对象URL，在切换歌曲时销毁对象URL，防止内存泄漏
//URL.revokeObjectURL(url);
//所有索引放在index.json中
//用户访问仅上传index.json或本地访问index.json和music文件夹