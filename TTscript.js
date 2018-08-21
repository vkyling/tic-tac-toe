let players=['Player B', 'Player A'];
let markers=['X', 'O'];
let scores=[0,0];
let whoseTurn=0;
let winValues=[7,56,73,84,146,273,292,448];
let gameOver=false;

//check for win
function winCheck()
{
	for( let i=0; i<winValues.length; i++)
	{
		if((scores[whoseTurn] & winValues[i])==winValues[i])
		{
			updateMsg (players[whoseTurn] + " Wins!");
			gameOver=true;
		}
	}
	if(((scores[0] + scores[1])==511) && !gameOver)
	{
		updateMsg('Draw!!');
		gameOver=true;

	}
}

//Play the game
function play(clickDiv, divValue){
	if (!gameOver)
	{
	scores[whoseTurn]+=divValue;

	clickDiv.onclick='';
	clickDiv.innerHTML='<span>' + markers[whoseTurn] + '</span>';
	winCheck();
	if (!gameOver){toggle();}
}
}
function toggle(){
	if(whoseTurn==0) whoseTurn=1;
	else whoseTurn=0;

	updateMsg(players[whoseTurn] + ' Turn');
}

function updateMsg(text){
document.getElementById('gameMsg').innerText=text;
}


function resetGame (){
	box = document.getElementsByClassName('box');
	for (let i=0; i<box.length; i++){
		box[i].innerHTML=' ';
		//reset onclick
		box[i].onclick = new Function(box[i].getAttribute("onclick"))
	}		
	//reset all values
	gameOver=false;
	whoseTurn=0;
	scores=[0,0];


}