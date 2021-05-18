class Question{
    constructor(text, choices, answers) {
        this.text = text;
        this.choices = choices;
        this.answers = answers;
    }
}

class Quiz {
    constructor(questions) {
        this.conclusion = [];
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    response(choice) {
        //on met le text correspondant à answer dans conclusion
        let index = questions[this.currentQuestionIndex].choices.indexOf(choice);
        this.conclusion.push(questions[this.currentQuestionIndex].answers[index]);
        this.currentQuestionIndex++;
    }

    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

//regroup all functions relative to the app display
const display = {
    elementShown: function (id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function () {
                let endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3>Les traductions</h3>`;
        this.elementShown("quiz", endQuizHTML);
        for(j = 0; j < quiz.conclusion.length; j++) {
            let reponse = quiz.conclusion[j];
            this.elementShown("reponse" + j, reponse);
        }
        //document.getElementById("twitter").removeAttribute("style");
        //FB.XFBML.parse();
    },
    question: function () {
        this.elementShown("question", quiz.getCurrentQuestion().text);
        //document.getElementById("twitter").style.display = 'none';
    },
    choices: function () {
        let choices = quiz.getCurrentQuestion().choices;

        guessHandler = (id, guess) => {
            document.getElementById(id).onclick = function () {
                quiz.response(guess);
                quizApp();
            }
        }

        for (let i = 0; i < 6; i++) {
            if (i < choices.length) {
                this.elementShown("choice" + i, choices[i]);
                guessHandler("guess" + i, choices[i]);
                document.getElementById("choice" + i).removeAttribute("style");
            }
            else {
                let element = document.getElementById("choice" + i)
                element.style.display = 'none';
            }
        }
    },
    progress: function () {
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown('progress', "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    }
}

// game logic

quizApp = () => {
    if (quiz.hasEnded()) {
        display.endQuiz();
    } else {
        display.question();
        display.choices();
        display.progress();
    }
}

//les questions
let questions = [
    new Question(
        "Couleur",
        ["Rouge", "Bleu", "Jaune", "Vert"],
        ["Red", "Blue", "Yellow", "Green"]
    ),
    new Question(
        "Fruit",
        ["Pomme", "Poire", "Raisin", "Fraise"],
        ["Apple", "Pear", "Grapes", "Strawberry"]
    ),
    new Question(
        "Animal",
        ["Mouton", "Cheval", "Grenouille"],
        ["Sheep", "Horse", "Frog"]
    )
];

//create quiz
let quiz = new Quiz(questions);
quizApp();

console.log(quiz);
