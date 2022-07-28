// 1

const addClass = document.querySelector('#grow-me')
addClass.classList.add('big')

//2

const removeClass = document.querySelector('#shrink-me')
removeClass.classList.remove('big')

// 3
const listNames = document.getElementsByTagName("li");
console.log(listNames[0].innerText);
console.log(listNames[1].innerText);
console.log(listNames[2].innerText);

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

