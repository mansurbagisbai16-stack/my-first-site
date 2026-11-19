// ===================================
// 130 ҰБТ — JAVASCRIPT
// ===================================

const questions = {
    history: [
        {
            q: "Қазақ хандығы қай жылы құрылды?",
            a: ["1456 жыл", "1465–1466 жылдар", "1500 жыл", "1511 жыл"],
            c: 1,
            e: "Қазақ хандығы Керей мен Жәнібек хандар тұсында 1465–1466 жылдары құрылды."
        },
        {
            q: "Қазақ хандығының негізін қалаған хандар?",
            a: ["Абылай мен Әбілқайыр", "Керей мен Жәнібек", "Қасым мен Хақназар", "Тәуке мен Есім"],
            c: 1,
            e: "Қазақ хандығының негізін Керей мен Жәнібек хандар қалады."
        },
        {
            q: "Қазақстан тәуелсіздігін қай жылы алды?",
            a: ["1986", "1990", "1991", "1995"],
            c: 2,
            e: "Қазақстан 1991 жылы 16 желтоқсанда тәуелсіздігін жариялады."
        },
        {
            q: "Алаш партиясы қай жылы құрылды?",
            a: ["1917", "1920", "1905", "1936"],
            c: 0,
            e: "Алаш партиясы 1917 жылы құрылды."
        },
        {
            q: "Қазақтың ұлы ақыны Абай Құнанбайұлы қай жылы дүниеге келді?",
            a: ["1845", "1850", "1835", "1860"],
            c: 0,
            e: "Абай Құнанбайұлы 1845 жылы дүниеге келген."
        },
        {
            q: "Абылай ханның шын есімі қандай?",
            a: ["Әбілмансұр", "Әбілқайыр", "Барақ", "Керей"],
            c: 0,
            e: "Абылай ханның шын есімі — Әбілмансұр."
        },
        {
            q: "Қазақстанның алғашқы Конституциясы қай жылы қабылданды?",
            a: ["1991", "1993", "1995", "1997"],
            c: 1,
            e: "Тәуелсіз Қазақстанның алғашқы Конституциясы 1993 жылы қабылданды."
        },
        {
            q: "Ұлы Отан соғысы қай жылы басталды?",
            a: ["1939", "1940", "1941", "1945"],
            c: 2,
            e: "Ұлы Отан соғысы 1941 жылы басталды."
        },
        {
            q: "Қазақтың атақты ғалымы, ағартушысы кім?",
            a: ["Шоқан Уәлиханов", "Құрманғазы", "Дина Нұрпейісова", "Балуан Шолақ"],
            c: 0,
            e: "Шоқан Уәлиханов — қазақтың ғалымы және ағартушысы."
        },
        {
            q: "Қазақстанның ұлттық валютасы қашан енгізілді?",
            a: ["1991", "1992", "1993", "1995"],
            c: 2,
            e: "Теңге 1993 жылы 15 қарашада айналымға енгізілді."
        }
    ],

    reading: [
        {
            q: "Мәтіннің негізгі ойын анықтау үшін неге назар аудару керек?",
            a: ["Тек соңғы сөйлемге", "Негізгі ақпаратқа", "Тыныс белгілеріне", "Сөз санына"],
            c: 1,
            e: "Негізгі ой мәтіндегі басты ақпарат арқылы анықталады."
        },
        {
            q: "Мәтіндегі автордың көзқарасы нені білдіреді?",
            a: ["Автордың пікірін", "Мәтіннің көлемін", "Сөздердің санын", "Тақырыптың атауын"],
            c: 0,
            e: "Автордың көзқарасы — оның тақырыпқа қатысты пікірі."
        },
        {
            q: "Мәтінге тақырып таңдағанда нені ескеру керек?",
            a: ["Ең ұзын сөйлемді", "Негізгі мазмұнын", "Соңғы сөзді", "Абзац санын"],
            c: 1,
            e: "Тақырып мәтіннің негізгі мазмұнын ашуы керек."
        },
        {
            q: "Мәтіндегі себеп-салдар байланысы нені көрсетеді?",
            a: ["Оқиғаның себебі мен нәтижесін", "Сөздердің ретін", "Автордың жасын", "Мәтіннің көлемін"],
            c: 0,
            e: "Себеп-салдар байланысы оқиғаның неге болғанын және нәтижесін түсіндіреді."
        },
        {
            q: "Синоним дегеніміз не?",
            a: ["Қарама-қарсы сөздер", "Мағыналас сөздер", "Бірдей жазылатын сөздер", "Қысқарған сөздер"],
            c: 1,
            e: "Синонимдер — мағыналары жақын сөздер."
        },
        {
            q: "Антоним дегеніміз не?",
            a: ["Мағыналас сөздер", "Қарама-қарсы мағыналы сөздер", "Кірме сөздер", "Тұрақты тіркестер"],
            c: 1,
            e: "Антонимдер — қарама-қарсы мағыналы сөздер."
        },
        {
            q: "Мәтіндегі қорытынды қандай қызмет атқарады?",
            a: ["Ойды аяқтайды", "Жаңа кейіпкер енгізеді", "Тақырыпты өзгертеді", "Сөздерді санайды"],
            c: 0,
            e: "Қорытынды негізгі ойды жинақтап, аяқтайды."
        },
        {
            q: "Ақпараттың шынайылығын тексеру үшін не істеу керек?",
            a: ["Тек тақырыпты оқу", "Сенімді дереккөздерді салыстыру", "Бірінші пікірге сену", "Мәтінді қысқарту"],
            c: 1,
            e: "Ақпаратты бірнеше сенімді дереккөзбен салыстыру қажет."
        },
        {
            q: "Абзац дегеніміз не?",
            a: ["Мәтіннің мағыналық бөлігі", "Бір ғана әріп", "Тыныс белгісі", "Сөздің түрі"],
            c: 0,
            e: "Абзац — мәтіннің белгілі бір ойды білдіретін бөлігі."
        },
        {
            q: "Мәтіннің стилін анықтауда не маңызды?",
            a: ["Сөйлеу мақсаты мен тілдік ерекшелігі", "Бет түсі", "Қаріп өлшемі", "Сөз саны ғана"],
            c: 0,
            e: "Стиль мәтіннің мақсаты мен тілдік ерекшеліктеріне байланысты."
        }
    ],

    math: [
        {
            q: "25 + 37 нешеге тең?",
            a: ["52", "62", "72", "60"],
            c: 1,
            e: "25 + 37 = 62."
        },
        {
            q: "200 санының 10%-ы қанша?",
            a: ["10", "15", "20", "25"],
            c: 2,
            e: "200 × 0,10 = 20."
        },
        {
            q: "5 × 8 + 10 = ?",
            a: ["40", "45", "50", "55"],
            c: 2,
            e: "Алдымен көбейтеміз: 5 × 8 = 40. Содан кейін 10 қосамыз."
        },
        {
            q: "1000 теңгенің 20%-ы қанша?",
            a: ["100", "150", "200", "250"],
            c: 2,
            e: "1000 × 0,20 = 200 теңге."
        },
        {
            q: "Тіктөртбұрыштың ұзындығы 8 см, ені 4 см. Ауданы?",
            a: ["12 см²", "24 см²", "32 см²", "36 см²"],
            c: 2,
            e: "S = 8 × 4 = 32 см²."
        },
        {
            q: "1 сағатта неше минут бар?",
            a: ["30", "45", "60", "100"],
            c: 2,
            e: "1 сағат = 60 минут."
        },
        {
            q: "3² нешеге тең?",
            a: ["6", "9", "12", "15"],
            c: 1,
            e: "3² = 3 × 3 = 9."
        },
        {
            q: "80 санының жартысы қанша?",
            a: ["20", "30", "40", "50"],
            c: 2,
            e: "80 ÷ 2 = 40."
        },
        {
            q: "Егер x + 7 = 15 болса, x нешеге тең?",
            a: ["6", "7", "8", "9"],
            c: 2,
            e: "x = 15 − 7 = 8."
        },
        {
            q: "Бір километрде неше метр бар?",
            a: ["100", "500", "1000", "10000"],
            c: 2,
            e: "1 километр = 1000 метр."
        }
    ],

    geo: [
        {
            q: "Қазақстанның астанасы қай қала?",
            a: ["Алматы", "Астана", "Шымкент", "Тараз"],
            c: 1,
            e: "Қазақстан Республикасының астанасы — Астана."
        },
        {
            q: "Әлемдегі ең үлкен мұхит?",
            a: ["Үнді", "Атлант", "Тынық", "Солтүстік Мұзды"],
            c: 2,
            e: "Тынық мұхиты — әлемдегі ең үлкен мұхит."
        },
        {
            q: "Қазақстан қай материкте орналасқан?",
            a: ["Африка", "Еуразия", "Аустралия", "Оңтүстік Америка"],
            c: 1,
            e: "Қазақстан Еуразия материгінде орналасқан."
        },
        {
            q: "Әлемдегі ең биік тау шыңы?",
            a: ["Эльбрус", "Килиманджаро", "Эверест", "Белуха"],
            c: 2,
            e: "Эверест — Жер шарындағы ең биік тау шыңы."
        },
        {
            q: "Қазақстандағы ең үлкен көл?",
            a: ["Балқаш", "Алакөл", "Каспий теңізі", "Зайсан"],
            c: 2,
            e: "Каспий теңізі — дүниежүзіндегі ең үлкен тұйық су айдыны."
        },
        {
            q: "Қазақстанның батысында қандай теңіз орналасқан?",
            a: ["Қара теңіз", "Каспий теңізі", "Қызыл теңіз", "Жерорта теңізі"],
            c: 1,
            e: "Қазақстанның батысында Каспий теңізі орналасқан."
        },
        {
            q: "Экватор Жерді қандай бөліктерге бөледі?",
            a: ["Шығыс пен батыс", "Солтүстік пен оңтүстік", "Құрлық пен су", "Таулар мен жазықтар"],
            c: 1,
            e: "Экватор Жерді Солтүстік және Оңтүстік жарты шарларға бөледі."
        },
        {
            q: "Қазақстанның ең биік нүктесі?",
            a: ["Хан Тәңірі", "Бесбақан", "Мұзтау", "Қаратау"],
            c: 0,
            e: "Хан Тәңірі — Қазақстанның ең биік нүктесі."
        },
        {
            q: "Жердің табиғи серігі?",
            a: ["Марс", "Ай", "Күн", "Шолпан"],
            c: 1,
            e: "Ай — Жердің табиғи серігі."
        },
        {
            q: "Африканың ең үлкен шөлі?",
            a: ["Гоби", "Қарақұм", "Сахара", "Қызылқұм"],
            c: 2,
            e: "Сахара — Африкадағы ең үлкен ыстық шөл."
        }
    ],

    bio: [
        {
            q: "Тірі ағзаның ең кіші құрылымдық бірлігі?",
            a: ["Ұлпа", "Жасуша", "Мүше", "Жүйе"],
            c: 1,
            e: "Жасуша — тірі ағзалардың құрылымдық және қызметтік бірлігі."
        },
        {
            q: "Адамда қанша өкпе бар?",
            a: ["1", "2", "3", "4"],
            c: 1,
            e: "Адамда екі өкпе болады."
        },
        {
            q: "Өсімдіктер фотосинтез кезінде нені бөледі?",
            a: ["Азот", "Оттек", "Сутек", "Метан"],
            c: 1,
            e: "Фотосинтез кезінде өсімдіктер оттек бөледі."
        },
        {
            q: "Адам жүрегі неше камерадан тұрады?",
            a: ["2", "3", "4", "5"],
            c: 2,
            e: "Адам жүрегі төрт камерадан тұрады."
        },
        {
            q: "Қанның қызыл жасушалары қалай аталады?",
            a: ["Лейкоциттер", "Эритроциттер", "Тромбоциттер", "Нейрондар"],
            c: 1,
            e: "Эритроциттер — қанның қызыл жасушалары."
        },
        {
            q: "Адамның тыныс алу мүшесі?",
            a: ["Бауыр", "Өкпе", "Бүйрек", "Асқазан"],
            c: 1,
            e: "Өкпе тыныс алу жүйесінің негізгі мүшесі."
        },
        {
            q: "Тұқым қуалайтын ақпарат қайда сақталады?",
            a: ["ДНҚ-да", "Суда", "Ауада", "Майда"],
            c: 0,
            e: "Тұқым қуалайтын ақпарат ДНҚ молекуласында сақталады."
        },
        {
            q: "Өсімдіктің су сіңіретін мүшесі?",
            a: ["Жапырақ", "Гүл", "Тамыр", "Жеміс"],
            c: 2,
            e: "Тамыр топырақтан су мен минералды заттарды сіңіреді."
        },
        {
            q: "Адам ағзасындағы ең үлкен мүше?",
            a: ["Жүрек", "Тері", "Бауыр", "Өкпе"],
            c: 1,
            e: "Адам ағзасындағы ең үлкен мүше — тері."
        },
        {
            q: "Қан айналымының негізгі мүшесі?",
            a: ["Асқазан", "Жүрек", "Бүйрек", "Өкпе"],
            c: 1,
            e: "Жүрек қанды бүкіл ағзаға айдайды."
        }
    ]
};


// ===================================
// ЭЛЕМЕНТТЕР
// ===================================

const testPanel = document.getElementById("testPanel");
const resultPanel = document.getElementById("resultPanel");

const testTitle = document.getElementById("testTitle");
const testMeta = document.getElementById("testMeta");
const timer = document.getElementById("timer");

const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");

const progressBar = document.getElementById("progressBar");
const numberGrid = document.getElementById("numberGrid");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");

const resultSummary = document.getElementById("resultSummary");
const reviewList = document.getElementById("reviewList");


// ===================================
// ТЕСТ КҮЙІ
// ===================================

let currentQuestions = [];
let answers = [];
let currentIndex = 0;
let currentSubject = "";
let secondsLeft = 0;
let timerInterval = null;
let lastTest = null;


// ===================================
// КӨМЕКШІ ФУНКЦИЯЛАР
// ===================================

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] =
        [result[j], result[i]];
    }

    return result;
}

function scrollToTest() {
    testPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ===================================
// ТЕСТ БАСТАУ
// ===================================

function startTest(subject, mixed = false) {

    clearInterval(timerInterval);

    if (mixed) {
        const allQuestions = [
            ...questions.history,
            ...questions.reading,
            ...questions.math,
            ...questions.geo,
            ...questions.bio
        ];

        currentQuestions = shuffle(allQuestions).slice(0, 15);

        currentSubject = "Аралас тест";

        secondsLeft = 15 * 60;

    } else {

        currentQuestions = shuffle(questions[subject]);

        currentSubject = {
            history: "Қазақстан тарихы",
            reading: "Оқу сауаттылығы",
            math: "Математикалық сауаттылық",
            geo: "География",
            bio: "Биология"
        }[subject];

        secondsLeft = 10 * 60;
    }

    answers = new Array(currentQuestions.length).fill(null);

    currentIndex = 0;

    resultPanel.style.display = "none";
    testPanel.style.display = "block";

    testTitle.textContent = currentSubject;
    testMeta.textContent = "Жауаптарыңды таңда және тестті аяқта.";

    showQuestion();

    updateTimer();

    timerInterval = setInterval(() => {

        secondsLeft--;

        updateTimer();

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            finishTest();
        }

    }, 1000);

    scrollToTest();
}


// ===================================
// СҰРАҚТЫ КӨРСЕТУ
// ===================================

function showQuestion() {

    const question = currentQuestions[currentIndex];

    questionCount.textContent =
        `Сұрақ ${currentIndex + 1} / ${currentQuestions.length}`;

    questionText.textContent = question.q;

    answerList.innerHTML = "";

    question.a.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${answer}`;

        if (answers[currentIndex] === index) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {

            answers[currentIndex] = index;

            showQuestion();

        });

        answerList.appendChild(button);

    });

    progressBar.style.width =
        `${((currentIndex + 1) / currentQuestions.length) * 100}%`;

    prevBtn.disabled = currentIndex === 0;

    nextBtn.style.display =
        currentIndex === currentQuestions.length - 1
        ? "none"
        : "inline-block";

    finishBtn.style.display =
        currentIndex === currentQuestions.length - 1
        ? "inline-block"
        : "none";

    updateNumberGrid();
}


// ===================================
// СҰРАҚТАР НӨМІРІ
// ===================================

function updateNumberGrid() {

    numberGrid.innerHTML = "";

    currentQuestions.forEach((question, index) => {

        const button = document.createElement("button");

        button.textContent = index + 1;

        if (index === currentIndex) {
            button.classList.add("active");
        }

        if (answers[index] !== null) {
            button.classList.add("done");
        }

        button.addEventListener("click", () => {

            currentIndex = index;

            showQuestion();

        });

        numberGrid.appendChild(button);

    });
}


// ===================================
// ТАЙМЕР
// ===================================

function updateTimer() {

    const minutes = Math.floor(secondsLeft / 60);

    const seconds = secondsLeft % 60;

    timer.textContent =
        `⏱ ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


// ===================================
// АЛҒА / АРТҚА
// ===================================

prevBtn.addEventListener("click", () => {

    if (currentIndex > 0) {

        currentIndex--;

        showQuestion();

    }

});

nextBtn.addEventListener("click", () => {

    if (currentIndex < currentQuestions.length - 1) {

        currentIndex++;

        showQuestion();

    }

});

finishBtn.addEventListener("click", finishTest);


// ===================================
// ТЕСТТІ АЯҚТАУ
// ===================================

function finishTest() {

    clearInterval(timerInterval);

    let correct = 0;

    currentQuestions.forEach((question, index) => {

        if (answers[index] === question.c) {
            correct++;
        }

    });

    const total = currentQuestions.length;

    const percentage = Math.round((correct / total) * 100);

    lastTest = {
        subject: currentSubject,
        correct: correct,
        total: total,
        percentage: percentage
    };

    resultSummary.innerHTML = `
        <h2>Тест аяқталды!</h2>
        <strong>${correct} / ${total}</strong>
        <p>Дұрыс жауаптар: ${correct}</p>
        <p>Қате немесе жауапсыз сұрақтар: ${total - correct}</p>
        <p>Нәтиже: ${percentage}%</p>
    `;

    reviewList.innerHTML = "";

    currentQuestions.forEach((question, index) => {

        const isCorrect = answers[index] === question.c;

        const item = document.createElement("div");

        item.className =
            `review-item ${isCorrect ? "correct" : "wrong"}`;

        const yourAnswer = answers[index] === null
            ? "Жауап берілмеді"
            : question.a[answers[index]];

        item.innerHTML = `
            <b>${index + 1}. ${question.q}</b>
            <p>Сенің жауабың: ${yourAnswer}</p>
            <p>Дұрыс жауап: ${question.a[question.c]}</p>
            <p>${isCorrect ? "✓ Дұрыс" : "✗ Қате"}</p>
            <p class="notice">${question.e}</p>
        `;

        reviewList.appendChild(item);

    });

    saveHistory(lastTest);

    testPanel.style.display = "none";

    resultPanel.style.display = "block";

    resultPanel.scrollIntoView({
        behavior: "smooth"
    });

}


// ===================================
// НӘТИЖЕЛЕР ТАРИХЫ
// ===================================

function saveHistory(result) {

    let history = JSON.parse(
        localStorage.getItem("ubtHistory") || "[]"
    );

    history.unshift({
        ...result,
        date: new Date().toLocaleString("kk-KZ")
    });

    history = history.slice(0, 10);

    localStorage.setItem(
        "ubtHistory",
        JSON.stringify(history)
    );

    showHistory();

}


function showHistory() {

    const history = JSON.parse(
        localStorage.getItem("ubtHistory") || "[]"
    );

    const historyList = document.getElementById("historyList");

    historyList.innerHTML = "";

    if (history.length === 0) {

        historyList.innerHTML = `
            <div class="feature">
                <p>Әзірге нәтиже жоқ. Алғашқы тестіңді орында!</p>
            </div>
        `;

        return;
    }

    history.forEach(item => {

        const div = document.createElement("div");

        div.className = "history-item";

        const left = document.createElement("div");

        const title = document.createElement("b");
        title.textContent = item.subject;

        const date = document.createElement("p");
        date.className = "notice";
        date.textContent = item.date;

        left.append(title, date);

        const score = document.createElement("strong");

        score.textContent =
            `${item.correct}/${item.total} (${item.percentage}%)`;

        div.append(left, score);

        historyList.appendChild(div);

    });

}


// ===================================
// ТАРИХТЫ ТАЗАЛАУ
// ===================================

document.getElementById("clearHistoryBtn")
.addEventListener("click", () => {

    if (confirm("Барлық нәтижелерді өшіресің бе?")) {

        localStorage.removeItem("ubtHistory");

        showHistory();

    }

});


// ===================================
// ҚАЙТА ТАПСЫРУ
// ===================================

document.getElementById("retryBtn")
.addEventListener("click", () => {

    if (lastTest) {

        if (currentSubject === "Аралас тест") {
            startTest("", true);
        } else {

            const subjectKey = {
                "Қазақстан тарихы": "history",
                "Оқу сауаттылығы": "reading",
                "Математикалық сауаттылық": "math",
                "География": "geo",
                "Биология": "bio"
            }[currentSubject];

            startTest(subjectKey);

        }

    }

});


// ===================================
// НӘТИЖЕ ТЕРЕЗЕСІН ЖАБУ
// ===================================

document.getElementById("closeResult")
.addEventListener("click", () => {

    resultPanel.style.display = "none";

});

document.getElementById("backSubjectsBtn")
.addEventListener("click", () => {

    resultPanel.style.display = "none";

    document.getElementById("subjects")
    .scrollIntoView({ behavior: "smooth" });

});


// ===================================
// ПӘНДІ ТАҢДАУ
// ===================================

document.querySelectorAll(".subjectBtn")
.forEach(button => {

    button.addEventListener("click", () => {

        startTest(button.dataset.subject);

    });

});


// ===================================
// АРАЛАС ТЕСТ
// ===================================

document.getElementById("mixedBtn")
.addEventListener("click", () => {

    startTest("", true);

});

document.getElementById("fullTrialBtn")
.addEventListener("click", () => {

    startTest("", true);

});

document.getElementById("heroTrial")
.addEventListener("click", () => {

    startTest("", true);

});

document.getElementById("heroStart")
.addEventListener("click", () => {

    document.getElementById("subjects")
    .scrollIntoView({ behavior: "smooth" });

});


// ===================================
// ҚАРА / АҚ ТАҚЫРЫП
// ===================================

document.getElementById("themeBtn")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


// ===================================
// БАСТАПҚЫ НӘТИЖЕЛЕРДІ ЖҮКТЕУ
// ===================================

showHistory();
