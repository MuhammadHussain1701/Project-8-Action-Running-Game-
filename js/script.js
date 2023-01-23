score = 0;
cross = true
audioBg=new Audio('music/music.mp3')
audioGameOver=new Audio("music/gameover.mp3")

setTimeout(()=>{
    audioBg.play()
},1000)
document.onkeydown = function (e) {
    // console.log("The Key Code:",e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove("animateDino")
        }, 700)
    }
    else if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinoX + 112 + 'px'


    }
    else if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = (dinoX - 112) + 'px'


    }
}


setInterval(() => {
    dino = document.querySelector(".dino")
    gameOver = document.querySelector(".gameOver")
    obstacle = document.querySelector(".obstacle")

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    offsetX = Math.abs(dx - ox)
    offsetY = Math.abs(dy - oy)

    // console.log(offsetX,offsetY)

    if (offsetX < 74 && offsetY < 52) {
        // gameOver.style.visibility = "visible";
        gameOver.innerHTML="Game Over - Reload to Start Again"
        obstacle.classList.remove("obstacleAni")
        audioGameOver.play();
        setTimeout(()=>{
            audioGameOver.pause();
            audioBg.pause()
        },1000)
    }
    else if (offsetX < 74 && cross) {
        score += 1;
        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000)


        setTimeout(() => {
            aniDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDuration = aniDuration - 0.1;
            obstacle.style.animationDuration = newDuration + 's';
            console.log("New Animation Duration:",newDuration)
        }, 500);

    }
}, 10)

function updateScore(score) {
    scoreCont.innerHTML = 'Your Score:' + score
}