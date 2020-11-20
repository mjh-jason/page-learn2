//开始学习js
let myheading = document.querySelector('h1');
myheading.textContent = 'hello_world'

function multiply(num1,num2){
    let result = num1*num2;
    return result;
}

// document.querySelector("html").onclick = function(){
//     alert("别点了，淦")
// }

let myImage = document.querySelector("img");
myImage.onclick = function(){
    let mysrc = myImage.getAttribute("src")
    if(mysrc === './images/01.png'){
        myImage.setAttribute("src","./images/03.png")
    }else{
        myImage.setAttribute("src","./images/01.png")
    }
}

let mybutton = document.querySelector('button')
let myh1 = document.querySelector('h1')

function setUsername(){
    let myname = prompt('what is your name');
    localStorage.setItem('name',myname);
    myheading.textContent = 'Mozilla酷毙了' + myname;
}

if(!localStorage.getItem("name")){
    setUsername();
}else{
    let storedName = localStorage.getItem('name');
    myheading.textContent = 'Mozilla 酷毙了，' + storedName;
}

mybutton.onclick = function(){
    setUsername();
}