
// My quiz-questions

const geographyQuestions = [{
    question: "What is the capital of Ghana?",
    answers: {
        a: "Banjul",
        b: "Accra",
        c: "Dakar"
    },
    correctAnswer: "b"
},{
    question: "In which continent can you find Armenia?",
    answers: {
        a: "Europe",
        b: "Africa",
        c: "Asia"
    },
    correctAnswer: "c"
},{
    question: "Madagascar is surrounded by which Ocean?",
    answers: {
        a: "Pacific",
        b: "Atlantic",
        c: "Indian"
    },
    correctAnswer: "c"
},{
    question: "Which of these belong to the United Kingdom?",
    answers: {
        a: "Scotland",
        b: "Ireland",
        c: "Wales"
    },
    correctAnswer: "a" && "c"
},{
    question: "What is the second largest country in South America?",
    answers: {
        a: "Argentina",
        b: "Colombia",
        c: "Brazil"
    },
    correctAnswer: "a"
},{
    question: "Which country was previously know as Siam?",
    answers: {
        a: "Myanmar",
        b: "Thailand",
        c: "Cambodia"
    },
    correctAnswer: "b"
},{
    question: "Which country does the Madeira-islands belong to?",
    answers: {
        a: "Portugal",
        b: "Ecuador",
        c: "Spain"
    },
    correctAnswer: "a"
},{
    question: "Which is the largest free-standing mountain in the World",
    answers: {
        a: "Mt. Everest",
        b: "K2",
        c: "Kilimanjaro"
    },
    correctAnswer: "c"
},{
    question: "What is the official language of Austria",
    answers: {
        a: "German",
        b: "Austrian",
        c: "French"
    },
    correctAnswer: "a"
},{
    question: "Which of the below are states in the Unites States?",
    answers: {
        a: "Wyoming",
        b: "Puerto Rico",
        c: "Hawaii"
    },
    correctAnswer: "a" && "c"
}];

// Declaring variables from DOM

let questionContainer = document.querySelector("#question-container");
let questionText = document.querySelector("#question-txt");
let answersContainer = document.querySelector("#answers-container");

let labelOne = document.querySelector("#label-1");
let labelTwo = document.querySelector("#label-2");
let labelThree = document.querySelector("#label-3");

let answerOne = document.querySelector("#answer-1");
let answerTwo = document.querySelector("#answer-2");
let answerThree = document.querySelector("#answer-3");

let startButton = document.querySelector("#start-btn");
let nextButton = document.querySelector("#next-btn");

let answersArray = [];
let questionCounter = 0;

// Declaring functions needed

function startGame(){
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    questionText.innerText = geographyQuestions[questionCounter].question; 
    labelOne.innerText = geographyQuestions[questionCounter].answers.a;
    answerOne.value = geographyQuestions[questionCounter].answers.a;
    labelTwo.innerText = geographyQuestions[questionCounter].answers.b;
    answerTwo.value = geographyQuestions[questionCounter].answers.b;
    labelThree.innerText = geographyQuestions[questionCounter].answers.c;
    answerThree.value = geographyQuestions[questionCounter].answers.c;
}

function nextQuestion (){

    if (answerOne.checked == false && answerTwo.checked == false && answerThree.checked == false){
        alert("Please answer the question");
    } else {
        [answerOne, answerTwo, answerThree].forEach((answer) =>{
            if (answer.checked == true){
                answersArray.push(answer.value);
                answer.checked = false;
            }
        })
    
        questionCounter++;
        questionText.innerText = geographyQuestions[questionCounter].question; 
        labelOne.innerText = geographyQuestions[questionCounter].answers.a;
        answerOne.value = geographyQuestions[questionCounter].answers.a;
        labelTwo.innerText = geographyQuestions[questionCounter].answers.b;
        answerTwo.value = geographyQuestions[questionCounter].answers.b;
        labelThree.innerText = geographyQuestions[questionCounter].answers.c;
        answerThree.value = geographyQuestions[questionCounter].answers.c;
    }
}

function checkResults(){

}

// Adding Event Listeners

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);