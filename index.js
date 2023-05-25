document.querySelectorAll(".drum").forEach(item => {item.addEventListener("click", function (){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

});

});

document.addEventListener("keydown", function(event){
   
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;

        case "f":
                var tom2 = new Audio(url="sounds/tom-2.mp3");
                tom2.play();
            break;

        case "g": 
                var tom3 = new Audio(url="sounds/tom-3.mp3");
                tom3.play();
            break;

        case "h": 
                var tom4 = new Audio(url="sounds/tom-4.mp3");
                tom4.play();
            break;

        case "j": 
                var snare = new Audio(url="sounds/snare.mp3");
                snare.play();
            break;

        case "k": 
                var crash = new Audio(url="sounds/crash.mp3");
                crash.play();
            break;

        case "l": 
                var kick = new Audio(url="sounds/kick-bass.mp3");
                kick.play();
            break;

        default: console.log(buttonInnerHTML);
            break;
    }

}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}