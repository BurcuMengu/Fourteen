var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(documenet).keypress(function() {
    if(!started) {
        $("#level-title").text("level" + level);
        nextSequence();
        started = true;
    }
});



$("btn").click(function() {
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

});


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function() {
                nextSequence();
            },1000);
        }

    } else {
        console.log("wrong");
    }
}


function nextSequence() {
    
    userClickedPattern = [];
    
    level++;

    $("#level-title").text("level" + level);
    
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(userChosenColour);

}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    },100);

}