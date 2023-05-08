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
    id:1,
    description: 'From the worlds or group of words letter A-D, choose the word or group of words that best suitable for the following sentence',
    Question: 'He was charge with complicity.....abortive coup.',
    optionA: 'in',
    optionB: 'for',
    optionC: 'about',
    optionD: 'on',
    answer: 'in',
  },
  {
    id:2,
    description: 'From the worlds or group of words letter A-D, choose the word or group of words that best suitable for the following sentence',
    Question: 'Corruption is one social evil that must be....... from our society.',
    optionA: 'removed',
    optionB: 'withdrawn',
    optionC: 'eradicted',
    optionD: 'condemned',
    answer: 'eradicted',
  },
  {
    id:3,
    description: 'From the worlds or group of words letter A-D, choose the word or group of words that best suitable for the following sentence',
    Question: 'The workers ...... their trade union leader as a traitor.',
    optionA: 'denounced',
    optionB: 'recommended',
    optionC: 'concluded',
    optionD: 'rewarded',
    answer: 'denounced',
  },
  {
    id:4,
    description: 'From the worlds or group of words letter A-D, choose the word or group of words that best suitable for the following sentence',
    Question: 'The secretary had insulted the manager,so he was .... annoyed and sacked her',
    optionA: 'clearly',
    optionB: 'justifiably',
    optionC: 'basically',
    optionD: 'certainly',
    answer: 'justifiably',
  },
  {
    id:5,
    description: 'From the words or group of words letter A-D, choose the word or group of words that best suitable for the following sentence',
    Question: 'When she lost her father,we all ..... with him',
    optionA: 'consoled',
    optionB: 'regreted',
    optionC: 'mourned',
    optionD: 'comforted',
    answer: 'mourned',
  },
  {
    id: 6,
    description: 'From the list of words letter A-D,choose the one that is most nearly nearest in meaning to the qouted word and that will,at the same correctly fill the gap in the sentence.',
    Question:'The smugglers were arrested for importing \'contraband\' goods.',
    optionA: 'foreign',
    optionB: 'forbidden',
    optionC: 'expired',
    optionD: 'expensive',
    answer: 'forbidden',
  },
  {
    id: 7,
    description: 'From the list of words letter A-D,choose the one that is most nearly nearest in meaning to the qouted word and that will,at the same correctly fill the gap in the sentence.',
    Question:'The doctor \"allayed\" the patient fear that he was suffering from an incurable disease.' ,
    optionA: 'cleared',
    optionB: 'compounded',
    optionC: 'calmed',
    optionD: 'confirmed',
    answer: 'compounded',
  },
  {
    id: 8,
    description: 'From the list of words letter A-D,choose the one that is most nearly nearest in meaning to the qouted word and that will,at the same correctly fill the gap in the sentence.',
    Question:'Even when he realizes that he is wrong,our boss is too \"big-headed\" to change his mind.' ,
    optionA: 'stubborn',
    optionB: 'humble',
    optionC: 'intelligent',
    optionD: 'unruly',
    answer: 'stubborn',
  },
  {
    id: 9,
    description: 'From the list of words letter A-D,choose the one that is most nearly nearest in meaning to the qouted word and that will,at the same correctly fill the gap in the sentence.',
    Question:'Mummy gave the visitor  arather \"cold\" reception.' ,
    optionA: 'cheerful',
    optionB: 'disinterested',
    optionC: 'enthusiastic',
    optionD: 'unfriendly',
    answer: 'unfriendly'
  },
  {
    id: 10,
    description: 'From the list of words letter A-D,choose the one that is most nearly neares in meaning to the qouted word and that will,at the same correctly fill the gap in the sentence.',
    Question:'After the \"sumptuous\" dinner,the guest made me a long speech',
    optionA: 'rich',
    optionB: 'voracious',
    optionC: 'gratifying',
    optionD: 'extravagant',
    answer: 'extravagant'
  },
  {
    id:11,
    description:'From the list of words letter A-D,choose the one that is most nearly opposite in meaning to the qouted word and that will,at the same correctly fill the gap in the sentence.',
    Question:'Many parents wrongly assume that their children are "ignorant\" whereas they are .....',
    optionA:'enthusiastic',
    optionB:'hardworking',
    optionC:'brilliant',
    optionD:'knowledgeable',
    answer:'knowledgeable'
  },
  {
    id:12,
    description:'From the list of words letter A-D,choose the one that is most nearly opposite in meaning to the qouted word and that will,at the same correctly fill the gap in the sentence.',
    Question:'\"Industrious\" workers should be promoted and ..... ones should be dismissed.',
    optionA:'indolent',
    optionB:'dishonest',
    optionC:'inactive',
    optionD:'sluggish',
    answer:'indolent'
  },
  {
    id:13,
    description:'From the list of words letter A-D,choose the one that is most nearly opposite in meaning to the qouted word and that will,at the same correctly fill the gap in the sentence.',
    Question:'Rather than \"accept\" the blame,the manager ..... the accusation.',
    optionA:'criticized',
    optionB:'denied',
    optionC:'refused',
    optionD:'addressed',
    answer:'denied'
  },
  {
    id:14,
    description:'From the list of words letter A-D,choose the one that is most nearly opposite in meaning to the qouted word and that will,at the same correctly fill the gap in the sentence.',
    Question:'It is often easier to \"start\" a riot than to ..... it.',
    optionA:'complete',
    optionB:'suppress',
    optionC:'quench',
    optionD:'quell',
    answer:'suppress'
  },
  {
    id:15,
    description:'From the list of words letter A-D,choose the one that is most nearly opposite in meaning to the qouted word and that will,at the same correctly fill the gap in the sentence.',
    Question:'The judge expected \"direct\" answers but the accused was ..... ',
    optionA:'illusive',
    optionB:'secretive',
    optionC:'delusive',
    optionD:'evasive',
    answer:'evasive'
  },
  {
    id:16,
    description:'From the words letter A-D choose the word that contains the sound represented by the given phonetic symbol.',
    Question:'/i/',
    optionA:'dream',
    optionB:'seize',
    optionC:'fee',
    optionD:'funny',
    answer:'funny'
  },
  {
    id:17,
    description:'From the words letter A-D choose the word that contains the sound represented by the given phonetic symbol.',
    Question:'/^/',
    optionA:'council',
    optionB:'fulfil',
    optionC:'plunge',
    optionD:'wiles',
    answer:'plunge'
  },
  {
    id:18,
    description:'From the words letter A-D choose the word that contains the sound represented by the given phonetic symbol.',
    Question:'/l/',
    optionA:'helm',
    optionB:'calm',
    optionC:'palm',
    optionD:'alms',
    answer:'alms'
  },
  {
    id:19,
    description:'From the words letter A-D choose the word that contains the sound represented by the given phonetic symbol.',
    Question:'/i:/',
    optionA:'early',
    optionB:'pile',
    optionC:'putrid',
    optionD:'cleave',
    answer:'cleave'
  },
  {
    id:20,
    description:'From the words letter A-D choose the word that contains the sound represented by the given phonetic symbol.',
    Question:'/s/',
    optionA:'purge',
    optionB:'bees',
    optionC:'whose',
    optionD:'ways',
    answer:'purge'
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

  currentQuestion.innerText = currentData +1;
  // Setting all background button to default background....
  optionA.style.background = 'rgb(5, 65, 79)';
  optionB.style.background = 'rgb(5, 65, 79)';
  optionC.style.background = 'rgb(5, 65, 79)';
  optionD.style.background = 'rgb(5, 65, 79)';
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