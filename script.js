"use strict";

const wrapper = document.querySelector('.wrapper');
const left = document.querySelector('.left');
const right = document.querySelector('.right');


let index = 0;
let data =
    [
        "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/26-04-2021_Unsplash_forest.jpg/image1440x560cropped.jpg",
        "https://images.theconversation.com/files/305837/original/file-20191209-90562-nsnsun.jpg?ixlib=rb-1.1.0&rect=284%2C696%2C1934%2C965&q=45&auto=format&w=1356&h=668&fit=crop",
        "https://www.featureforest.ee/wp-content/uploads/2016/10/bg6.jpg",
        "https://en.korpiforrest.fi/wp-content/uploads/2019/10/polku_004.jpg"
    ]
right.onclick =  goRight;

left.onclick = goLeft;

function goRight(){
    index++;
    if(index > data.length - 1){
        index = 0;
    }
    const newImg = document.createElement('img');
    newImg.src = `${data[index]}`
    wrapper.append(newImg);
    wrapper.scrollTo(wrapper.scrollWidth, 0)
    setTimeout( () => {
        wrapper.children[0].remove();
        newImg.classList.add('currentImg');
    }, 500)
}

function goLeft(){
    index--;
    if(index < 0){
        index = data.length - 1;
    }
    const current = document.querySelector('.currentImg');
    const newImg = document.createElement('img');
    newImg.src = `${data[index]}`
    current.classList.add('next');
    newImg.classList.add('previous');
    wrapper.prepend(newImg);
    setTimeout( () => {
        current.classList.remove('next');
        newImg.classList.remove('previous');
    }, 500)
    setTimeout( () => {
        newImg.classList.add('currentImg');
        wrapper.children[wrapper.children.length - 1].remove();
    }, 500)
}

function randomDirection(){
    if(Math.random() > 0.5){
        goRight()
    }else {
        goLeft()
    }
}

setInterval(randomDirection, 5000);







