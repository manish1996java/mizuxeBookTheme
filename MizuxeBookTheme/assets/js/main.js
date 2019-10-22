console.log("okk");
// window.addEventListener('open',()=>{
//     alert("open");
// })
window.addEventListener('load',()=>{
    console.log("its work")
})
window.addEventListener('online',()=>{
    alert("online");
})
window.addEventListener('offline',()=>{
    alert("ofline");
})
// window.addEventListener('blur',()=>{
//     alert("blur");
// })
// window.addEventListener('close',()=>{
//     alert("ofline");
// })
window.addEventListener('click',(event)=>{
    console.log("client",event.clientX);
    console.log("client",event.clientY);
    console.log("offsetX",event.offsetX);
    console.log("offsety",event.offsetY);
})
window.addEventListener('keyup',()=>{
    console.log("key up press");
})