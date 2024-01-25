console.log("Welcome to Tic tac toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

//function to change the turn
const changeTurn = () => {
    return  turn === "X" ?"O" : "X"
}

//Function to check win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector('.line').style.transform = `translate(${e[3]})`
        }
    })
}

//Game logic
let boxes =  document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', function () {
        if (boxText.innerText === '') {
            boxText.innerText = turn
            turn = changeTurn()
            audioTurn.play()
            checkWin()
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//for reset button
reset.addEventListener('click', () =>{
    let boxText = document.querySelectorAll('.boxtext');
    Array.from(boxText).forEach(element => {
        element.innerText = " "
    });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
