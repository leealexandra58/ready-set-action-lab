// 1
const main = () => {

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

/* another way to do this 
document.querySelectorAll('li').forEach((node) => {
    console.log(node.innerText);
)};
*/

// 4
const link = document.querySelector('.link')
link.href = "http://www.example.com/";
link.textContent = 'somewhere'

// 5

const displayNone = document.querySelector('#hide-me')
displayNone.style.display = "none"

// 6

const displayBlock = document.querySelector('#show-me')
displayBlock.style.display = "block"

// 7

const name = document.getElementById('name').value;
console.log(name);

document.querySelector('h1').innerText = `Welcome ${name}`;

};