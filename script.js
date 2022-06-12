// creating quiz class
class Quiz {
    constructor(questions) {
        this.score=0;
        this.questions=questions;
        this.questionIndex=0;
    }

    getQuestionIndex() {
        return this.questions{this.questionIndex};
    }

    quess(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer))
        this.score++;
    }
    this.questionIndex++;

    isEnded() {
        return this.questionIndex === this.questions.legnth;
    }

}

//creating question class
class Question {
    constructor(text,choices,answer) {
        this.text=text;
        this.choices=choices;
        this.answer=answer;
    }

    isCorrectAnswer(choice) {
        return this.answer===choice;
    }
}

//displaying questions
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    }else{
        //show question
        let questionElement=document.getElementById("question");
        questionElement=quiz.getQuestionIndex().text;

        //show options
        let choices=quiz.getQuestionIndex().choices;
        for(let i=0;i<choices.legnth;i++) {
            let choiceElement=document.getElementById("choice"+i);
            choiceElement.innerHTML=choices[i]
            guess("btn"+i,choices[i]);
        }

        showProgress();
    }
};

//creating guess function
function guess(id,guess){
    let button=document.getElementById(id);
    button.oneclick=function(){
        quiz.guess(guess);
        displayQuestion();
    }
}

//show quiz progress
function showProgress() {
    let currentQuestionNumber=quiz.questionIndex + 1;
    let progressElement= document.getElementById("progress")
    pregressElement.innerHTML=
    'Question ${currentQuestionNumber} of ${quiz.question.length}';
}

//show score
function showScores() {
    let quizEndHTML=
        `
            <h1> Quiz Completed</h1>
            <h2 id="score">You Scored: ${quiz.score} of ${quiz.question.length}</h2>        
            <div class="quiz-repeats">
            <a href="index.html>Take Quiz Again</a>
            </div>
        `;
        let quizElement=document.getElementById("quiz")
        quizElement.innerHTML= quizEndHTML;
          
        
        
}