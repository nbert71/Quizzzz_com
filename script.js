var liste_questions = []

fetch('./questions_quiz.json').then(response => {
    return response.json();
}).then(data => {

    class Question {
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
            let index = this.questions[this.currentQuestionIndex].choices.indexOf(choice);
            this.conclusion.push(this.questions[this.currentQuestionIndex].answers[index]);
            this.currentQuestionIndex++;
        }

        hasEnded() {
            return this.currentQuestionIndex >= this.questions.length;
        }
    }


    for (let i = 0; i < data.questions.length; i++) {
        let liste_choix = [];
        let liste_predictions = [];
        for (let j = 0; j < data.questions[i].reponses.length; j++) {
            liste_choix.push(data.questions[i].reponses[j].choix);
            liste_predictions.push(data.questions[i].reponses[j].prediction);
        }
        temp_question = new Question(data.questions[i].question,
            liste_choix,
            liste_predictions);
        liste_questions.push(temp_question);
    }

    //regroup all functions relative to the app display
    const display = {
        elementShown: function (id, text) {
            let element = document.getElementById(id);
            element.innerHTML = text;
        },
        endQuiz: function () {
            document.getElementById('question_blocks').style.display = 'none';
            document.getElementById('bar-progression').style.display = 'none';
            document.getElementById('question').style.display = 'none';
            for (j = 0; j < quiz.conclusion.length; j++) {
                let reponse = quiz.conclusion[j];
                this.elementShown("reponse" + j, reponse);
            }
            document.getElementById("conclusion").removeAttribute("style");    
            //document.getElementById("comeback").style.display = 'block';
        },
        question: function () {
            this.elementShown("question", quiz.getCurrentQuestion().text);
            let element = document.getElementById("conclusion");
            element.style.display = 'none';
        },
        choices: function () {
            let choices = quiz.getCurrentQuestion().choices;
            guessHandler = (id, guess) => {
                document.getElementById(id).onclick = function () {
                    quiz.response(guess);
                    $(this).addClass("active");
                    setTimeout(() => {$(this).removeClass("active");
                        quizApp(quiz);
                        }, 600);
                }
            }
            for (let i = 0; i < 6; i++) {
                if (i < choices.length) {
                    this.elementShown("choice" + i, choices[i]);
                    guessHandler("guess" + i, choices[i]);
                    document.getElementById("guess" + i).removeAttribute("style");
                } else {
                    let element = document.getElementById("guess" + i)
                    element.style.display = 'none';
                }
            }
        },
        progress: function () {
            let currentQuestionNumber = quiz.currentQuestionIndex + 1;
            $("#dynamic")
                .css("width", currentQuestionNumber*100/(quiz.questions.length + 1) + "%")
                .attr("aria-valuenow", currentQuestionNumber);
        }
    }

    // game logic
    quizApp = (quiz) => {
        console.log(quiz);
        if (quiz.hasEnded()) {
            display.endQuiz();
        } else {
            display.question();
            display.choices();
            display.progress();
        }
    }

    //create quiz
    let quiz = new Quiz(liste_questions);
    console.log(quiz);
    // document.getElementById("comeback").onclick = function () {
    //     quiz.currentQuestionIndex = 0;
    //     quiz.conclusion = [];
    //     document.getElementById('progress-bar-top').style.display = 'block';
    //     document.getElementById('question_blocks').style.display = 'block';
    //     document.getElementById('question').style.display = 'block';
    //     document.getElementById('titre').innerText = 'Quiz';
    //     document.getElementById('comeback').style.display = 'none';
    //     $('.ui.progress').progress();
    //     quizApp(quiz);
    // };
    console.log("coucou")
    quizApp(quiz);




    console.log(quiz);
}).catch(err => {
    console.log(err);
    return -1
    // AJOUTER UNE ERREUR VISUELLE SUR LE SITE DISANT QUON A PAS PU CHARGER LES QUESTIONS
});