const changingText = document.getElementById('main-topic');




function changeColor(){
    const colors = ['green','red','blue','white'];
    const randomNumberToPickColor = Math.round(Math.random()*100)%4;
    switch (randomNumberToPickColor) {
        case 0:
            changingText.style.color = colors[0];
            break;
        case 1:
            changingText.style.color = colors[1];
            break;
        case 2:
            changingText.style.color = colors[2];
            break;
    
        default:
            changingText.style.color = colors[3];
            break;
    }


}

setInterval(changeColor, 2000);







