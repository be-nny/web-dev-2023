let isStart = false;
const skin_assets = ['skin/green.png', 'skin/red.png', 'skin/yellow.png']
const eye_assets = ['eyes/closed.png', 'eyes/laughing.png', 'eyes/long.png', 'eyes/normal.png', 'eyes/rolling.png', 'eyes/winking.png'];
const mouth_assets = ['mouth/open.png', 'mouth/sad.png', 'mouth/smiling.png', 'mouth/straight.png', 'mouth/surprise.png', 'mouth/teeth.png'];
const num_of_pairs = 5;
const card_width = 150;


class Card {
    constructor(mouth_src, eye_src, face_src, id, x, y)  {
        this.mouth_src = mouth_src;
        this.eye_src = eye_src;
        this.face_src = face_src;
        this.id = id;

        this.x = x;
        this.y = y;

        this.mainPane = this.setPane();

    }

    getPane(){
        return this.mainPane;
    }

    getID(){
        return this.id;
    }

    setPane (){
        let mouth = document.createElement('img');
        let eye = document.createElement('img');
        let face = document.createElement('img');

        mouth.src = this.mouth_src;
        mouth.className = "card_img";
        mouth.id = "mouth";

        eye.src = this.eye_src;
        eye.className = "card_img";
        eye.id = "eye";

        face.src = this.face_src;
        face.className = "card_img";
        face.id = "face";

        //setting the position on screen
        mouth.style.top = this.y + 'px';
        mouth.style.left = this.x + 'px';
        face.style.top = this.y + 'px';
        face.style.left = this.x + 'px';
        eye.style.top = this.y + 'px';
        eye.style.left = this.x + 'px';

        let card = document.createElement('div');
        card.id = "card_div"
        card.appendChild(face);
        card.appendChild(mouth);
        card.appendChild(eye);

        return card;
    }

    render(){
        document.getElementById('main_game').appendChild(this.getPane());
    }
}

function generateDeck(){
    let id = 0;
    let cards = []

    for(let i = 0; i < num_of_pairs; i ++){
        // making random position
        let new_cards = makeCard(id);
        while(isOverlap(new_cards.card1, cards) || isOverlap(new_cards.card2, cards)){
            new_cards = makeCard(id);
        }

        cards.push(new_cards.card1);
        cards.push(new_cards.card2);
        id += 1;

    }
    console.log(cards)
    return cards;
}

function makeCard(id){

    const max_width = innerWidth - card_width*2;
    const min_width = 0;
    const max_height = innerHeight - card_width*2;
    const min_height = 0;

    let x1 = Math.floor(Math.random() * (max_width - min_width + 1)) + min_width;
    let y1 = Math.floor(Math.random() * (max_height - min_height + 1)) + min_height;
    let x2 = Math.floor(Math.random() * (max_width - min_width + 1)) + min_width;
    let y2 = Math.floor(Math.random() * (max_height - min_height + 1)) + min_height;

    let mouth_path = "/assets/emoji-assets/" + mouth_assets.at(Math.random() * mouth_assets.length);
    let face_path = "/assets/emoji-assets/" + skin_assets.at(Math.random() * skin_assets.length);
    let eye_path = "/assets/emoji-assets/" + eye_assets.at(Math.random() * eye_assets.length);

    let card1 = new Card(mouth_path, eye_path, face_path, id, x1, y1);
    let card2 = new Card(mouth_path, eye_path, face_path, id, x2, y2);
    return {card1, card2}
}

function game(){
    let deck = generateDeck();
    drawCards(deck);

}

function isOverlap(new_card, deck){
    for(let i = 0; i < deck.length; i ++){
        let current_face = deck[i].getPane().childNodes[0];
        let new_face = new_card;
        if(current_face.positionX < new_face.positionX < current_face.positionX + current_face.width
            || current_face.positionX < new_face.positionX + new_face.width < current_face.positionX + current_face.width
            && current_face.positionY < new_face.positionY < current_face.positionY + current_face.width
            || current_face.positionY < new_face.positionY + new_face.width < current_face.positionY + current_face.width ){
            return true;
        }
    }
    return false;
}

function drawCards(deck){
    for(let i = 0; i < deck.length; i ++){
        deck[i].render();
    }
}

game();
