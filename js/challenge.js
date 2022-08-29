//Practice interacting with the DOM

const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const pauseButton = document.getElementById('pause');
const heart = document.getElementById('heart');

const decrementHandler = () => {
    const grabCounter = document.getElementById('counter');
    const currentCount = parseInt(grabCounter.textContent);
    grabCounter.innerText = currentCount - 1;
};

const incrementHandler = () => {
    const grabCounter = document.getElementById('counter');
    const currentCount = parseInt(grabCounter.textContent);
    grabCounter.innerText = currentCount + 1;
};

//Heart button
const likeList = document.querySelector('.likes');
let likeCounter = 0;
heart.addEventListener('click', () => {
    const likedValue = document.getElementById('counter').textContent;
    const likedNumber = parseInt(likedValue, 10);
    const likeList = document.querySelector('.likes');
    
    const li = document.createElement('li');
    
    function countClicks(){
        if(li.getAttribute('data-num')===`${document.getElementById('counter').innerHTML}`) {
            likeCounter=parseInt(likeCounter)+parseInt(1);
            li.innerHTML = `${likedNumber} has been liked ${likeCounter} time(s)`;
        }

        // likeCounter=parseInt(likeCounter)+parseInt(1);
        // li.innerHTML = `${likedNumber} has been liked ${likeCounter} time(s)`;

    }
    li.setAttribute('data-num', `${parseInt(document.getElementById('counter').textContent)}`)
    heart.onclick = countClicks();
    likeList.appendChild(li);
});

//Time counter
function timerCount() {
    setInterval(timer, 1000);       

    function timer() {
        if(!pause) {                        
            counterText = document.getElementById('counter').textContent;
            counterNumber = parseInt(counterText, 10);
            counterNumber += 1;
            document.getElementById('counter').textContent = counterNumber;            
        }
    }
    

    minus.addEventListener('click', () => decrementHandler());
    plus.addEventListener('click', () => incrementHandler());
}

timerCount();

//Pause, resume button actions
let pause = false;

pauseButton.addEventListener('click', () => {

    if (pause = true && pauseButton.getAttribute('id')==='pause') {
        pauseButton.innerHTML = `resume`;
        pauseButton.setAttribute('id', 'resume');

        minus.setAttribute('disabled', 'true');
        plus.setAttribute('disabled', 'true');
        heart.setAttribute('disabled', 'true');
    } else {
        pauseButton.innerHTML = `pause`;
        pauseButton.setAttribute('id', 'pause');

        minus.removeAttribute('disabled');
        plus.removeAttribute('disabled');
        heart.removeAttribute('disabled');
    }    
});

//Add comments to the page
const form = document.querySelector('#comment-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    userComment = document.querySelector('#comment-input').value;
    const list = document.querySelector('#list');
    const p = document.createElement('p');
    
    p.textContent = userComment;
    list.appendChild(p);  

    form.reset();  
});
