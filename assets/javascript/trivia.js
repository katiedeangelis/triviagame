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

function triviaQuestionGenerator(question, id, correctanswer, answertwo, answerthree, answerfour) {
    this.question = question;
    this.id = id;
    this.correctanswer = correctanswer;
    this.answertwo = answertwo;
    this.answerthree = answerthree;
    this.answerfour = answerfour;
    this.getQuestion = function() {
        var newTriviaQuestion = $("<div class='trivia-question-tile' id='" + this.id + "'>");
        $(newTriviaQuestion).append('<h1>' + this.question + '</h1>')
        return newTriviaQuestion;
    }
    this.getAnswers = function() {
        var newTriviaAnswers = $("<div class='trivia-answer-tile' id='" + this.id + "'>");
        $(newTriviaAnswers).append('<h3>' + this.correctanswer + '</h3>')
        $(newTriviaAnswers).append('<h3>' + this.answertwo + '</h3>')
        $(newTriviaAnswers).append('<h3>' + this.answerthree + '</h3>')
        $(newTriviaAnswers).append('<h3>' + this.answerfour + '</h3>')
        return newTriviaAnswers;
    }
}

function triviaGameReset() {
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

    triviaQuestionChosen = triviaGameQuestions[Math.floor(Math.random() * triviaGameQuestions.length)];
        $(".trivia-game-question").html(triviaQuestionChosen.getQuestion());
        $(".trivia-game-answers").html(triviaQuestionChosen.getAnswers());
}

$(window).click(triviaGameReset)