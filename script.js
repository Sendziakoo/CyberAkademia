// CyberMoc - Global JavaScript

// Global variables
let currentQuestion = 0;
let score = 0;
let quizScore = 0;
let totalPoints = 0;
let level = 1;
let achievements = [];
let quizData = [];
let selectedAnswer = null;
let passwordScore = 0;
let strongPasswords = 0;
let isPasswordVisible = false;
let quizCompleted = false;
let unlockedAchievements = 0;
let completedQuizzes = 0;

// Quiz questions - pula wszystkich pytań
const allQuestions = [
    {
        question: "Co to jest phishing?",
        options: [
            "Rodzaj ryby",
            "Atak polegający na podszywaniu się pod zaufane źródła",
            "Program antywirusowy",
            "Szyfrowanie danych"
        ],
        correct: 1,
        points: 10
    },
    {
        question: "Które hasło jest najbezpieczniejsze?",
        options: [
            "123456",
            "password",
            "MyStr0ng!P@ssw0rd",
            "qwerty"
        ],
        correct: 2,
        points: 15
    },
    {
        question: "Co to jest firewall?",
        options: [
            "System zabezpieczający przed nieautoryzowanym dostępem",
            "Program do edycji zdjęć",
            "Rodzaj wirusa",
            "System operacyjny"
        ],
        correct: 0,
        points: 12
    },
    {
        question: "Kiedy należy aktualizować oprogramowanie?",
        options: [
            "Nigdy",
            "Tylko gdy jest problem",
            "Regularnie, gdy dostępne są aktualizacje bezpieczeństwa",
            "Raz w roku"
        ],
        correct: 2,
        points: 8
    },
    {
        question: "Co to jest ransomware?",
        options: [
            "Program do szyfrowania plików",
            "Złośliwe oprogramowanie szyfrujące dane i żądające okupu",
            "System backupu",
            "Program antywirusowy"
        ],
        correct: 1,
        points: 20
    },
    {
        question: "Jakie informacje NIE powinny być udostępniane w mediach społecznościowych?",
        options: [
            "Zdjęcia z wakacji",
            "Dane osobowe, adres, numer telefonu",
            "Ulubione filmy",
            "Hobby"
        ],
        correct: 1,
        points: 10
    },
    {
        question: "Co to jest dwuskładnikowa autoryzacja (2FA)?",
        options: [
            "Logowanie tylko hasłem",
            "Dodatkowa warstwa bezpieczeństwa wymagająca dwóch form weryfikacji",
            "Logowanie tylko odciskiem palca",
            "System bez logowania"
        ],
        correct: 1,
        points: 15
    },
    {
        question: "Który protokół jest najbezpieczniejszy dla połączeń internetowych?",
        options: [
            "HTTP",
            "FTP",
            "HTTPS",
            "Telnet"
        ],
        correct: 2,
        points: 12
    },
    {
        question: "Co to jest VPN?",
        options: [
            "Wirtualna Prywatna Sieć maskująca twoją lokalizację",
            "Program do pobierania filmów",
            "Rodzaj wirusa komputerowego",
            "System operacyjny"
        ],
        correct: 0,
        points: 12
    },
    {
        question: "Co to jest malware?",
        options: [
            "Program antywirusowy",
            "Złośliwe oprogramowanie",
            "System operacyjny",
            "Przeglądarka internetowa"
        ],
        correct: 1,
        points: 10
    },
    {
        question: "Jak często powinieneś zmieniać hasło?",
        options: [
            "Nigdy",
            "Co 3-6 miesięcy lub gdy podejrzewasz naruszenie bezpieczeństwa",
            "Codziennie",
            "Co 5 lat"
        ],
        correct: 1,
        points: 8
    },
    {
        question: "Co to jest spoofing?",
        options: [
            "Szybkie łącze internetowe",
            "Podszywanie się pod inną osobę lub urządzenie",
            "Gra komputerowa",
            "Metoda szyfrowania"
        ],
        correct: 1,
        points: 15
    },
    {
        question: "Co oznacza kłódka przy adresie URL w przeglądarce?",
        options: [
            "Strona jest zablokowana",
            "Połączenie jest szyfrowane (HTTPS)",
            "Strona jest wolna",
            "Musisz się zalogować"
        ],
        correct: 1,
        points: 10
    },
    {
        question: "Co to jest DDoS?",
        options: [
            "Atak polegający na przeciążeniu serwera ruchem",
            "System backupu danych",
            "Protokół sieciowy",
            "Program antywirusowy"
        ],
        correct: 0,
        points: 18
    },
    {
        question: "Która metoda NIE chroni przed phishingiem?",
        options: [
            "Sprawdzanie adresu nadawcy email",
            "Używanie tego samego hasła wszędzie",
            "Nie klikanie w podejrzane linki",
            "Weryfikacja prawdziwości wiadomości"
        ],
        correct: 1,
        points: 12
    },
    {
        question: "Co to jest trojans (koń trojański)?",
        options: [
            "Film o starożytnej wojnie",
            "Złośliwe oprogramowanie ukrywające się jako legalne",
            "Rodzaj wirusa biologicznego",
            "Legalny program"
        ],
        correct: 1,
        points: 15
    },
    {
        question: "Co to jest spam?",
        options: [
            "Niechciane wiadomości masowe",
            "Program antywirusowy",
            "Bezpieczna metoda komunikacji",
            "Rodzaj szyfrowania"
        ],
        correct: 0,
        points: 8
    },
    {
        question: "Jaki jest cel szyfrowania end-to-end?",
        options: [
            "Przyspieszenie połączenia",
            "Ochrona wiadomości przed odczytaniem przez osoby trzecie",
            "Zwiększenie rozmiaru plików",
            "Blokowanie wiadomości"
        ],
        correct: 1,
        points: 15
    },
    {
        question: "Co to jest keylogger?",
        options: [
            "Program zapisujący naciśnięcia klawiszy",
            "Klawiatura gamingowa",
            "Program czyszczący klawiaturę",
            "System operacyjny"
        ],
        correct: 0,
        points: 18
    },
    {
        question: "Co oznacza termin 'zero-day'?",
        options: [
            "Bezpłatne oprogramowanie",
            "Luka bezpieczeństwa nieznana producentowi",
            "Aktualizacja systemu",
            "Brak zabezpieczeń"
        ],
        correct: 1,
        points: 20
    },
    {
        question: "Która praktyka jest najlepsza dla bezpieczeństwa haseł?",
        options: [
            "Używanie tego samego hasła wszędzie",
            "Zapisywanie haseł w notatniku",
            "Używanie menedżera haseł",
            "Udostępnianie haseł znajomym"
        ],
        correct: 2,
        points: 15
    },
    {
        question: "Co to jest adware?",
        options: [
            "Program wyświetlający niechciane reklamy",
            "Program do blokowania reklam",
            "Legalny program reklamowy",
            "System operacyjny"
        ],
        correct: 0,
        points: 10
    }
];

// Wylosowane pytania na dany quiz (8 pytań)
let questions = [];

// Achievements data
const achievementsData = [
    {
        id: 'first_quiz',
        name: 'Pierwszy krok',
        description: 'Ukończ pierwszy quiz',
        icon: '🎯',
        points: 50,
        requirement: 1,
        type: 'quiz_completed'
    },
    {
        id: 'quiz_master',
        name: 'Mistrz Quizu',
        description: 'Ukończ 5 quizów',
        icon: '🧠',
        points: 100,
        requirement: 5,
        type: 'quiz_completed'
    },
    {
        id: 'password_expert',
        name: 'Ekspert Haseł',
        description: 'Stwórz 10 silnych haseł',
        icon: '🔐',
        points: 75,
        requirement: 10,
        type: 'strong_passwords'
    },
    {
        id: 'security_guardian',
        name: 'Strażnik Bezpieczeństwa',
        description: 'Zdobądź 500 punktów',
        icon: '🛡️',
        points: 200,
        requirement: 500,
        type: 'total_points'
    },
    {
        id: 'perfect_score',
        name: 'Perfekcjonista',
        description: 'Uzyskaj 100% w quizie',
        icon: '⭐',
        points: 150,
        requirement: 1,
        type: 'perfect_quiz'
    },
    {
        id: 'password_master',
        name: 'Mistrz Haseł',
        description: 'Stwórz 50 silnych haseł',
        icon: '🔑',
        points: 300,
        requirement: 50,
        type: 'strong_passwords'
    },
    {
        id: 'cyber_warrior',
        name: 'Cyber Wojownik',
        description: 'Zdobądź 1000 punktów',
        icon: '⚔️',
        points: 500,
        requirement: 1000,
        type: 'total_points'
    },
    {
        id: 'knowledge_seeker',
        name: 'Poszukiwacz Wiedzy',
        description: 'Ukończ 10 quizów',
        icon: '📚',
        points: 200,
        requirement: 10,
        type: 'quiz_completed'
    }
];

// Level data
const levels = [
    { name: 'Cyber Security Novice', minPoints: 0, maxPoints: 99 },
    { name: 'Security Enthusiast', minPoints: 100, maxPoints: 299 },
    { name: 'Cyber Defender', minPoints: 300, maxPoints: 599 },
    { name: 'Security Expert', minPoints: 600, maxPoints: 999 },
    { name: 'Cyber Guardian', minPoints: 1000, maxPoints: 1999 },
    { name: 'Security Master', minPoints: 2000, maxPoints: 4999 },
    { name: 'Cyber Legend', minPoints: 5000, maxPoints: 9999 },
    { name: 'Ultimate Security', minPoints: 10000, maxPoints: Infinity }
];

// Utility Functions
function loadData() {
    const savedData = localStorage.getItem('cyberMocData');
    if (savedData) {
        const data = JSON.parse(savedData);
        totalPoints = data.totalPoints || 0;
        level = data.level || 1;
        achievements = data.achievements || [];
        quizScore = data.quizScore || 0;
        passwordScore = data.passwordScore || 0;
        strongPasswords = data.strongPasswords || 0;
        completedQuizzes = data.completedQuizzes || 0;
        unlockedAchievements = achievements.length;
    }
}

function saveData() {
    const data = {
        totalPoints,
        level,
        achievements,
        quizScore,
        passwordScore,
        strongPasswords,
        completedQuizzes
    };
    localStorage.setItem('cyberMocData', JSON.stringify(data));
}

function updateLevel() {
    level = Math.floor(totalPoints / 100) + 1;
}

function updateLevelDisplay() {
    // Update level number
    const levelNumberEl = document.getElementById('levelNumber');
    if (levelNumberEl) levelNumberEl.textContent = level;

    // Calculate achievement points (points from achievements)
    let achievementPointsTotal = 0;
    achievements.forEach(achId => {
        const achievement = achievementsData.find(a => a.id === achId);
        if (achievement) {
            achievementPointsTotal += achievement.points;
        }
    });

    // Update points breakdown
    const quizPointsEl = document.getElementById('quizPoints');
    const passwordPointsEl = document.getElementById('passwordPoints');
    const achievementPointsEl = document.getElementById('achievementPoints');
    
    if (quizPointsEl) quizPointsEl.textContent = quizScore;
    if (passwordPointsEl) passwordPointsEl.textContent = passwordScore;
    if (achievementPointsEl) achievementPointsEl.textContent = achievementPointsTotal;

    // Calculate points to next level
    const nextLevelPoints = level * 100;
    const pointsToNext = nextLevelPoints - totalPoints;
    const pointsToNextEl = document.getElementById('pointsToNext');
    if (pointsToNextEl) pointsToNextEl.textContent = pointsToNext > 0 ? pointsToNext : 0;

    // Update level progress bar
    const currentLevelMinPoints = (level - 1) * 100;
    const currentLevelMaxPoints = level * 100;
    const progressInCurrentLevel = totalPoints - currentLevelMinPoints;
    const levelProgressPercent = (progressInCurrentLevel / 100) * 100;
    
    const levelProgressEl = document.getElementById('levelProgress');
    if (levelProgressEl) {
        levelProgressEl.style.width = Math.min(levelProgressPercent, 100) + '%';
    }

    // Update total achievements count
    const totalAchievementsEl = document.getElementById('totalAchievements');
    if (totalAchievementsEl) {
        totalAchievementsEl.textContent = achievements.length;
    }
}

// Header scroll effect
function initHeaderScroll() {
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        const scrollProgress = document.getElementById('scrollProgress');
        
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (scrollProgress) {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation observer for feature cards
function initAnimationObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Quiz Functions
function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function selectRandomQuestions() {
    // Losuj 8 pytań z puli wszystkich pytań
    const shuffled = shuffleArray(allQuestions);
    questions = shuffled.slice(0, 8);
}

function initQuiz() {
    loadData();
    selectRandomQuestions();
    displayQuestion();
    updateProgress();
}

function startQuiz() {
    currentQuestion = 0;
    selectedAnswer = null;
    quizCompleted = false;
    selectRandomQuestions();
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('nextBtn').disabled = true;
    updateProgress();
}

function selectAnswer(index) {
    if (quizCompleted) return;
    
    selectedAnswer = index;
    
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    document.querySelectorAll('.option')[index].classList.add('selected');
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === null || quizCompleted) return;
    
    // Disable the next button immediately to prevent multiple clicks
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.disabled = true;
    }
    
    const question = questions[currentQuestion];
    const isCorrect = selectedAnswer === question.correct;
    
    document.querySelectorAll('.option').forEach((opt, index) => {
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    if (isCorrect) {
        score += question.points;
        quizScore += question.points;
        totalPoints += question.points;
    }
    
    currentQuestion++;
    updateProgress();
    
    if (currentQuestion < questions.length) {
        setTimeout(() => {
            displayQuestion();
        }, 2000);
    } else {
        setTimeout(() => {
            showResults();
        }, 2000);
    }
}

function showResults() {
    quizCompleted = true;
    completedQuizzes++;
    checkAchievements();
    saveData();
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    
    document.getElementById('finalScore').textContent = score;
    
    let message = '';
    if (score >= 80) {
        message = 'Doskonała wiedza o cyberbezpieczeństwie! 🏆';
    } else if (score >= 60) {
        message = 'Dobra znajomość tematu! 👍';
    } else if (score >= 40) {
        message = 'Nieźle, ale warto jeszcze poćwiczyć! 📚';
    } else {
        message = 'Czas na naukę! Polecamy powtórzyć materiał. 📖';
    }
    
    document.getElementById('resultsMessage').textContent = message;
    
    saveData();
    checkAchievements();
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    selectedAnswer = null;
    quizCompleted = false;
    selectRandomQuestions();
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('resultsContainer').style.display = 'none';
    displayQuestion();
    updateDisplay();
}

function updateProgress() {
    const progress = ((currentQuestion) / questions.length) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    
    const currentScoreEl = document.getElementById('currentScore');
    const currentQuestionEl = document.getElementById('currentQuestion');
    const totalQuestionsEl = document.getElementById('totalQuestions');
    const questionNumberEl = document.getElementById('questionNumber');
    
    // Ensure currentQuestion doesn't exceed questions.length
    const displayQuestionNumber = Math.min(currentQuestion + 1, questions.length);
    
    if (currentScoreEl) currentScoreEl.textContent = score;
    if (currentQuestionEl) currentQuestionEl.textContent = displayQuestionNumber;
    if (totalQuestionsEl) totalQuestionsEl.textContent = questions.length;
    if (questionNumberEl) questionNumberEl.textContent = `Pytanie ${displayQuestionNumber} z ${questions.length}`;
}

// Password Game Functions
function initPasswordGame() {
    loadData();
    updateDisplay();
}

function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const strength = calculatePasswordStrength(password);
    updatePasswordRequirements(password);
    updateStrengthBar(strength);
    
    // Włącz/wyłącz przycisk submit w zależności od siły hasła
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        if (strength >= 100 && password.length > 0) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }
    
    // Ukryj feedback gdy użytkownik zmienia hasło
    const feedback = document.getElementById('passwordFeedback');
    if (feedback) {
        feedback.style.display = 'none';
    }
}

function calculatePasswordStrength(password) {
    let strength = 0;
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    Object.values(requirements).forEach(req => {
        if (req) strength += 20;
    });
    
    return strength;
}

function updatePasswordRequirements(password) {
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    Object.keys(requirements).forEach(req => {
        const element = document.getElementById(req + 'Req');
        if (element) {
            if (requirements[req]) {
                element.classList.add('met');
                element.classList.remove('not-met');
            } else {
                element.classList.add('not-met');
                element.classList.remove('met');
            }
        }
    });
}

function updateStrengthBar(strength) {
    const bar = document.getElementById('strengthBar');
    const text = document.getElementById('strengthText');
    
    if (bar) {
        bar.style.width = strength + '%';
        bar.className = 'strength-bar';
        
        if (strength < 40) {
            bar.classList.add('strength-weak');
            if (text) {
                text.textContent = 'Słabe hasło';
                text.className = 'strength-text strength-weak-text';
            }
        } else if (strength < 80) {
            bar.classList.add('strength-medium');
            if (text) {
                text.textContent = 'Średnie hasło';
                text.className = 'strength-text strength-medium-text';
            }
        } else if (strength < 100) {
            bar.classList.add('strength-strong');
            if (text) {
                text.textContent = 'Dobre hasło';
                text.className = 'strength-text strength-strong-text';
            }
        } else {
            bar.classList.add('strength-strong');
            if (text) {
                text.textContent = 'Bardzo silne hasło! 🎉';
                text.className = 'strength-text strength-strong-text';
            }
        }
    }
}

function generateStrongPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    
    password += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
    password += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
    password += '0123456789'[Math.floor(Math.random() * 10)];
    password += '!@#$%^&*'[Math.floor(Math.random() * 8)];
    
    for (let i = 4; i < 16; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    document.getElementById('passwordInput').value = password;
    document.getElementById('passwordInput').dataset.scored = 'false';
    checkPasswordStrength();
}

function submitPassword() {
    const password = document.getElementById('passwordInput').value;
    const strength = calculatePasswordStrength(password);
    
    if (strength >= 100) {
        // Dodaj punkty
        passwordScore += 10;
        strongPasswords++;
        totalPoints += 10;
        
        // Pokaż feedback
        const feedback = document.getElementById('passwordFeedback');
        const feedbackMessage = document.getElementById('feedbackMessage');
        const feedbackPoints = document.getElementById('feedbackPoints');
        
        if (feedback && feedbackMessage && feedbackPoints) {
            feedbackMessage.textContent = 'Świetne hasło! Spełnia wszystkie wymagania bezpieczeństwa.';
            feedbackPoints.textContent = '+10 punktów';
            feedback.style.display = 'block';
            
            // Animacja feedback
            feedback.classList.remove('show');
            setTimeout(() => {
                feedback.classList.add('show');
            }, 10);
        }
        
        // Zapisz dane i sprawdź achievementy
        saveData();
        checkAchievements();
        updateDisplay();
        
        // Wyczyść pole hasła po 2 sekundach
        setTimeout(() => {
            clearPassword();
        }, 2000);
    }
}

function clearPassword() {
    document.getElementById('passwordInput').value = '';
    checkPasswordStrength();
    
    // Ukryj feedback
    const feedback = document.getElementById('passwordFeedback');
    if (feedback) {
        feedback.style.display = 'none';
    }
}

function showPassword() {
    const input = document.getElementById('passwordInput');
    const btn = document.getElementById('showBtn');
    
    if (isPasswordVisible) {
        input.type = 'password';
        btn.textContent = '👁️ Pokaż hasło';
        isPasswordVisible = false;
    } else {
        input.type = 'text';
        btn.textContent = '🙈 Ukryj hasło';
        isPasswordVisible = true;
    }
}

// Achievements Functions
function initAchievements() {
    loadData();
    setupAchievements();
    updateDisplay();
}

function setupAchievements() {
    const container = document.getElementById('achievementsContainer');
    if (!container) return;
    
    container.innerHTML = '';

    achievementsData.forEach(achievement => {
        const isUnlocked = achievements.includes(achievement.id);
        const progress = getAchievementProgress(achievement);
        const progressPercent = Math.min((progress / achievement.requirement) * 100, 100);

        const achievementDiv = document.createElement('div');
        achievementDiv.className = `achievement-card ${isUnlocked ? 'unlocked' : ''}`;
        achievementDiv.innerHTML = `
            <div class="achievement-header">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-info">
                    <h3>${achievement.name}</h3>
                    <div class="achievement-points">+${achievement.points} pkt</div>
                </div>
            </div>
            <div class="achievement-description">${achievement.description}</div>
            <div class="progress-container">
                <div class="progress-label">
                    <span>Postęp</span>
                    <span>${Math.min(progress, achievement.requirement)}/${achievement.requirement}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercent}%"></div>
                </div>
            </div>
            <div class="achievement-status ${isUnlocked ? 'unlocked' : 'locked'}">
                ${isUnlocked ? 'Odblokowane!' : 'Zablokowane'}
            </div>
        `;
        container.appendChild(achievementDiv);
    });
}

function getAchievementProgress(achievement) {
    switch (achievement.type) {
        case 'quiz_completed':
            // Count completed quizzes
            return completedQuizzes;
        case 'strong_passwords':
            // Count strong passwords created (10 points each)
            return Math.floor(passwordScore / 10);
        case 'total_points':
            return totalPoints;
        case 'perfect_quiz':
            return achievements.includes('perfect_quiz') ? 1 : 0;
        default:
            return 0;
    }
}

function checkAchievements() {
    achievementsData.forEach(achievement => {
        if (!achievements.includes(achievement.id)) {
            const progress = getAchievementProgress(achievement);
            if (progress >= achievement.requirement) {
                unlockAchievement(achievement);
            }
        }
    });
}

function unlockAchievement(achievement) {
    achievements.push(achievement.id);
    totalPoints += achievement.points;
    updateLevel();
    saveData();
    setupAchievements();
    updateDisplay();
    
    alert(`🏆 Osiągnięcie odblokowane: ${achievement.name}!\n+${achievement.points} punktów`);
}

// Stats Functions
function initStats() {
    loadData();
    updateDisplay();
    setupProgressBars();
    setupRecentAchievements();
}

function setupProgressBars() {
    const container = document.getElementById('achievementsProgress');
    if (!container) return;
    
    container.innerHTML = '';

    achievementsData.forEach(achievement => {
        const isUnlocked = achievements.includes(achievement.id);
        const progress = getAchievementProgress(achievement);
        const progressPercent = Math.min((progress / achievement.requirement) * 100, 100);

        const progressDiv = document.createElement('div');
        progressDiv.className = 'progress-item';
        progressDiv.innerHTML = `
            <div class="progress-header">
                <div class="progress-label">${achievement.name}</div>
                <div class="progress-value">${Math.min(progress, achievement.requirement)}/${achievement.requirement}</div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercent}%"></div>
                <div class="progress-percentage">${Math.round(progressPercent)}%</div>
            </div>
        `;
        container.appendChild(progressDiv);
    });
}

function setupRecentAchievements() {
    const container = document.getElementById('recentAchievements');
    if (!container) return;
    
    container.innerHTML = '';

    achievementsData.slice(0, 6).forEach(achievement => {
        const isUnlocked = achievements.includes(achievement.id);
        
        const achievementDiv = document.createElement('div');
        achievementDiv.className = `achievement-preview ${isUnlocked ? 'unlocked' : 'locked'}`;
        achievementDiv.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-status">${isUnlocked ? 'Odblokowane' : 'Zablokowane'}</div>
        `;
        container.appendChild(achievementDiv);
    });
}

function exportData(format) {
    const data = {
        totalPoints,
        quizScore,
        passwordScore,
        achievements,
        level,
        unlockedAchievements,
        exportDate: new Date().toISOString()
    };

    if (format === 'json') {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cybermoc-stats.json';
        a.click();
        URL.revokeObjectURL(url);
    } else if (format === 'csv') {
        const csv = `Typ, Wartość
Łączne punkty, ${totalPoints}
Punkty z quizu, ${quizScore}
Punkty z haseł, ${passwordScore}
Osiągnięcia, ${unlockedAchievements}
Poziom, ${level}
Data eksportu, ${new Date().toLocaleDateString()}`;
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cybermoc-stats.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
}

function resetData() {
    if (confirm('Czy na pewno chcesz zresetować wszystkie dane? Ta operacja jest nieodwracalna!')) {
        localStorage.removeItem('cyberMocData');
        location.reload();
    }
}

// Display Functions
function updateDisplay() {
    const elements = {
        totalPoints: document.getElementById('totalPoints'),
        level: document.getElementById('level'),
        currentLevel: document.getElementById('currentLevel'),
        score: document.getElementById('score'),
        quizScore: document.getElementById('quizScore'),
        passwordScore: document.getElementById('passwordScore'),
        strongPasswords: document.getElementById('strongPasswords'),
        totalScore: document.getElementById('totalScore'),
        achievementsUnlocked: document.getElementById('achievementsUnlocked'),
        completionRate: document.getElementById('completionRate')
    };

    if (elements.totalPoints) elements.totalPoints.textContent = totalPoints;
    if (elements.level) elements.level.textContent = level;
    if (elements.currentLevel) elements.currentLevel.textContent = level;
    if (elements.score) elements.score.textContent = score;
    if (elements.quizScore) elements.quizScore.textContent = quizScore;
    if (elements.passwordScore) elements.passwordScore.textContent = passwordScore;
    if (elements.strongPasswords) elements.strongPasswords.textContent = strongPasswords;
    if (elements.totalScore) elements.totalScore.textContent = totalPoints;
    if (elements.achievementsUnlocked) elements.achievementsUnlocked.textContent = unlockedAchievements;
    if (elements.completionRate) elements.completionRate.textContent = Math.round((unlockedAchievements / achievementsData.length) * 100) + '%';

    // Update percentages for stats page
    const quizPercentage = totalPoints > 0 ? Math.round((quizScore / totalPoints) * 100) : 0;
    const passwordPercentage = totalPoints > 0 ? Math.round((passwordScore / totalPoints) * 100) : 0;
    const achievementPercentage = totalPoints > 0 ? Math.round(((totalPoints - quizScore - passwordScore) / totalPoints) * 100) : 0;

    const quizPercentageEl = document.getElementById('quizPercentage');
    const passwordPercentageEl = document.getElementById('passwordPercentage');
    const achievementPercentageEl = document.getElementById('achievementPercentage');

    if (quizPercentageEl) quizPercentageEl.textContent = quizPercentage + '%';
    if (passwordPercentageEl) passwordPercentageEl.textContent = passwordPercentage + '%';
    if (achievementPercentageEl) achievementPercentageEl.textContent = achievementPercentage + '%';

    // Update achievements page level section
    updateLevelDisplay();
}

// Tab Functions
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    if (tabName === 'achievements') {
        setupAchievements();
    }
}

// Page-specific initialization
function initPage(pageType) {
    loadData();
    initHeaderScroll();
    initSmoothScrolling();
    
    switch (pageType) {
        case 'index':
            initAnimationObserver();
            break;
        case 'quiz':
            initQuiz();
            break;
        case 'password':
            initPasswordGame();
            break;
        case 'achievements':
            initAchievements();
            break;
        case 'stats':
            initStats();
            break;
    }
    
    updateDisplay();
}

// Global event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Auto-detect page type based on current page
    const path = window.location.pathname;
    let pageType = 'index';
    
    if (path.includes('quiz.html')) pageType = 'quiz';
    else if (path.includes('password.html')) pageType = 'password';
    else if (path.includes('achievements.html')) pageType = 'achievements';
    else if (path.includes('stats.html')) pageType = 'stats';
    
    initPage(pageType);
});

// Make functions globally available
window.showTab = showTab;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;
window.checkPasswordStrength = checkPasswordStrength;
window.submitPassword = submitPassword;
window.generateStrongPassword = generateStrongPassword;
window.clearPassword = clearPassword;
window.showPassword = showPassword;
window.exportData = exportData;
window.resetData = resetData;
