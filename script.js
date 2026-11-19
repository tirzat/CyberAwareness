// CYBER AWARENESS - Main JavaScript

// 1. Sidebar menu
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function openMenu() {
    if (sidebar) sidebar.classList.add("active");
    if (overlay) overlay.classList.add("active");
}

function closeMenu() {
    if (sidebar) sidebar.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
}

menuBtn?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", closeMenu);
overlay?.addEventListener("click", closeMenu);

// 2. Search cyber attacks
const attackSearch = document.getElementById("attackSearch");
const attackGrid = document.getElementById("attackGrid");
const noResults = document.getElementById("noResults");

attackSearch?.addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    const cards = attackGrid?.querySelectorAll(".attack-card") || [];
    let visibleCount = 0;

    cards.forEach(card => {
        const matches = card.textContent.toLowerCase().includes(searchText);
        card.style.display = matches ? "" : "none";
        if (matches) visibleCount++;
    });

    if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
});

// 3. Cyber Safety Quiz
const questions = [
    {
        level: "Easy",
        question: "You receive a message saying you won a free iPhone. It asks you to click a link. What should you do?",
        options: ["Click the link", "Share your OTP", "Avoid the link and verify the message", "Forward it to everyone"],
        answer: 2,
        explanation: "Fake prize messages are commonly used for phishing. Never trust unexpected prize links."
    },
    {
        level: "Easy",
        question: "Should you share your UPI PIN with someone claiming to be a bank employee?",
        options: ["Yes", "No, never", "Only with friends", "Only through WhatsApp"],
        answer: 1,
        explanation: "Your UPI PIN is private. Banks and genuine support staff never need it."
    },
    {
        level: "Medium",
        question: "A caller claims to be a police officer and threatens you with arrest unless you transfer money. What is this?",
        options: ["Digital arrest scam", "Online shopping", "Safe banking", "Software update"],
        answer: 0,
        explanation: "Digital arrest is a scam. Real police do not conduct arrests through video calls or demand money to avoid arrest."
    },
    {
        level: "Medium",
        question: "What is the safest action after receiving an unexpected OTP?",
        options: ["Share it with the caller", "Post it online", "Never share it and check your account", "Reply to the message"],
        answer: 2,
        explanation: "An OTP can authorize access or transactions. Never share it with anyone."
    },
    {
        level: "Hard",
        question: "A website address looks almost identical to your bank's official website. What type of attack may this be?",
        options: ["DDoS", "Typosquatting", "Ransomware", "Firewall"],
        answer: 1,
        explanation: "Typosquatting uses misleading domain names that resemble genuine websites."
    },
    {
        level: "Hard",
        question: "Your files suddenly become inaccessible and a message demands money to unlock them. What is this?",
        options: ["Spyware", "Ransomware", "Adware", "Cookie"],
        answer: 1,
        explanation: "Ransomware encrypts or locks files and demands payment. Do not rush to pay."
    }
];

const startQuizBtn = document.getElementById("startQuizBtn");
const quizContainer = document.getElementById("quizContainer");

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    if (!quizContainer) return;

    const q = questions[currentQuestion];

    quizContainer.innerHTML = `
        <div class="quiz-question">
            <p><strong>${q.level} Level | Question ${currentQuestion + 1} of ${questions.length}</strong></p>
            <h3>${q.question}</h3>
            <div class="quiz-options">
                ${q.options.map((option, index) =>
                    `<button class="quiz-option" data-index="${index}">${option}</button>`
                ).join("")}
            </div>
            <div id="quizFeedback"></div>
            <button id="nextQuestionBtn" style="display:none;">Next Question →</button>
        </div>
    `;

    quizContainer.querySelectorAll(".quiz-option").forEach(button => {
        button.addEventListener("click", () => checkAnswer(Number(button.dataset.index)));
    });
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    const buttons = quizContainer.querySelectorAll(".quiz-option");
    const feedback = document.getElementById("quizFeedback");
    const nextBtn = document.getElementById("nextQuestionBtn");

    buttons.forEach(button => button.disabled = true);

    if (selected === q.answer) {
        score++;
        feedback.innerHTML = `<p>✅ Correct! ${q.explanation}</p>`;
    } else {
        feedback.innerHTML = `<p>❌ Not quite. Correct answer: <strong>${q.options[q.answer]}</strong><br>${q.explanation}</p>`;
    }

    nextBtn.style.display = "inline-block";
    nextBtn.addEventListener("click", () => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });
}

function showResult() {
    quizContainer.innerHTML = `
        <h2>🎉 Quiz Completed!</h2>
        <h3>Your Score: ${score} / ${questions.length}</h3>
        <p>${score >= 5 ? "Excellent! You are becoming cyber smart." :
             score >= 3 ? "Good effort! Keep learning and stay safe." :
             "Keep practising! Every step makes you safer online."}</p>
        <button id="restartQuizBtn">Try Again</button>
    `;

    document.getElementById("restartQuizBtn").addEventListener("click", startQuiz);
}

startQuizBtn?.addEventListener("click", startQuiz);

console.log("Cyber Awareness website loaded successfully!");
// Connect all cyberattack cards to their learning pages
document.querySelectorAll(".attack-card").forEach(card => {
    const link = card.matches("a") ? card : card.querySelector("a");

    if (link) {
        const slug = link.getAttribute("href")
            .split("/")
            .pop()
            .replace(".html", "");

        link.href = `attack.html?type=${slug}`;
    }
});