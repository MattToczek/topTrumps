// pack info ====================================================================================

class Artist {
    constructor(name, firstRelease, hChart)
    {
        this.name = name;
        this.firstRelease = firstRelease;
        this.hChart = hChart;
    }


}

let soSolid = new Artist( 'So Solid Crew', 1998, 1 );
let hTwoO = new Artist( 'H-Two-O', 2008, 2);
let artful = new Artist( 'Artful Dodger', 1997, 2);
let msDyn = new Artist( 'Ms Dynamite', 2000, 1);
let wookie = new Artist( 'Wookie' , 1991, 10);
let mJCole = new Artist( 'M. J. Cole', 1997, 10);
let wideBoys = new Artist( 'Wide Boys', 1996, 15);
let sweetFA = new Artist( 'Sweet Female Attitude', 1996, 2);
let keleLeRoc = new Artist( 'Kele Le Roc', 1995, 8);
let oxideNeutrino = new Artist( 'Oxide and Neutrino' , 1999, 1);
let grantNelson = new Artist( 'Grant Nelson', 1986, 92);
let dJZinc = new Artist( 'DJ Zinc', 1991, 27);
let theStreets = new Artist( 'The Streets', 1994, 1);
let dBedingfield = new Artist( 'Daniel Bedingfield', 2001, 1);
let luckAndNeat = new Artist( 'DJ Luck & MC Neat', 1999, 5);
let shanksBigfoot = new Artist( 'Shanks and Bigfoot', 1997, 1);
let b15Project = new Artist( 'B-15 Project', 1998, 7);
let sunship = new Artist( 'Sunship', 1997, 75);
let oneEightSeven = new Artist( '187 Lockdown' , 1997, 9);
let dJSpoony = new Artist( 'DJ Spoony', 2000, 48);
let threeOfA = new Artist( '3 Of A Kind', 2004, 1);
let craigD = new Artist( 'Craig David', 1997, 1);
let rosieGaines = new Artist( 'Rosie Gaines', 1985, 4);
let mDubs = new Artist( 'M-Dubs', 1994, 84);
let deekline = new Artist( 'Deekline', 1999, 11);
let scottG = new Artist( 'Scott Garcia', 1997, 29);
let double = new Artist( 'Double 99', 1995, 14);
let sholaAma = new Artist( 'Shola Ama', 1995, 4);
let toddEdwards = new Artist( 'Todd Edwards', 1992, 69);
let piedPiper = new Artist( 'DJ Pied Piper', 2000, 1);

let ukGDeck = [soSolid, hTwoO , artful, msDyn, wookie, mJCole,
    wideBoys, sweetFA, keleLeRoc, oxideNeutrino, 
    grantNelson, dJZinc, theStreets, dBedingfield, 
    luckAndNeat, shanksBigfoot, b15Project, sunship, 
    oneEightSeven, dJSpoony, threeOfA, craigD, 
    rosieGaines, mDubs, deekline, scottG, double, 
    sholaAma, toddEdwards, piedPiper];


let goldie = new Artist ( 'Goldie', 1995, 13);
let shyFX = new Artist ( 'Shy FX', 1992, 7);
let djHype = new Artist ( 'DJ Hype', 1989, 63)
let ltjBukem = new Artist ( 'LTJ Bukem', 1991, 40)
let andyC = new Artist ( 'Andy C', 1993, 50)
let rebelMC = new Artist ( 'Rebel MC', 1989, 3)
let ronnieSize = new Artist ( 'Ronnie Size', 1988, 17)
let grooverider = new Artist ( 'Grooverider', 1986, 40)
let edRush= new Artist ( 'Ed Rush', 1992, 61)
let remarc = new Artist ( 'Remarc', 1992, 100)
let aphrodite = new Artist ( 'Aphrodite', 1990, 68)
let dillinja = new Artist ( 'Dillinja', 1991, 35)
let ldnElek = new Artist ( 'London Elektricity', 1996, 77)
let adamF = new Artist ( 'Adam F', 1996, 11)
let mFinn = new Artist ( 'Mickey Finn', 1991, 100)
let slipmatt = new Artist ( 'Slipmatt', 1989, 41)
let skibadee = new Artist ( 'Skibadee', 1993, 100)
let squarepusher = new Artist ( 'Squarepusher', 1992, 89)
let tC = new Artist ( 'TC', 1999, 100)

let jungleDeck = [ goldie, shyFX, djHype, ltjBukem, andyC, rebelMC, 
    ronnieSize, grooverider, edRush, remarc, aphrodite, dillinja, 
    ldnElek, adamF, mFinn, slipmatt, skibadee, squarepusher, tC ]

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
let currentDeck;


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
        return 'Nobody';
    }  
}

let gameOverRun = () =>{                                    // assigns winner to gameOver variable, alerts the end game screen and sets end to true (breaking game loop)
    gameOver = winner();
    alert(`Game Over! ${gameOver} is the winner!!!\n
    The score was: \n
    ${playerOne.name}: ${playerOne.cardCount()}\n
    ${playerTwo.name}: ${playerTwo.cardCount()}`)             
    reset();
   
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
        let num = Math.floor(Math.random() * Math.floor(deck.length));       //Returns random number 0-deck.length        
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

let start = (deck) => {
    shuffle(deck);
    deal(deck);
    play();
}

packSelect.addEventListener( 'change', () => {                   //hides label and input from HTML when used
    packSelect.style.display = 'none';
    packSelectL.style.display = 'none';
    if (packSelect.value ==  2){
        currentDeck = ukGDeck;
    } else if(packSelect.value == 3){
        currentDeck = jungleDeck;
    }
    start(currentDeck);                                                    //to be created as a function to start game
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

    opt1Check.checked = false;
    opt2Check.checked = false;


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
        playOn('firstRelease')          // check if opt1 is checked when selected then continues play accordingly
        
    } else if (opt2Check.checked) {
        playOn('hChart')                // check if opt2 is checked when selected then continues play accordingly
        
    } else {
        alert('Please select an option');    // tests for no response and prompts response
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