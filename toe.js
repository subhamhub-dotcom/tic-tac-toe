var flag = true;//false
var state = [0, 1, 0, 0, 1, 1, 1, 0, 0];
var winner_div = document.getElementById("winner");
var player1_score = 0;
var player2_score = 0;

document.querySelector('.gamescreen').addEventListener('click', function (e) {

    var targeted_id = e.target.id;
    var targeted_div = document.getElementById(targeted_id);

    if (state[targeted_id] == 1 || state[targeted_id] == 0) {
        if (flag) {
            targeted_div.innerText = "X";
            state[targeted_id] = "X";
        }
        else {
            targeted_div.innerText = "O";
            state[targeted_id] = "O";
        }
        flag = !flag;
        checkWinner(!flag);
    }
    console.log(state);
});


function checkWinner(player) {
    if (state[0] == state[1] && state[0] == state[2]) {

        //  player ? winner_div.innerText = "Winner X!!" : winner_div.innerText = "Winner O!!";

        if (player) {
            player1_score++;
            winner_div.innerText = "Winner X!!";
        }
        else {
            player2_score++;
            winner_div.innerText = "Winner O!!";
        }
        applyWinningPattern(0, 1, 2);
        setDisabled();
        displayScore();
    }
    else if (state[3] == state[4] && state[3] == state[5]) {

        // player ? winner_div.innerText = "Winner X!!" : winner_div.innerText = "Winner O!!";

        if (player) {
            player1_score++;
            winner_div.innerText = "Winner X!!";
        }
        else {
            player2_score++;
            winner_div.innerText = "Winner O!!";
        }

        displayScore();
        applyWinningPattern(3, 4, 5);
        setDisabled();

    }
    else if (state[6] == state[7] && state[6] == state[8]) {
        //  player ? winner_div.innerText = "Winner X!!" : winner_div.innerText = "Winner O!!";
        if (player) {
            player1_score++;
            winner_div.innerText = "Winner X!!";
        }
        else {
            player2_score++;
            winner_div.innerText = "Winner O!!";
        }

        displayScore();
        applyWinningPattern(6, 7, 8);
        setDisabled();
    }
    else if (state[0] == state[3] && state[0] == state[6]) {
        //  player ? winner_div.innerText = "Winner X!!" : winner_div.innerText = "Winner O!!";
        if (player) {
            player1_score++;
            winner_div.innerText = "Winner X!!";
        }
        else {
            player2_score++;
            winner_div.innerText = "Winner O!!";
        }

        displayScore();
        applyWinningPattern(0, 3, 6);
        setDisabled();
    }
    else if (state[1] == state[4] && state[1] == state[7]) {
        //  player ? winner_div.innerText = "Winner X!!" : winner_div.innerText = "Winner O!!";?
        if (player) {
            player1_score++;
            winner_div.innerText = "Winner X!!";
        }
        else {
            player2_score++;
            winner_div.innerText = "Winner O!!";
        }

        displayScore();
        applyWinningPattern(1, 4, 7);
        setDisabled();
    }
    else if (state[2] == state[5] && state[2] == state[8]) {
        //  player ? winner_div.innerText = "Winner X!!" : winner_div.innerText = "Winner O!!";
        if (player) {
            player1_score++;
            winner_div.innerText = "Winner X!!";
        }
        else {
            player2_score++;
            winner_div.innerText = "Winner O!!";
        }

        displayScore();
        applyWinningPattern(2, 5, 8);
        setDisabled();
    }
    else if (state[0] == state[4] && state[0] == state[8]) {
        //  player ? winner_div.innerText = "Winner X!!" : winner_div.innerText = "Winner O!!";
        if (player) {
            player1_score++;
            winner_div.innerText = "Winner X!!";
        }
        else {
            player2_score++;
            winner_div.innerText = "Winner O!!";
        }

        displayScore();
        applyWinningPattern(0, 4, 8);
        setDisabled();
    }
    else if (state[2] == state[4] && state[2] == state[6]) {
        // player ? winner_div.innerText = "Winner X!!" : winner_div.innerText = "Winner O!!";
        if (player) {
            player1_score++;
            winner_div.innerText = "Winner X!!";
        }
        else {
            player2_score++;
            winner_div.innerText = "Winner O!!";
        }

        displayScore();
        applyWinningPattern(2, 4, 6);
        setDisabled();
    }
    else {
        //Draw
        // alert("Draw!!");
        var x = 9;
        for (var i = 0; i < state.length; i++) {
            if (state[i] != 1 && state[i] != 0) {
                x--;
                console.log(x);
            }
        }

        if (x == 0) {
            winner_div.innerText = "It's Draw !!";

            for (var i = 0; i < state.length; i++) {
                document.getElementById(i).style.backgroundColor = "red";
                document.getElementById(i).style.color = "white";
            }
        }
    }
}


function setDisabled() {
    for (var i = 0; i < state.length; i++) {
        if (state[i] == 1 || state[i] == 0) {
            state[i] = null;
        }
    }
}

function applyWinningPattern(a, b, c) {
    document.getElementById(a).style.background = "khaki";
    document.getElementById(b).style.background = "khaki";
    document.getElementById(c).style.background = "khaki";
}

function displayScore() {
    document.getElementById("player1-score").innerText = player1_score;
    document.getElementById("player2-score").innerText = player2_score;
}

function reset() {
    for (var i = 0; i < state.length; i++) {
        document.getElementById(i).style.backgroundColor = "rgb(249, 182, 12)";
        document.getElementById(i).innerText = "";
        document.getElementById(i).style.color = "black";
    }

    // set to initial value:
    state = [0, 1, 0, 0, 1, 1, 1, 0, 0];

    flag = true;

    winner_div.innerText = "";

}


function restart() {

    location.reload();
}
var player1 = "X", player2 = "O";
var player1_tag = document.getElementById('player-1');
var player2_tag = document.getElementById('player-2');





document.getElementsByClassName('b4')[0].addEventListener("click", function showhide(e) {
    e.preventDefault();
    if (player1_tag.value != "" && player2_tag.value != "") {
        player1 = player1_tag.value;
        player2 = player2_tag.value;
    }
    document.getElementById('form').style.display = "none";
    document.getElementById('display').style.display = "block";

    document.getElementById("player1").innerText = player1;
    document.getElementById("player2").innerText = player2;

})



document.getElementsByClassName('b3')[0].addEventListener("click", function showHide(e) {
    e.preventDefault();
    if (player1_tag.value != "" && player2_tag.value != "") {
        player1 = player1_tag.value;
        player2 = player2_tag.value;

        document.getElementById('form').style.display = "none";
        document.getElementById('display').style.display = "block";

        document.getElementById("player1").innerText = player1;
        document.getElementById("player2").innerText = player2;

    }
    else {
        alert("Please fill the required fields")
    }
})