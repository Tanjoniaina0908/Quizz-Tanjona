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
let userAnswers =  [];

function showQuestion(index) {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";

    const q = Quizz[index];
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = "<p>" + (index + 1) + ". " + q.question + "<p>";

    q.choices.forEach(function(choice, i){
        div.innerHTML += '<label><input type="radio" name="question" value="' + i +'">' + choice + '</label><br>';
    });

    container.appendChild(div);

    document.getElementById("next-btn").innerText = index === Quizz.length - 1 ?
    "Terminer" : "Suivant";
}

function nextQuestion() {
    const selected = document.querySelector('input[name="question"]:checked');
    if (!selected) {
        alert("Veuillez choisir une réponse avant de continuer!");

    return;
    }
    
userAnswers[currentQuestion] = parseInt(selected.value);
    if(userAnswers[currentQuestion] === Quizz[currentQuestion].correct) {
        score++
    }

    currentQuestion++;
    if (currentQuestion <Quizz.length) {
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

    function showResult() {
        document.getElementById("quiz-container").innerHTML = "";

        document.getElementById("next-btn").style.display = "none";

        document.getElementById("result").innerText = "Quiz terminé ! Votre score : " + score + "/" + Quizz.length;
    }

    window.onload = function() {
        showQuestion(currentQuestion);
    }

