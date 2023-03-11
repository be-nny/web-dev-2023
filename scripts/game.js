let isStart = false;

let player = {
    name: getCookie('uname'),
    time: 0,
    score: 0
}

const getCookie = (cookie_name) =>{
    // Construct a RegExp object as to include the variable name
    const re = new RegExp(`(?<=${cookie_name}=)[^;]*`);
    try{
        return document.cookie.match(re)[0];	// Will raise TypeError if cookie is not found
    }catch{
        return null;
    }
}

function onClickStart(){
    for(let i = 0; i < document.getElementsByClassName("game_splash").length; i ++){
        document.getElementsByClassName("game_splash").item(i).hidden = true;
    }
    isStart = true;
}