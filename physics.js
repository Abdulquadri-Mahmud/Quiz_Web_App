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

// Get buttons
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const underlineElement = document.createElement('br');
Question.appendChild(underlineElement)
// creating an objects for the questions and the options
const quizData = [{
  id:1,
  description:'Make sure you read all uestions carefully before answering',
  Question:'The mass attached to a string is moving in a circular path .if the speed is doubled ,the tension in the string will be',  
  optionA:'doubled',
  optionB:'halved',
  optionC:'four time as great', 
  optionD:'one-fourth as much ',
  answer:'four time as great'
},
{
  id:2,
  description:'Make sure you read all uestions carefully before answering',
  Question:'A ball is dropped and it hits the floor at a point A. It rebounce upwards to a point B. While moving from A to B it\'s',
  optionA:'kinetic energy is increasing',
  optionB:'potential energy is increasing',
  optionC:'potential energy is decreasing',
  optionD:'kinetic energy remains constant',
  answer:'potential energy is increasing'
},
{
  id:3,
  description:'Make sure you read all uestions carefully before answering',
  Question:'which of the following devices converts heat energy to electrical?',
  optionA:'Transformer', 
  optionB:'Dynamo',
  optionC:'Thermocouple',
  optionD:'Thermostart',
  answer:'Thermocouple'
},
{
  id:4,
  description:'Make sure you read all uestions carefully before answering',
  Question:'The working priciple of a pressure cooker is based on the ',
  optionA:'increase in the volume of steam inside it',
  optionB:'complete trapping of heat inside it',
  optionC:'increase in the in the pressure of the pot',
  optionD:'decrease in the pressure of the pot',
  answer:'increase in the in the pressure of the pot'
},
{
  id:5,
  description:'Make sure you read all uestions carefully before answering',
  Question:'It take\'s a shorter time for a liquid to boil at top of a mountain than at the base because at the top,the', 
  optionA:'temperature is higher',
  optionB:'pressure is lower',
  optionC:'humidity is higher',
  optionD:'temperature is constatnt',
  answer:'pressure is lower'
},
{
  id:6,
  description:'Make sure you read all uestions carefully before answering',
  Question:'In the day time,it is possible to see under shady areas such as under a tree, because light has undergone',
  optionA:'internal reflection',
  optionB:'refraction',
  optionC:'diffraction',
  optionD:'difuse reflection',
  answer:'refraction'
},
{
  id:7,
  description:'Make sure you read all uestions carefully before answering',
  Question:'The distance between a concave mirror and an object placed in front of it is 1.0 m. If the radius of curvature of the mirror is 4.0 m, the image formed will be',
  optionA:'2.00 m behind the mirror',
  optionB:'2.00 m behind in front of the mirror',
  optionC:'1.25 m in front of the mirror',
  optionD:'1.25 m behind the mirror',
  answer:'2.00 m behind the mirror'
},
{
  id:8,
  description:'Make sure you read all uestions carefully before answering',
  Question:'The image of an object formed by a convex mirror is',
  optionA:'real, erect and enlarged',
  optionB:'real, inverted and enlarged',
  optionC:'virtual, erect and diminished',
  optionD:'virtual, erect and enlarged',
  answer:'virtual, erect and diminished'
},
{
  id:9,
  description:'Make sure you read all uestions carefully before answering',
  Question:'The ratio of tensile stress to tensile strain strain is known as ',
  optionA:'shear modulus',
  optionB:'modulus of elasticty',
  optionC:'bulk modulus',
  optionD:'young\'s modulus',
  answer:'young\'s modulus'
},
{
  id:10,
  description:'Make sure you read all uestions carefully before answering',
  Question:'A voltmeter is a device that,',
  optionA:'draws high current',
  optionB:'has a very low resistance',
  optionC:'has a very high resistance',
  optionD:'is able to measure both voltage and current ',
  answer:'has a very high resistance'
},
{
  id:11,
  description:'Make sure you read all uestions carefully before answering',
  Question:'The ice point on the absolute scale of temperature is ',
  optionA:'0 k',
  optionB:'32 k',
  optionC:'100 k',
  optionD:'273 k',
  answer:'0 k'
},
{
  id:12,
  description:'Make sure you read all uestions carefully before answering',
  Question:'Which of the following factors does not increase the rate evaporation of water in a lake?',
  optionA:'increase in the pressure of the atmosphere',
  optionB:'rise in temperature',
  optionC:'increase in the surface area of a temperature',
  optionD:'increase in the speed of wind',
  answer:'increase in the pressure of the atmosphere'
},
{
  id:13,
  description:'Make sure you read all uestions carefully before answering',
  Question:'When the speed of a car is halved, is kinetic energy is',
  optionA:'doubled',
  optionB:'quarterd',
  optionC:'halved',
  optionD:'quadrupled',
  answer:'quadrupled'
},
{
  id:14,
  description:'Make sure you read all uestions carefully before answering',
  Question:'A resistor with fixed resistance value is called a',
  optionA:'restance box',
  optionB:'standard resistor',
  optionC:'shunt',
  optionD:'multiplier',
  answer:'standard resistor'
},
{
  id:15,
  description:'Make sure you read all uestions carefully before answering',
  Question:'Which of the following statement is not an advantage of an alkaline accumulator?',
  optionA:'the electrolyte does not need attention',
  optionB:'it can be recharged',
  optionC:'it has low internal resistance',
  optionD:'is has a much longer life than lead acid accumulator',
  answer:'the electrolyte does not need attention'
},
{
  id:16,
  description:'Make sure you read all uestions carefully before answering',
  Question:'The time rate of increase in velocity is called ',
  optionA:'force',
  optionB:'momemtum',
  optionC:'energy',
  optionD:'speed',
  answer:'energy'
},
{
  id:17,
  description:'Make sure you read all uestions carefully before answering',
  Question:'Which of the following quantities is a vector',
  optionA:'volume',
  optionB:'momemtum',
  optionC:'energy',
  optionD:'speed',
  answer:'momemtum'
},
{
  id:18,
  description:'Make sure you read all uestions carefully before answering',
  Question:'A body of mass 2kg is released from a point 100m above the ground. Calculate its kinetic energy 80m from the point of the release ',
  optionA:'1600J',
  optionB:'900J',
  optionC:'600J',
  optionD:'200J',
  answer:'1600J'
},
{
  id:19,
  description:'Make sure you read all uestions carefully before answering',
  Question:'A transvers pulse of frequency 9Hz travels 4.5m in 0.6s. Calculate the wavelenght of the pulse',
  optionA:'3.33m',
  optionB:'0.30m',
  optionC:'0.83m',
  optionD:'1.20m',
  answer:'0.83m'
},
{
  id:20,
  description:'Make sure you read all uestions carefully before answering',
  Question:'The nucleon and proton numbers of a nuetral atom of the element are 238 and 92 respectively. Determine the number of nuetrons in the atom',
  optionA:'119',
  optionB:'330',
  optionC:'165',
  optionD:'146',
  answer:'146'
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
   Question.innerHTML = data.Question;

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
    }
    if(optionA.innerText !== (data.answer)){
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