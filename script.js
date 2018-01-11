function startGame(){
for(i=1;i<=9;i++){
clearBox(i);}
	document.turn="X";
	setmessage(document.turn+" gets to start");
document.winner=null;
}
function nextMove(square){
	if(document.winner!=null){
	setmessage(document.winner+" already won");
	}
	else if(square.innerText=='')
	{
	square.innerText=document.turn;
	switchTurn();
	}else
	setmessage("Its already filled");
}
function switchTurn(){
	if(winner(document.turn)) {
		setmessage(document.turn+" won.");
	document.winner=document.turn;
	}
	else if(document.turn=="X"){
		document.turn="O";
		setmessage("Its " +document.turn+"'s turn");
	}
	else{
		document.turn="X";
	setmessage("Its " +document.turn+"'s turn");
	}
}
function setmessage(msg){
	document.getElementById("message").innerText=msg;
}
function winner(move){
	var result=false;
	if(checkrow(1,2,3,move)||checkrow(4,5,6,move)||checkrow(7,8,9,move)||checkrow(1,4,7,move)||checkrow(2,5,8,move)||checkrow(3,6,9,move)||checkrow(1,5,9,move)
		||checkrow(3,5,7,move)) {
		result=true;
}
	return result;
}
function checkrow(a,b,c,move){
	var result=false;
	if(getBox(a)==move && getBox(b)==move && getBox(c)==move){
		result=true;
	}return result;
}
function getBox(number){
	return document.getElementById("s"+number).innerText;
}
function clearBox(number){
document.getElementById("s"+number).innerText=" ";
}
/*var oriBoard;
var huPlayer='o';
var aiPlayer='x';
const win=[
	[0, 1, 2],
	[3, 4, 5],
	[0, 4, 8],
	[6, 7, 8],
	[2, 4, 6],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8]
]
const cells=document.querySelectorAll('.cell');
startGame();

function startGame() {
	document.querySelector(".endgame").style.display ="none";
	oriBoard=Array.from(Array(9).keys());
	for(var i=0;i<cell.length();i++)
	{
		cells[i].innerText='';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click',turnClick,false);
	}
}
function turnClick(square){
	turn(square.target.id,huPlayer);
}
function turn(squareId,player){
	oriBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
}*/