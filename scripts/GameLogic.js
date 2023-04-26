/**
 * @version 2
 * @author Ben Abbott
 * */

const num_of_groups = 6;
let group_size = 2;

const skin_assets = ['skin/green.png', 'skin/red.png', 'skin/yellow.png']
const eye_assets = ['eyes/closed.png', 'eyes/laughing.png', 'eyes/long.png', 'eyes/normal.png', 'eyes/rolling.png', 'eyes/winking.png'];
const mouth_assets = ['mouth/open.png', 'mouth/sad.png', 'mouth/smiling.png', 'mouth/straight.png', 'mouth/surprise.png', 'mouth/teeth.png'];
const score_multiplier = 1000;
const level_stack = [4,3];

let cards = [];
let found_cards = [];
let click_div_buffer = [];
let click_card_buffer = [];
let level_scores = [];
let level = 1;

let start_time = 0;
let timerInterval;
let time_taken_secs = 0;
let num_attempts = 1;

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

    // adding the cards to the deck
    for(let i = 0; i < num_of_groups; i ++){
        let new_group = createGroup(i, unique_id);

        // checking for duplicates
        while(isDuplicate(new_group)){
            new_group = createGroup(i, unique_id);
        }

        // push the group to the card stack
        new_group.forEach((card) =>{
            cards.push(card);
        })

        unique_id += group_size;
    }
}

/**
 * Creates a pair of cards
 *
 * @param id {int} id of the pair of cards
 * @param unique_id_start {int} unique id to start the cards on
 * */
function createGroup(id, unique_id_start){
    let group = [];

    // adding the cards to the group stack
    for(let i = 0; i < group_size; i ++){
        group.push(Object.create(card));
    }

    // creating the random info for the cards
    let rand_mouth = Math.floor(Math.random() * mouth_assets.length);
    let rand_skin = Math.floor(Math.random() * skin_assets.length);
    let rand_eyes = Math.floor(Math.random() * eye_assets.length);

    group.forEach((card) => {
        card.id = id;
        card.mouth = "/assets/emoji-assets/" + mouth_assets.at(rand_mouth);
        card.skin = "/assets/emoji-assets/" + skin_assets.at(rand_skin);
        card.eyes = "/assets/emoji-assets/" + eye_assets.at(rand_eyes);
        card.unique_id = unique_id_start;
        unique_id_start += 1;

    });

    return group;
}

/**
 * Checks to see if the card image already exists with in the deck
 *
 * @param card card to be checked
 * @return Boolean for if there is a duplicate or not
 * */
function isDuplicate(group) {
    for(let i = 0; i < cards.length; i ++){
        let c = cards[i];
        if(group[0].skin === c.skin && group[0].mouth === c.mouth && group[0].eyes === c.eyes){
            return true;
        }
    }
    return false;
}

/**
 * Method sets up the game div to have a grid template layout
 *
 * Then assigns all the cards to a div container that is generated
 * */
function setUpGame(){
    document.getElementsByClassName('game-grid')[0].style.gridTemplateColumns = 'auto '.repeat(num_of_groups);
    for(let i = 0; i < num_of_groups * group_size; i ++){
        let front_div = document.createElement('div');
        let main_div = document.createElement('div');

        front_div.className = 'front-card-container';
        front_div.id = i.toString();

        main_div.className = 'main-card-container';
        main_div.appendChild(front_div);
        document.getElementsByClassName('game-grid')[0].appendChild(main_div);

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
 * @param div empty div element
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
function checkLevelComplete(){
    if(found_cards.length === cards.length){

        // setting the score info
        clearInterval(timerInterval);
        let score = Math.ceil(score_multiplier/(Math.log10(time_taken_secs)*num_attempts));
        let score_data = '{"level_' + level + '": {"score": "' + score + '", "time": "' + time_taken_secs + '","attempts": "' + num_attempts + '"}}'

        // adjusting for the next level
        level_scores.push(score_data);
        level += 1;

        // setting up another level with a larger group size
        if(level_stack.length > 0) {
            group_size = level_stack.pop();

            // flipping the cards over
            setTimeout(() => {
                document.getElementsByClassName('game-grid')[0].childNodes.forEach((div) => {
                    flipBackAnimation(div.childNodes[0]);
                });
            }, 500);

            // time out before changing to new level
            setTimeout(() => {
                document.getElementsByClassName('game-grid')[0].innerHTML = "";
                // go again
                start();

            }, 1500);

            // if the user has finished all levels
        }else{
            setTimeout(() => {
                winModal();
            }, 1000);
        }
    }
}


/**
 * Method makes the win container visible
 * */
function winModal(){
    document.getElementById('submitBtn').style.visibility = 'visible';
    // document.getElementById('score_label').innerHTML = "Score: " + score;
    // document.getElementById('time_label').innerHTML = "Time Taken: " + time_taken_secs + "s";
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
    window.location.replace("/index.php");
    // window.location.replace("/web-dev-2023/index.php");
}

function postScore(){
    let http = new XMLHttpRequest();
    let data = new FormData();
    const user = cookie('uname');
    const json_data = '{"' + user + '" : [' + level_scores + ']}';

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
    postScore();
    window.location.replace("/pairs.php");
    // window.location.replace("/web-dev-2023/pairs.php");
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

    // once the user has clicked enough cards to potentially make a match
    if(click_div_buffer.length >= group_size && click_card_buffer.length >= group_size){

        let isMatch = true;

        for(let i = 0; i < click_card_buffer.length; i ++){
            let c1 = click_card_buffer[i];
            for(let j = 0; j < click_card_buffer.length; j ++){
                let c2 = click_card_buffer[j];
                if((c1.id !== c2.id) || (c1 === c2 && c1.unique_id === c2.unique_id && i != j)){
                    isMatch = false;
                    break;
                }
            }

            if(!isMatch){
                break;
            }
        }

        // pushing all the cards to the found cards stack
        if(isMatch){
            click_card_buffer.forEach((card) =>{
                found_cards.push(card);
            });
        } else{
            // flipping the cards back
            num_attempts += 1;
            click_div_buffer.forEach((card_div) => {
                setTimeout(() => {
                    flipBackAnimation(card_div);
                }, 800);
            });
        }

        click_card_buffer = [];
        click_div_buffer = [];
    }

    //checking if the user has won
    checkLevelComplete();
}

/**
 * flips card front side up
 *
 * @param div  div element of card to be flipped
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
 * @param div  card to be flipped back.
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
    document.getElementsByClassName('game-grid')[0].style.visibility = 'visible';
    document.getElementById("start-btn").style.visibility = 'hidden';

    cards = [];
    found_cards = [];
    click_div_buffer = [];
    click_card_buffer = [];

    start_time = 0;
    time_taken_secs = 0;
    num_attempts = 1;

    // making the deck
    makeDeck();
    setUpGame();

    // starting the timer
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