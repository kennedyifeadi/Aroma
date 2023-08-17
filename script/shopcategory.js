const addNewClass = document.querySelectorAll('.sorting');

addNewClass.forEach(sort => {
    sort.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        addNewClass.forEach(remove => {
            if (remove !== sort) {
                remove.classList.remove('open');
            }
        });
        sort.classList.toggle('open');
    });
});

document.addEventListener('click', (event) => {
    addNewClass.forEach(remove => {
        if (!remove.contains(event.target)) {
            remove.classList.remove('open');
        }
    });
});

let changeInOption = document.querySelectorAll(".option")
let currentChoice =document.querySelector('.current-choice')
 changeInOption.forEach(item =>{
    item.addEventListener("click", () => {
        currentChoice.textContent = item.textContent
     })
 })

 let changeInOptionTwo = document.querySelectorAll(".optionTwo")
let currentChoiceTwo =document.querySelector('.currentTwo-choice')
 changeInOptionTwo.forEach(item =>{
    item.addEventListener("click", () => {
        currentChoiceTwo.textContent = item.textContent
     })
 })
 
