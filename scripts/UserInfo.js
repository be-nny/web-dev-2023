const getCookie = (cookie_name) =>{
    // Construct a RegExp object as to include the variable name
    const re = new RegExp(`(?<=${cookie_name}=)[^;]*`);
    try{
        return document.cookie.match(re)[0];	// Will raise TypeError if cookie is not found
    }catch{
        return null;
    }
}

function setUserName(){
    if(getCookie('uname') !== null){
        document.getElementById("user_login").innerHTML = "Hello, " + getCookie('uname');
    } else{
        document.getElementById("user_login").innerHTML = "Not signed in";
    }
}

function displayAvatar(){
    avatar_key = getCookie('avatar_num');

    const mouth_assets = ['mouth/open.png', 'mouth/sad.png', 'mouth/smiling.png', 'mouth/straight.png', 'mouth/surprise.png', 'mouth/teeth.png'];
    const eye_assets = ['eyes/closed.png', 'eyes/laughing.png', 'eyes/long.png', 'eyes/normal.png', 'eyes/rolling.png', 'eyes/winking.png'];
    const skin_assets = ['skin/green.png', 'skin/red.png', 'skin/yellow.png']

    const mouth_path = mouth_assets[avatar_key[2]];
    const eye_path = eye_assets[avatar_key[1]];
    const skin_path = skin_assets[avatar_key[0]];

    let mouth = document.createElement('img');
    mouth.src = '/assets/emoji-assets/' + mouth_path;
    mouth.className = 'avatarOverlay';

    let eye = document.createElement('img');
    eye.src = '/assets/emoji-assets/' + eye_path;
    eye.className = 'avatarOverlay';

    let skin = document.createElement('img');
    skin.src = '/assets/emoji-assets/' + skin_path;
    skin.className = 'avatarOverlay';

    document.getElementById('display_avatar').innerHTML = null;

    document.getElementById('display_avatar').appendChild(skin);
    document.getElementById('display_avatar').appendChild(mouth);
    document.getElementById('display_avatar').appendChild(eye);
}
