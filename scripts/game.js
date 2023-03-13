let isStart = false;

function onClickStart(){
    for(let i = 0; i < document.getElementsByClassName("game_splash").length; i ++){
        document.getElementsByClassName("game_splash").item(i).hidden = true;
    }
    isStart = true;
}

