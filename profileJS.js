
function msg() {
    alert("you are not a free thinker");
    var myEightball = document.getElementById("eightball");
    myEightball.style.display = "block";

    var myPrompt = document.getElementById("prompt");
    myPrompt.style.display = "none";
}

function answer() {
    output = ""
    randNum = Math.floor(Math.random() * 6);
    if (randNum == 0) {
        output += "I doubt it";
    } else if (randNum == 1) {
        output += "Yes";
    } else if (randNum == 2) {
        output += "No";
    } else if (randNum == 3) {
        output += "Without \n a doubt";
    } else if (randNum == 4) {
        output += "With \n certainty";
    } else if (randNum == 5) {
        output += "Definitely \n not";
    }
    document.getElementById("answerMsg").innerText = output;
}
