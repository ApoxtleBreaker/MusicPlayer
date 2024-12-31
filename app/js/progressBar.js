//G:\.code\web\creative project\ApoxtleBreaker_Yanjer\files\js\Musicplayer.js
//素材复用
//之前写的那个音乐播放器的拿过来用
//改了下变量名


musicAudio.onplay = function(){
    MusicPogressBar()
}
document.getElementById('PogressNow').style.width = '0%'
//时间保留位数
MusicPogressBarTimeIndex = 0
let progressTimeNow = 0
function setPogressTime(){
    //计算此时时间
    //为什么之前用的都是const
    let progressTimeNowA = musicAudio.currentTime// 0s时 =0
    // console.log(progressTimeNowA)// =0
    let progressTimeNow_s = (progressTimeNowA%60).toFixed(MusicPogressBarTimeIndex)// 0.xx时 0s时 =0变成了=0.xx
    //在这个位置progressTimeNowA = musicAudio.currentTime再次被触发时间变成第二个语句执行的时间
    // console.log(progressTimeNowA)// =0.xx
    // console.log(progressTimeNow_s)// 0 - 0.xx =-0.xx
    // let progressTimeNowA = musicAudio.currentTime,progressTimeNow_s = ((musicAudio.currentTime)%60).toFixed(MusicPogressBarTimeIndex)
    //但是放在同一行执行依旧有这个byd问题
    let progressTimeNow_min = Math.round((progressTimeNowA-progressTimeNow_s)/60)
    // let progressTimeNow_min = Math.floor((progressTimeNowA-progressTimeNow_s)/60)
    if(String(progressTimeNow_s).length<2){
        progressTimeNow_s = '0'+String(progressTimeNow_s)
    }else{
        progressTimeNow_s = String(progressTimeNow_s)
    }
    if(String(progressTimeNow_min).length<2){
        progressTimeNow_min = '0'+String(progressTimeNow_min)
    }else{
        progressTimeNow_min = String(progressTimeNow_min)
    }

    // progressTimeNow = `${Math.floor(progressTimeNow_min)}:${Math.floor(progressTimeNow_s)}`
    progressTimeNow = `${progressTimeNow_min}:${progressTimeNow_s}`
    //计算总时间
    let DurationA = musicAudio.duration
    let Duration_s = (DurationA%60).toFixed(MusicPogressBarTimeIndex)
    // let Duration_min = Math.floor(((DurationA-Duration_s)/60))
    let Duration_min = Math.round(((DurationA-Duration_s)/60))
    if(String(Duration_s).length<2){
        Duration_s = '0'+String(Duration_s)
    }else{
        Duration_s = String(Duration_s)
    }
    if(String(Duration_min).length<2){
        Duration_min = '0'+String(Duration_min)
    }else{
        Duration_min = String(Duration_min)
    }

    // let Duration = `${Math.floor(Duration_min)}:${Duration_s.toFixed(MusicPogressBarTimeIndex)}`
    let Duration = `${Duration_min}:${Duration_s}`
    //写入时间
    document.getElementById('PogressTimeText').innerHTML = `${progressTimeNow} / ${Duration}`
    //更新进度条
    document.getElementById('PogressNow').style.width = (progressTimeNowA/musicAudio.duration)*100+'%'
    // console.log('当前进度:'+(progressTimeNowA/musicAudio.duration)*100+'%')   //调试 
}
function MusicPogressBar(){
    setInterval(setPogressTime,100)
}


//点击进度条跳转
//!!!点击位置和实际位置任有偏移  原因位置  暂时乘系数k=1.25归位 但是音频会不对位置
//!!!屎山改着改着就正常了  不要动了
document.getElementById("PogressAll").addEventListener("click", changeProcess);

function changeProcess(e) {
    //获取点击元素的宽度
    var element = document.getElementById("PogressAll");
    var width = element.clientWidth;

    //getBoundingClientRect() 获取元素的位置
    var rect = element.getBoundingClientRect();

    //计算鼠标点击位置相对于元素的 X 坐标
    var clientX = (e.clientX - rect.left)*1.25; // 确保得到的是鼠标相对于元素左边缘的距离

    // console.log('鼠标相对于点击元素的X坐标:', clientX);//调试
    
    //计算进度
    var process = clientX /width;
    // var process_U =(clientX /width)*1.25;
    musicAudio.currentTime = process * musicAudio.duration;
    // progressTimeNow = musicAudio.currentTime;
    setPogressTime();
}