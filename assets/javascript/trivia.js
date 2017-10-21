//Create a trivia game that shows only one question until the player answers it or their time runs out.
//If the player selects the correct answer, show a screen congratulating them for choosing the right option
//After a few seconds, display the next question -- do this without user input.
//The scenario is similar for wrong answers and time-outs.
//If the player runs out of time, tell the player that time's up and display the correct answer
//Wait a few seconds, then show the next question.
//If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer
//Wait a few seconds, then show the next question.
//On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

var triviaQuestionChosen;
var triviaGameQuestions = [];
var triviaQuestionGuessed = [];
var correctAnswers;
var incorrectAnswers;
var interval;
var time;

function triviaQuestionGenerator(question, id, correctanswer, answertwo, answerthree, answerfour) {
    this.question = question;
    this.id = id;
    this.correctanswer = correctanswer;
    this.answertwo = answertwo;
    this.answerthree = answerthree;
    this.answerfour = answerfour;
    this.getQuestion = function () {
        var newTriviaQuestion = $("<div class='trivia-question-tile' id='" + this.id + "'>");
        $(newTriviaQuestion).append('<h1>' + this.question + '</h1>')
        return newTriviaQuestion;
    }
    this.getAnswers = function () {
        var newTriviaAnswers = $("<div class='trivia-answer-tile' id='" + this.id + "'>");

        var answers = [this.correctanswer, this.answertwo, this.answerthree, this.answerfour];

        answers = shuffle(answers);

        for (var j = 0; j < answers.length; j++) {
            var answer = answers[j];
            if (answer === this.correctanswer) {
            var ans1 = $('<button class="correct-guess">' + answer + '</button>')
            } else {
                var ans1 = $('<button>' + answer + '</button>')
            }
            ans1.on("click", guess);
            $(newTriviaAnswers).append(ans1);
        }
        return newTriviaAnswers;
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }



function triviaGameReset() {

    correctAnswers = 0;
    incorrectAnswers = 0;
    triviaQuestionGuessed = [];

    $(".correct").text("Correct: " + correctAnswers);
    $(".incorrect").text("Incorrect: " + incorrectAnswers);

    $(".start-button").on("click", newQuestion);
    $(".play-again-button").hide();
    $(".correct").hide();
    $(".incorrect").hide();    

    var indianaJones = new triviaQuestionGenerator("In Indiana Jones and the Last Crusade, we learn that Indy's real name is what?",
        "henry",
        "Henry",
        "Heath",
        "Harrison",
        "Herby");
    var sayAnything = new triviaQuestionGenerator("What did John Cusack hold up outside Ione Skye’s bedroom window in Say Anything?",
        "boombox",
        "A Boombox",
        "A Box of Chocolates",
        "A Puppy",
        "A White Flag");
    var vacation = new triviaQuestionGenerator("Which amusement park are the Griswolds travelling to in National Lampoon’s Vacation?",
        "walleyworld",
        "Walley World",
        "Six Flags",
        "Ocean View Amusement Park",
        "Wonder World");
    var dontYou = new triviaQuestionGenerator("Which 1980s theme song (recorded by Simple Minds) took only three hours to write?",
        "dontyou",
        "Don't You (Forget About Me)",
        "Meet Me Halfway",
        "Footloose",
        "When Doves Cry");
    var princessBride = new triviaQuestionGenerator("What was the prince’s name in The Princes Bride?",
        "humperdinck",
        "Humperdinck",
        "Englebert",
        "Salvatore",
        "Benedict");
    var ferrisBueller = new triviaQuestionGenerator("What actress played Matthew Broderick’s sister in Ferris Bueller’s Day Off?",
        "jennifergrey",
        "Jennifer Grey",
        "Jennifer Connolly",
        "Claudia Wells",
        "Elisabeth Shue");
    var splash = new triviaQuestionGenerator("What name did the mermaid (played by Daryl Hannah) give to herself in Splash?",
        "madison",
        "Madison",
        "Allison",
        "Addison",
        "Stacy");
    var backToTheFuture = new triviaQuestionGenerator("Who was originally cast as Marty McFly in Back to the Future?",
        "ericstoltz",
        "Eric Stoltz",
        "Emilio Estevez",
        "Rob Lowe",
        "Michael J. Fox");
    var caddyShack = new triviaQuestionGenerator("What was the main antagonist to Bill Murray's protagonist in Caddyshack?",
        "goffer",
        "Goffer",
        "Fox",
        "Squirrell",
        "Raccoon");
    var extraTerrestrial = new triviaQuestionGenerator("What was the top grossing film of the ‘80s?",
        "et",
        "E.T.",
        "Raiders of the Lost Ark",
        "Ghostbusters",
        "The Empire Strikes Back");

    triviaGameQuestions = [indianaJones, sayAnything, vacation, dontYou, princessBride, ferrisBueller, splash, backToTheFuture, caddyShack, extraTerrestrial];

}

function newQuestion(e) {
    timer = 10;
    $(".start-button").hide();
    $(".correct").show();
    $(".incorrect").show();  
    $(".trivia-game-answers").removeClass("show-answer");
    clearInterval(interval);
    if (triviaGameQuestions.length <= 0) {
        $(".trivia-game-question").empty();
        $(".trivia-game-answers").empty();
        $(".time-left").empty();
        $(".play-again-button").show();
        $(".play-again-button").on("click", triviaGameReset);
        $(".play-again-button").on("click", newQuestion);
    } else {
        $(".time-left").text(timer);
        triviaQuestionChosen = triviaGameQuestions.pop();
        triviaQuestionGuessed.push(triviaQuestionChosen);
        $(".trivia-game-question").html(triviaQuestionChosen.getQuestion());
        $(".trivia-game-answers").html(triviaQuestionChosen.getAnswers());
        interval = setInterval(function () {
            timer -= 1;
            $(".time-left").text(timer);
            if (timer <= 0) {
                incorrectAnswers += 1;
                $(".incorrect").text("Incorrect: " + incorrectAnswers); 
                $(".trivia-game-answers").addClass("show-answer");                
                clearInterval(interval);
                setTimeout(newQuestion, 2000);
            }
        }, 1000)
    }

}

function guess(e) {
    $(e.currentTarget).off("click", guess);
    if (triviaQuestionChosen.correctanswer === e.currentTarget.innerHTML) {
        correctAnswers += 1;
        $(".correct").text("Correct: " + correctAnswers);
    } else {
        incorrectAnswers += 1;
        $(".incorrect").text("Incorrect: " + incorrectAnswers); 
    }
    $(".trivia-game-answers").addClass("show-answer");
    clearInterval(interval);
    setTimeout(newQuestion, 2000);
}

$(window).load(triviaGameReset)

//TODO: Show correct answer if none is guessed
//TODO: Count the time running out with no guess as an incorrect guess