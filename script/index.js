const contain = document.querySelector('.mainTwo');
const firstCardWidth =contain.querySelector('.mainTwo_part').offsetWidth
const containChildrens = [...contain.children]
let isDragging = false, startX, startScrollLeft;

let cardPerView = Math.round(contain.offsetWidth / firstCardWidth)

containChildrens.slice(-cardPerView).reverse().forEach(card => {
    contain.insertAdjacentHTML('afterbegin', card.outerHTML)
});


containChildrens.slice(0, cardPerView).forEach(card => {
    contain.insertAdjacentHTML('beforeend', card.outerHTML)
})

const dragStart = (e)=>{
    isDragging = true
    contain.classList.add('disable');
    startX = e.pageX
    startScrollLeft = contain.scrollLeft
}

const dragging = (e)=>{
    if(!isDragging) return
    contain.scrollLeft = startScrollLeft - (e.pageX - startX)
}
const dragStop = ()=>{
    isDragging = false
    contain.classList.remove('disable')
}

const infiniteScroll = ()=>{
    if(contain.scrollLeft === 0){
        contain.scrollLeft = contain.scrollWidth - (2 *contain.offsetWidth);
    }else if(Math.ceil(contain.scrollLeft) === contain.scrollWidth - contain.offsetWidth){
        contain.scrollLeft = contain.offsetWidth;
    }
}

contain.addEventListener('mousedown', dragStart)
contain.addEventListener('mousemove', dragging)
document.addEventListener('mouseup', dragStop)
contain.addEventListener('scroll', infiniteScroll)


















const carousel = document.querySelector('.carousel');
const arrows = document.querySelectorAll('.mainfive .arrows i');
const secondCardWidth = carousel.querySelector('.carousel-card').offsetWidth
const carouselChildrens = [...carousel.children]


let isMoving = false, moveX, moveScrollLeft;

let cardsPerView = Math.round(carousel.offsetWidth / secondCardWidth)

carouselChildrens.slice(-cardsPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML)
})



carouselChildrens.slice(0, cardsPerView).forEach(card => {
    carousel.insertAdjacentHTML('beforeend', card.outerHTML)
})



arrows.forEach(btn =>{
    btn.addEventListener('click', ()=>{
const secondCardWidth = carousel.querySelector('.carousel-card').offsetWidth
        carousel.scrollLeft += btn.id === 'left' ? -secondCardWidth : secondCardWidth
    })
})

const moveStart =(e)=>{
    isMoving = true
    carousel.classList.add('disable')
    moveX = e.pageX
    moveScrollLeft = carousel.scrollLeft
}

const moving =(e)=>{
    if(!isMoving)return
    carousel.scrollLeft = moveScrollLeft - (e.pageX - moveX)
}

const moveStop =()=>{
    isMoving = false
    carousel.classList.remove('disable')
}

const infiniteLoop = ()=>{
    if(carousel.scrollLeft === 0){
       carousel.scrollLeft = carousel.scrollWidth - (2*carousel.offsetWidth) 
    }else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.scrollWidth = carousel.offsetWidth
    }
}

carousel.addEventListener('mousedown', moveStart)
carousel.addEventListener('mousemove', moving)
document.addEventListener('mouseup', moveStop)
carousel.addEventListener('scroll', infiniteLoop)



