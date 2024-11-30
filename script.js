// Elements
const rang = document.querySelector('.rang')
const yangilash = document.querySelector('.sanoq')
const sanoq = document.querySelector('.son')
const section = document.querySelector('.section')
const jami = document.querySelector('.jami')
let count = 0;
let sanoqCount = 0;

// Codes !
document.addEventListener('DOMContentLoaded', () => {
    sanoq.innerHTML = 0;
    jami.innerHTML = 'Jami : 0'
})

section.addEventListener('click',()=>{
    ++count;
    ++sanoqCount

    sanoq.innerHTML = sanoqCount;
    jami.innerHTML = `Jami : ${count}`;

    if(sanoqCount === 33){
        sanoqCount = 0;
        sanoq.innerHTML = sanoqCount;

        if (navigator.vibrate) {
            navigator.vibrate(200);
        }
    }
    if(sanoqCount === 99){
        if(navigator.vibrate){
            navigator.vibrate(500)
        }
    }
})

rang.addEventListener('change',()=>{
    const rangValue = rang.value;
    if(rangValue === 'qizil'){
        sanoq.style.color = 'red';
    }
    if(rangValue === 'oq'){
        sanoq.style.color = 'white'
    }
    if(rangValue === 'yashil'){
        sanoq.style.color = 'rgb(45,250,0)'
    }
})

yangilash.addEventListener('click', function() {
    count = 0;
    sanoqCount = 0;
    sanoq.innerHTML = sanoqCount;
    jami.innerHTML = `Jami : ${count}`
})