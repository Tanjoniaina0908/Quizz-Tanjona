window.onload = function() {
    showQuestion(currentQuestion);
}

const Quizz =[
    {
        question :"Quel est le nombre des fils de Jacob ?",
	    choices :[  
            "6", 
            "12" ,
            "14" , 
            "21"
        ],
        correct: 1
    },
    
    {
        question:"Combien d années Jacob a-t-il servi Laban pour Rachel ?",
	    choices:[ 
            "14" ,
             "7" , 
             "12" , 
             "21", 
        ],
        correct: 0
    },
    {
        question:"Lequel est une lampe à mes pieds, Et une lumière sur mon sentier?",
	    choices: [ 
            "le corps de dieu",
            "l'ecriture de dieu" , 
            "parole de dieu" , 
            "l'amour de dieu" 
        ],
        correct: 2
    },
    {
        question:"Quelle mer le peuple d Israël a-t-il traversé à sec lorsqu’il est sorti d’Egypte ?",
	    choices:[
            "mer mediterané",
            "le fleuve de Jordane",
            "eofrate",
            "mer rouge",
        ],
        correct: 3 
    },
    {
        question:"Qu est ce que Salomon a demandé à Dieu ?",
	    choices:[
            "connaissance",
            "argent",
            "sagesse",
            "richesse",
        ],
        correct: 2
    },
    {
        question:"Foi sans quoi est vaine ?",
	    choices:[
            "oeuvre",
            "parole",
            "réaction",
            "création",
        ],
        correct: 0
    },
    {
        question:"Solomon était le fils de qui ?",
	    choices:[
            "Ahab",
            "David",
            "Saul",
            "Joseph",
        ],
        correct: 1
    },
    {
        question:"Qui est le frère de Moïse ?",
	    choices:[
            "Jonatan",
            "Miriam",
            "Aron",
            "Jacob",
        ],
        correct: 2
    },
    {
        question:"Combien d années les enfants d Israël ont erré dans le désert ?",
	    choices:[
            "40 ans",
            "20 ans",
            "40 jours",
            "400 ans",
        ],
        correct: 0
    },
    {
        question:"Combien de temps Jonas a-t-il passé dans le ventre du gros poisson ?",
	    choices:[
            "40 jours et nuits",
            "14 jours et nuits",
            "20 jours et nuits",
            "3 jours et nuits",
        ],
        correct: 3
    }
];


  
  let currentQuestion = 0;
  let score = 0;
  let timer;
  let timeLeft = 20;
  
  function showQuestion(index) {
    clearInterval(timer);
    timeLeft = 20;
    startTimer();
  
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    const q = Quizz[index];
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
  
    q.choices.forEach((choice, i) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="question" value="${i}">
        ${choice}
      `;
      div.appendChild(label);
    });
  
    container.appendChild(div);
  
    document.getElementById("next-btn").disabled = true;
    document.querySelectorAll('input[name="question"]').forEach(input => {
      input.addEventListener("change", () => {
        showCorrection();
        document.getElementById("next-btn").disabled = false;
        clearInterval(timer);
      });
    });
  
    document.getElementById("next-btn").innerText =
      index === Quizz.length - 1 ? "Terminer" : "Suivant";
  }
  
  function showCorrection() {
    const selected = document.querySelector('input[name="question"]:checked');
    const labels = document.querySelectorAll("label");
    const correctIndex = Quizz[currentQuestion].correct;
  
    labels.forEach((label, i) => {
      if (i === correctIndex) label.classList.add("correct");
      else if (parseInt(selected.value) === i) label.classList.add("wrong");
    });
  
    if (parseInt(selected.value) === correctIndex) {
      score++;
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < Quizz.length) {
      showQuestion(currentQuestion);
    } else {
      showResult();
    }
  }
  
  function showResult() {
    clearInterval(timer);
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("result").innerText = "Quiz terminé ! Votre score : " + score + "/" + Quizz.length;
    document.getElementById("restart-btn").style.display = "inline-block";
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("result").innerText = "";
    document.getElementById("timer").style.display = "block";
    showQuestion(currentQuestion);
  }
  
  function startTimer() {
    document.getElementById("timer").innerText = `Temps : ${timeLeft}s`;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").innerText = `Temps : ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("next-btn").disabled = false;
        showCorrection();
      }
    }, 1000);
  }
  
  showQuestion(currentQuestion);
 
  