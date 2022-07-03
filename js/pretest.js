var questionsList = [
    {
        question: " If a line is said to be SA1 then the signal of the line is always ",
        options: [
            "1",
            "0"
        ],
        correct: "1",
        score: 0
    },
    {
        question: " If a line is said to be SA0 then the signal of the line is always ",
        options: [
            "1",
            "0"
        ],
        correct: "0",
        score: 0
    },
    {
        question: "The J-K flip flops has ___________ memory",
        options: [
            "Temporary",
            "Random",
            "Nonrandom",
            "True"
        ],
        correct: "True",
        score: 0
    },
    {
        question: "With four J-K flip-flops wired as an asynchronous counter, the first output change of divider #4 indicates a count of how many input clock pulses? ",
        options: [
            "16",
            "8",
            "4",
            "2"
        ],
        correct: "8",
        score: 0
    },
    {
        question: " When toggle condition occurs in JK flip flop?",
        options: [
            "J=1, K=1",
            "J=0, K=0",
            "J=1, K=0",
            "J=0, K=1"
        ],
        correct: "J=1, K=1",
        score: 0
    },
    {
        question: "In a J-K flip flop, when J₁ = 0 and K₁ = 1, the output Qn+1 will have a value of: ",
        options: [
            "0",
            "1",
            "Qn",
            "None of the above"
        ],
        correct: "0",
        score: 0
    },
    {
        question: "The no-change conditions occur when ________ in JK flip flop ",
        options: [
            "J=1, K=1",
            "J=0, K=0",
            "J=1, K=0",
            "J=0, K=1"
        ],
        correct: "J=0, K=0",
        score: 0
    },
];

const checkAnswer = (j) => {
    var ele = document.getElementsByName(`Q${j}`);

    var isCorrect = false;

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            console.log(ele[i].value)
            if (ele[i].value === questionsList[j - 1].correct) {
                document.getElementById(`CQ${j}`).innerHTML = "Correct Answer";
                questionsList[j - 1].score = 1;
                isCorrect = true;
            }
        }
    }

    if (!isCorrect) {
        document.getElementById(`CQ${j}`).innerHTML = "Wrong Answer";
        questionsList[j - 1].score = 0;
    }

    userScore = 0;
    for (let k = 0; k < questionsList.length; k++) {
        userScore += questionsList[k].score;
    }
    mainScore.innerHTML = userScore;
}

let str = "";
let score = 0;

for (let i = 0; i < questionsList.length; i++) {
    const question = questionsList[i];
    str += `<div class="question"> ${question.question} </div>`;

    str += ` <div class=answers>`;

    for (let j = 0; j < question.options.length; j++) {
        str += `<label><input type="radio" name="Q${i + 1}" id="Q${i + 1}" value="${j}"> ${question.options[j]}</label>`;
    }

    str +=`</div>`

    str += `<p id="CQ${i + 1}"></p>
            <button class="btn btn-primary mb-4" type="button" onclick="checkAnswer(${i + 1})">Show Answer</button>`;
}

console.log(str);
console.log(questions)

quiz.innerHTML = str

