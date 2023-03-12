let avatar_key = '000';

function displayAllFaces(){
    const skin_assets = ['skin/green.png', 'skin/red.png', 'skin/yellow.png']
    let counter = 0;

    skin_assets.forEach(function (img){
        let newSkinAsset = document.createElement('img');
        newSkinAsset.src = '/assets/emoji-assets/' + img;
        newSkinAsset.id = counter;
        newSkinAsset.addEventListener('click', function (){selectImage(newSkinAsset, 'face_select')}, false);


        document.getElementById('face_select').appendChild(newSkinAsset);
        counter += 1;
    });
}

function displayAllEyes() {
    const eye_assets = ['eyes/closed.png', 'eyes/laughing.png', 'eyes/long.png', 'eyes/normal.png', 'eyes/rolling.png', 'eyes/winking.png'];
    let counter = 0;

    eye_assets.forEach(function (img) {
        let newEyeAsset = document.createElement('img');
        newEyeAsset.src = '/assets/emoji-assets/' + img;
        newEyeAsset.id = counter;
        newEyeAsset.addEventListener('click', function (){selectImage(newEyeAsset, 'eye_select')}, false);

        document.getElementById('eye_select').appendChild(newEyeAsset);

        counter += 1;
    });
}

function displayAllMouths() {
    const mouth_assets = ['mouth/open.png', 'mouth/sad.png', 'mouth/smiling.png', 'mouth/straight.png', 'mouth/surprise.png', 'mouth/teeth.png'];
    let counter = 0;

    mouth_assets.forEach(function (img) {
        let newMouthAsset = document.createElement('img');
        newMouthAsset.src = '/assets/emoji-assets/' + img;
        newMouthAsset.id = counter;
        newMouthAsset.addEventListener('click', function (){selectImage(newMouthAsset, 'mouth_select')}, false);

        document.getElementById('mouth_select').appendChild(newMouthAsset);
        counter += 1;
    });
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function selectImage(img, id){
    switch (id){
        case 'face_select':
            avatar_key = avatar_key.replaceAt(0, img.id);
            break;
        case 'eye_select':
            avatar_key = avatar_key.replaceAt(1, img.id);
            break;
        case 'mouth_select':
            avatar_key = avatar_key.replaceAt(2, img.id);
            break;
    }

    for(let i = 0; i < document.getElementById(id).childNodes.length; i ++){
        let current_child = document.getElementById(id).children.item(i);
        current_child.style.borderColor = 'black'
        current_child.style.borderWidth = '1px';
    }

    img.style.borderColor = 'green';
    img.style.borderWidth = '3px';
}
