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
console.log(optionA)
// // Get buttons
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const underlineElement = document.createElement('br');
Question.appendChild(underlineElement)
// creating an objects for the questions and the options
const quizData = [
  {
    id:1,
    description:'Make sure you answer all questions',
    Question:'The air pollutant unknown in nature is',
    optionA:'NO',
    optionB:'CO',
    optionC:'HCHO',
    optionD:'DDT',
    answer:'HCHO'
  },
  {
    id:2,
    description:'Make sure you answer all questions',
    Question:'Sieving is a technique used to seperste mixtures containing solid particles of',
    optionA:'small sizes',
    optionB:'large sizes',
    optionC:'differents sizes',
    optionD:'the same sizes',
    answer:'large sizes'
  },
  {
    id:3,
    description:'Make sure you answer all questions',
    Question:'Environmental pollution is worsened by the release from automobile exhausts of',
    optionA:'water vapour',
    optionB:'steam',
    optionC:'smoke',
    optionD:'heavy metal',
    answer:'smoke'
  },
  { 
    id:4,
    description:'Make sure you answer all questions',
    Question:'Pure solvent are obtained by',
    optionA:'distillation',
    optionB:'condensation',
    optionC:'extraction',
    optionD:'evaporation',
    answer:'distillation'
  },
  {
    id:5,
    description:'Make sure you answer all questions',
    Question:'Given that M is the mass of substance deposited in an electrolysis and Q the quantity of electric consumed,then Faraday\'s law can be written as',
    optionA:'M = z / Q',
    optionB:'M = Q / z',
    optionC:'M = Z / 2Q',
    optionD:'M = QZ',
    answer:'M = QZ'
  },
  {
    id:6,
    description:'Make sure you answer all questions',
    Question:'As the concentration of an electrolyte reduces,the conductivity',
    optionA:'reduces to zero',
    optionB:'decrease',
    optionC:'increase',
    optionD:'is unaffected',
    answer:'decrease'
  },
  {
    id:7,
    description:'Make sure you answer all questions',
    Question:'A burning candle produces water and',
    optionA:'carbon(II)oxide',
    optionB:'carbon(IV)oxide',
    optionC:'oxygen',
    optionD:'hydrogen',
    answer:'carbon(IV)oxide'
  },
  {
    id:8,
    description:'Make sure you answer all questions',
    Question:'The gas that can best be collected by downward displacement of air',
    optionA:'chlorin',
    optionB:'sulphur (IV) oxide',
    optionC:'ammonia',
    optionD:'carbon (IV) oxide',
    answer:'ammonia'
  },
  {
    id:9,
    description:'Make sure you answer all questions',
    Question:'Which of the following metals burn with a brick-red flames',
    optionA:'Pb',
    optionB:'Ca',
    optionC:'Na',
    optionD:'Mg',
    answer:'Na'
  },
  {
    id:10,
    description:'Make sure you answer all questions',
    Question:'When sodium react with water,the resulting solution is',
    optionA:'weakly acidic',
    optionB:'neutral',
    optionC:'acidic',
    optionD:'alkaline',
    answer:'alkaline'
  },
  {
    id:11,
    description:'Make sure you answer all questions',
    Question:'What mass of water produces when 8.0g of hydrogen reacts with with excess oxygen?',
    optionA:'8.0g',
    optionB:'72.0g',
    optionC:'36.0g',
    optionD:'16.0g',
    answer:'72.0g'
  },
  {
    id:12,
    description:'Make sure you answer all questions',
    Question:'Four elements W,X,Y and Z have atomic number of 2,6,16 and 20 respectively.Which of these elements is a metal',
    optionA:'X',
    optionB:'W',
    optionC:'Z',
    optionD:'Y',
    answer:'Z'
  },
  {
    id:13,
    description:'Make sure you answer all questions',
    Question:'The uncovered raw food sold along major road is likely to contain some amounts of',
    optionA:'Pb',
    optionB:'Cu',
    optionC:'Ag',
    optionD:'Na',
    answer:'Pb'
  },
  {
    id:14,
    description:'Make sure you answer all questions',
    Question:'0.0075 mole of calcium trioxocarbonate(IV) is added to 0.015 mole of a solution of hydrochloric acid.The volume of gas evolved at s.t.p is',
    optionA:'224cm cube',
    optionB:'168cm cube',
    optionC:'112cm cube',
    optionD:'100cm cube',
    answer:'100cm cube'
  },
  {
    id:15,
    description:'Make sure you answer all questions',
    Question:'If the relative molecular mass of an element is not a whole number, it can be deduced that the element is',
    optionA:'naturally radioactive',
    optionB:'abundant in nature',
    optionC:'a transition metal',
    optionD:'an isotopic mixture',
    answer:'an isotopic mixture'
  },
  {
    id:16,
    description:'Make sure you answer all questions',
    Question:'A mixture containing iodine and sulphur crystal can be seperated with',
    optionA:'carbon(IV) sulphide to filter off iodine',
    optionB:'water to filter off sulphur',
    optionC:'ethanoic acid to filter off sulphur',
    optionD:'methanol to filter off iodine',
    answer:'carbon(IV) sulphide to filter off iodine'
  },
  {
    id:17,
    description:'Make sure you answer all questions',
    Question:'Which of the following metal is purified commercially by electrolysis',
    optionA:'Zn',
    optionB:'Fe',
    optionC:'Sn',
    optionD:'Cu',
    answer:'Cu'
  },
  {
    id:18,
    description:'Make sure you answer all questions',
    Question:'Given that a mass of a gas occupied 1dm cube at 300k.At what temperature will it\'s volume be doubled keeping the presure constant',
    optionA:'400k',
    optionB:'600k',
    optionC:'550k',
    optionD:'480k',
    answer:'600k'
  },
  {
    id:19,
    description:'Make sure you answer all questions',
    Question:'The quantity of electricity that will liberate 0.125 mole of oxygen molecules during the electrolysis of dilute sodium chloride solution is.(F=96500(mol-1)',
    optionA:'24,125 coulombs',
    optionB:'72,375 coulombs',
    optionC:'48,250 coulombs',
    optionD:'96,500 coulombs ',
    answer:'48,250 coulombs'
  },
  {
    id:20,
    description:'Make sure you answer all questions',
    Question:'If the partial pressure of oxygen in a sample of airis 452mmHg and the total pressure is 780mmHg. What is mole fraction of oxygen?',
    optionA:'0.203',
    optionB:'0.579',
    optionC:'2.030',
    optionD:'5.790',
    answer:'0.579'
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
  }if(sec >= 60){
    min++;
    minutes.innerText = min;
    sec = 0;
  }if(min < 9){
    minutes.innerText = `0:${min}`
  }if(min >= 10){
    minutes.innerText = min;
  }if(min === 25){
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