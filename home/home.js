let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let counter = 0;
let len = items.length -1;


next.onclick = function(){
    counter+= 1;
    if(counter>len){
        counter = 0;
    }
    reloadSlider()
}

let refresh = setInterval(() => {
    next.click()
}, 5000);

prev.onclick = function(){
    counter-= 1;
    if(counter<0){
        counter = len;
    }
    reloadSlider()

}

function reloadSlider(){
    let checkleft = items[counter].offsetLeft;
    list.style.left = -checkleft + 'px';
    clearInterval(refresh);
    refresh = setInterval(()=>{next.click()}, 5000);
}



