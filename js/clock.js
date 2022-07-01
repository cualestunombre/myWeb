const clock = document.querySelector(".clock");
function handleClock(){
    const date = new Date();
    const h = date.getHours().toString().padStart(2,"0");
    const m = date.getMinutes().toString().padStart(2,"0");
    const s = date.getSeconds().toString().padStart(2,"0");
    clock.innerText=h+":"+m+":"+s;
}
setInterval(handleClock,10);
