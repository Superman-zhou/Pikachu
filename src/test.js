import string from "./css.js";
let n = 1
const run = ()=>{
    demo.innerText = string.substr(0,n)
    demo2.innerHTML = string.substr(0,n)
    // 把滚动条拉到可滚动的大高度
    demo.scrollTop = demo.scrollHeight
    n += 1
    if(n>string.length){
        window.clearInterval(id)
        return
    }
}
let time = 100
let id = setInterval(() => {
    run()
},time)
btnPause.onclick = ()=>{
    window.clearInterval(id)
}
btnPlay.onclick = ()=>{
    id = setInterval(() => {
        run()
    },time)
}
btnSlow.onclick = ()=>{
    window.clearInterval(id)
    time = 300
    id = setInterval(() => {
        run()
    },time)
}
btnNormal.onclick = ()=>{
    window.clearInterval(id)
    time = 50
    id = setInterval(() => {
        run()
    },time)
}
btnFast.onclick = ()=>{
    window.clearInterval(id)
    time = 0
    id = setInterval(() => {
        run()
    },time)
}