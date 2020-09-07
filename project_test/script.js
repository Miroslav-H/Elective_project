const container = document.getElementsByClassName("game_container")[0];
let enemys = [];
let bullets = document.getElementsByClassName("bullet");
let randomBool = !!Math.floor(Math.random() * 2);
console.log(randomBool);
/*

window.onload = function() {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
}
*/



playBtn.addEventListener("click", function(){
	playContainer.style.display = "none";
	gameStarted = true;
	
 	enemy();
// 	setInterval(enemy(), 10);
	setInterval(function(){
		if(hue < 360){
			player1.style.filter = `hue-rotate(${hue}deg)`
			hue += 10;
		}else if(hue == 360){
			hue = 0
			player1.style.filter = `hue-rotate(${hue}deg)`
			hue += 10;
		}
	}, 100);
});

let hue = 0;




let playerX = 230;
let enemyX = 10;
let keysPressed = {};
let timerRef;
let shotCount = 0;
let scoreUpdate =0;
let comboCounter = 1;
let scoreDisplay = document.getElementById("score");

let enemyPositionX = enemyX + 50;


// shift() -> removes element from the beginning of an array



function enemy(){
	
 	let enemy = document.createElement("div");
 	enemy.classList.add('enemy');
	container.appendChild(enemy);
	
 	enemys.push(enemy)
 	
 	function moveLeft(){
	 	enemyX -= 10;
 	}
 	
 	function moveRight(){
	 	enemyX += 10;
 	}
 	
 	let headRight = true;
 	
 	setInterval(function(){
	 	if(enemyX < 450 && headRight == true){
		 	moveRight();
		 	
		    enemy.style.transform = `translateX(${enemyX}px)`;
		    console.log("1")
		}
		else if(headRight == false && enemyX > 10){
		 	moveLeft();
		 	
		    enemy.style.transform = `translateX(${enemyX}px)`;
		    console.log('2')
		}
		else if(enemyX == 450){
			headRight = false;
			moveLeft();
			console.log('3')
		}
		else if(enemyX == 10){
			headRight = true;
			moveRight();
			console.log(enemys)
		}
		enemyPositionX = enemyX + 50;
	}, 30);
	
    
}


function bullet(){
	
	shotCount ++;
// 	scoreDisplay.innerHTML = `Score <br> ${shotCount}`;
	
	let bullet = document.createElement("div");
	
    bullet.classList.add('bullet');
    bullet.style.transform = `translateX(${playerX}px)`;
    const bulletX = playerX;
    
	container.appendChild(bullet);
	setTimeout(function() { 
		bullet.classList.add('move');
	}, 15); 
	
	console.log(bullet.bottom)
	
	setTimeout(function() {
		for(let i = 0; i < enemys.length; i++){
		
 
			if(((bulletX + 25) >= enemyX) && ((bulletX + 25) <= enemyPositionX)){
				console.log("Hit: " + enemyPositionX + " " + (bulletX + 25));
				bullet.remove();
				scoreUpdate = scoreUpdate + (1 * comboCounter);
				scoreDisplay.innerHTML = `Score <br> ${scoreUpdate}`;
				comboCounter ++;
				
			}
			else{
				console.log("Not hit: " + enemyPositionX + " " + (bulletX + 25));
				comboCounter = 1;
			}       
			
		}
	}, 735);
	
	setTimeout(function remove() { 
		bullet.remove();
	}, 950); 
}














document.addEventListener('keydown', (event) => {
	if(gameStarted === true){
		keysPressed[event.key] = true;
		
		if ((keysPressed['a'] && event.key == ' ') || (keysPressed[' '] && event.key == 'a')) {
	    	bullet();
	    	
	    	clearInterval(timerRef);
		    timerRef = setInterval(function(){
		    	if(playerX > 0 && keysPressed['a']){
			        playerX -= 10;
			        player1.style.transform = `translateX(${playerX}px)`;
		    }}, 30);
		}
		else if ((keysPressed['d'] && event.key == ' ') || (keysPressed[' '] && event.key == 'd')) {
	    	bullet();
	    	
	    	clearInterval(timerRef);
			timerRef = setInterval(function(){
		    	if(playerX < 460 && keysPressed['d']){
			        playerX += 10;
			        player1.style.transform = `translateX(${playerX}px)`;
			        console.log(playerX)
		    }}, 30);
		}
		
/*
		if (keysPressed[' '] && event.key == 'a') {
	    	bullet();
	    	
	    	clearInterval(timerRef);
		    timerRef = setInterval(function(){
		    	if(playerX > 0 && keysPressed['a']){
			        playerX -= 10;
			        player1.style.transform = `translateX(${playerX}px)`;
		    }}, 30);
		}
		else if (keysPressed[' '] && event.key == 'd') {
	    	bullet();
	    	
	    	clearInterval(timerRef);
			timerRef = setInterval(function(){
		    	if(playerX < 460 && keysPressed['d']){
			        playerX += 10;
			        player1.style.transform = `translateX(${playerX}px)`;
			        console.log(playerX)
		    }}, 30);
		}
*/

	   
	   
	    if (event.key == 'a'){
		    clearInterval(timerRef);
		    timerRef = setInterval(function(){
		    	if(playerX > 0 && keysPressed['a']){
			        playerX -= 10;
			        player1.style.transform = `translateX(${playerX}px)`;
		    }}, 30);
		}	
		else if (event.key == 'd') {
			clearInterval(timerRef);
			timerRef = setInterval(function(){
		    	if(playerX < 460 && keysPressed['d']){
			        playerX += 10;
			        player1.style.transform = `translateX(${playerX}px)`;
			        console.log(playerX)
		    }}, 30);
	        // -> arrow
	    }
	    if (event.key == ' '){
		    bullet();
	    }
	    console.log(keysPressed)
	}
});

document.addEventListener('keyup', (event) => {
	if(gameStarted === true){
    	delete keysPressed[event.key];
    }
 });


/*
let overlap = !(rect1.right < rect2.left || 
                rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom)
*/











/*
	setTimeout(function() { 
		bullet.classList.add('move');
	}, 15); 
	
	setTimeout(function remove() { 
		bullet.remove();
	}, 950); 
*/
/*
	setInterval(function(){
		for(let i = 0; i <= enemys.length; i++){
			console.log(enemys[i]);
			for(let j = 0; j <= bullets.length; i++){
				console.log(enemys[i]);
				console.log(bullets[j]);
				let overlap = !(enemys[i].right < bullets[j].left || 
		                enemys[i].left > bullets[j].right || 
		                enemys[i].bottom < bullets[j].top || 
		                enemys[i].top > bullets[j].bottom)
				if(overlap == true){
					setTimeout(function(){
						enemys[i].remove();
						bullets[j].remove();
					}, 800);
				}
			}
		}
	}, 10);
*/
























































































// for(let i = 0; i <= ; i++)

/*

while(event.key == 'a'){
	if(playerX > 0){
        playerX -= 10;
        player1.style.transform = `translateX(${playerX}px)`;
    };
}
*/


/*
let interval = window.setInterval(function () {
    // do your thing, do your thing
    console.log("llllll")
}, 1000);

document.onkeypress = function () {
    if (event.keyCode == 83) {
        window.clearInterval(interval);
		console.log("sssss")
        // do some other thing, other thing
    }
};
*/


/*
function player(e){
	function onkeydown(e) {
    if (e.keyCode == 39) {
        rectX++;
    } //right arrow
    else if (e.keyCode == 37) {
        rectX--;
    } //left arrow
    else if (e.keyCode == 38) {
        player1.style.transform = "translateY(100px)"
    } //up arrow
    else if (e.keyCode == 40) {
        rectY++;
    } //down arrow
    fillRect();
}
}


// document.onkeydown = player;


let playerX = 0;

function player(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        // <- arrow
        if(playerX > 0){
	        playerX -= 10;
	        player1.style.transform = `translateX(${playerX}px)`;
	    };
    }
    else if (e.keyCode == '39') {
	    if(playerX < 460){
		    playerX += 10;
		    player1.style.transform = `translateX(${playerX}px)`;
		};
        // -> arrow
    }
    
    if (e.keyCode == '32'){
	    let bullet = document.createElement("div");
	    bullet.classList.add('bullet');
	    bullet.style.transform = `translateX(${playerX}px)`;
		container.appendChild(bullet);
    }

}

function keyListener(){ 
    //whatever we want to do goes in this block
    event = event || window.event; //capture the event, and ensure we have an event
    var key = event.key || event.which || event.keyCode; //find the key that was pressed
    console.log(key)

    if(key===84){ //this is for 'T'
        doThing();
    }

  }
*/

