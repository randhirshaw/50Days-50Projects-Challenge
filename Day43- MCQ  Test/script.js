const quizData = [
    {
        question: "Which best describes an immutable record?",
        a: "The record cannot be moved in memory",
        b: "The record cannot be changed",
        c: "The record exposes no methods",
        d: "The record is stored entirely on the cloud",
        correct: "b",
    },
    {
        question: "Which of the following statements is true?",
        a: "Each hash function has a corresponding inverse function",
        b: "The input of a hash function has to be of a fixed length",
        c: "HASH(x) = HASH(y) implies x=y",
        d: "Hash functions only work for integer inputs",
        correct: "c",
    },
    {
        question: "How can we print the text, “Educative”, in Python?",
        a: "print Educative",
        b: "print'Educative'",
        c: "print('Educative')",
        d: "print(Educative)",
        correct: "c",
    },
    {
        question: "A comparison operation always returns a value of the ______ data type.",
        a: "Boolean",
        b: "Integer",
        c: "Floating-Point Number",
        d: "String",
        correct: "a",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})