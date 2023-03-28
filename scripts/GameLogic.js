
const num_pairs = 6;
const skin_assets = ['skin/green.png', 'skin/red.png', 'skin/yellow.png']
const eye_assets = ['eyes/closed.png', 'eyes/laughing.png', 'eyes/long.png', 'eyes/normal.png', 'eyes/rolling.png', 'eyes/winking.png'];
const mouth_assets = ['mouth/open.png', 'mouth/sad.png', 'mouth/smiling.png', 'mouth/straight.png', 'mouth/surprise.png', 'mouth/teeth.png'];
const score_multiplier = 100;

let cards = [];
let found_cards = [];
let click_div_buffer = [];
let click_card_buffer = [];

let start_time = 0;
let end_time = 0;
let time_taken_secs = 0;

let score = 0;
let total_attempts = 1;

let card = {
    mouth: '',
    skin: '',
    eyes: '',
    id: null,
    unique_id: null
};


function setUpGame(){
    document.getElementsByClassName('game-container')[0].style.gridTemplateColumns = 'auto '.repeat(num_pairs);
    for(let i = 0; i < num_pairs*2; i ++){
        let front_div = document.createElement('div');
        let main_div = document.createElement('div');

        front_div.className = 'front-card-container';
        front_div.id = i.toString();

        main_div.className = 'main-card-container';
        main_div.appendChild(front_div);
        document.getElementsByClassName('game-container')[0].appendChild(main_div);

    }

    let temp = Object.create(cards);
    for(let i = temp.length-1; i >=0; i --){
        let random_index = Math.floor(Math.random() * temp.length);

        document.getElementById(i.toString()).addEventListener('click', () => {cardClick(document.getElementById(i.toString()))}, false);

        addCardToDiv(document.getElementById(i.toString()), temp[random_index]);
        temp.splice(random_index, 1);
    }
}

function addCardToDiv(div, card){
    let mouth_img = document.createElement("img");
    mouth_img.className = "card-img";
    mouth_img.src = card.mouth;
    let skin_img = document.createElement("img");
    skin_img.className = "card-img";
    skin_img.src = card.skin;
    let eyes_img = document.createElement("img");
    eyes_img.className = "card-img";
    eyes_img.src = card.eyes;

    let same_card_value = document.createElement('input');
    same_card_value.hidden = true;
    same_card_value.value = card.unique_id;
    same_card_value.id = 'pair_id';

    div.appendChild(skin_img);
    div.appendChild(mouth_img);
    div.appendChild(eyes_img);
    div.appendChild(same_card_value);
}

function checkWin(){
    if(found_cards.length === cards.length){
        winModal();
    }
}

function winModal(){
    end_time = Date.now();

    setTimeout(() => {
        for(let i = 0; i < document.getElementsByClassName('card-img').length; i ++){
            document.getElementsByClassName('card-img')[i].style.visibility = 'hidden';
        }
        document.getElementsByClassName('game-container')[0].style.visibility = 'hidden';
    }, 500);


    time_taken_secs = (end_time - start_time) / 1000;
    score = Math.ceil(time_taken_secs/total_attempts) * score_multiplier;

    document.getElementById("win-container").style.visibility ='visible';
    document.getElementById('score_label').innerHTML = "Score: " + score;
    document.getElementById('time_label').innerHTML = "Time Taken: " + time_taken_secs + "s";
}

function onQuitClick(){
    let score_json = {
        'score': score,
        'time': time_taken_secs,
        'attempts': total_attempts
    }
    // TODO post request to leaderboard
}

function onTryAgainClick(){

    // replace with /html/
    window.location.replace("/web-dev-2023/pairs.php");
}

function cardClick(div){
    // getting the card that is clicked
    // disable any other clicking

    for(let c = 0; c < cards.length; c ++){
        let cardClicked = cards[c];
        if(cardClicked.unique_id == div.childNodes[3].value){
            // <-- flip animation here -->
            if(found_cards.indexOf(cardClicked) === -1){
                flip(div);
                click_card_buffer.push(cardClicked);
                click_div_buffer.push(div);
                break;
            }
        }
    }

    // when two cards have been clicked
    if(click_div_buffer.length > 1 && click_card_buffer.length > 1) {
        let c1 = click_div_buffer.pop();
        let c2 = click_div_buffer.pop();

        let card_1 = click_card_buffer.pop();
        let card_2 = click_card_buffer.pop();

        click_div_buffer = [];
        click_card_buffer = [];

        if (card_1.id === card_2.id && card_1.unique_id !== card_2.unique_id) {
            // if the card is a match
            found_cards.push(card_1);
            found_cards.push(card_2);
        } else {
            // <-- flip animation here (flip back) -->]
            total_attempts += 1;
            setTimeout(() => {flipBack(c1);}, 500);
            setTimeout(() => {flipBack(c2);}, 500);
        }
    }

    //checking if the user has won
    checkWin();
}

function makeDeck(){
    let unique_id = 0;

    for(let i = 0; i < num_pairs; i ++){
        let rand_mouth = Math.floor(Math.random() * mouth_assets.length);
        let rand_skin = Math.floor(Math.random() * skin_assets.length);
        let rand_eyes = Math.floor(Math.random() * eye_assets.length);

        let c1 = Object.create(card);
        c1.id = i;
        c1.mouth = "/assets/emoji-assets/" + mouth_assets.at(rand_mouth);
        c1.skin = "/assets/emoji-assets/" + skin_assets.at(rand_skin);
        c1.eyes = "/assets/emoji-assets/" + eye_assets.at(rand_eyes);
        c1.unique_id = unique_id;
        unique_id += 1;

        let c2 = Object.create(card);
        c2.id = i;
        c2.mouth = "/assets/emoji-assets/" + mouth_assets.at(rand_mouth);
        c2.skin = "/assets/emoji-assets/" + skin_assets.at(rand_skin);
        c2.eyes = "/assets/emoji-assets/" + eye_assets.at(rand_eyes);
        c2.unique_id = unique_id;
        unique_id += 1;

        cards.push(c1);
        cards.push(c2);
    }
}

function flip(div){
    for(let i = 0; i < div.childNodes.length; i ++){
        div.childNodes[i].style.visibility = 'visible';
    }
}

function shake(div){

}

function flipBack(div) {
    for (let i = 0; i < div.childNodes.length; i++) {
        div.childNodes[i].style.visibility = 'hidden';
    }
}

function start() {

    // hiding the start button and showing the card pane
    document.getElementsByClassName('game-container')[0].style.visibility = 'visible';
    document.getElementById("start-btn").style.visibility = 'hidden';

    makeDeck();
    setUpGame();

    start_time = Date.now();
}