// Quiz question & answers
const quizData = [{
        question: "1. BORDER attributes specifies the",
        a: "thickness of the border around the table",
        b: "space between two borders",
        c: "space between two cells",
        d: "width of the table",
        correct: "a",
    },

    {
        question: "2. Which control is used when the input from the user may extend to several lines?",
        a: "multiline text area",
        b: "check box",
        c: "password control",
        d: "menu control",
        correct: "a",
    },

    {
        question: "3. The item present within the angled brackets in an HTML tag is",
        a: "identifier",
        b: "data",
        c: "tags",
        d: "text",
        correct: "a",
    },
    {
        question: "4. A collection of ______ web pages on the World Wide Web",
        a: "interlinked",
        b: "paper",
        c: "book",
        d: "comic books",
        correct: "a",
    },
    {
        question: "5. Which CSS property allows you to set multiple list properties at once?",
        a: "List - Style - Type",
        b: "List - Style",
        c: "List - Style- Position",
        d: "List - Style- Image",
        correct: "b",
    },
    {
        question: "6. The latest HTML standard is",
        a: "XML",
        b: "SGML",
        c: "HTML 4.0",
        d: "HTML 5.0",
        correct: "d",
    },
    {
        question: "7. .NET Framework was designed and developed by _______.",
        a: "Microsoft",
        b: "IBM",
        c: "Oracle",
        d: "Google",
        correct: "a",
    },
    {
        question: "8. _______ among the following is a Language of JavaScript.",
        a: "text/JavaScript",
        b: "text/ECMAScript",
        c: "text/VBScript",
        d: "JavaScript VBScript",
        correct: "a",
    },
    {
        question: "9. Which of the following tags doesn’t require a closing tag?",
        a: "\<br>",
        b: "\<hr>",
        c: "both (a) & (b)",
        d: "none",
        correct: "c",
    },
    {
        question: "10. Which of the following can read and render HTML web pages",
        a: "Server",
        b: "head Tak",
        c: "web browser",
        d: "empty",
        correct: "c",
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
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            resultBox()
        }
    }
})

function resultBox() {
    if (score > 7) {
        quiz.innerHTML = `
        <h1 style="color:#FFD700;font-size:60px;text-align:center;"><i class="fa-sharp fa-solid fa-crown"></i> <br> Congratulations</h1>
        <h4 style="text-align:center;">You answered ${score}/${quizData.length} questions correctly</h4>
        <button onclick="location.reload()">Reload</button>`
    } else {
        quiz.innerHTML = `
        <h1 style="color:Grey;font-size:60px;text-align:center;"><i class="fa-solid fa-face-frown"></i> <br> Sorry, Try Again</h1>
        <h4 style="text-align:center;">You answered ${score}/${quizData.length} questions correctly</h4>
        <button onclick="location.reload()">Reload</button>`
    }
}

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz-container");



start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {
    window.location.reload();
}

continue_btn.onclick = function () {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.toggle("activeQuiz");
    currentQuiz = 0
    loadQuiz()

}