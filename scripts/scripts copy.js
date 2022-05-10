/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
  // VARIABLE DECLARATIONS ------
  // VARIABLE DECLARATIONS ------
  
        // VARIABLE DECLARATIONS ------
  
      // pages
      var initPage,
      questionsPage,
      resultsPage,
      // buttons
      startBtn,
      submitBtn,
      continueBtn,
      retakeBtn,
      spanishBtn,
      // question and answers
      question,
      answerList,
      answerSpan,
      answerA,
      answerB,
      answerC,
      answerD,
      // event listeners
      answerDiv,
      answerDivA,
      answerDivB,
      answerDivC,
      answerDivD,
      feedbackDiv,
      selectionDiv,
      toBeHighlighted,
      toBeMarked,
      userScore,
      // quiz
      quiz,
      questionCounter,
      correctAnswer,
      correctAnswersCounter,
      userSelectedAnswer,
      // function names
      newQuiz,
      generateQuestionAndAnswers,
      getCorrectAnswer,
      getUserAnswer,
      selectAnswer,
      deselectAnswer,
      selectCorrectAnswer,
      deselectCorrectAnswer,
      getSelectedAnswerDivs,
      highlightCorrectAnswerGreen,
      highlightIncorrectAnswerRed,
      clearHighlightsAndFeedback;
    
    $(document).ready(function(){
    
    // DOM SELECTION ------
    
    // App pages
      // Page 1 - Initial
    initPage = $('.init-page');
      // Page 2 - Questions/answers
    questionsPage = $('.questions-page');
      // Page 3 - Results
    resultsPage = $('.results-page');
    
    // Buttons
    startBtn = $('.init-page__btn');
    submitBtn = $('.questions-page__submit-btn');
    continueBtn = $('.questions-page__continue-btn');
    retakeBtn = $('.results-page__retake-btn');
    spanishBtn = $('.results-page__spanish-btn');
    
    // Answer block divs
    answerDiv = $('.questions-page__answer-div');
    answerDivA = $('.questions-page__answer-div-a');
    answerDivB = $('.questions-page__answer-div-b');
    answerDivC = $('.questions-page__answer-div-c');
    answerDivD = $('.questions-page__answer-div-d');
    
    // Selection div (for the pointer, on the left)
    selectionDiv = $('.questions-page__selection-div');
    
    // Feedback div (for the checkmark or X, on the right)
    feedbackDiv = $('.questions-page__feedback-div');
    
    // Questions and answers
    question = $('.questions-page__question');
    answerList = $('.questions-page__answer-list');
    answerSpan = $('.questions-page__answer-span');
    answerA = $('.questions-page__answer-A');
    answerB = $('.questions-page__answer-B');
    answerC = $('.questions-page__answer-C');
    answerD = $('.questions-page__answer-D');
    
    // User final score
    userScore = $('.results-page__score');
    
    // QUIZ CONTENT ------
    quiz = [
    {
      question: "The sea level around Boston has risen by _ inches since 1950. ",
      answers: ["3 inches","8 inches","12 inches","20 inches"],
      correctAnswer: "8 inches"
    },
    {
      question: "2) By the end of the century, a large part of which Boston neighborhood is at risk of being underwater.",
      answers: ["Dorchester", "Southie", "East Boston", "West Boston"],
      correctAnswer: "Dorchester"
    },
    {
      question: "3) There were 7 days of high tide flooding in 2019. By 2050, there may be up to _ days.",
      answers: ["25", "45", "60", "95"],
      correctAnswer: "95"
    },
    {
      question: "4)___ is one of the two main leading causes of sea level rise in the Boston area. ",
      answers: ["Ice Sheets Melting","Agriculture","Chaning Marine Environments","Storm Surge"],
      correctAnswer: "Ice Sheets Melting"
    },
    {
      question: "5) ___ is an important protector against local sea level rise in Boston Area.",
      answers: ["Skyscrapers","Aquatic Wildlife","Sand Dunes","Salt Mashes"],
      correctAnswer: "Sand Dunes"    
    }
    ];
    
    // FUNCTION DECLARATIONS ------
    
    // Start the quiz
    newQuiz = function() { 
    // Set the question counter to 0
    questionCounter = 0;
    
    // Set the total correct answers counter to 0
    correctAnswersCounter = 0;
    
    // Hide other pages of the app
    questionsPage.hide();
    resultsPage.hide();
    };
    
    // Load the next question and set of answers
    generateQuestionAndAnswers = function() {
    question.text(quiz[questionCounter].question);
    answerA.text(quiz[questionCounter].answers[0]);
    answerB.text(quiz[questionCounter].answers[1]);
    answerC.text(quiz[questionCounter].answers[2]);
    answerD.text(quiz[questionCounter].answers[3]);
    };
    
    // Store the correct answer of a given question
    getCorrectAnswer = function() {
    correctAnswer = quiz[questionCounter].correctAnswer;
    };
    
    // Store the user's selected (clicked) answer
    getUserAnswer = function(target) {
    userSelectedAnswer = $(target).find(answerSpan).text();
    };
    
    // Add the pointer to the clicked answer
    selectAnswer = function(target) {
    $(target).find(selectionDiv).addClass('ion-chevron-right');
    };
    
    // Remove the pointer from any answer that has it
    deselectAnswer = function() {
    if (selectionDiv.hasClass('ion-chevron-right')) {
      selectionDiv.removeClass('ion-chevron-right');
    }
    };
    
    // Get the selected answer's div for highlighting purposes
    getSelectedAnswerDivs = function(target) {
    toBeHighlighted = $(target);
    toBeMarked = $(target).find(feedbackDiv);
    };
    
    // Make the correct answer green and add checkmark
    highlightCorrectAnswerGreen = function(target) {
    if (correctAnswer === answerA.text()) {
      answerDivA.addClass('questions-page--correct');
      answerDivA.find(feedbackDiv).addClass('ion-checkmark-round');
    }
    if (correctAnswer === answerB.text()) {
      answerDivB.addClass('questions-page--correct');
      answerDivB.find(feedbackDiv).addClass('ion-checkmark-round');
    }
    if (correctAnswer === answerC.text()) {
      answerDivC.addClass('questions-page--correct');
      answerDivC.find(feedbackDiv).addClass('ion-checkmark-round');
    }
    if (correctAnswer === answerD.text()) {
      answerDivD.addClass('questions-page--correct');
      answerDivD.find(feedbackDiv).addClass('ion-checkmark-round');
    }
    };
    
    // Make the incorrect answer red and add X
    highlightIncorrectAnswerRed = function() {
    toBeHighlighted.addClass('questions-page--incorrect');
    toBeMarked.addClass('ion-close-round');
    };
    
    // Clear all highlighting and feedback
    clearHighlightsAndFeedback = function() {
    answerDiv.removeClass('questions-page--correct');
    answerDiv.removeClass('questions-page--incorrect');
    feedbackDiv.removeClass('ion-checkmark-round');
    feedbackDiv.removeClass('ion-close-round');
    };
    
    // APP FUNCTIONALITY ------
    
    /* --- PAGE 1/3 --- */
    
    // Start the quiz:
    newQuiz();
    
    // Clicking on start button:
    startBtn.on('click', function(){
    
    // Advance to questions page
    initPage.hide();
    questionsPage.show(300);
    
    // Load question and answers
    generateQuestionAndAnswers();
    
    // Store the correct answer in a variable
    getCorrectAnswer();
    
    // Hide the submit and continue buttons
    submitBtn.hide();
    continueBtn.hide();
    
    });
    
    /* --- PAGE 2/3 --- */
    
    // Clicking on an answer:
    answerDiv.on('click', function(){
    
    // Make the submit button visible
    submitBtn.show(300);
    
    // Remove pointer from any answer that already has it
    deselectAnswer();
    
    // Put pointer on clicked answer
    selectAnswer(this);
    
    // Store current selection as user answer
    getUserAnswer(this);
    
    // Store current answer div for highlighting purposes
    getSelectedAnswerDivs(this);
    
    });
    
    // Clicking on the submit button:
    submitBtn.on('click', function(){
    
    // Disable ability to select an answer
    answerDiv.off('click');
      
    // Make correct answer green and add a checkmark
    highlightCorrectAnswerGreen();
    
    // Evaluate if the user got the answer right or wrong
    if (userSelectedAnswer === correctAnswer) {
      // Increment the total correct answers counter
      correctAnswersCounter++;
    }
    else {
      highlightIncorrectAnswerRed();
    }
    
    // Substitute the submit button for the continue button:
    submitBtn.hide(300);
    continueBtn.show(300);
    
    });
    
    // Clicking on the continue button:
    continueBtn.on('click', function(){
    
    // Increment question number until there are no more questions, then advance to the next page
    if (questionCounter < quiz.length - 1) {
      questionCounter++;
    }
    else {
      questionsPage.hide();
      resultsPage.show(300);
      // Display user score as a percentage
      userScore.text(Math.floor((correctAnswersCounter / quiz.length) * 100) + "%");
    }
    
    // Load the next question and set of answers
    generateQuestionAndAnswers();
    
    // Store the correct answer in a variable
    getCorrectAnswer();
    
    // Remove all selections, highlighting, and feedback
    deselectAnswer();
    clearHighlightsAndFeedback();
    
    // Hide the continue button
    continueBtn.hide(300);
    
    // Enable ability to select an answer
    answerDiv.on('click', function(){
      // Make the submit button visible
      submitBtn.show(300);
      // Remove pointer from any answer that already has it
      deselectAnswer();
      // Put pointer on clicked answer
      selectAnswer(this);
      // Store current answer div for highlighting purposes
      getSelectedAnswerDivs(this);
      // Store current selection as user answer
      getUserAnswer(this);
    });
    
    });
    
    /* --- PAGE 3/3 --- */
    
    // Clicking on the retake button:
    retakeBtn.on('click', function(){
    
    // Go to the first page
    resultsPage.hide();
    initPage.show(300);
    
    // Start the quiz over
    newQuiz();
    
    });
    
    // Clicking on the spanish button:
    // Link takes user to Duolingo
    
    });