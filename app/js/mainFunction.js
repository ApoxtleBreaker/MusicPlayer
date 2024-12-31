const musicAudio = document.getElementById('Eaudio')
document.getElementById('CD').style.animationName = '0'
function playMusic() {
    //暂停状态 
    if(musicAudio.src == "http://undefined.error.null/" && filesURL.length > 0){
    choseMusic(music[0])
    document.getElementById('CD').style.animationName = 'circleA'
    document.getElementById('playButton').innerHTML = SVGPlayButton
    }else{
        if(musicAudio.src.search(/undefined/) !== -1){
            // alert('请选择音乐')
            choseMusic(music[0])
            document.getElementById('CD').style.animationName = 'circleA'
            document.getElementById('playButton').innerHTML = SVGPlayButton
            return
        }
        if(musicAudio.paused){
        document.getElementById('CD').style.animationName = 'circleA'
        document.getElementById('playButton').innerHTML = SVGPlayButton

        // 先更新数据X 时间会归0
        // updateMusicSetting()
        // 更新播放器图标从|>到||
        // document.getElementById('musicStatrbutton').innerHTML = PlayingButton
        //音乐播放

            // musicAudio.src = filesURL[Number(e.getAttribute('data-index'))]
            // return
        
        musicAudio.play()
        //示波器显示
        // MusicPogressBar()
        // analyserMusic()
        }else{    
        document.getElementById('CD').style.animationName = 'unset'
        document.getElementById('playButton').innerHTML = SVGPauseButton
        // 更新播放器图标从||到|>
        // document.getElementById('musicStatrbutton').innerHTML = StartButton
        //音乐暂停
        musicAudio.pause()
        // 示波器暂停(关闭)
        // analyser.pause()
        }
    // uploaderMusicMode()
}
}

//下一首音乐
musicAudio.addEventListener('ended',autoNext)
nextMusic()
function nextMusic() {
    let active = document.getElementById('active')
    if (active == null) {
        // choseMusic(musicArray[0])
        index = 0
        return
    }else{
    let index = active.getAttribute('data-index')
    let nextIndex = Number(index) + 1
    if (nextIndex >= musicArray.length) {
        nextIndex = 0
    }
    choseMusic(musicArray[nextIndex])
    
}
scrollToActive()
}
//上一首音乐
function lastMusic() {
    let active = document.getElementById('active')
    if (active == null) {
        // choseMusic(musicArray[0])
        index = 0
        return
    }else{
    let index = active.getAttribute('data-index')
    let lastIndex = Number(index) - 1
    if (lastIndex < 0) {
        lastIndex = musicArray.length - 1
    }
    choseMusic(musicArray[lastIndex])
    
}
scrollToActive()
}

//快进
function forwardMusic() {
    musicAudio.currentTime += 5
}

//快退
function backwardMusic() {
    musicAudio.currentTime -= 5
}

function scrollToActive(){
    let active = document.getElementById('active')
    const EmusicListBox = document.getElementById('musicListBox')
    EmusicListBox.scrollTo({
        top: active.offsetTop,
        behavior: 'smooth'
    })
}

//lastButton
//nextButton
//nextButton
SVGLastButton = '<svg t="1734837580811" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5522" width="200" height="200"><path d="M803.584 134.592c-18.176-10.048-39.936-10.112-58.112 0L192 443.008l0-282.88c0-17.664-14.336-32-32-32S128 142.464 128 160.128l0 344.896C127.744 507.2 127.104 509.248 127.104 511.488S127.744 515.84 128 518.016l0 346.112c0 17.664 14.336 32 32 32s32-14.336 32-32L192 579.968l553.408 308.352C754.56 893.44 764.48 896 774.528 896s19.968-2.56 29.056-7.616c18.176-10.112 28.992-28.224 28.992-48.576L832.576 183.104C832.576 162.88 821.76 144.768 803.584 134.592zM768.192 829.248 198.016 511.488 771.328 192 768.192 829.248z" p-id="5523"></path></svg>'
SVGNextButton = '<svg t="1734837564770" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5374" width="200" height="200"><path d="M832 160.128c0-17.664-14.336-32-32-32S768 142.464 768 160.128l0 282.88L214.592 134.592c-18.176-10.112-39.936-10.048-58.112 0C138.24 144.768 127.424 162.88 127.424 183.168l0 656.64c0 20.224 10.816 38.464 29.056 48.576C165.568 893.44 175.488 896 185.472 896s19.968-2.56 29.056-7.616L768 579.968l0 284.096c0 17.664 14.336 32 32 32s32-14.336 32-32L832 160.128zM191.808 829.248 188.672 192l573.312 319.488L191.808 829.248z" p-id="5375"></path></svg>'
SVGPauseButton = '<svg t="1734837597280" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5670" width="200" height="200"><path d="M803.84 492.032 213.056 135.04C195.392 124.288 174.208 124.288 156.352 134.976 138.624 145.728 128 164.928 128 186.368l0 714.176c0 21.44 10.624 40.704 28.352 51.392C165.248 957.312 174.976 960 184.704 960c9.728 0 19.52-2.688 28.352-8.064l590.72-356.992c17.728-10.752 28.288-30.016 28.288-51.456C832.128 521.984 821.568 502.72 803.84 492.032zM189.568 891.712 187.136 193.792l578.624 349.696L189.568 891.712z" p-id="5671"></path></svg>'
SVGPlayButton = '<svg t="1734837650730" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5818" width="200" height="200"><path d="M288 128C270.336 128 256 142.336 256 160l0 768C256 945.664 270.336 960 288 960S320 945.664 320 928l0-768C320 142.336 305.664 128 288 128zM672 128C654.336 128 640 142.336 640 160l0 768c0 17.664 14.336 32 32 32s32-14.336 32-32l0-768C704 142.336 689.664 128 672 128z" p-id="5819"></path></svg>'

document.getElementById('lastButton').innerHTML = SVGLastButton
document.getElementById('nextButton').innerHTML = SVGNextButton
document.getElementById('playButton').innerHTML = SVGPauseButton
document.getElementById('lastButton').addEventListener('click',lastMusic)
document.getElementById('nextButton').addEventListener('click',nextMusic)
document.getElementById('playButton').addEventListener('click',function(){
    if(musicAudio.paused){
    document.getElementById('playButton').innerHTML = SVGPlayButton
    }else{
        document.getElementById('playButton').innerHTML = SVGPauseButton
    }
    playMusic()
})
document.getElementById('loopButton').innerText = '顺序播放'
document.getElementById('loopButton').addEventListener('click',function(e){
    console.log(nextWay)
    if(nextWay < 3){
        nextWay += 1
        if(nextWay == 1){
            document.getElementById('loopButton').innerText  = '随机播放'
        }
        if(nextWay == 2){
            document.getElementById('loopButton').innerText = '单曲循环'
        }
        if(nextWay == 3){
            document.getElementById('loopButton').innerText = '播完停止'
        }
    }else{
        nextWay = 0
        if(nextWay == 0){
            document.getElementById('loopButton').innerText = '顺序播放'
        }
    }
})
        
let nextWay = 0
function autoNext(){
    if(nextWay == 0){
        // 顺序
        nextMusic()
    }
    if(nextWay == 1){
        // 随机
        randomMusic()
    }
    if(nextWay == 2){
        // 单曲循环
        keepMusic()
    }
    if(nextWay == 3){
        //  播完停止
        return
        // endmusic()
    }
}
function randomMusic(){
    let randomIndex = Math.floor(Math.random() * musicArray.length)
    choseMusic(musicArray[randomIndex])
}
function keepMusic(){
    musicAudio.currentTime = 0
    musicAudio.play()
}

function error(text,position){
    if(text){
       alert(text)
}
    if(position){
    console.log(position)
    }
    debugger

}