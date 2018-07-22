var msg=document.querySelector("#msg");
var squares=document.querySelectorAll(".square");
var colors=[];
colors=randomColor();
var finalColor=pickColor();
var h1Display=document.querySelector("#pick");
h1Display.textContent=finalColor;
var heading=document.querySelector("h1");
var btn=document.querySelector("#btn");
//var easy=document.querySelector("#b1");
//var hard=document.querySelector("#b2");
//var superhard=document.querySelector("#b3");
var modes=document.querySelectorAll(".mode");
var container=document.querySelector("#container");
var len=9;
game();

for(var i=0;i<modes.length;i++){

	modes[i].addEventListener("click",function(){
		   this.classList.add("selected");
	if(this.textContent==="Easy"){
		len=3;
		modes[1].classList.remove("selected");
		modes[2].classList.remove("selected");
    }
	else if(this.textContent==="Hard"){
		len=6;
		modes[0].classList.remove("selected");
		modes[2].classList.remove("selected");
	}
	else {
        len=9;
        modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
	}
 
    /*
    len=(i+1)*3;
    for(var j=0;j<modes.length;j++){
    	if(i!=j){
	       modes[j].classList.remove("selected");
	   }
    }
    */

   for(var i=len;i<9;i++){
   	squares[i].style.display="none";
   }
    for(var i=0;i<len;i++){
   	squares[i].style.display="block";
   }
	msg.textContent="";

    game();
});
}
/*
easy.addEventListener("click",function(){
	len=3;
	hard.classList.remove("selected");
    easy.classList.add("selected");
    superhard.classList.remove("selected");

   for(var i=3;i<9;i++){
   	squares[i].style.display="none";
   }
	msg.textContent="";

    game();
});

hard.addEventListener("click",function(){
	len=6;
	easy.classList.remove("selected");
    hard.classList.add("selected");
    superhard.classList.remove("selected");

    for(var i=3;i<6;i++){
   	squares[i].style.display="block";
   }
    for(var i=6;i<9;i++){
   	squares[i].style.display="none";
   }
	msg.textContent="";

	game();
});

superhard.addEventListener("click",function(){
	len=9;
	easy.classList.remove("selected");
    hard.classList.remove("selected");
    superhard.classList.add("selected");

    for(var i=3;i<9;i++){
   	squares[i].style.display="block";
   }
	msg.textContent="";

	game();
});
*/

btn.addEventListener("click",function(){
	btn.textContent="New Colors";
	msg.textContent="";
	game();
});
function pickColor(){
    var num;
   
        num=Math.floor(Math.random()*len);
	    
		return colors[num];
}

function randomColor(){
	var arr=[];
	for(var i=0;i<len;i++){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		arr[i]="rgb("+r+", "+g+", "+b +")";
		console.log(arr[i]);
		
	}
	return arr;
}
function allColor(){
for(var i=0;i<len;i++){
     squares[i].style.backgroundColor=finalColor;
}
  heading.style.backgroundColor=finalColor;
}

function game(){
    heading.style.backgroundColor="steelblue";
	
     colors=randomColor();
     finalColor=pickColor();
     h1Display.textContent=finalColor;
     for(var i=0;i<len;i++){
	    squares[i].style.backgroundColor=colors[i];
	    squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor === finalColor){
			allColor();
			msg.textContent="Correct!!";
			btn.textContent="Play Again?";	
        }
        else{
         	this.style.backgroundColor ="#232323";
			msg.textContent="Try Again!!";	

        }
    });
    }
}

