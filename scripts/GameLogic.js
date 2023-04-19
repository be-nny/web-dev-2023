const num_pairs = 5;
const skin_assets = ['skin/green.png', 'skin/red.png', 'skin/yellow.png']
const eye_assets = ['eyes/closed.png', 'eyes/laughing.png', 'eyes/long.png', 'eyes/normal.png', 'eyes/rolling.png', 'eyes/winking.png'];
const mouth_assets = ['mouth/open.png', 'mouth/sad.png', 'mouth/smiling.png', 'mouth/straight.png', 'mouth/surprise.png', 'mouth/teeth.png'];
const score_multiplier = 1000;

let cards = [];
let found_cards = [];
let click_div_buffer = [];
let click_card_buffer = [];

let start_time = 0;
let timerInterval;
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

/**
 * Method creates card deck
 *
 * Pushes the cards onto the cards list
 * */
function makeDeck(){
    let unique_id = 0;

    for(let i = 0; i < num_pairs; i ++){
        let pair = createPair(i, unique_id, unique_id + 1);
        let c1 = pair.c1;
        let c2 = pair.c2;
        while(isDuplicate(c1)){
            pair = createPair(i, unique_id, unique_id + 1);
            c1 = pair.c1;
            c2 = pair.c2;
        }

        unique_id += 2;

        cards.push(c1);
        cards.push(c2);
    }
}

/**
 * Creates a pair of cards
 *
 * @param id {int} id of the pair of cards
 * @param c1_id {int} unique id of card 1
 * @param c2_id {int} unqiue id of card 2
 * @return Object of group of the same cards
 * */
function createPair(id, c1_id, c2_id){
    let c1 = Object.create(card);
    let c2 = Object.create(card);

    let rand_mouth = Math.floor(Math.random() * mouth_assets.length);
    let rand_skin = Math.floor(Math.random() * skin_assets.length);
    let rand_eyes = Math.floor(Math.random() * eye_assets.length);

    c1.id = id;
    c1.mouth = "/assets/emoji-assets/" + mouth_assets.at(rand_mouth);
    c1.skin = "/assets/emoji-assets/" + skin_assets.at(rand_skin);
    c1.eyes = "/assets/emoji-assets/" + eye_assets.at(rand_eyes);
    c1.unique_id = c1_id;

    c2.id = id;
    c2.mouth = "/assets/emoji-assets/" + mouth_assets.at(rand_mouth);
    c2.skin = "/assets/emoji-assets/" + skin_assets.at(rand_skin);
    c2.eyes = "/assets/emoji-assets/" + eye_assets.at(rand_eyes);
    c2.unique_id = c2_id;

    return {c1, c2};
}

/**
 * Checks to see if the card image already exists with in the deck
 *
 * @param card {Object} card to be checked
 * @return Boolean for if there is a duplicate or not
 * */
function isDuplicate(card) {
    cards.forEach((c) =>{
        if(card.eyes == c.eyes && card.skin == c.skin && card.eyes == c.eyes){
            return true;
        }
    });
    return false;
}

/**
 * Method sets up the game div to have a grid template layout
 *
 * Then assigns all the cards to a div container that is generated
 * */
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

    // assigning a card to a generated empty div
    let temp = Object.create(cards);
    for(let i = temp.length-1; i >=0; i --){
        let random_index = Math.floor(Math.random() * temp.length);

        document.getElementById(i.toString()).addEventListener('click', () => {cardClick(document.getElementById(i.toString()))}, false);

        addCardToDiv(document.getElementById(i.toString()), temp[random_index]);
        temp.splice(random_index, 1);
    }
}

/**
 * Method adds a card object to an empty div in the game container
 * @param div {div} empty div element
 * @param card {Object} card obj to be added to empty div
 *
 * */
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


/**
 * This is called after a pair has been found to check if the user has won
 * */
function checkWin(){
    if(found_cards.length === cards.length){
        setTimeout(() => {
            winModal();
            }, 1000);
    }
}

/**
 * Method makes the win container visible
 * */
function winModal(){
    clearInterval(timerInterval);

    document.getElementById('submitBtn').style.visibility = 'visible';
    score = Math.ceil(score_multiplier/(Math.log10(time_taken_secs)*total_attempts));
    document.getElementById('score_label').innerHTML = "Score: " + score;
    document.getElementById('time_label').innerHTML = "Time Taken: " + time_taken_secs + "s";
}

const cookie = (cookie_name) =>{
    // Construct a RegExp object as to include the variable name
    const re = new RegExp(`(?<=${cookie_name}=)[^;]*`);
    try{
        return document.cookie.match(re)[0];	// Will raise TypeError if cookie is not found
    }catch{
        return null;
    }
}

/**
 * If the user wants to save their score, a <code>XMLHttpRequest POST</code> request is made to
 * <code>score_post.php</code> to add the score to the server.
 *
 * -- This redirects the user back to the home page --
 *
 * */
function onQuitClick(){
    postScore();
    window.location.replace("/web-dev-2023/index.php");
}

function postScore(){
    let http = new XMLHttpRequest();
    let data = new FormData();
    const user = cookie('uname');

    const json_data = '{"' + user + '" : {"score": "' + score + '", "time": "' + time_taken_secs + '","attempts": "' + total_attempts + '"}}';

    data.append('data', JSON.stringify(json_data));
    data.append('user', user);
    http.open('POST', '/php_scripts/score_post.php', true);
    http.onload = function (){
        console.log(this.responseText);
    };
    http.send(data);
}

/**
 * If the user wants to try again, they are directed to the game page.
 * */
function onTryAgainClick(){
    // replace with /html/
    postScore();
    window.location.replace("/web-dev-2023/pairs.php");
}

/**
 * Main method for handling user input.
 *
 * Method is responsible for calling the <code>flipAnimation()</code> and <code>flipBackAnimation()</code> and adding
 * the found cards to the <code>found_cards</code> list.
 *
 * @param div {div} card that is clicked
 * */
function cardClick(div){
    // getting the card that is clicked
    // disable any other clicking
    for(let c = 0; c < cards.length; c ++){
        let cardClicked = cards[c];
        if(cardClicked.unique_id == div.childNodes[3].value){
            // <-- flip animation here -->
            if(found_cards.indexOf(cardClicked) === -1){
                flipAnimation(div);
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

            // flip them back
            setTimeout(() => {
                flipBackAnimation(c1);
                setTimeout(() => {flipBackAnimation(c2);}, 500);
            }, 800);
        }
    }

    //checking if the user has won
    checkWin();
}

/**
 * flips card front side up
 *
 * @param div {div} div element of card to be flipped
 * */
function flipAnimation(div){
    let id = null;
    let pos = 0;
    clearInterval(id);

    id = setInterval(frame, 2);
    function frame(){
        if(pos >= 180 ){
            clearInterval(id);
        } else{
            pos ++ ;
            div.style.transform = 'rotateY(' + pos + 'deg)';
            if(pos > 90){
                for(let i = 0; i < div.childNodes.length; i ++){
                    div.childNodes[i].style.visibility = 'visible';
                }
            }
        }
    }
}

/**
 * flips card back around
 *
 * @param div {div} card to be flipped back.
 */
function flipBackAnimation(div){
    let id = null;
    let pos = 180;
    clearInterval(id);

    id = setInterval(frame, 2);
    function frame(){
        if(pos <= 0){
            clearInterval(id);
        } else{
            pos --;
            div.style.transform = 'rotateY(' + -pos + 'deg)';
            if(pos < 90){
                for(let i = 0; i < div.childNodes.length; i ++){
                    div.childNodes[i].style.visibility = 'hidden';
                }
            }
        }
    }
}

/**
 * Method to start the game
 * Called when 'start button' is pressed
 * */
function start() {

    // hiding the start button and showing the card pane
    document.getElementsByClassName('game-container')[0].style.visibility = 'visible';
    document.getElementById("start-btn").style.visibility = 'hidden';
    document.getElementById("splash_img").style.visibility = 'hidden';


    makeDeck();
    setUpGame();

    start_time = Date.now();
    timerInterval = setInterval(function (){
        let current_time = Date.now() / 1000;
        time_taken_secs = Math.round(((current_time - start_time / 1000) + Number.EPSILON) * 100) / 100;
        if(!time_taken_secs.toString().includes(".")){
            time_taken_secs += ".00";
        }
        document.getElementById("timer").innerHTML = time_taken_secs;

    }, 10);
}