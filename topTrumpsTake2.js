// pack info ====================================================================================

class Ukg {
    constructor(name, firstRelease, hChart)
    {
        this.name = name;
        this.firstRelease = firstRelease;
        this.hChart = hChart;
    }


}

let soSolid = new Ukg( 'So Solid Crew', 1998, 1 );
let hTwoO = new Ukg( 'H-Two-O', 2008, 2);
let artful = new Ukg( 'Artful Dodger', 1997, 2);
let msDyn = new Ukg( 'Ms Dynamite', 2000, 1);
let wookie = new Ukg( 'Wookie' , 1991, 10);
let mJCole = new Ukg( 'M. J. Cole', 1997, 10);
let wideBoys = new Ukg( 'Wide Boys', 1996, 15);
let sweetFA = new Ukg( 'Sweet Female Attitude', 1996, 2);
let keleLeRoc = new Ukg( 'Kele Le Roc', 1995, 8);
let oxideNeutrino = new Ukg( 'Oxide and Neutrino' , 1999, 1);
let grantNelson = new Ukg( 'Grant Nelson', 1986, 92);
let dJZinc = new Ukg( 'DJ Zinc', 1991, 27);
let theStreets = new Ukg( 'The Streets', 1994, 1);
let dBedingfield = new Ukg( 'Daniel Bedingfield', 2001, 1);
let luckAndNeat = new Ukg( 'DJ Luck & MC Neat', 1999, 5);
let shanksBigfoot = new Ukg( 'Shanks and Bigfoot', 1997, 1);
let b15Project = new Ukg( 'B-15 Project', 1998, 7);
let sunship = new Ukg( 'Sunship', 1997, 75);
let oneEightSeven = new Ukg( '187 Lockdown' , 1997, 9);
let dJSpoony = new Ukg( 'DJ Spoony', 2000, 48);
let threeOfA = new Ukg( '3 Of A Kind', 2004, 1);
let craigD = new Ukg( 'Craig David', 1997, 1);
let rosieGaines = new Ukg( 'Rosie Gaines', 1985, 4);
let mDubs = new Ukg( 'M-Dubs', 1994, 84);
let deekline = new Ukg( 'Deekline', 1999, 11);
let scottG = new Ukg( 'Scott Garcia', 1997, 29);
let double = new Ukg( 'Double 99', 1995, 14);
let sholaAma = new Ukg( 'Shola Ama', 1995, 4);
let toddEdwards = new Ukg( 'Todd Edwards', 1992, 69);
let piedPiper = new Ukg( 'DJ Pied Piper', 2000, 1);

let ukGDeck = [soSolid, hTwoO , artful, msDyn, wookie, mJCole,
    wideBoys, sweetFA, keleLeRoc, oxideNeutrino, 
    grantNelson, dJZinc, theStreets, dBedingfield, 
    luckAndNeat, shanksBigfoot, b15Project, sunship, 
    oneEightSeven, dJSpoony, threeOfA, craigD, 
    rosieGaines, mDubs, deekline, scottG, double, 
    sholaAma, toddEdwards, piedPiper];




//================================================================================================================
// making players ================================================================================================

class Players {                                                 // constructs players
    constructor(name){
        this.name = name;
        this.hand = [];
        this.turn = Boolean
    }
    cardCount () {
        return this.hand.length;
    }
}

let playerOne = new Players('Player 1');
let playerTwo = new Players('Player 2');
let turnCount = 0;
let turn = [playerOne, playerTwo];
let inPlay = [];

//========================================================================================================================================================================
// game variables and functions ==========================================================================================================================================


let end = false;
let gameOver;

let packSelect = document.getElementById("packSelect");          //selects label and input from HTML
let packSelectL = document.getElementById("packSelectL");

let dialogue = document.getElementById("dialogue");
const cancel = document.getElementById("cancel");
const submit = document.getElementById("submit");
let cardTitle = document.getElementById("cardTitle");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt1Check = document.getElementById("opt1Check");
let opt2Check = document.getElementById("opt2Check");


let = optionsShow = () => {
    packSelect.style.display = 'inline-block';                  // makes selection visible
    packSelectL.style.display = 'inline-block';

}

let isEven = (num) => {            
    return num % 2 === 0;
}

let winner = () => {                                        // compares number of cards in each player's deck and returns winning player / 'Nobody'
    if (playerOne.hand > playerTwo.hand) {
        return playerOne.name;
    } else if (playerOne.hand < playerTwo.hand) {
        return playerTwo.name;
    }else{
        'Nobody';
    }  
}

let gameOverRun = () =>{                                    // assigns winner to gameOver variable, alerts the end game screen and sets end to true (breaking game loop)
    gameOver = winner();
    alert(`Game Over! ${gameOver} is the winner!!!\n
    The score was: \n
    ${playerOne.name}: ${playerOne.cardCount()}\n
    ${playerTwo.name}: ${playerTwo.cardCount()}`)             
    end = true;
   
}

let reset = () => {                                         // clears hands, sets end to false, revels selections and sets them to original setting
    playerOne.hand = [];
    playerTwo.hand = [];
    end = false;
    packSelect.selectedIndex = 0;
    optionsShow();
}




let shuffle = (deck) => {
    for (let i = 0; i < deck.length; i++) {
        let temp = '';                                              // temp = slot to store shuffling card
        let num = Math.floor(Math.random() * Math.floor(30));       //Returns random number 0-29         
        temp = deck[i];
        deck[i] = deck[num];                                        //swaps card[i] with card[random number]
        deck[num] = temp;
    }
    return deck;
}

let deal = (deck) => {

    for (let i = 0; i < deck.length; i++) {
        if(isEven(i)){
            playerOne.hand.push(deck[i])
        } else {
            playerTwo.hand.push(deck[i])
        }
        
    }
}

let keys = (card) => {             //                       0           1          2
    Object.keys(card)             //returns array of keys [name, firstRelease, hChart]
}




//========================================================================================================================================================================
// game play =============================================================================================================================================================


let play = () => {
    turnCount ++;
    inPlay.unshift(playerTwo.hand[0]); //adds player1 card to inplay deck in position [0]
    inPlay.unshift(playerOne.hand[0]);  //adds player2 card to inplay deck in position [1]
    cardTitle.innerHTML =  `${turn[0].name}, it's your go! ${turn[0].hand[0].name} is your current card you can pick:`;
    opt1.innerHTML =  `First release : ${turn[0].hand[0].firstRelease}`;
    opt2.innerHTML = `Highest chart position : ${turn[0].hand[0].hChart}`;

    showDialogue();
}

let endCheck = () => {
    
    if(playerTwo.cardCount() == 0 || playerOne.cardCount() == 0){                   // checks for empty hand and runs gameover 
        gameOverRun();
        reset();
    }
}

let start = () => {
    shuffle(ukGDeck);
    deal(ukGDeck);
    play();
}

packSelect.addEventListener( 'change', () => {                   //hides label and input from HTML when used
    packSelect.style.display = 'none';
    packSelectL.style.display = 'none';
    start();                                                    //to be created as a function to start game
})


let playOn = (val) => {

    let p1Choice;

    if (opt1Check.checked) {
        p1Choice = 'First Release'
    }else if (opt2Check.checked) {
        p1Choice = 'Highest Chart Position'
    }
    

    hideDialogue();
    alert(`${JSON.stringify(playerOne.name)}, you played: \n
    ${JSON.stringify(playerOne.hand[0].name)} and ${p1Choice}: ${JSON.stringify(playerOne.hand[0][val])} \n
    ${JSON.stringify(playerTwo.name)}, you played: \n
    ${JSON.stringify(playerTwo.hand[0].name)} and ${p1Choice}: ${JSON.stringify(playerTwo.hand[0][val])}`);
    
    playerTwo.hand.shift();
    playerOne.hand.shift();


    if (inPlay[0][val] < inPlay[1][val]) {      //adds inPlay stack to playerOne's hand if they win
        playerOne.hand = playerOne.hand.concat(inPlay);
        inPlay = [];
        turn = [playerOne, playerTwo];
        alert(`${playerOne.name} you win! You now have ${playerOne.cardCount()} cards in your hand. \n 
        ${playerTwo.name} you have ${playerTwo.cardCount()} cards in your hand.`)
    } else if(inPlay[0][val] > inPlay[1][val]){       //adds inPlay stack to playerOne's hand if they win
        playerTwo.hand = playerTwo.hand.concat(inPlay);
        inPlay = [];
        turn = [playerTwo, playerOne];
        alert(`${playerTwo.name} you win! You now have ${playerTwo.cardCount()} cards in your hand.\n 
        ${playerOne.name} you have ${playerOne.cardCount()} cards in your hand.`)
    } else {
        alert(`It's a draw - keep playing to win the pile!`);
        
    }


    endCheck();
    play();
        
    
}


//========================================================================================================================================================================
// dialogue box and functions ===========================================================================================================================================

cancel.onclick = function () {
   
    console.log('cancel');
    

    dialogue.style.display = "none";
    alert(`${turn[0].name} cancelled the game`);                                // alerts for a cancel and runs gameover 
    gameOverRun();
    optionsShow();
};

submit.onclick = function () {     
    
    console.log('submit');


    hideDialogue();
    console.log(`this is option one: ${opt1Check.value}`)
    console.log(`this is option two: ${opt2Check.value}`)


    if (opt1Check.checked) {
        playOn('firstRelease')
        // check if opt1 or opt2 is true when selected then create functions to continue play
    } else if (opt2Check.checked) {
        playOn('hChart')
        // check if opt1 or opt2 is true when selected then create functions to continue play
    } else {
        alert('Please select an option'); 
        showDialogue();
    }
  };

let showDialogue = () => {
    document.getElementById("dialogue").style.display = 'block';
}

let hideDialogue = () => {
    document.getElementById("dialogue").style.display = 'none';
}




// console.log(shuffle(ukGDeck));
// deal(ukGDeck);

// console.log(`this is p1 hand`);
// console.log(playerOne.hand);

// console.log(`this is p2 hand`);
// console.log(playerTwo.hand);


// play();
// console.log(playerOne.hand.length);
// console.log(playerTwo.hand.length);

// play();
// console.log(playerOne.hand.length);
// console.log(playerTwo.hand.length);

// // console.log(inPlay);