const body = document.body;
const div = document.createElement('div');
div.innerText = "Hello there!! welcome to India"
console.log(div);
body.append(div);
const p = document.querySelector('p');
const title = document.querySelector('.title');
// remove the el from dom 

// title.remove();
// removeChild()



// Accessing the attribute

console.log(title.getAttribute("id"))
console.log(title.getAttribute("class"))

// set attribute

title.setAttribute('title', "Hello");

// remove attribute

title.removeAttribute('title');


// data attribute
// In html ==> data-test="Hello"
console.log(p.dataset.test)
console.log(title.dataset)

// set data property

p.dataset.newName = "Hi"


// class attri
// add
p.classList.add("Hello")    
// remove
p.classList.remove("Hello")

// toggle

p.classList.toggle("Hello")


// set style
p.style.backgroundColor = 'red';


// document.getElememtByClassName('') will give u nodelist to make as array use Array.from(parents)





































// function factorial(num){
//    if(num < 1){
//        return 1;
//    }else{
//     result =  num * factorial(num-1);
//     return result;
//    }
// }


// console.log(factorial(5));