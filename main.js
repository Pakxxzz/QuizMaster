let score = 0;
let index = 0;
let name = "";
let scoreList = document.getElementById("scores");
let nameList = document.getElementById("names");
let categoryList = document.getElementById("categories");
let questions = document.getElementById("questions");
let btn_a = document.getElementById("btn-A");
let btn_b = document.getElementById("btn-B");
let btn_c = document.getElementById("btn-C");
let btn_d = document.getElementById("btn-D");
let countdown = document.getElementById("countdown");
let correction = document.getElementById("correction");
let btn = document.querySelectorAll('.answer-button .choices');
let category_buttons = document.getElementsByClassName("buttons");


document.addEventListener('DOMContentLoaded', function() {
 var getStart = document.getElementById("getStart");
 var targetQuiz = document.getElementById("page_quizzes");

 getStart.addEventListener('click', function() {
  targetQuiz.scrollIntoView({ behavior: 'smooth' });
 });
});

document.addEventListener('DOMContentLoaded', function() {
 var getStart = document.getElementById("about");
 var targetQuiz = document.getElementById("page_about");

 getStart.addEventListener('click', function() {
  targetQuiz.scrollIntoView({ behavior: 'smooth' });
 });
});

document.addEventListener('DOMContentLoaded', function() {
 var quizzes = document.getElementById("quizzes");
 var targetQuiz = document.getElementById("page_quizzes");

 quizzes.addEventListener('click', function() {
  targetQuiz.scrollIntoView({ behavior: 'smooth' });
 });
});

document.addEventListener('DOMContentLoaded', function() {
 var home = document.getElementById("home");
 var targetHome = document.getElementById("home_page");

 home.addEventListener('click', function() {
  targetHome.scrollIntoView({ behavior: 'smooth' });
 });
});

document.addEventListener('DOMContentLoaded', function() {
 var home = document.getElementById("home1");
 var targetHome = document.getElementById("home_page");

 home.addEventListener('click', function() {
  targetHome.scrollIntoView({ behavior: 'smooth' });
 });
});

document.addEventListener('DOMContentLoaded', function() {
 var category_buttons = document.querySelectorAll("#category-buttons");
 var targetQuiz = document.getElementById("page_quizzes");

 category_buttons.forEach((quiz, index) => {
  quiz.addEventListener('click', function() {
   targetQuiz.scrollIntoView({ behavior: 'smooth' });
  });
 });
});

//function for general category
let general_arr = [
 {
  question: "What is the capital city of the Philippines?",
  options: ["Cebu City", "Davao City", "Nueva Ecija", "Manila"],
  correctAnswer: "D",
  levelId: "level-1"
    },
 {
  question: "Which Philippine national hero is known for his role in the fight against Spanish colonization?",
  options: ["Andres Bonifacio", "Emilio Aguinaldo", "Jose Rizal", "Lapu-Lapu"],
  correctAnswer: "C",
  levelId: "level-2"
    },
 {
  question: "What is the official currency of the Philippines?",
  options: ["Peso", "Ringgit", "Baht", "Yen"],
  correctAnswer: "A",
  levelId: "level-3"
    },
 {
  question: "Which volcano, known for its near-perfect cone, is one of the most active in the Philippines?",
  options: ["Taal Volcano", "Mount Mayon", "Mount Apo", "Mount Pinatubo"],
  correctAnswer: "B",
  levelId: "level-4"
    },
 {
  question: "What is the longest river in the Philippines?",
  options: ["Cagayan River", "Agusan River", "Pampanga River", "Pasig River"],
  correctAnswer: "A",
  levelId: "level-5"
    },
 {
  question: "In what year did the Philippines gain independence from American colonization?",
  options: ["1898", "1946", "1914", "1972"],
  correctAnswer: "B",
  levelId: "level-6"
    },
 {
  question: "What is the national flower of the Philippines?",
  options: ["Sampaguita", "Dahlia", "Gumamela", "Rose"],
  correctAnswer: "A",
  levelId: "level-7"
    },
 {
  question: "Which Filipino dish is made from pork or chicken marinated in a mixture of vinegar, soy sauce, and garlic, then braised until tender?",
  options: ["Adobo", "Sinigang", "Lechon", "Kare-Kare"],
  correctAnswer: "A",
  levelId: "level-8"
    },
 {
  question: "What is the traditional Filipino handwoven fabric often used for formal occasions?",
  options: ["T'nalak", "Barong Tagalog", "Malong", "Piña"],
  correctAnswer: "D",
  levelId: "level-9"
    },
 {
  question: "What event marked the declaration of martial law in the Philippines by President Ferdinand Marcos in 1972?",
  options: ["EDSA Revolution", "People Power Revolution", "Plaza Miranda Bombing", "Jabidah Massacre"],
  correctAnswer: "C",
  levelId: "level-10"
    },
];

for (let b = 0; b < btn.length; b++) {
 btn[b].disabled = true;
}

//general quiz
function general() {

 do {
  name = prompt("Enter your username:");
 } while (name == null || name.trim().length == 0);

 async function askQuestion() {


  for (let a = 0; a < category_buttons.length; a++) {
   category_buttons[a].disabled = true;
  }

  const question = general_arr[index].question;
  const options = general_arr[index].options;
  const correctAnswer = general_arr[index].correctAnswer;
  const levelId = general_arr[index].levelId;

  for (let i = 3; i > 0; i--) {
   questions.innerHTML = "Countdown: " + i;
   await delay(1000);
  }

  questions.innerHTML = question;
  btn_a.innerHTML = options[0];
  btn_b.innerHTML = options[1];
  btn_c.innerHTML = options[2];
  btn_d.innerHTML = options[3];
  countdown.classList.remove("count-down");
  countdown.classList.add("countdown");

  for (let b = 0; b < btn.length; b++) {
   btn[b].disabled = false;
  }

  let timer = setTimeout(function() {
   if (index > general_arr.length) {

    countdownToClear();
   }
   countdown.classList.remove("countdown");
   countdown.classList.add("count-down");
   document.getElementById(levelId).style.backgroundColor = "#ff0000";
   answers();
   showNextQuestion();
  }, 15000);

  document.getElementById(levelId).style.backgroundColor = "#ff0000";

  btn.forEach((selectAnswer, index) => {
   selectAnswer.onclick = function() {
    clearTimeout(timer);
    countdown.classList.remove("countdown");
    countdown.classList.add("count-down");

    if (this.value === correctAnswer) {
     score++;
     correct();
    } else {
     answers();
    }
    for (let b = 0; b < btn.length; b++) {
     btn[b].disabled = true;
    }
    showNextQuestion();
   };
  });

  async function correct() {
   for (let i = 3; i > 0; i--) {
    correction.innerHTML = "Correct!";
    await delay(1000);
   }
   correction.innerHTML = "";

  }

  async function answers() {
   for (let i = 3; i > 0; i--) {
    correction.innerHTML = "The correct answer is: " + correctAnswer;
    await delay(1000);
   }
   correction.innerHTML = "";

  }

 }

 function showNextQuestion() {
  console.log("Index:", index, "general_arr.length:", general_arr.length);
  index++;
  if (index < general_arr.length) {

   askQuestion();
  } else {
   countdownToClear();
  }
 }


 async function countdownToClear() {
  for (let i = 3; i > 0; i--) {
   questions.innerHTML = "Quiz is done in: " + i;
   await delay(1000);
  }

  for (let b = 0; b < btn.length; b++) {
   btn[b].disabled = true;
  }
  for (let a = 0; a < category_buttons.length; a++) {
   category_buttons[a].disabled = false;
  }

  const names = document.createElement("li");
  const scores = document.createElement("li");
  const categories = document.createElement("li");

  scores.textContent = score;
  names.textContent = name;
  categories.textContent = "Gene";

  scoreList.appendChild(scores);
  nameList.appendChild(names);
  categoryList.appendChild(categories);
  questions.innerHTML = "";
  btn_a.innerHTML = "";
  btn_b.innerHTML = "";
  btn_c.innerHTML = "";
  btn_d.innerHTML = "";
  for (let c = 0; c < general_arr.length; c++) {

   document.getElementById(general_arr[c].levelId).style.backgroundColor = "#1c0000";
  }

  // Clear questions, buttons, and level after the countdown
  name = "";
  score = 0;
  resetGeneral();

 }
 const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

 // Call the askQuestion function to start the quiz
 askQuestion();

}

function resetGeneral() {
 general_arr = [
  {
   question: "What is the capital city of the Philippines?",
   options: ["Cebu City", "Davao City", "Nueva Ecija", "Manila"],
   correctAnswer: "D",
   levelId: "level-1"
        },
  {
   question: "Which Philippine national hero is known for his role in the fight against Spanish colonization?",
   options: ["Andres Bonifacio", "Emilio Aguinaldo", "Jose Rizal", "Lapu-Lapu"],
   correctAnswer: "C",
   levelId: "level-2"
        },
  {
   question: "What is the official currency of the Philippines?",
   options: ["Peso", "Ringgit", "Baht", "Yen"],
   correctAnswer: "A",
   levelId: "level-3"
        },
  {
   question: "Which volcano, known for its near-perfect cone, is one of the most active in the Philippines?",
   options: ["Taal Volcano", "Mount Mayon", "Mount Apo", "Mount Pinatubo"],
   correctAnswer: "B",
   levelId: "level-4"
        },
  {
   question: "What is the longest river in the Philippines?",
   options: ["Cagayan River", "Agusan River", "Pampanga River", "Pasig River"],
   correctAnswer: "A",
   levelId: "level-5"
        },
  {
   question: "In what year did the Philippines gain independence from American colonization?",
   options: ["1898", "1946", "1914", "1972"],
   correctAnswer: "B",
   levelId: "level-6"
        },
  {
   question: "What is the national flower of the Philippines?",
   options: ["Sampaguita", "Dahlia", "Gumamela", "Rose"],
   correctAnswer: "A",
   levelId: "level-7"
        },
  {
   question: "Which Filipino dish is made from pork or chicken marinated in a mixture of vinegar, soy sauce, and garlic, then braised until tender?",
   options: ["Adobo", "Sinigang", "Lechon", "Kare-Kare"],
   correctAnswer: "A",
   levelId: "level-8"
        },
  {
   question: "What is the traditional Filipino handwoven fabric often used for formal occasions?",
   options: ["T'nalak", "Barong Tagalog", "Malong", "Piña"],
   correctAnswer: "D",
   levelId: "level-9"
        },
  {
   question: "What event marked the declaration of martial law in the Philippines by President Ferdinand Marcos in 1972?",
   options: ["EDSA Revolution", "People Power Revolution", "Plaza Miranda Bombing", "Jabidah Massacre"],
   correctAnswer: "C",
   levelId: "level-10"
        },
    ];
 index = 0;
 questions.innerHTML = "Select category to start the game";
 btn_a.innerHTML = "";
 btn_b.innerHTML = "";
 btn_c.innerHTML = "";
 btn_d.innerHTML = "";
 for (let c = 0; c < general_arr.length; c++) {

  document.getElementById(general_arr[c].levelId).style.backgroundColor = "#1c0000";
 }
}

//function for programming category
let math_arr = [
 {
  question: "What is the value of π (pi) to two decimal places?",
  options: ["3.14", "3.16", "3.18", "3.20"],
  correctAnswer: "A",
  levelId: "level-1"
    },
 {
  question: "If a triangle has angles measuring 45 degrees, 45 degrees, and 90 degrees, what type of triangle is it?",
  options: ["Equilateral", "Isosceles", "Scalene", "Right-angle"],
  correctAnswer: "B",
  levelId: "level-2"
    },
 {
  question: "What is the square root of 25?",
  options: ["2", "5", "10", "25"],
  correctAnswer: "B",
  levelId: "level-3"
    },
 {
  question: "Solve the equation for x = 3x + 7 = 16.",
  options: ["3", "5", "9", "3.5"],
  correctAnswer: "B",
  levelId: "level-4"
    },
 {
  question: "Find the average of the numbers 12,8,5,9,15.",
  options: ["8.8", "9", "9.8", "10"],
  correctAnswer: "A",
  levelId: "level-5"
    },
 {
  question: "Solve the inequality 2x + 5 < 11.",
  options: ["x < 3", "x > 3", "x < 8", "x > 8"],
  correctAnswer: "A",
  levelId: "level-6"
    },
 {
  question: "Simplify the expression 2(x + 3) - 4.",
  options: ["2x + 2", "2x + 6", "2x - 2", "2x - 6"],
  correctAnswer: "B",
  levelId: "level-7"
    },
 {
  question: "Calculate the area of a triangle with a base of 10 units and a height of 6 units.",
  options: ["20 square units", "30 square units", "40 square units", "60 square units"],
  correctAnswer: "B",
  levelId: "level-8"
    },
 {
  question: "Find the value of y in the equation 2y - 5 = 11.",
  options: ["y = 3", "y = 6", "y = 8", "y = -3"],
  correctAnswer: "A",
  levelId: "level-9"
    },
 {
  question: "Evaluate the expression 4a - 2b when a = 6 and b = 2.",
  options: ["20", "22", "24", "26"],
  correctAnswer: "C",
  levelId: "level-10"
    },
];


function math() {

 do {
  name = prompt("Enter your username:");
 } while (name == null || name.trim().length == 0);

 async function askQuestion() {

  for (let a = 0; a < category_buttons.length; a++) {
   category_buttons[a].disabled = true;
  }

  const question = math_arr[index].question;
  const options = math_arr[index].options;
  const correctAnswer = math_arr[index].correctAnswer;
  const levelId = math_arr[index].levelId;

  for (let i = 3; i > 0; i--) {
   questions.innerHTML = "Countdown: " + i;
   await delay(1000);
  }

  questions.innerHTML = question;
  btn_a.innerHTML = options[0];
  btn_b.innerHTML = options[1];
  btn_c.innerHTML = options[2];
  btn_d.innerHTML = options[3];
  countdown.classList.remove("count-down");
  countdown.classList.add("countdown");

  for (let b = 0; b < btn.length; b++) {
   btn[b].disabled = false;
  }

  let timer = setTimeout(function() {
   if (index > math_arr.length) {

    countdownToClear();
   }
   countdown.classList.remove("countdown");
   countdown.classList.add("count-down");
   document.getElementById(levelId).style.backgroundColor = "#ff0000";
   answers();
   showNextQuestion();
  }, 15000);

  document.getElementById(levelId).style.backgroundColor = "#ff0000";

  btn.forEach((selectAnswer, index) => {
   selectAnswer.onclick = function() {
    clearTimeout(timer);
    countdown.classList.remove("countdown");
    countdown.classList.add("count-down");

    if (this.value === correctAnswer) {
     score++;
     correct();
    } else {
     answers();
    }
    for (let b = 0; b < btn.length; b++) {
     btn[b].disabled = true;
    }
    showNextQuestion();
   };
  });

  async function correct() {
   for (let i = 3; i > 0; i--) {
    correction.innerHTML = "Correct!";
    await delay(1000);
   }
   correction.innerHTML = "";

  }

  async function answers() {
   for (let i = 3; i > 0; i--) {
    correction.innerHTML = "The correct answer is: " + correctAnswer;
    await delay(1000);
   }
   correction.innerHTML = "";

  }

 }

 function showNextQuestion() {
  console.log("Index:", index, "math_arr.length:", math_arr.length);
  index++;
  if (index < math_arr.length) {

   askQuestion();
  } else {
   countdownToClear();
  }
 }


 async function countdownToClear() {
  for (let i = 3; i > 0; i--) {
   questions.innerHTML = "Quiz is done in: " + i;
   await delay(1000);
  }

  for (let b = 0; b < btn.length; b++) {
   btn[b].disabled = true;
  }
  for (let a = 0; a < category_buttons.length; a++) {
   category_buttons[a].disabled = false;
  }

  const names = document.createElement("li");
  const scores = document.createElement("li");
  const categories = document.createElement("li");


  scores.textContent = score;
  names.textContent = name;
  categories.textContent = "Math";

  scoreList.appendChild(scores);
  nameList.appendChild(names);
  categoryList.appendChild(categories);
  questions.innerHTML = "";
  btn_a.innerHTML = "";
  btn_b.innerHTML = "";
  btn_c.innerHTML = "";
  btn_d.innerHTML = "";
  for (let c = 0; c < math_arr.length; c++) {

   document.getElementById(math_arr[c].levelId).style.backgroundColor = "#1c0000";
  }

  // Clear questions, buttons, and level after the countdown
  name = "";
  score = 0;
  resetMath();

 }
 const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

 // Call the askQuestion function to start the quiz
 askQuestion();

}


function resetMath() {
 math_arr = [
  {
   question: "What is the value of π (pi) to two decimal places?",
   options: ["3.14", "3.16", "3.18", "3.20"],
   correctAnswer: "A",
   levelId: "level-1"
        },
  {
   question: "If a triangle has angles measuring 45 degrees, 45 degrees, and 90 degrees, what type of triangle is it?",
   options: ["Equilateral", "Isosceles", "Scalene", "Right-angle"],
   correctAnswer: "B",
   levelId: "level-2"
        },
  {
   question: "What is the square root of 25?",
   options: ["2", "5", "10", "25"],
   correctAnswer: "B",
   levelId: "level-3"
        },
  {
   question: "Solve the equation for x = 3x + 7 = 16.",
   options: ["3", "5", "9", "3.5"],
   correctAnswer: "B",
   levelId: "level-4"
        },
  {
   question: "Find the average of the numbers 12,8,5,9,15.",
   options: ["8.8", "9", "9.8", "10"],
   correctAnswer: "A",
   levelId: "level-5"
        },
  {
   question: "Solve the inequality 2x + 5 < 11.",
   options: ["x < 3", "x > 3", "x < 8", "x > 8"],
   correctAnswer: "A",
   levelId: "level-6"
        },
  {
   question: "Simplify the expression 2(x + 3) - 4.",
   options: ["2x + 2", "2x + 6", "2x - 2", "2x - 6"],
   correctAnswer: "B",
   levelId: "level-7"
        },
  {
   question: "Calculate the area of a triangle with a base of 10 units and a height of 6 units.",
   options: ["20 square units", "30 square units", "40 square units", "60 square units"],
   correctAnswer: "B",
   levelId: "level-8"
        },
  {
   question: "Find the value of y in the equation 2y - 5 = 11.",
   options: ["y = 3", "y = 6", "y = 8", "y = -3"],
   correctAnswer: "A",
   levelId: "level-9"
        },
  {
   question: "Evaluate the expression 4a - 2b when a = 6 and b = 2.",
   options: ["20", "22", "24", "26"],
   correctAnswer: "C",
   levelId: "level-10"
        },
    ];
 index = 0;
 questions.innerHTML = "Select category to start the game";
 btn_a.innerHTML = "";
 btn_b.innerHTML = "";
 btn_c.innerHTML = "";
 btn_d.innerHTML = "";
 for (let c = 0; c < math_arr.length; c++) {

  document.getElementById(math_arr[c].levelId).style.backgroundColor = "#1c0000";
 }
}

//function for science category
let science_arr = [
 {
  question: "What is the chemical symbol for gold?",
  options: ["Gd", "Au", "Ag", "Fe"],
  correctAnswer: "B",
  levelId: "level-1"
    },
 {
  question: "Which planet is known as the 'Red Planet'?",
  options: ["Venus", "Jupiter", "Mars", "Saturn"],
  correctAnswer: "C",
  levelId: "level-2"
    },
 {
  question: "What is the powerhouse of the cell?",
  options: ["Mitochondrion", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
  correctAnswer: "A",
  levelId: "level-3"
    },
 {
  question: "Which gas is most abundant in the Earth's atmosphere?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "hydrogen"],
  correctAnswer: "B",
  levelId: "level-4"
    },
 {
  question: "What is the smallest unit of matter that retains the properties of an element?",
  options: ["Hydrogen", "Molecule", "Electron", "Atom"],
  correctAnswer: "D",
  levelId: "level-5"
    },
 {
  question: "Which of the following is a renewable energy source?",
  options: ["Coal", "Solar Energy", "Natural Gas", "Nuclear Power"],
  correctAnswer: "B",
  levelId: "level-6"
    },
 {
  question: "What process converts sugar into energy in cells?",
  options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
  correctAnswer: "B",
  levelId: "level-7"
    },
 {
  question: "Which scientist is known for his laws of motion and universal gravitation?",
  options: ["Marie Curie", "Galileo Galilei", "Albert Einstein", "Isaac Newton"],
  correctAnswer: "D",
  levelId: "level-8"
    },
 {
  question: "What is the chemical formula for water?",
  options: ["O2", "CH4", "H2O", "CO2"],
  correctAnswer: "C",
  levelId: "level-9"
    },
 {
  question: "What causes the Earth's seasons?",
  options: ["Tilt of the Earth's Axis", "Distance from the Sun", "Rotation Speed", "Earth's Magnetic Field"],
  correctAnswer: "A",
  levelId: "level-10"
    },
];

function science() {

 do {
  name = prompt("Enter your username:");
 } while (name == null || name.trim().length == 0);

 async function askQuestion() {

  for (let a = 0; a < category_buttons.length; a++) {
   category_buttons[a].disabled = true;
  }

  const question = science_arr[index].question;
  const options = science_arr[index].options;
  const correctAnswer = science_arr[index].correctAnswer;
  const levelId = science_arr[index].levelId;

  for (let i = 3; i > 0; i--) {
   questions.innerHTML = "Countdown: " + i;
   await delay(1000);
  }

  questions.innerHTML = question;
  btn_a.innerHTML = options[0];
  btn_b.innerHTML = options[1];
  btn_c.innerHTML = options[2];
  btn_d.innerHTML = options[3];
  countdown.classList.remove("count-down");
  countdown.classList.add("countdown");

  for (let b = 0; b < btn.length; b++) {
   btn[b].disabled = false;
  }

  let timer = setTimeout(function() {
   if (index > science_arr.length) {

    countdownToClear();
   }
   countdown.classList.remove("countdown");
   countdown.classList.add("count-down");
   document.getElementById(levelId).style.backgroundColor = "#ff0000";
   answers();
   showNextQuestion();
  }, 15000);

  document.getElementById(levelId).style.backgroundColor = "#ff0000";

  btn.forEach((selectAnswer, index) => {
   selectAnswer.onclick = function() {
    clearTimeout(timer);
    countdown.classList.remove("countdown");
    countdown.classList.add("count-down");

    if (this.value === correctAnswer) {
     score++;
     correct();
    } else {
     answers();
    }
    for (let b = 0; b < btn.length; b++) {
     btn[b].disabled = true;
    }
    showNextQuestion();
   };
  });

  async function correct() {
   for (let i = 3; i > 0; i--) {
    correction.innerHTML = "Correct!";
    await delay(1000);
   }
   correction.innerHTML = "";

  }

  async function answers() {
   for (let i = 3; i > 0; i--) {
    correction.innerHTML = "The correct answer is: " + correctAnswer;
    await delay(1000);
   }
   correction.innerHTML = "";

  }

 }

 function showNextQuestion() {
  console.log("Index:", index, "science_arr.length:", science_arr.length);
  index++;
  if (index < science_arr.length) {

   askQuestion();
  } else {
   countdownToClear();
  }
 }


 async function countdownToClear() {
  for (let i = 3; i > 0; i--) {
   questions.innerHTML = "Quiz is done in: " + i;
   await delay(1000);
  }

  for (let b = 0; b < btn.length; b++) {
   btn[b].disabled = true;
  }
  for (let a = 0; a < category_buttons.length; a++) {
   category_buttons[a].disabled = false;
  }

  const names = document.createElement("li");
  const scores = document.createElement("li");
  const categories = document.createElement("li");


  scores.textContent = score;
  names.textContent = name;
  categories.textContent = "Scie";

  scoreList.appendChild(scores);
  nameList.appendChild(names);
  categoryList.appendChild(categories);
  questions.innerHTML = "";
  btn_a.innerHTML = "";
  btn_b.innerHTML = "";
  btn_c.innerHTML = "";
  btn_d.innerHTML = "";
  for (let c = 0; c < science_arr.length; c++) {

   document.getElementById(science_arr[c].levelId).style.backgroundColor = "#1c0000";
  }

  // Clear questions, buttons, and level after the countdown
  name = "";
  score = 0;
  resetScience();

 }
 const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

 // Call the askQuestion function to start the quiz
 askQuestion();

}

function resetScience() {
 science_arr = [
  {
   question: "What is the chemical symbol for gold?",
   options: ["Gd", "Au", "Ag", "Fe"],
   correctAnswer: "B",
   levelId: "level-1"
        },
  {
   question: "Which planet is known as the 'Red Planet'?",
   options: ["Venus", "Jupiter", "Mars", "Saturn"],
   correctAnswer: "C",
   levelId: "level-2"
        },
  {
   question: "What is the powerhouse of the cell?",
   options: ["Mitochondrion", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
   correctAnswer: "A",
   levelId: "level-3"
        },
  {
   question: "Which gas is most abundant in the Earth's atmosphere?",
   options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "hydrogen"],
   correctAnswer: "B",
   levelId: "level-4"
        },
  {
   question: "What is the smallest unit of matter that retains the properties of an element?",
   options: ["Hydrogen", "Molecule", "Electron", "Atom"],
   correctAnswer: "D",
   levelId: "level-5"
        },
  {
   question: "Which of the following is a renewable energy source?",
   options: ["Coal", "Solar Energy", "Natural Gas", "Nuclear Power"],
   correctAnswer: "B",
   levelId: "level-6"
        },
  {
   question: "What process converts sugar into energy in cells?",
   options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
   correctAnswer: "B",
   levelId: "level-7"
        },
  {
   question: "Which scientist is known for his laws of motion and universal gravitation?",
   options: ["Marie Curie", "Galileo Galilei", "Albert Einstein", "Isaac Newton"],
   correctAnswer: "D",
   levelId: "level-8"
        },
  {
   question: "What is the chemical formula for water?",
   options: ["O2", "CH4", "H2O", "CO2"],
   correctAnswer: "C",
   levelId: "level-9"
        },
  {
   question: "What causes the Earth's seasons?",
   options: ["Tilt of the Earth's Axis", "Distance from the Sun", "Rotation Speed", "Earth's Magnetic Field"],
   correctAnswer: "A",
   levelId: "level-10"
        },
    ];
 index = 0;
 questions.innerHTML = "Select category to start the game";
 btn_a.innerHTML = "";
 btn_b.innerHTML = "";
 btn_c.innerHTML = "";
 btn_d.innerHTML = "";
 for (let c = 0; c < science_arr.length; c++) {

  document.getElementById(science_arr[c].levelId).style.backgroundColor = "#1c0000";
 }
}

//function for programming category
let programming_arr = [
 {
  question: "What is the standard way to output text in C++?",
  options: ["System.out.print()", "print()", "cout <<", "console.log()"],
  correctAnswer: "C",
  levelId: "level-1"
    },
 {
  question: "How do you define a function in Python?",
  options: ["function myFunction():", "def myFunction():", "define myFunction():", "function = myFunction():"],
  correctAnswer: "B",
  levelId: "level-2"
    },
 {
  question: "What keyword is used to declare a constant in Java?",
  options: ["constant", "finals", "const", "static"],
  correctAnswer: "B",
  levelId: "level-3"
    },
 {
  question: "How do you write a multiple-line comment in Python?",
  options: ["// This is comment", "/* This is comment */", "# This is comment", "'''This is comment '''"],
  correctAnswer: "D",
  levelId: "level-4"
    },
 {
  question: "In C++, purpose of 'new' operator?",
  options: ["Allocates variable", "Creates object on heap", "Declares variable", " Allocates array"],
  correctAnswer: "B",
  levelId: "level-5"
    },
 {
  question: "In Python, open file for writing?",
  options: ["open('example.txt', 'w')", "open('example.txt' , 'r')", "open('example.txt' , 'a')", "open('example.txt' , 'x')"],
  correctAnswer: "A",
  levelId: "level-6"
    },
 {
  question: "In Java, purpose of 'super' keyword?",
  options: ["Call constructor", "Access static method", "Refer to instance", "Create instance"],
  correctAnswer: "A",
  levelId: "level-7"
    },
 {
  question: "In JavaScript, check data type of variable?",
  options: ["typeof variable", "variable.type", "typeof(variable)", "vsriable.typeof"],
  correctAnswer: "A",
  levelId: "level-8"
    },
 {
  question: "In C++, difference between delete and delete[]?",
  options: ["'delete' single, 'delete[]' array", "'delete' array, 'delete[]' single", "Both for arrays", "'delete' stack, 'delete[]' heap"],
  correctAnswer: "A",
  levelId: "level-9"
    },
 {
  question: "In Python, generator vs. regular function?",
  options: ["Yield vs. return", "'generate' vs. 'def'", "'yield' lazily vs. 'return' single", "Memory-efficient vs. faster"],
  correctAnswer: "C",
  levelId: "level-10"
    },
];

function programming() {

 do {
  name = prompt("Enter your username:");
 } while (name == null || name.trim().length == 0);

 async function askQuestion() {

  for (let a = 0; a < category_buttons.length; a++) {
   category_buttons[a].disabled = true;
  }

  const question = programming_arr[index].question;
  const options = programming_arr[index].options;
  const correctAnswer = programming_arr[index].correctAnswer;
  const levelId = programming_arr[index].levelId;

  for (let i = 3; i > 0; i--) {
   questions.innerHTML = "Countdown: " + i;
   await delay(1000);
  }

  questions.innerHTML = question;
  btn_a.innerHTML = options[0];
  btn_b.innerHTML = options[1];
  btn_c.innerHTML = options[2];
  btn_d.innerHTML = options[3];
  countdown.classList.remove("count-down");
  countdown.classList.add("countdown");

  for (let b = 0; b < btn.length; b++) {
   btn[b].disabled = false;
  }

  let timer = setTimeout(function() {
   if (index > programming_arr.length) {

    countdownToClear();
   }
   countdown.classList.remove("countdown");
   countdown.classList.add("count-down");
   document.getElementById(levelId).style.backgroundColor = "#ff0000";
   answers();
   showNextQuestion();
  }, 15000);

  document.getElementById(levelId).style.backgroundColor = "#ff0000";

  btn.forEach((selectAnswer, index) => {
   selectAnswer.onclick = function() {
    clearTimeout(timer);
    countdown.classList.remove("countdown");
    countdown.classList.add("count-down");

    if (this.value === correctAnswer) {
     score++;
     correct();
    } else {
     answers();
    }
    for (let b = 0; b < btn.length; b++) {
     btn[b].disabled = true;
    }
    showNextQuestion();
   };
  });

  async function correct() {
   for (let i = 3; i > 0; i--) {
    correction.innerHTML = "Correct!";
    await delay(1000);
   }
   correction.innerHTML = "";

  }

  async function answers() {
   for (let i = 3; i > 0; i--) {
    correction.innerHTML = "The correct answer is: " + correctAnswer;
    await delay(1000);
   }
   correction.innerHTML = "";

  }

 }

 function showNextQuestion() {
  console.log("Index:", index, "programming_arr.length:", programming_arr.length);
  index++;
  if (index < programming_arr.length) {

   askQuestion();
  } else {
   countdownToClear();
  }
 }


 async function countdownToClear() {
  for (let i = 3; i > 0; i--) {
   questions.innerHTML = "Quiz is done in: " + i;
   await delay(1000);
  }

  for (let b = 0; b < btn.length; b++) {
   btn[b].disabled = true;
  }
  for (let a = 0; a < category_buttons.length; a++) {
   category_buttons[a].disabled = false;
  }

  const names = document.createElement("li");
  const scores = document.createElement("li");
  const categories = document.createElement("li");


  scores.textContent = score;
  names.textContent = name;
  categories.textContent = "Prog";

  scoreList.appendChild(scores);
  nameList.appendChild(names);
  categoryList.appendChild(categories);
  questions.innerHTML = "";
  btn_a.innerHTML = "";
  btn_b.innerHTML = "";
  btn_c.innerHTML = "";
  btn_d.innerHTML = "";
  for (let c = 0; c < programming_arr.length; c++) {

   document.getElementById(programming_arr[c].levelId).style.backgroundColor = "#1c0000";
  }

  // Clear questions, buttons, and level after the countdown
  name = "";
  score = 0;
  resetProgramming();

 }
 const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

 // Call the askQuestion function to start the quiz
 askQuestion();

}

function resetProgramming() {
 programming_arr = [
  {
   question: "What is the standard way to output text in C++?",
   options: ["System.out.print()", "print()", "cout <<", "console.log()"],
   correctAnswer: "C",
   levelId: "level-1"
        },
  {
   question: "How do you define a function in Python?",
   options: ["function myFunction():", "def myFunction():", "define myFunction():", "function = myFunction():"],
   correctAnswer: "B",
   levelId: "level-2"
        },
  {
   question: "What keyword is used to declare a constant in Java?",
   options: ["constant", "finals", "const", "static"],
   correctAnswer: "B",
   levelId: "level-3"
        },
  {
   question: "How do you write a multiple-line comment in Python?",
   options: ["// This is comment", "/* This is comment */", "# This is comment", "'''This is comment '''"],
   correctAnswer: "D",
   levelId: "level-4"
        },
  {
   question: "In C++, purpose of 'new' operator?",
   options: ["Allocates variable", "Creates object on heap", "Declares variable", " Allocates array"],
   correctAnswer: "B",
   levelId: "level-5"
        },
  {
   question: "In Python, open file for writing?",
   options: ["open('example.txt', 'w')", "open('example.txt' , 'r')", "open('example.txt' , 'a')", "open('example.txt' , 'x')"],
   correctAnswer: "A",
   levelId: "level-6"
        },
  {
   question: "In Java, purpose of 'super' keyword?",
   options: ["Call constructor", "Access static method", "Refer to instance", "Create instance"],
   correctAnswer: "A",
   levelId: "level-7"
        },
  {
   question: "In JavaScript, check data type of variable?",
   options: ["typeof variable", "variable.type", "typeof(variable)", "vsriable.typeof"],
   correctAnswer: "A",
   levelId: "level-8"
        },
  {
   question: "In C++, difference between delete and delete[]?",
   options: ["'delete' single, 'delete[]' array", "'delete' array, 'delete[]' single", "Both for arrays", "'delete' stack, 'delete[]' heap"],
   correctAnswer: "A",
   levelId: "level-9"
        },
  {
   question: "In Python, generator vs. regular function?",
   options: ["Yield vs. return", "'generate' vs. 'def'", "'yield' lazily vs. 'return' single", "Memory-efficient vs. faster"],
   correctAnswer: "C",
   levelId: "level-10"
        },
    ];
 index = 0;
 questions.innerHTML = "Select category to start the game";
 btn_a.innerHTML = "";
 btn_b.innerHTML = "";
 btn_c.innerHTML = "";
 btn_d.innerHTML = "";
 for (let c = 0; c < programming_arr.length; c++) {

  document.getElementById(programming_arr[c].levelId).style.backgroundColor = "#1c0000";
 }
}