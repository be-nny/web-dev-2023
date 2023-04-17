const cookie = (cookie_name) =>{
    // Construct a RegExp object as to include the variable name
    const re = new RegExp(`(?<=${cookie_name}=)[^;]*`);
    try{
        return document.cookie.match(re)[0];	// Will raise TypeError if cookie is not found
    }catch{
        return null;
    }
}

function getNavbarIcon(){
    const mouth_assets = ['mouth/open.png', 'mouth/sad.png', 'mouth/smiling.png', 'mouth/straight.png', 'mouth/surprise.png', 'mouth/teeth.png'];
    const eye_assets = ['eyes/closed.png', 'eyes/laughing.png', 'eyes/long.png', 'eyes/normal.png', 'eyes/rolling.png', 'eyes/winking.png'];
    const skin_assets = ['skin/green.png', 'skin/red.png', 'skin/yellow.png']

    const mouth_path = mouth_assets[cookie('avatar_num').toString()[2]];
    const eye_path = eye_assets[cookie('avatar_num').toString()[1]];
    const skin_path = skin_assets[cookie('avatar_num').toString()[0]];

    let mouth = document.createElement('img');
    mouth.src = '/assets/emoji-assets/' + mouth_path;
    mouth.className = 'navAvatarOverlay';

    let eye = document.createElement('img');
    eye.src = '/assets/emoji-assets/' + eye_path;
    eye.className = 'navAvatarOverlay';

    let skin = document.createElement('img');
    skin.src = '/assets/emoji-assets/' + skin_path;
    skin.className = 'navAvatarOverlay';

    document.getElementById('nav-bar-icon').innerHTML = null;

    document.getElementById('nav-bar-icon').appendChild(skin);
    document.getElementById('nav-bar-icon').appendChild(mouth);
    document.getElementById('nav-bar-icon').appendChild(eye);
}

