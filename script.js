// 1

const addClass = document.querySelector('#grow-me')
addClass.classList.add('big')

//2

const removeClass = document.querySelector('#shrink-me')
removeClass.classList.remove('big')

// 3
const resultOne = document.getElementsByClassName("list")[0].innerHTML;
console.log(resultOne);

const resultTwo = document.getElementsByClassName("list")[1].innerHTML;
console.log(resultTwo);

const resultThree = document.getElementsByClassName("list")[2].innerHTML;
console.log(resultThree);


const result = document.getElementsByTagName("li").textContent;
console.log(result);

// 4

const link = document.getElementById("link")
link.href = "http://www.example.com/";
link.textContent = 'somewhere'

// 5

const displayNone = document.querySelector('#hide-me')
displayNone.style.display = "none"

// 6
const displayBlock = document.querySelector('#show-me')
displayBlock.style.display = "block"

// 7

