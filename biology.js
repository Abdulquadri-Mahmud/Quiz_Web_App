const pack = document.querySelector('.packager');
const missedQuestionCont = document.querySelector('.questionMissedCont');
const userQuestion = document.querySelector('.userQuestion');
const userAnswer = document.querySelector('.userAnswer');
const currentQuestion = document.querySelector('.currentQuestion');
const submitButtonCont = document.querySelector('.submitButtonCont');

// Quiz sections 

//Getting the packager container for all the questions sections...
const packager = document.querySelector('.packager');

// This packager container has already been set to display none in our css.....
// Now we are setting the packager container to display block in the function created below....
function displayBlock(){
  packager.style.display = 'block';
}

// Since we have already set the packager container to display block we are also going to set the start quiz button to display none...
//Getting the Start quiz button
const startQuizWrapper = document.querySelector('.startQuizWrapper');
const startQuizBtn = document.querySelector('.startQuizBtn');

function startQuizToDisplayNone(){
  startQuizBtn.style.display = 'none';
  startQuizWrapper.style.height = '45px';
}


const description = document.querySelector('.descript');
// Selecting the question
const Question = document.querySelector('.question');
// Selecting the options
const optionA = document.querySelector('.optionA');
const optionB = document.querySelector('.optionB');
const optionC = document.querySelector('.optionC');
const optionD = document.querySelector('.optionD');

// // Get buttons
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const underlineElement = document.createElement('br');
Question.appendChild(underlineElement)
// creating an objects for the questions and the options
const quizData = [{
  id:'1',
  description:'',
  Question:'',
  optionA:'',
  optionB:'',
  optionC:'',
  optionD:'',
  answer:''
},
{
  id:'2',
  description:'',
  Question:'',
  optionA:'',
  optionB:'',
  optionC:'',
  optionD:'',
  answer:''
},
{
  id:'3',
  description:'',
  Question:'',
  optionA:'',
  optionB:'',
  optionC:'',
  optionD:'',
  answer:''
},
{
  id:'4',
  description:'',
  Question:'',
  optionA:'',
  optionB:'',
  optionC:'',
  optionD:'',
  answer:''
},
{
  id:'5',
  description:'',
  Question:'',
  optionA:'',
  optionB:'',
  optionC:'',
  optionD:'',
  answer:''
},
{
  id:'6',
  description:'',
  Question:'',
  optionA:'',
  optionB:'',
  optionC:'',
  optionD:'',
  answer:''
},
{
  id:'7',
  description:'',
  Question:'',
  optionA:'',
  optionB:'',
  optionC:'',
  optionD:'',
  answer:''
},
{
  id:'8',
  description:'',
  Question:'',
  optionA:'',
  optionB:'',
  optionC:'',
  optionD:'',
  answer:''
},
{
  id:'9',
  description:'',
  Question:'',
  optionA:'',
  optionB:'',
  optionC:'',
  optionD:'',
  answer:''
},
{
  id:'10',
  description:'',
  Question:'',
  optionA:'',
  optionB:'',
  optionC:'',
  optionD:'',
  answer:''
}
];

let currentData = 0;

let userScore = 0;

let percentage = 0;

const viewUserScore = document.querySelector('.userScoreCont');

const score = document.querySelector('.score');
const Percentage = document.querySelector('.percentage');

window.addEventListener('DOMContentLoaded', (e) =>{
  showQuiz(currentData);
  });
  
function showQuiz(quiz){

  const data = quizData[quiz];
  // Inserting the current description
   description.textContent = data.description;

   // Inserting the current question
   Question.textContent = data.Question;

  // Inserting the current options 
  optionA.textContent = data.optionA;
  optionB.textContent = data.optionB;
  optionC.textContent = data.optionC;
  optionD.textContent = data.optionD;

  console.log(data.answer);

// Checking if user clicked on the right or wrong answer.
  optionA.addEventListener('click',(e)=>{
    if(optionA.innerText === (data.answer)){

      optionA.style.background = 'blue';
      percentage += 5;
      userScore++;

      score.textContent = userScore;
      Percentage.textContent = percentage;
      
    }if(optionA.innerText !== (data.answer)){
      optionA.style.background = 'blue';
      console.log('');
    }
  });
  optionB.addEventListener('click',(e)=>{
    if(optionB.innerText === (data.answer)){
      optionB.style.background = 'blue';
      userScore++;
      percentage += 5;

      score.textContent = userScore;
      Percentage.textContent = percentage;

    }if(optionB.innerText !== (data.answer)){
      optionB.style.background = 'blue';
      console.log('');
    }
  });
  optionC.addEventListener('click',(e)=>{
    if(optionC.innerText === (data.answer)){
      optionC.style.background = 'blue';
      userScore++;
      percentage += 5;

      score.textContent = userScore;
      Percentage.textContent = percentage;

    }if(optionC.innerText !== (data.answer)){
      optionC.style.background = 'blue';
      console.log('');
    }
  });
  optionD.addEventListener('click',(e)=>{
    if(optionD.innerText === (data.answer)){
      optionD.style.background = 'blue';
      userScore++;
      percentage += 5;

      score.textContent = userScore;
      Percentage.textContent = percentage;

    }if(optionD.innerText !== (data.answer)){
      optionD.style.background = 'blue';
      console.log('');
    }
  });
}

// Timing sections
const milliseconds = document.querySelector('.ms');
const seconds = document.querySelector('.sec');
const minutes = document.querySelector('.min');

let milliSec = '0:0';
let Seconds = '0:0';

let ms = 0;
let sec = 0;
let min = 0;

let Interval;

// Adding event listener to the start quiz button
startQuizBtn.addEventListener('click', () => {
  displayBlock()
  startQuizToDisplayNone()
  Interval = setInterval(Timer,10);
});

// This is the timing section.
function Timer(){
  ms++;
  if(ms < 9){
    milliseconds.innerText = `0:${ms}`;
  }if(ms >= 10){
    milliseconds.innerText = ms;
  }if(ms >= 99){
    sec++;
    seconds.innerText = `0:${sec}`;
    ms = 0;
  }if(sec > 9){
    seconds.innerText = `0:${sec}`
  }if(sec >= 10){
    seconds.innerText = sec;
  }if(sec >= 59){
    min++;
    minutes.innerText = min;
    sec = 0;
  }if(min < 9){
    minutes.innerText = `0:${min}`
  }if(min >= 10){
    minutes.innerText = min;
  }if(min === 10){
    clearInterval(Interval);
    minutes.innerText = '0';
    minutes.style.color = '#dde1e7';
    minutes.style.fontSize = '1.8rem';

    seconds.innerText = '0';
    seconds.style.color = '#dde1e7';
    seconds.style.fontSize = '1.8rem';

    milliseconds.innerText = '0';
    milliseconds.style.color = '#dde1e7';
    milliseconds.style.fontSize = '1.8rem';

    packager.style.display = 'none';
    viewUserScore.style.display = 'block';
  }
}

// Making sure if the prev button is click
prevBtn.addEventListener('click', () =>{
  currentData--;
  if(currentData < 0){
    currentData = 0;
  }showQuiz(currentData);
  userScore -= 1;
  percentage -= 5;
  currentQuestion.innerText = currentData +1;
});

nextBtn.addEventListener('click', () =>{
  currentData++;
  if(currentData > quizData.length -1){
    currentData = 0;
    clearInterval(Interval)
    pack.style.display = 'none';
    minutes.innerText = '0:0';
    seconds.innerText = '0:0';
    milliseconds.innerText = '0:0';
    submitButtonCont.style.display = 'block';

    submitButtonCont.addEventListener('click',()=>{
      viewUserScore.style.display = 'block';
    });
  }showQuiz(currentData);

  // Setting all background button to default background....
  // Setting all background button to default background....
  optionA.style.background = 'rgb(5, 65, 79)';
  optionB.style.background = 'rgb(5, 65, 79)';
  optionC.style.background = 'rgb(5, 65, 79)';
  optionD.style.background = 'rgb(5, 65, 79)';

  currentQuestion.innerText = currentData +1;
});

document.addEventListener('visibilitychange', () => {
  // const checkState = document.title =  document.visibilityState;
   console.log(document.visibilityState);
   if(document.hidden){
    pack.style.display = 'none';
    startQuizBtn.style.display = 'none';
    clearInterval(Interval);
    viewUserScore.style.display = 'block';
   }
});