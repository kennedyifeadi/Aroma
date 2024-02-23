const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")
const quantityAmount = document.querySelector("#Quantity").value
const revDetails = document.getElementById('reviews_details')
const desDetails = document.getElementById('description_details')
const comDetails = document.getElementById('comments_details')
const specDetails = document.getElementById('specification_details')
const description = document.getElementById('description')
const specification = document.getElementById('specification')
const reviews = document.getElementById('reviews')
const commennts = document.getElementById('commennts')


function addOne(){
    quantityAmount.innerHtml = quantityAmount + 1
}

function displayDescription(){
    description.classList.add('fade_in')
    specification.classList.remove('fade_in')
    reviews.classList.remove('fade_in')
    commennts.classList.remove('fade_in')


    desDetails.style.display = 'flex'
    comDetails.style.display = 'none'
    specDetails.style.display = 'none'
    revDetails.style.display = 'none'

}

function displaySpecification(){
    description.classList.remove('fade_in')
    specification.classList.add('fade_in')
    reviews.classList.remove('fade_in')
    commennts.classList.remove('fade_in')


    specDetails.style.display = 'flex'
    desDetails.style.display = 'none'
    comDetails.style.display = 'none'
    revDetails.style.display = 'none'
}

function displayComments(){
    description.classList.remove('fade_in')
    specification.classList.remove('fade_in')
    reviews.classList.remove('fade_in')
    commennts.classList.add('fade_in')


    comDetails.style.display = 'flex'
    revDetails.style.display = 'none'
    specDetails.style.display = 'none'
    desDetails.style.display = 'none'

}

function displayReviews(){
    description.classList.remove('fade_in')
    specification.classList.remove('fade_in')
    reviews.classList.add('fade_in')
    commennts.classList.remove('fade_in')


    revDetails.style.display = 'flex'
    specDetails.style.display = 'none'
    desDetails.style.display = 'none'
    comDetails.style.display = 'none'
}

const moblieViewIcon = document.querySelector('.moblieViewIcon');
const moblieViewMenuIcon = document.querySelector('.moblieViewMenuIcon');
const moblieViewMenuIconClose = document.querySelector('.moblieViewMenuIconClose');
const navMiddle = document.querySelector('.navMiddle')
const navRight = document.querySelector('.navRight')
moblieViewIcon.addEventListener('click', (e)=>{
    moblieViewMenuIcon.classList.toggle('displayOff');
    // console.log(moblieViewMenuIcon);
    moblieViewMenuIconClose.classList.toggle('displayOn');
    navMiddle.classList.toggle('navMiddleOpen')
    navRight.classList.toggle('navRightOpen')
})