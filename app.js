const form =document.querySelector('#form');
const content =document.querySelector('#content');

const age =prompt('How old are you?');
var n = age.toString();

if(age >= 20){
    content.style.display = 'block';
    let name = prompt('What is your name?');
    let welcom =alert('What a pretty name!')
    document.querySelector('.message').innerHTML = "Welcome" + name +"<br>" +"to Hyeeun Websidan";
    document.querySelector('#enter').className = 'granted';
    }else {
    content.style.display = 'none';
    window.location.href = 'http://www.google.com/';
    }

    const intList = ['cooking','listen music','play game','watching tv'];

    const list = document.querySelector('#list');
    
    for(let i = 0; i < intList.length; i++) {

    let itemInList = intList[i];
    let li = document.createElement('li');
    li.innerHTML = itemInList;
    list.appendChild(li);
    }

var d_t = new Date();

document.getElementById("show").innerHTML = d_t;
    
