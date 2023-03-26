export function flip(div){
    for(let i = 0; i < div.childNodes.length; i ++){
        div.childNodes[i].style.visibility = 'visible';
    }
}

export function shake(div){

}

export function flipBack(div){
    for(let i = 0; i < div.childNodes.length; i ++){
        div.childNodes[i].style.visibility = 'hidden';
    }
}
