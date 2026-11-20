
// ==========================================
// GLOBIO - A1 GERMAN READINESS ASSESSMENT
// ==========================================

// DOM ELEMENTS
const welcomeScreen = document.getElementById("welcome-screen");
const assessmentScreen = document.getElementById("assessment-screen");
const resultsScreen = document.getElementById("results-screen");

const startButton = document.getElementById("start-btn");
const previousButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");
const retestButton = document.getElementById("retest-btn");
const practiceButton = document.getElementById("practice-btn");

const sectionLabel = document.getElementById("section-label");
const questionCounter = document.getElementById("question-counter");
const questionCategory = document.getElementById("question-category");
const questionDifficulty = document.getElementById("question-difficulty");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressBar = document.getElementById("progress-bar");

const overallScoreElement = document.getElementById("overall-score");
const readinessStatus = document.getElementById("readiness-status");
const readinessDescription = document.getElementById("readiness-description");

const skillResults = document.getElementById("skill-results");
const recommendationsContainer = document.getElementById("recommendations-container");


// ==========================================
// QUESTION BANK - 18 QUESTIONS
// ==========================================

const questions = [

    // VOCABULARY - 6 QUESTIONS

    {
        section: "Vocabulary",
        skill: "Word Meaning",
        difficulty: "Easy",
        question: 'What does "der Apfel" mean?',
        options: ["Apple", "Banana", "Orange", "Grape"],
        answer: 0,
        explanation: '"Der Apfel" means apple in German.'
    },

    {
        section: "Vocabulary",
        skill: "Word Meaning",
        difficulty: "Easy",
        question: 'What does "das Wasser" mean?',
        options: ["Milk", "Water", "Juice", "Coffee"],
        answer: 1,
        explanation: '"Das Wasser" means water.'
    },

    {
        section: "Vocabulary",
        skill: "Everyday Vocabulary",
        difficulty: "Easy",
        question: 'What does "Guten Morgen" mean?',
        options: ["Good evening", "Good night", "Good morning", "Goodbye"],
        answer: 2,
        explanation: '"Guten Morgen" is used to greet someone in the morning.'
    },

    {
        section: "Vocabulary",
        skill: "Everyday Vocabulary",
        difficulty: "Easy",
        question: 'What does "Danke" mean?',
        options: ["Please", "Sorry", "Hello", "Thank you"],
        answer: 3,
        explanation: '"Danke" means thank you.'
    },

    {
        section: "Vocabulary",
        skill: "Articles and Gender",
        difficulty: "Medium",
        question: 'Which article is correct for "Mädchen"?',
        options: ["Der", "Die", "Das", "Dem"],
        answer: 2,
        explanation: '"Das Mädchen" is correct because Mädchen is grammatically neuter.'
    },

    {
        section: "Vocabulary",
        skill: "Numbers and Time",
        difficulty: "Easy",
        question: 'What does "zwanzig" mean?',
        options: ["Twelve", "Twenty", "Thirty", "Forty"],
        answer: 1,
        explanation: '"Zwanzig" means twenty.'
    },


    // GRAMMAR - 6 QUESTIONS

    {
        section: "Grammar",
        skill: "Verb Conjugation",
        difficulty: "Medium",
        question: 'Complete the sentence: Ich _____ aus Indien.',
        options: ["kommen", "kommt", "komme", "kommst"],
        answer: 2,
        explanation: 'With "Ich", the correct form is "komme".'
    },

    {
        section: "Grammar",
        skill: "Verb Conjugation",
        difficulty: "Medium",
        question: 'Complete the sentence: Er _____ Deutsch.',
        options: ["lerne", "lernst", "lernen", "lernt"],
        answer: 3,
        explanation: 'With "Er", the verb "lernen" becomes "lernt".'
    },

    {
        section: "Grammar",
        skill: "Sentence Structure",
        difficulty: "Medium",
        question: 'Choose the correct German sentence.',
        options: [
            "Ich heiße Tarun.",
            "Heiße ich Tarun.",
            "Tarun ich heiße.",
            "Ich Tarun heiße."
        ],
        answer: 0,
        explanation: 'In a normal German statement, the conjugated verb usually occupies the second position.'
    },

    {
        section: "Grammar",
        skill: "Sentence Structure",
        difficulty: "Medium",
        question: 'Choose the correct question.',
        options: [
            "Du kommst woher?",
            "Woher kommst du?",
            "Woher du kommst?",
            "Kommst woher du?"
        ],
        answer: 1,
        explanation: '"Woher kommst du?" is the correct question structure.'
    },

    {
        section: "Grammar",
        skill: "Negation",
        difficulty: "Medium",
        question: 'Complete the sentence: Ich habe _____ Auto.',
        options: ["nicht", "kein", "nein", "nichts"],
        answer: 1,
        explanation: '"Kein" is used to negate the noun "Auto" here.'
    },

    {
        section: "Grammar",
        skill: "Negation",
        difficulty: "Medium",
        question: 'Complete the sentence: Ich komme heute _____.',
        options: ["kein", "nein", "nicht", "keine"],
        answer: 2,
        explanation: '"Nicht" is used to negate the verb or sentence.'
    },


    // READING - 6 QUESTIONS

    {
        section: "Reading",
        skill: "Information Retrieval",
        difficulty: "Easy",
        passage: "Hallo! Ich heiße Anna. Ich bin 22 Jahre alt und komme aus Berlin. Ich spreche Deutsch und Englisch.",
        question: "Wie alt ist Anna?",
        options: ["20 Jahre", "21 Jahre", "22 Jahre", "25 Jahre"],
        answer: 2,
        explanation: "The passage says Anna is 22 years old."
    },

    {
        section: "Reading",
        skill: "Information Retrieval",
        difficulty: "Easy",
        passage: "Tom wohnt in München. Er arbeitet von Montag bis Freitag in einem Büro. Am Wochenende spielt er Fußball.",
        question: "Wo wohnt Tom?",
        options: ["Berlin", "München", "Hamburg", "Frankfurt"],
        answer: 1,
        explanation: "The passage says Tom lives in München."
    },

    {
        section: "Reading",
        skill: "Main Idea Comprehension",
        difficulty: "Medium",
        passage: "Liebe Maria, ich kann heute nicht zur Party kommen. Ich bin krank und muss zu Hause bleiben. Viele Grüße, Lisa.",
        question: "Warum kann Lisa nicht zur Party kommen?",
        options: [
            "Sie arbeitet.",
            "Sie ist krank.",
            "Sie ist im Urlaub.",
            "Sie hat keine Zeit."
        ],
        answer: 1,
        explanation: "Lisa says she is sick and must stay at home."
    },

    {
        section: "Reading",
        skill: "Main Idea Comprehension",
        difficulty: "Medium",
        passage: "Das Café ist von Montag bis Samstag geöffnet. Es öffnet um 8 Uhr und schließt um 18 Uhr. Am Sonntag ist es geschlossen.",
        question: "Wann ist das Café geschlossen?",
        options: [
            "Montag",
            "Freitag",
            "Samstag",
            "Sonntag"
        ],
        answer: 3,
        explanation: "The café is closed on Sunday."
    },

    {
        section: "Reading",
        skill: "Contextual Understanding",
        difficulty: "Medium",
        passage: "Peter geht morgens zum Supermarkt. Er kauft Brot, Milch und Eier. Danach geht er nach Hause und frühstückt.",
        question: "Was macht Peter nach dem Einkaufen?",
        options: [
            "Er geht zur Arbeit.",
            "Er frühstückt zu Hause.",
            "Er spielt Fußball.",
            "Er besucht einen Freund."
        ],
        answer: 1,
        explanation: "After shopping, Peter goes home and has breakfast."
    },

    {
        section: "Reading",
        skill: "Contextual Understanding",
        difficulty: "Medium",
        passage: "Hallo Max, unser Deutschkurs beginnt morgen um 9 Uhr. Bitte bring dein Buch und einen Stift mit. Bis morgen! Anna.",
        question: "Was soll Max mitbringen?",
        options: [
            "Ein Buch und einen Stift",
            "Einen Computer",
            "Eine Tasche und ein Handy",
            "Einen Ausweis"
        ],
        answer: 0,
        explanation: "Anna asks Max to bring his book and a pen."
    }

];


// ==========================================
// SKILL INFORMATION AND RECOMMENDATIONS
// ==========================================

const skillInfo = {

    "Word Meaning": {
        gap: "You may need more practice recognising common German words and understanding their meanings.",
        improvement: "Build your everyday German vocabulary. Learn common nouns with their articles and revise words regularly.",
        resource: "https://learngerman.dw.com/"
    },

    "Everyday Vocabulary": {
        gap: "You may be unfamiliar with some common greetings and expressions used in daily conversations.",
        improvement: "Practise greetings, introductions, polite expressions and common everyday phrases.",
        resource: "https://learngerman.dw.com/"
    },

    "Articles and Gender": {
        gap: "You may need more practice identifying masculine, feminine and neuter German nouns.",
        improvement: "Learn every noun together with its article: der, die or das. Practise with examples and flashcards.",
        resource: "https://deutsch.lingolia.com/en/grammar/nouns/gender"
    },

    "Numbers and Time": {
        gap: "You may need more practice recognising German numbers and everyday numerical expressions.",
        improvement: "Revise numbers, prices, dates, days and time expressions through short daily exercises.",
        resource: "https://learngerman.dw.com/"
    },

    "Verb Conjugation": {
        gap: "You may be finding it difficult to select the correct verb form for different personal pronouns.",
        improvement: "Practise conjugating common verbs such as sein, haben, kommen, wohnen and lernen.",
        resource: "https://deutsch.lingolia.com/en/grammar/verbs"
    },

    "Sentence Structure": {
        gap: "You may need more practice arranging German words in the correct sentence order.",
        improvement: "Practise simple statements and questions. Pay attention to the position of the conjugated verb.",
        resource: "https://deutsch.lingolia.com/en/grammar/sentence-structure"
    },

    "Negation": {
        gap: "You may be unsure when to use nicht and kein in negative sentences.",
        improvement: "Practise the difference between nicht and kein using short German sentences.",
        resource: "https://deutsch.lingolia.com/en/grammar/sentence-structure/negation"
    },

    "Information Retrieval": {
        gap: "You may need more practice finding specific details such as names, ages, locations and times in short texts.",
        improvement: "Read short German messages and identify key information such as who, where, when and how old.",
        resource: "https://learngerman.dw.com/"
    },

    "Main Idea Comprehension": {
        gap: "You may need more practice understanding the main message of short German texts.",
        improvement: "Read simple emails, notices and messages. Try explaining the main purpose in one sentence.",
        resource: "https://learngerman.dw.com/"
    },

    "Contextual Understanding": {
        gap: "You may need more practice understanding what happens in a text and connecting information across sentences.",
        improvement: "Read short A1 passages and answer questions about actions, sequence and context.",
        resource: "https://learngerman.dw.com/"
    }

};


// ==========================================
// ASSESSMENT STATE
// ==========================================

let currentQuestionIndex = 0;
let answers = new Array(questions.length).fill(null);


// ==========================================
// SCREEN NAVIGATION
// ==========================================

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
        screen.style.display = "none";
    });

    const targetScreen = document.getElementById(screenId);

    if (targetScreen) {
        targetScreen.classList.add("active");
        targetScreen.style.display = "block";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// START ASSESSMENT
// ==========================================

function startAssessment() {

    currentQuestionIndex = 0;
    answers = new Array(questions.length).fill(null);

    showScreen("assessment-screen");
    showQuestion();
}


// ==========================================
// DISPLAY QUESTION
// ==========================================

function showQuestion() {

    const question = questions[currentQuestionIndex];

    if (!question) return;

    // Section label
    sectionLabel.textContent = question.section.toUpperCase();

    // Question number
    questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    // Category
    questionCategory.textContent = question.skill;

    // Difficulty
    questionDifficulty.textContent = `A1 Level · ${question.difficulty}`;

    // Question text
    questionText.textContent = question.question;

    // Reading passage
    let passageBox = document.getElementById("passage-box");

    if (question.passage) {

        if (!passageBox) {
            passageBox = document.createElement("div");
            passageBox.id = "passage-box";
            passageBox.className = "passage-card";

            questionText.before(passageBox);
        }

        passageBox.textContent = question.passage;
        passageBox.style.display = "block";

    } else if (passageBox) {

        passageBox.style.display = "none";

    }

    // Clear old options
    optionsContainer.innerHTML = "";

    // Generate options
    question.options.forEach((option, index) => {

        const optionElement = document.createElement("button");

        optionElement.type = "button";
        optionElement.className = "option";
        optionElement.textContent = option;
        optionElement.setAttribute("aria-pressed", "false");

        // Restore previously selected answer
        if (answers[currentQuestionIndex] === index) {
            optionElement.classList.add("selected");
            optionElement.setAttribute("aria-pressed", "true");
        }

        // OPTION CLICK EVENT
        optionElement.addEventListener("click", () => {

            answers[currentQuestionIndex] = index;

            // Remove selection from all options
            document.querySelectorAll(".option").forEach(option => {
                option.classList.remove("selected");
                option.setAttribute("aria-pressed", "false");
            });

            // Highlight selected option
            optionElement.classList.add("selected");
            optionElement.setAttribute("aria-pressed", "true");

            // Enable Next button
            nextButton.disabled = false;

        });

        optionsContainer.appendChild(optionElement);

    });

    // Update progress
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;

    // Previous button
    previousButton.disabled = currentQuestionIndex === 0;

    // Next button
    nextButton.disabled = answers[currentQuestionIndex] === null;

    // Change button text on last question
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "View Results →";
    } else {
        nextButton.textContent = "Next →";
    }

}


// ==========================================
// NEXT QUESTION
// ==========================================

function goToNextQuestion() {

    // Prevent moving forward without an answer
    if (answers[currentQuestionIndex] === null) {
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {

        currentQuestionIndex++;

        showQuestion();

    } else {

        calculateResults();

        showScreen("results-screen");

    }

}


// ==========================================
// PREVIOUS QUESTION
// ==========================================

function goToPreviousQuestion() {

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--;

        showQuestion();

    }

}


// ==========================================
// CALCULATE RESULTS
// ==========================================

function calculateResults() {

    const sections = ["Vocabulary", "Grammar", "Reading"];

    const sectionResults = {};
    const skillResultsData = {};

    let totalCorrect = 0;

    // Initialise section scores
    sections.forEach(section => {

        sectionResults[section] = {
            correct: 0,
            total: 0
        };

    });

    // Calculate question results
    questions.forEach((question, index) => {

        const section = question.section;
        const skill = question.skill;

        sectionResults[section].total++;

        if (!skillResultsData[skill]) {

            skillResultsData[skill] = {
                section: section,
                correct: 0,
                total: 0
            };

        }

        skillResultsData[skill].total++;

        if (answers[index] === question.answer) {

            sectionResults[section].correct++;
            skillResultsData[skill].correct++;
            totalCorrect++;

        }

    });


    // Section percentages
    Object.keys(sectionResults).forEach(section => {

        const result = sectionResults[section];

        result.percentage = Math.round(
            (result.correct / result.total) * 100
        );

    });


    // Skill percentages
    Object.keys(skillResultsData).forEach(skill => {

        const result = skillResultsData[skill];

        result.percentage = Math.round(
            (result.correct / result.total) * 100
        );

        // Current skill sample sizes are small.
        result.earlySignal = result.total < 3;

    });


    // Equal-weight average of the three sections
    const overallScore = Math.round(
        sections.reduce((sum, section) => {
            return sum + sectionResults[section].percentage;
        }, 0) / sections.length
    );


    // Display overall score
    overallScoreElement.textContent = overallScore;


    // Readiness classification
    const everySectionStrong = sections.every(section => {
        return sectionResults[section].percentage >= 80;
    });

    const everySectionAdequate = sections.every(section => {
        return sectionResults[section].percentage >= 60;
    });


    if (overallScore >= 80 && everySectionStrong) {

        readinessStatus.textContent = "Strong Foundation";

        readinessDescription.textContent =
            "You have demonstrated a strong foundation across the assessed areas. Continue practising all four exam skills before booking your exam.";

    } else if (overallScore >= 60 && everySectionAdequate) {

        readinessStatus.textContent = "Almost Ready";

        readinessDescription.textContent =
            "You have a developing A1 foundation. Strengthen your weaker areas and practise listening and speaking before deciding to book.";

    } else {

        readinessStatus.textContent = "Needs Practice";

        readinessDescription.textContent =
            "Your results suggest that you should strengthen your A1 foundation before booking an exam. Focus on the improvement areas below.";

    }


    // Render section and skill results
    showSectionScores(sectionResults);

    showSkillScores(skillResultsData);

    showRecommendations(skillResultsData);

}


// ==========================================
// DISPLAY SECTION SCORES
// ==========================================

function showSectionScores(sectionResults) {

    // Remove previous section score grid
    const oldGrid = document.getElementById("section-scores");

    if (oldGrid) {
        oldGrid.remove();
    }

    const container = document.createElement("div");

    container.id = "section-scores";
    container.className = "section-score-grid";

    Object.entries(sectionResults).forEach(([section, result]) => {

        const card = document.createElement("div");

        card.className = "skill-card";

        card.innerHTML = `
            <h3>${section}</h3>
            <div class="skill-score">
                ${result.percentage}%
            </div>
            <p>${result.correct}/${result.total} correct answers</p>
            <div class="skill-progress">
                <div class="skill-progress-fill"
                     style="width: ${result.percentage}%">
                </div>
            </div>
        `;

        container.appendChild(card);

    });

    // Insert before skill results
    skillResults.before(container);

}


// ==========================================
// DISPLAY SKILL-WISE DROPDOWNS
// ==========================================

function showSkillScores(skillData) {

    skillResults.innerHTML = "";

    const sections = ["Vocabulary", "Grammar", "Reading"];

    sections.forEach(section => {

        const sectionSkills = Object.entries(skillData).filter(
            ([skill, result]) => result.section === section
        );

        const sectionContainer = document.createElement("div");

        sectionContainer.className = "skill-section";

        const heading = document.createElement("h3");

        heading.className = "skill-section-heading";
        heading.textContent = `${section} Skills`;

        sectionContainer.appendChild(heading);

        sectionSkills.forEach(([skill, result]) => {

            const info = skillInfo[skill];

            const status = result.percentage >= 80
                ? "Strong"
                : result.percentage >= 60
                    ? "Developing"
                    : "Needs Practice";

            const details = document.createElement("details");

            details.className = "skill-accordion";

            details.innerHTML = `
                <summary class="skill-accordion-header">

                    <span class="skill-name">
                        ${skill}
                    </span>

                    <span class="skill-mark">
                        ${result.correct}/${result.total}
                        (${result.percentage}%)
                    </span>

                    <span class="skill-chevron">⌄</span>

                </summary>

                <div class="skill-accordion-content">

                    <div class="skill-detail-score">
                        Score: ${result.correct}/${result.total} correct
                    </div>

                    <div class="skill-progress">
                        <div class="skill-progress-fill"
                             style="width: ${result.percentage}%">
                        </div>
                    </div>

                    <p>Status: ${status}</p>

                    ${result.earlySignal
                        ? `<p class="early-signal-note">
                            Early signal: based on ${result.total} question(s).
                            More questions are needed for a reliable skill-level assessment.
                           </p>`
                        : ""
                    }

                </div>
            `;

            sectionContainer.appendChild(details);

        });

        skillResults.appendChild(sectionContainer);

    });

}


// ==========================================
// DISPLAY IMPROVEMENT RECOMMENDATIONS
// ==========================================

function showRecommendations(skillData) {

    recommendationsContainer.innerHTML = "";

    // Skills with at least one incorrect answer
    const weakSkills = Object.entries(skillData)
        .filter(([skill, result]) => result.correct < result.total)
        .sort((a, b) => a[1].percentage - b[1].percentage)
        .slice(0, 3);


    if (weakSkills.length === 0) {

        recommendationsContainer.innerHTML = `
            <div class="recommendation-card">
                <h3>Great work!</h3>
                <p>
                    You answered all questions correctly.
                    Continue practising to maintain your A1 foundation.
                </p>
            </div>
        `;

        return;

    }


    weakSkills.forEach(([skill, result], index) => {

        const info = skillInfo[skill];

        const card = document.createElement("div");

        card.className = "recommendation-card";

        const priority = index === 0 ? "High Priority" : "Practice";

        card.innerHTML = `

            <div class="priority-label ${index === 0 ? "priority-high" : "priority-normal"}">
                ${priority}
            </div>

            <h3>${skill}</h3>

            <p class="recommendation-marks">
                Score: ${result.correct}/${result.total} (${result.percentage}%)
            </p>

            ${result.earlySignal
                ? `<p class="early-signal-note">
                    This is an early signal based on a small number of questions.
                   </p>`
                : ""
            }

            <p><strong>What may be missing:</strong> ${info.gap}</p>

            <p><strong>How to improve:</strong> ${info.improvement}</p>

            <a href="${info.resource}"
               target="_blank"
               rel="noopener noreferrer">
               Explore Learning Resources →
            </a>

        `;

        recommendationsContainer.appendChild(card);

    });

}


// ==========================================
// RETAKE ASSESSMENT
// ==========================================

function retakeAssessment() {

    currentQuestionIndex = 0;

    answers = new Array(questions.length).fill(null);

    // Reset progress
    progressBar.style.width = "0%";

    // Clear old results
    skillResults.innerHTML = "";
    recommendationsContainer.innerHTML = "";

    const oldSectionScores = document.getElementById("section-scores");

    if (oldSectionScores) {
        oldSectionScores.remove();
    }

    // Reset score display
    overallScoreElement.textContent = "0";

    readinessStatus.textContent = "Calculating...";

    readinessDescription.textContent =
        "Your readiness assessment will appear here.";

    showScreen("welcome-screen");

}


// ==========================================
// BUTTON EVENT LISTENERS
// ==========================================

// Start
startButton.addEventListener("click", startAssessment);

// Next
nextButton.addEventListener("click", goToNextQuestion);

// Previous
previousButton.addEventListener("click", goToPreviousQuestion);

// Retake
retestButton.addEventListener("click", retakeAssessment);

// Practice button
if (practiceButton) {

    practiceButton.addEventListener("click", () => {

        const firstRecommendation =
            recommendationsContainer.querySelector(".recommendation-card");

        if (firstRecommendation) {
            firstRecommendation.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

    });

}


// ==========================================
// INITIALISE APP
// ==========================================

showScreen("welcome-screen");

