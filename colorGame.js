var numSquares=6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();   //color to be selected
var colorDisplay=document.getElementById("colorDisplay");  //displaying color at top
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)    //changing colors of top three
	{
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none"; 
		}
	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)    //setting colors to all 6
	{
		
			squares[i].style.background=colors[i];
		
		
			squares[i].style.display="block"; 
		
	}
});

resetButton.addEventListener("click",function(){
	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change color number to be displayed
	colorDisplay.textContent=pickedColor;
	this.textContent="New Colors"

	messageDisplay.textContent="";
	//change colors of sqaures
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++)
{
	//different background to each sqaure
	squares[i].style.background=colors[i];   

	//add click listener to each sqaure
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor=this.style.background;
		//compare color to picked color
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="CORRECT";
			resetButton.textContent="Play Again???";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
		}
		else
		{
			this.style.background="#232323";
			messageDisplay.textContent="TRY AGAIN";
		}
			
		
	});
		
}


function changeColors(color){
	//loop through all sqaures
	
	for(var i=0; i <colors.length;i++)
	{
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){    //picking random color from the given array (index)
	var random=Math.floor(Math.random( )*colors.length);
	return colors[random];
}


function generateRandomColors(num)
{
	//make an array
	var arr=[]
	//add num random colors to array
	for(var i=0;i<num;i++)
	{
		//get random color and push in array
		arr.push(randomColor())
		


	}
	//return that array
	return arr;
}

function randomColor(){      //random color 
	//pick a red from 0-255
	var r=Math.floor(Math.random()*256);
	// pick a green from 0-255
	var g=Math.floor(Math.random()*256);
	//pick a blue from 0-255
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}