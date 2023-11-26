const ball = document.getElementById('ball');
document.addEventListener('keydown',handleKeyPress);
let positionHorizontal = 0;
let positionVertical = 0;

function handleKeyPress(e){
    if (e.code === 'ArrowLeft'){
        positionHorizontal = positionHorizontal - 20;
    }
    if(e.code === 'ArrowRight'){
        positionHorizontal = positionHorizontal + 20;
    }
    if(positionHorizontal < 0){
        positionHorizontal = 0;
    }
    if(e.code === 'ArrowUp'){
        positionVertical = positionVertical - 20;
    }
    if(e.code === 'ArrowDown'){
        positionVertical = positionVertical + 20;
    }
    if(positionVertical < 0){
        positionVertical = 0;
    }
    refresh();
}
function refresh(){
    ball.style.left = positionHorizontal + 'px';
    ball.style.top = positionVertical + 'px';
}
