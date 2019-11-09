$(function () {
    // Start State
    $("#gameScreen").hide();
    $("#gameOverScreen").hide();

    // Start Screen Handlers
    $("#startBtn, #startAgainBtn").click(function () {
        $("#gameOverScreen").hide();
        $("#startScreen").hide();
        $("#gameScreen").show();
        startNewGame();
    })
});

function applyGameHandlers() {
    var gameCards = $(".card");
    gameCards.click(function (ed) {
        var clickedElement = $(ed.target)
        var cardElement;
        if (clickedElement.is(".card")) {
            cardElement = clickedElement
        }
        else {
            cardElement = clickedElement.parents(".card").first();
        }

        selectCard(cardElement)
    });
}

var jSelectedCards = [];

function selectCard(jCard) {
    if (jSelectedCards.length >= 2) {
        console.log("Only two at a time please!");
        return;
    }

    if (jSelectedCards.length == 1 && jCard.attr("data-unique-id") == jSelectedCards[0].attr("data-unique-id")) {
        console.log("Can't select the same card");
        return;
    }
    jSelectedCards.push(jCard)
    jCard.addClass("selected")
    jCard.children().show();
    jCard.removeClass("unselected")
    setTimeout(function () {
        if (jSelectedCards.length == 2) {
            if (jSelectedCards[0].attr("data-id") == jSelectedCards[1].attr("data-id")) {
                console.log("Match")
                $(jSelectedCards).each(function () { this.addClass("matched") })
            }
            else {
                console.log("Not Match")
                for (var jSelectedCard of jSelectedCards) {
                    jSelectedCard.removeClass("selected");
                    jSelectedCard.addClass("unselected");
                    jSelectedCard.children().hide();
                }
            }

            jSelectedCards = [];
        }

        if ($(".unselected").length == 0) {
            showGameOver();
        }
    }, 1200);
}

function showGameOver() {
    $("#gameScreen").hide();
    $("#gameOverScreen").show();
}

function startNewGame() {
    generateGame();
    applyGameHandlers();
}

function generateGame() {
    var choices = ["1", "2", "3", "4", "5", "6", "7", "8"];
    var newElements = []
    for (var choice of choices) {
        newElements.push($(`<div class="card unselected" data-id="${choice}" data-unique-id="1-${choice}"><img class="cardImage" src="images/card_${choice}.jpg"/></div>`));
        newElements.push($(`<div class="card unselected" data-id="${choice}" data-unique-id="2-${choice}"><img class="cardImage" src="images/card_${choice}.jpg"/></div>`));
    }

    for (var newElement of newElements) {
        newElement.children().hide();
    }

    var frStr = ""
    for (var i = 0; i < Math.sqrt(newElements.length); i++) {
        frStr += "1fr "
    }
    $("#cardWrapper").css("grid-template-columns", frStr)
    $("#cardWrapper").css("grid-template-rows", frStr)

    $("#cardWrapper").empty();
    newElements.sort(function () { return 0.5 - Math.random() });
    $("#cardWrapper").append(newElements);
}