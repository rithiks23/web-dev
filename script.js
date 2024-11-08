let score = 0;
const gameArea = document.getElementById('gameArea');
const character = document.getElementById('character');
const fallingObject = document.getElementById('fallingObject');
const scoreDisplay = document.getElementById('score');
let fallingSpeed = 2;

function moveCharacter(event) {
    const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (event.key === "ArrowLeft" && left > 0) {
        character.style.left = (left - 20) + 'px';
    } else if (event.key === "ArrowRight" && left < 350) {
        character.style.left = (left + 20) + 'px';
    }
}

function dropObject() {
    let objectTop = parseInt(window.getComputedStyle(fallingObject).getPropertyValue("top"));
    if (objectTop >= 500) {
        resetObject();
    } else {
        fallingObject.style.top = (objectTop + fallingSpeed) + 'px';
    }

    // Collision detection
    const characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    const objectLeft = parseInt(window.getComputedStyle(fallingObject).getPropertyValue("left"));

    if (objectTop >= 450 && objectLeft > characterLeft - 30 && objectLeft < characterLeft + 50) {
        score++;
        scoreDisplay.textContent = score;
        resetObject();
    }
}

function resetObject() {
    fallingObject.style.top = '-30px';
    fallingObject.style.left = Math.floor(Math.random() * 370) + 'px';
}

document.addEventListener('keydown', moveCharacter);
setInterval(dropObject, 20);
