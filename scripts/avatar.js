function getEye(index){
    const fs= require('fs');
    const files = fs.readdirSync('/assets/emoji-assets/eyes');

    return files[index];

}

function getMouth(index){

}

function getSkin(index){

}

console.log(getEye(0))