const second1=document.getElementById("second");
const minute1=document.getElementById("minute");
const hour1=document.getElementById("hour");
const startbtn=document.getElementById("start");
const pausebtn=document.getElementById("pause");
const resumebtn=document.getElementById("resume");
const resetbtn=document.getElementById("reset");
let s=0;
let m=0;
let h=0;
let timer;
second1.innerHTML=s;
minute1.innerHTML=m;
hour1.innerHTML=h;
resumebtn.disabled=true;
pausebtn.disabled=true;
s=1;
function start()
{
    startbtn.disabled=true;
    pausebtn.disabled=false;
    timer=setInterval(()=>{
        second1.innerHTML=s;
        minute1.innerHTML=m;
        hour1.innerHTML=h;
        if(s==59)
        {
            s=-1;
            m++;
        }
        if(m==59)
        {
            m=0;
            h++;
        }
        if(h==24)
        {
            reset();
        }
        s++;
    },1000);
}
function stop()
{
    pausebtn.disabled=true;
    resumebtn.disabled=false;
    clearInterval(timer);
}
function resume()
{
    pausebtn.disabled=false;
    resumebtn.disabled=true;
    start();
}
function reset()
{
    clearInterval(timer);
    pausebtn.disabled=true;
    resumebtn.disabled=true;
    setTimeout(()=>{
        s=0;
        m=0;
        h=0;
        second1.innerHTML=s;
        minute1.innerHTML=m;
        hour1.innerHTML=h;
        startbtn.disabled=false;
    },2000);
}