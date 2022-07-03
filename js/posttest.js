var questionsList = [
    {
        question: "What does the triangle on the clock input of a J-K flip-flop mean? ",
        options: [
            "level enabled",
            "edge-triggered"
        ],
        correct: "edge-triggered",
        score: 0
    },
    {
        question: "A correct output is achieved from a master-slave J-K flip-flop only if its inputs are stable while the:",
        options: [
            "clock is LOW",
            "slave is transferring",
            "flip flop reset",
            "clock is HIGH"
        ],
        correct: "clock is HIGH",
        score: 0
    },
    {
        question: "The toggle condition in a master-slave J-K flip-flop means that Q and will switch to their ________ state(s) at the ________",
        options: [
            "opposite, active clock edge",
            "inverted, positive clock edge",
            "quiescent, negative clock edge",
            "reset, synchronous clock edge"
        ],
        correct: "opposite, active clock edge",
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
        question: "What is the significance of the J and K terminals on the J-K flip-flop?",
        options: [
            "There is no known significance in their designations.",
            "The J represents 'jump' which is how the Q output reacts whenever the clock goes high and the J input is also HIGH.",
            "The letters were chosen in honor of Jack Kilby, the inventory of the integrated circuit.",
            "All of the other letters of the alphabet are already in use."
        ],
        correct: "The letters were chosen in honor of Jack Kilby, the inventory of the integrated circuit.",
        score: 0
    },
    {
        question: "Two J-K flip-flops with their J-K inputs tied HIGH are cascaded to be used as counters. After four input clock pulses, the binary count is ________. ",
        options: [
            "00",
            "11",
            "10",
            "01"
        ],
        correct: "00",
        score: 0
    },
    {
        question: "On a master-slave flip-flop, when is the master enabled? ",
        options: [
            "when the gate is LOW",
            "when the gate is HIGH",
            "both of the above",
            "neither of the above"
        ],
        correct: "when the gate is HIGH",
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

