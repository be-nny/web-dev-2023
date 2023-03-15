let isStart = false;
const skin_assets = ['skin/green.png', 'skin/red.png', 'skin/yellow.png']
const eye_assets = ['eyes/closed.png', 'eyes/laughing.png', 'eyes/long.png', 'eyes/normal.png', 'eyes/rolling.png', 'eyes/winking.png'];
const mouth_assets = ['mouth/open.png', 'mouth/sad.png', 'mouth/smiling.png', 'mouth/straight.png', 'mouth/surprise.png', 'mouth/teeth.png'];
const num_of_pairs = 5;


function Card(mouth_src, eye_src, face_src, id, x, y) {
    this.mouth_src = mouth_src;
    this.eye_src = eye_src;
    this.face_src = face_src;
    this.id = id;

    this.x = x;
    this.y = y;

    this.mainPane = function (){
        let mouth = document.createElement('img');
        let eye = document.createElement('img');
        let face = document.createElement('img');

        mouth.src = this.mouth_src;
        eye.src = this.eye_src;
        face.src = this.face_src;

        let card = document.createElement('div');
        card.className = 'card_pane';
        card.style.position = 'absolute';
        card.style.width = '150px';
        card.style.height = 'auto';

        card.appendChild(mouth);
        card.appendChild(eye);
        card.appendChild(face);

        let main = document.createElement('div');
        main.style.top = this.y;
        main.style.left = this.x;
        main.id = this.id;

        return main;
    }

    this.isEqual = function (card){
        if(card.mouth_src === this.mouth_src
            && card.face_src === this.face_src
            && card.eye_src === this.eye_src){
            return true
        } else{
            return false;
        }
    }
}

function onClickStart(){
    for(let i = 0; i < document.getElementsByClassName("game_splash").length; i ++){
        document.getElementsByClassName("game_splash").item(i).hidden = true;
    }
    isStart = true;
}

function generateDeck(){
    let id = 0;
    let cards = []

    for(let i = 0; i < num_of_pairs; i ++){
        // making random position
        let x1 = Math.floor(Math.random() * 100) + 1;
        let y1 = Math.floor(Math.random() * 100) + 1;
        let x2 = Math.floor(Math.random() * 100) + 1;
        let y2 = Math.floor(Math.random() * 100) + 1;

        let mouth_path = mouth_assets.at(Math.random() * mouth_assets.length);
        let face_path = mouth_assets.at(Math.random() * skin_assets.length);
        let eye_path = mouth_assets.at(Math.random() * eye_assets.length);

        let card1 = new Card(mouth_path, face_path, eye_path, id, x1, y1);
        let card2 = new Card(mouth_path, face_path, eye_path, id, x2, y2);
        cards.push(card1);
        cards.push(card2);
    }
    return cards;
}

function game(){


}
