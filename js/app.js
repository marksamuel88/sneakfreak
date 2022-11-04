
const links = document.querySelector('.links');

const navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click',function(){
    links.classList.toggle('show-links');
})

