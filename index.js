var numberOfButtons = document.querySelectorAll(".drum").length;
 
 
for (var i = 0; i<numberOfButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
 
  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

makeSound(event.key);

});

function makeSound(key) {

  
switch(key) {
  case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
    
  case "a":
    var cat = new Audio("sounds/snare.mp3");
    cat.play();
    break;
    
  case "s":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    
  case "d":
    var wolf = new Audio("sounds/wolf.mp3");
    wolf.play();
    break;
    
  case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    
  case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    
  case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
}

var audio = new Audio("sounds/hen.mp3");
audio.play();

switch(key) {

case "w":
var crash = new Audio("sounds/crash.mp3");
crash.play();
break;

case "a":
var cat = new Audio("sounds/snare.mp3");
cat.play();
break;

case "s":
var snare = new Audio("sounds/snare.mp3");
snare.play();
break;

case "d":
var wolf = new Audio("sounds/wolf.mp3");
wolf.play();
break;

case "j":
var tom2 = new Audio("sounds/tom-2.mp3");
tom2.play();
break;

case "k":
var tom3 = new Audio("sounds/tom-3.mp3");
tom3.play();
break;

case "l":
var tom4 = new Audio("sounds/tom-4.mp3");
tom4.play();
break;

default: console.log(buttonInnerHTML);

}
  


}



document.addEventListener("keypress", function() {
alert("Key was pressed!");
});


