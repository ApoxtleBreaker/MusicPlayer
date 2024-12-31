//监听空格键播放音乐
let MusicPlayKey = ' '
let MusicNextKey = 'ArrowDown'
let MusicPrevKey = 'ArrowUp'
let MusicbackwardKey = 'ArrowLeft'
let MusicforwardKey = 'ArrowRight'
//监听空格键播放音乐
document.addEventListener('keydown', function(event) {
    if (event.key === MusicPlayKey) {
        event.preventDefault()
        playMusic()
    }})
    

//监听上箭头上一首
document.addEventListener('keydown', function(event) {
    if (event.key === MusicPrevKey) {
        event.preventDefault()
        lastMusic()
    }})

//监听下箭头下一首
document.addEventListener('keydown', function(event) {
    if (event.key === MusicNextKey) {
        event.preventDefault()
        nextMusic()
    }})

//左箭头快退
document.addEventListener('keydown', function(event) {
    if (event.key === MusicbackwardKey) {
        event.preventDefault()
        backwardMusic()
    }})

//右箭头快进
document.addEventListener('keydown', function(event) {
    if (event.key === MusicforwardKey) {
        event.preventDefault()
        forwardMusic()
    }})

    
    

setTimeout(function() {
    console.clear()
    console.log(`
    快捷键对照表
    空格键播放/暂停: [Space]
    上箭头上一首：[ArrowUp]
    下箭头下一首：[ArrowDown]
    左箭头快退：[ArrowLeft]
    右箭头快进：[ArrowRight]
        `)  
}, 1000)