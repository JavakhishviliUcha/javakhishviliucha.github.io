/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var gamePlayng, activePlayer, scores, roundScore;

init();

function init() {
    gamePlaying = true;
    roundScore = 0;
    scores = [0, 0];
    activePlayer = 0;

    $('.player-0-panel').addClass('active');
    $('.player-1-panel').removeClass('active');
    $('.player-score').text(0);
    $('.player-current-score').text(0);
    $('.player-0-panel, .player-1-panel').removeClass('winner');
    $('#dice').hide();
}

$('.btn-roll').click(function () {
    if (!gamePlaying) {
        return;
    }
    let randomDice = Math.floor(Math.random() * 6) + 1;
    $('#dice').attr('src', 'dice-' + randomDice + '.png');
    $('#dice').show();
    roundScore += randomDice;
    $('#current-' + activePlayer).text(roundScore);
    if (randomDice === 1) {
        $('#current-' + activePlayer).text(0);
        nextPlayer();
    }
})

function nextPlayer() {
    roundScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    $('.player-panel').removeClass('active');
    $('.player-' + activePlayer + '-panel').addClass('active');
    $('#dice').hide();
}

$('.btn-hold').click(function () {
    if (!gamePlaying) {
        return;
    }

    scores[activePlayer] += roundScore;
    $('#score-' + activePlayer).text(scores[activePlayer]);
    $('#current-' + activePlayer).text(0);
    let winningScore = $('.final-score').val();
    if (!winningScore) {
        winningScore = 5;
    }
    if (scores[activePlayer] >= winningScore) {
        $('.player-' + activePlayer + '-panel').addClass('winner');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
})


$('.btn-new').click(function () {
    init();
});