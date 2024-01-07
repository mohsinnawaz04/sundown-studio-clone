// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function page3Animation(){
    var elems = document.querySelectorAll('.elem')
    var fixed = document.getElementById('fixed')

    elems.forEach((e)=>{
        e.addEventListener('mouseover', ()=>{
        var image = e.getAttribute('data-image')
        fixed.style.display = "block"
        fixed.style.backgroundImage = `url(${image})`
        fixed.style.backgroundPosition = 'center'
        })
        e.addEventListener('mouseleave', ()=>{
            fixed.style.display = 'none'
        })
    })
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 50,
        centeredSlides: true,
    });
}

page3Animation()
swiperAnimation()


var menu = document.querySelector('#menu')
var nav = document.querySelector('#nav')
var full = document.querySelector('#full-screen')   
var navimg = document.querySelector('#navimg')
var flag = 0

menu.addEventListener('click', function(){
    if (flag === 0){
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    } else {
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
})