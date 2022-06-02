const header = document.querySelector("h1");
let s = 0 ;

function a () {
    s++
    header.innerHTML = s;
}

setInterval(a,100)