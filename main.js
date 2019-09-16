/**
 * This function is to set the quiz initially for users;
 */function startQuiz() {
     console.log("-->In startQuiz");
     $(".questionNo-score").hide();
     $(".js-start-quiz-btn").click(function(){
        //This starts the quiz.
        $(".intro-box").hide();
        $(".js-qtn-answer").hide();
        $(".js-restart-quiz").hide();
        $(".question-option-form").show();
        createQuestionOptionFormContent();
     });
}

/** Creates content for the question and its options */
function createQuestionOptionFormContent() {
    console.log("-->In createQuestionOptionFormContent");
    updateQuestionAndScore();
    let question = DATA[numQuestion].question;
    let myQuestionForm = $(`
    <form class="quiz-question">
        <fieldset>
            <legend class="question"> ${question} </legend>
            <section class="options">
                <ul></ul>
            </section>
            <button type="submit" class="user-ctrl-btn">Submit</button>
        </fieldset>
    </form>`);
    $(".question-option-form").html(myQuestionForm);
    addOptions(myQuestionForm);
}

/** Add quiz answer options to the form */
function addOptions(myQuestionForm) {
    console.log("-->In addOptions");
    for (let ans in DATA[numQuestion].options ) {
        $(myQuestionForm).find(".options").find("ul").append( 
        `<li> 
        <input type="radio" name="answers" id="${ans}" value="${ans}">
        <label for="${ans}"> ${DATA[numQuestion].options[ans]}</label>
        </li >`);
    }
}

/** Validates the user selected option
 * @selectedOption: Index of user selected option
 */
function checkAnswer(selectedOption) {
    console.log("-->In checkAnswer");
    if (!selectedOption) {
        alert("Please select an option to proceed");
        return;
    }
    $(".question-option-form").hide();
    if (DATA[numQuestion].answer === DATA[numQuestion].options[selectedOption]) {
        score++;
        updateScore();
        updateCorrectAnswer();
    } else {
        updateIncorrectAnswer(); 
    }
}

/** Updates the HTML with correct Answer Screen */
function updateCorrectAnswer() {
    let correctAns = $(`
    <h3>Yay! That is correct!!!</h3>
    <img class="right-answer-img img-border" src="images/CorrectAnswer.png" alt="Correct Answer Image">
    `); 
    $(".js-qtn-answer").html(correctAns);
    updateAnsCheckContent();
}

/** Updates the HTML with incorrect Answer Screen */
function updateIncorrectAnswer() {
    let inCorrectAns = $(`
    <h3>Uh-Oh! That is Incorrect!!!</h3>
    <img class="wrong-answer-img img-border" src="images/IncorrectAns.jpg" alt="InCorrect Answer Image">
    `);
    $(".js-qtn-answer").html(inCorrectAns);
    updateAnsCheckContent();
}

/** Updates the answer content */
function updateAnsCheckContent() {
    let btnContent = $(`
        <h3>The correct answer is ${DATA[numQuestion].answer}</h3>
        <button class="user-ctrl-btn js-next-btn">Next</button>`);
    $(".js-qtn-answer").append(btnContent);
    $(".js-qtn-answer").show();
}

/** Update Content with new question */
function moveToNextQuestion() {
    createQuestionOptionFormContent();
    $(".question-option-form").show();
}

/** Update content with final page */
function moveToEndScreen() {
    createRestartQuiz();
}

/** Create content for end of quiz and restart option */
function createRestartQuiz() {
    let performance = "";
    if (score >= DATA.length -2) { 
        performance = "Yay! You did great!!!";
    } else if (score < (DATA.length/2)) {
        performance = "Better luck next time!"
    } else if (score >= (DATA.length / 2) && (score < DATA.length - 2)) { 
        performance = "You did well but can do better!";
    }
    let endQuiz = $(`
        <h2>Your score is: ${score}</h2>
        <h2>${performance}</h2>
        <section class="buttons">
            <button class="user-ctrl-btn js-restart-btn">Restart Quiz</button>
            <button class="user-ctrl-btn js-end-quiz-btn">End Quiz</button>
        </section>
    `); 
    $(".js-restart-quiz").show();
    $(".js-restart-quiz").html(endQuiz);
}

/**Reset the question num and score values and hide the content on screen */
function resetAndHideQuestionAndScore() {
    numQuestion = 0;
    score = 0;
    $(".questionNo-score").hide();
}

/** Update the question number and score on the screen */
function updateQuestionAndScore() {
    $(".questionNo-score").show();
    updateQuestionNum();
    updateScore();
}

/** Update the question Number */
function updateQuestionNum() {
    $(".qNum").text(`${numQuestion+1}`);
}

/** Update the score */
function updateScore() {
    $(".score").text(`${score}`);
}

/** Add event listener to submit button */
function handleSubmitAns() {
    $('.question-option-form').on("submit",".quiz-question",function (event) {
        event.preventDefault();
        let selectedOption = $('input[name=answers]:checked').val();
        checkAnswer(selectedOption);
    });
}

/** Add event listener on next button */
function handleNextQtn() {
    $(".js-qtn-answer").on("click", ".js-next-btn", function (event) {
        event.preventDefault();
        console.log("-->In callback of next btn");
        $(".js-qtn-answer").hide();
        if ((numQuestion + 1) === (DATA.length)) {
            moveToEndScreen();
        } else {
            numQuestion++;
            console.log("-->NumQuestion:" + numQuestion);
            moveToNextQuestion();
        }
    });
}

/** Event listener on restart quiz button */
function handleRestart() {
    $('.js-restart-quiz').on("click", ".js-restart-btn", function (event) {
        $(".js-restart-quiz").hide();
        resetAndHideQuestionAndScore();
        createQuestionOptionFormContent();
        $(".question-option-form").show();
    });
}

/** Event listener on end quiz button */
function handleEndQuiz()  {
    $('.js-restart-quiz').on("click", ".js-end-quiz-btn", function (event) {
        $(".js-restart-quiz").hide();
        resetAndHideQuestionAndScore();
        $(".intro-box").show();
    })
}

/** Run the quiz application*/
function quizApp() {
    startQuiz();
    handleSubmitAns();
    handleNextQtn();
    handleRestart();
    handleEndQuiz();
}

$(quizApp);