
//Nav functions

function openNav() {
    document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



// Functions on Click!

$('#herm').click(function () {
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        $div = $('#herm'),
        divWidth = $div.width(),
        divHeight = $div.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;

    $div.css({
        left: Math.floor(Math.random() * widthMax),
        top: Math.floor(Math.random() * heightMax),
    });

    $(this).css({
        width: divWidth * 0.9,
        height: divHeight * 0.9,
    });
});

var herm = document.getElementById("herm"),
    score = 0;
    herm.onclick = function () {
    score += 1;

    counter.innerHTML = "You found him " + score + " times";

    if (score === 5) {
         alert("Ready to go to the next level?");
         level.innerHTML = "Level 2";
    }

    if (score === 10) {
         alert("Is it getting harder already?");
         level.innerHTML = "Level 3";
    }

    if (score === 15) {
         alert("You've reached the fourth level");
         level.innerHTML = "Level 4";
    }

    if (score === 20) {
         alert("Fifth level, still hanging on?");
         level.innerHTML = "Level 5";
    }
    
};

/*
function store() {
    if (score > localStorage["highScore"]) {
        localStorage["highScore"] = score;
    }
    else ( 
        (score =< localStorage["highScore"]) {
        counter.innerHTML = "You found him " + score + " times" + highScore;
    );
        };

    function highScore() {
        if (typeof (Storage) !== "herm") {
            if (localStorage.highScore) {
                localStorage.highScore = Number(localStorage.highScore) + 1;
            } else {
                localStorage.highScore = 1;
            }
            document.getElementById("result").innerHTML = "You have found Herm " + localStorage.highScore + " time(s).";
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
    }


$(document).ready(function() {
  if (typeof localStorage["highScore"] !== 'undefined') {
  $("#score").text('Your current high score is' + " " + localStorage["highScore"]);}
  else {
    localStorage["highScore"] = 0;
    $("#score").text('Your current high score is 0');
    store()
  }

  function store() {
    if (counter.score > localStorage["highScore"]) {
      localStorage["highScore"] = counter.score;
    }

    if (typeof localStorage["highScore"] !== 'undefined') {
  $("#score").text('Your current high score is' + " " + localStorage["highScore"]);}
  }
}
*/