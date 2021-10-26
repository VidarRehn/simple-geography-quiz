
// My quiz-questions and answers

const geographyQuestions = [{
    question: "What is the capital of Ghana?",
    answers: {
        a: "Banjul",
        b: "Accra",
        c: "Dakar"
    },
    type: "radio",
    correctAnswer: ["Accra"]
},{
    question: "In which continent can you find Armenia?",
    answers: {
        a: "Europe",
        b: "Africa",
        c: "Asia"
    },
    type: "radio",
    correctAnswer: ["Asia"]
},{
    question: "Madagascar is surrounded by which Ocean?",
    answers: {
        a: "Pacific",
        b: "Atlantic",
        c: "Indian"
    },
    type: "radio",
    correctAnswer: ["Indian"]
},{
    question: "Which of these belong to the United Kingdom?",
    answers: {
        a: "Scotland",
        b: "Ireland",
        c: "Wales",
        d: "Northern Ireland"
    },
    type: "checkbox",
    correctAnswer: ["Scotland", "Wales", "Northern Ireland"]
},{
    question: "What is the second largest country in South America?",
    answers: {
        a: "Argentina",
        b: "Colombia",
        c: "Brazil"
    },
    type: "radio",
    correctAnswer: ["Argentina"]
},{
    question: "Which country was previously know as Siam?",
    answers: {
        a: "Myanmar",
        b: "Thailand",
        c: "Cambodia"
    },
    type: "radio",
    correctAnswer: ["Thailand"]
},{
    question: "Which country does the Madeira-islands belong to?",
    answers: {
        a: "Portugal",
        b: "Ecuador",
        c: "Spain"
    },
    type: "radio",
    correctAnswer: ["Portugal"]
},{
    question: "Which is the largest free-standing mountain in the World?",
    answers: {
        a: "Mt. Everest",
        b: "K2",
        c: "Kilimanjaro"
    },
    type: "radio",
    correctAnswer: ["Kilimanjaro"]
},{
    question: "What is the official language of Austria?",
    answers: {
        a: "German",
        b: "Austrian",
        c: "French"
    },
    type: "radio",
    correctAnswer: ["German"]
},{
    question: "Which of the below are states in the Unites States?",
    answers: {
        a: "Wyoming",
        b: "Puerto Rico",
        c: "Hawaii",
        d: "Alberta"
    },
    type: "checkbox",
    correctAnswer: ["Wyoming", "Hawaii"]
}];

let correctAnswers = [];
geographyQuestions.forEach((q) => {
    correctAnswers.push(q.correctAnswer);
})

// Declaring variables from DOM

let myBody = document.querySelector("body");
myBody.style.background = "white";
myBody.style.color = "black";

let myHeader = document.querySelector("#header");
let questionContainer = document.querySelector("#question-container");
let questionText = document.querySelector("#question-txt");
let answersContainer = document.querySelector("#answers-container");
let checkboxContainer = document.querySelector("#checkboxes");
let radiosContainer = document.querySelector("#radios");
let scoresheetContainer = document.querySelector("#scoresheet");

let labelOne = document.querySelector("#label-1");
let labelTwo = document.querySelector("#label-2");
let labelThree = document.querySelector("#label-3");
let labelFour = document.querySelector("#label-4");
let labelFive = document.querySelector("#label-5");
let labelSix = document.querySelector("#label-6");
let labelSeven = document.querySelector("#label-7");

let answerOne = document.querySelector("#answer-1");
let answerTwo = document.querySelector("#answer-2");
let answerThree = document.querySelector("#answer-3");
let answerFour = document.querySelector("#answer-4");
let answerFive = document.querySelector("#answer-5");
let answerSix = document.querySelector("#answer-6");
let answerSeven = document.querySelector("#answer-7");

let startButton = document.querySelector("#start-btn");
let nextButton = document.querySelector("#next-btn");
let checkResultsButton = document.querySelector("#results-btn");
let darkLightButton = document.querySelector("#dark-light-btn");
let restartButton = document.querySelector("#restart-btn");
let seeScoresheetButton = document.querySelector("#scoresheet-btn")

let errorMessage = document.querySelector("#error-msg");
let answersArray = [];
let questionCounter = 0;
let scoreContainer = document.querySelector("#score");

// Declaring functions needed

function startGame(){
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    if (geographyQuestions[questionCounter].type == "radio"){
        showRadioQuestion();
    } else {
        showCheckBoxQuestion();
    }
}

function showRadioQuestion(){
    radiosContainer.classList.remove("hide");
    checkboxContainer.classList.add("hide");
    questionText.innerText = geographyQuestions[questionCounter].question; 
    labelOne.innerText = geographyQuestions[questionCounter].answers.a;
    answerOne.value = geographyQuestions[questionCounter].answers.a;
    labelTwo.innerText = geographyQuestions[questionCounter].answers.b;
    answerTwo.value = geographyQuestions[questionCounter].answers.b;
    labelThree.innerText = geographyQuestions[questionCounter].answers.c;
    answerThree.value = geographyQuestions[questionCounter].answers.c;
}

function showCheckBoxQuestion(){
    checkboxContainer.classList.remove("hide");
    radiosContainer.classList.add("hide")
    questionText.innerText = geographyQuestions[questionCounter].question;
    labelFour.innerText = geographyQuestions[questionCounter].answers.a;
    answerFour.value = geographyQuestions[questionCounter].answers.a; 
    labelFive.innerText = geographyQuestions[questionCounter].answers.b;
    answerFive.value = geographyQuestions[questionCounter].answers.b; 
    labelSix.innerText = geographyQuestions[questionCounter].answers.c;
    answerSix.value = geographyQuestions[questionCounter].answers.c; 
    labelSeven.innerText = geographyQuestions[questionCounter].answers.d;
    answerSeven.value = geographyQuestions[questionCounter].answers.d; 
}

function nextQuestion (){

    if (answerOne.checked == false && answerTwo.checked == false && answerThree.checked == false && answerFour.checked == false && answerFive.checked == false && answerSix.checked == false && answerSeven.checked == false){

        errorMessage.innerText = "Please answer the question";
        errorMessage.style.color = "red";

    } else {

        errorMessage.innerText = "";
        let arrayWithinArray = [];

        if (questionCounter == (geographyQuestions.length -1)){ // checks if last question
            let arrayWithinArray = [];
            [answerOne, answerTwo, answerThree, answerFour, answerFive, answerSix, answerSeven].forEach((answer) =>{
                if (answer.checked == true){
                    arrayWithinArray.push(answer.value);
                    answer.checked = false;
                }
            }); answersArray.push(arrayWithinArray);

            questionContainer.classList.add("hide");
            checkResultsButton.classList.remove("hide");

        } else {
            [answerOne, answerTwo, answerThree, answerFour, answerFive, answerSix, answerSeven].forEach((answer) =>{
                if (answer.checked == true){
                    arrayWithinArray.push(answer.value);
                    answer.checked = false;
                } 
            }); answersArray.push(arrayWithinArray);

            if (geographyQuestions[questionCounter+1].type == "radio"){

                questionCounter++;
                showRadioQuestion();

            } else if (geographyQuestions[questionCounter+1].type == "checkbox") {
                [answerOne, answerTwo, answerThree, answerFour, answerFive, answerSix, answerSeven].forEach((answer) =>{
                    if (answer.checked == true){
                        arrayWithinArray.push(answer.value);
                        answer.checked = false;
                    }
                }); 
            
                questionCounter++;
                showCheckBoxQuestion();
            }
        }
    }
}

function checkResults(){

    let score = 0;

    correctAnswers.forEach((ans, index) => {
        if (ans.toString() == answersArray[index].toString()){
            score++;
        }
    })

    checkResultsButton.classList.add("hide");
    scoreContainer.classList.remove("hide");
    let message = `You got ${score} out of ${geographyQuestions.length} questions correct`;
    scoreContainer.append(message);

    if (score > 7){
        scoreContainer.style.color = "green";
    } else if (score > 5){
        scoreContainer.style.color = "orange";
    } else {
        scoreContainer.style.color = "red";
    }

    restartButton.classList.remove("hide");
    seeScoresheetButton.classList.remove("hide");
}

function changeMode(){

        if (myBody.style.background === "white"){
            myBody.style.background = "black";
            myHeader.style.color = "white";
            darkLightButton.innerText = "Light Mode";
            questionContainer.style.boxShadow = "0px 0 20px 4px white";
            questionContainer.style.background = "black";
            questionContainer.style.color = "white";
            scoreContainer.style.boxShadow = "0px 0 20px 4px white";
            scoreContainer.style.background = "black";
            scoreContainer.style.color = "white";
            scoresheetContainer.style.color = "white";
        } else {
            myBody.style.background = "white";
            myHeader.style.color = "black";
            darkLightButton.innerText = "Dark Mode"
            questionContainer.style.boxShadow = "0px 0 20px 4px black";
            questionContainer.style.background = "white";
            questionContainer.style.color = "black";
            scoreContainer.style.boxShadow = "0px 0 20px 4px black";
            scoreContainer.style.background = "white";
            scoreContainer.style.color = "black";
            scoresheetContainer.style.color = "black";
        }
}

function restartGame(){
    restartButton.classList.add("hide");
    answersArray = [];
    scoreContainer.classList.add("hide");
    startButton.classList.remove("hide");
    questionCounter = 0;
    scoreContainer.innerHTML = "";
    scoresheetContainer.innerHTML = "";
    seeScoresheetButton.classList.add("hide");

    startGame();
}

function seeScoresheet(){
    geographyQuestions.forEach((q, index) => {
        let question = document.createElement("h4");
        let yourAnswer = document.createElement("p");
        let rightAnswer = document.createElement("p");
        question.innerText = q.question;
        yourAnswer.innerText = `You answered ${answersArray[index]}`;
        rightAnswer.innerText = `The correct answer is ${correctAnswers[index]}`;
        rightAnswer.classList.add("last");
        scoresheetContainer.append(question);
        scoresheetContainer.append(yourAnswer);
        scoresheetContainer.append(rightAnswer);

        if ((answersArray[index].toString()) === (correctAnswers[index].toString())){
            yourAnswer.style.color = "green";
        } else {
            yourAnswer.style.color = "red";
        }
    })
}


// Adding Event Listeners

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
darkLightButton.addEventListener("click", changeMode);
checkResultsButton.addEventListener("click", checkResults);
restartButton.addEventListener("click", restartGame);
seeScoresheetButton.addEventListener("click", seeScoresheet);
