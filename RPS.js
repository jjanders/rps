var wins=0;
var losses=0;
var ties=0;
var pick="";
var comp="";

document.getElementById("rockButton").addEventListener("click", function(){pickRock()});
document.getElementById("paperButton").addEventListener("click", function(){pickPaper()});
document.getElementById("scissorsButton").addEventListener("click", function(){pickScissors()});

function pickRock(){
	pick="rock";
	compPick();
}
function pickPaper(){
	pick="paper";
	compPick();
}
function pickScissors(){
	pick="scissors";
	compPick();
}
function compPick(){
	rand=Math.random();
	if (rand < .33){
		comp = "rock";
	}
	else if (rand > .67){
		comp = "paper";
	}
	else {
		comp = "scissors";
	}
	document.getElementById('pick').innerHTML = "The computer picks: "+comp;
	check();
}
function check(){
	if(pick===comp){
		ties++;
		document.getElementById('ties').innerHTML = "Your ties: "+ties;
	}
	if(pick==="rock"){
		if(comp==="paper"){
			losses++;
			document.getElementById('losses').innerHTML = "Your losses: "+losses;
		}
		if(comp==="scissors"){
			wins++;
			document.getElementById('wins').innerHTML = "Your wins: "+wins;
		}
	}
	if(pick==="paper"){
		if(comp==="scissors"){
			losses++;
			document.getElementById('losses').innerHTML = "Your losses: "+losses;
		}
		if(comp==="rock"){
			wins++;
			document.getElementById('wins').innerHTML = "Your wins: "+wins;
		}
	}
	if(pick==="scissors"){
		if(comp==="rock"){
			losses++;
			document.getElementById('losses').innerHTML = "Your losses: "+losses;
		}
		if(comp==="paper"){
			wins++;
			document.getElementById('wins').innerHTML = "Your wins: "+wins;
		}
	}
}

