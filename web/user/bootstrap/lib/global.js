var LoadingBarStatus = false;
var build = "V1.10";
function LoadingBarListenser(){
    //谁不想要然然的加载进度呢？Bootstrap Modal打开或关闭需要时间,css动画变化可能导致bug
    //该函数位于init()被调用,理论上调用一次即可
    document.getElementById("LoadingBar").addEventListener("shown.bs.modal",function(e){LoadingBarStatus=true;});
    document.getElementById("LoadingBar").addEventListener("hidden.bs.modal",function(e){LoadingBarStatus=false;});
}