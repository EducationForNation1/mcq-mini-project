const quizDB =[
    {
    question: "Q1 : What is the full form of HTML",
    a:"Hello to my land",
    b:"Hey",
    c:"Hyper text markup language",
    d:"None of these",
    ans:"ans3"
},
{
    question: "Q2 : What is the full form of CSS",
    a:"Hello to my land",
    b:"Cascading Style sheet",
    c:"Hyper text markup language",
    d:"None of these",
    ans:"ans2"
},
{
    question: "Q3 :What keyword is used to check whether a given property is valid or not?",
    a:"in",
    b:"is in",
    c:"exists",
    d:"lies",
    ans:"ans1"
},
{
    question: "Q4 :Which of the following is not a Javascript framework?",
    a:"node, React",
    b:"Vue",
    c:"Option (a) & (b)",
    d:"Cassandra",
    ans:"ans4"
},
{
    question: "Q5 :How do we write a comment in javascript?",
    a:"/*  */",
    b:"//",
    c:"#",
    d:"$$",
    ans:"ans2"
}
]; 


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');


const  answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion=()=>{
    const questionList = quizDB[questionCount]
    question.innerHTML =questionList.question;


    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnsert = ()=>{
    let answer;
    answers.forEach( (currentElement)=>{
        if (currentElement.checked){
            answer = currentElement.id;
        }
        
    } );
    return answer;
};

    const deselectAll = ()=>{
        answers.forEach(currentElement => currentElement.checked =false);
    }


submit.addEventListener('click', ()=>{
    const checkAnswer = getCheckAnsert();
    console.log(checkAnswer);

    if(checkAnswer ==quizDB[questionCount].ans){
        score++;
    }
    questionCount++;

    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML =`
          <h3> Your Scored  ${score}/${quizDB.length} </h3>
          <button  class=".btn" onclick="location.reload()"> Play Again</button>
        
        `;
        showScore.classList.remove('scoreArea');
    }
});