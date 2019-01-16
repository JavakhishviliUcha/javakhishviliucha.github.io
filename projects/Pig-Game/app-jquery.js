var gamePlaying, scores, roundScore, activePlayer;

init();

function init() {
    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    $('.player-0-panel').addClass('active');
    $('.player-1-panel').removeClass('active');
    $('.player-1-panel, .player-0-panel').removeClass('winner');
    $('.player-score').text(0);
    $('.player-current-score').text(0);
    $('#name-0').text('Player 1');
    $('#name-1').text('Player 2');
    $('#dice').hide();
}

$('.btn-roll').click(function () {
    if (!gamePlaying) {
        return;
    }
    var randomRoll = Math.floor(Math.random() * 6) + 1;
    $('#dice').attr('src', 'dice-' + randomRoll + '.png');
    $('#dice').show();
    roundScore += randomRoll;
    $('#current-' + activePlayer).text(roundScore);
    if (randomRoll === 1) {
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

    var finalScore = $('.final-score').val();
    if (!finalScore) {
        finalScore = 5;
    }
    if (scores[activePlayer] >= finalScore) {
        gamePlaying = false;
        $('.player-' + activePlayer + '-panel').addClass('winner');
        $('#name-' + activePlayer).text('Winner!!!');
        $('.player-panel').removeClass('active');
    } else {
        nextPlayer();
    }
})

$('.btn-new').click(init);