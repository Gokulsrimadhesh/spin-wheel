/* ============================================
   SPIN THE WHEEL - BCA QUIZ APPLICATION
   ============================================ */

// ====== QUIZ DATA: 8 Topics × 5 Questions ======
const quizData = [
  {
    id: 0,
    topic: "Palindrome",
    questions: [
      {
        question: "What is a palindrome?",
        options: ["A number divisible by 2", "A string that reads the same forwards and backwards", "A prime number", "A type of loop"],
        correct: 1
      },
      {
        question: "Which of the following is a palindrome number?",
        options: ["123", "121", "1234", "100"],
        correct: 1
      },
      {
        question: "Which of these strings is a palindrome?",
        options: ["hello", "racecar", "world", "python"],
        correct: 1
      },
      {
        question: "Which method can be used to check if a string is a palindrome in JavaScript?",
        options: ["split().reverse().join()", "reverse()", "palindrome()", "checkPal()"],
        correct: 0
      },
      {
        question: "Is 'A man, a plan, a canal, Panama' a palindrome (ignoring spaces and punctuation)?",
        options: ["Yes", "No", "Only if reversed", "None of the above"],
        correct: 0
      }
    ]
  },
  {
    id: 1,
    topic: "Fibonacci",
    questions: [
      {
        question: "What are the first two numbers of the Fibonacci sequence?",
        options: ["0 and 1", "1 and 2", "0 and 2", "1 and 1"],
        correct: 0
      },
      {
        question: "What is the 6th Fibonacci number (starting from 0,1)?",
        options: ["5", "8", "13", "3"],
        correct: 0
      },
      {
        question: "Which of the following is NOT a Fibonacci number?",
        options: ["21", "34", "46", "55"],
        correct: 2
      },
      {
        question: "Fibonacci sequence is commonly implemented using:",
        options: ["Recursion", "Iteration", "Both recursion and iteration", "Only using arrays"],
        correct: 2
      },
      {
        question: "What is the time complexity of the naive recursive Fibonacci implementation?",
        options: ["O(n)", "O(log n)", "O(2^n)", "O(n^2)"],
        correct: 2
      }
    ]
  },
  {
    id: 2,
    topic: "Prime Number",
    questions: [
      {
        question: "What is a prime number?",
        options: ["A number with exactly two factors", "A number divisible by 2", "A number with more than 2 factors", "A number ending with 0"],
        correct: 0
      },
      {
        question: "Which of the following is a prime number?",
        options: ["15", "21", "29", "33"],
        correct: 2
      },
      {
        question: "How many prime numbers are less than 20?",
        options: ["6", "8", "7", "9"],
        correct: 1
      },
      {
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correct: 2
      },
      {
        question: "Is 1 a prime number?",
        options: ["Yes", "No", "Sometimes", "Only for even numbers"],
        correct: 1
      }
    ]
  },
  {
    id: 3,
    topic: "Arrays",
    questions: [
      {
        question: "What is the index of the first element in an array?",
        options: ["1", "0", "-1", "First"],
        correct: 1
      },
      {
        question: "Which method adds an element to the end of an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
      },
      {
        question: "Which method removes the last element from an array?",
        options: ["push()", "pop()", "shift()", "splice()"],
        correct: 1
      },
      {
        question: "What does arr.length return?",
        options: ["Number of elements", "Last index", "First index", "Capacity of array"],
        correct: 0
      },
      {
        question: "Which method is used to combine two arrays in JavaScript?",
        options: ["concat()", "merge()", "combine()", "join()"],
        correct: 0
      }
    ]
  },
  {
    id: 4,
    topic: "Strings",
    questions: [
      {
        question: "Which method is used to find the length of a string in JavaScript?",
        options: ["len()", "size()", "length", "count()"],
        correct: 2
      },
      {
        question: "Which method converts a string to uppercase?",
        options: ["toUpperCase()", "toUpper()", "upperCase()", "toUppercase()"],
        correct: 0
      },
      {
        question: "How do you get the character at index 2 in a string 'Hello'?",
        options: ["'Hello'[2]", "'Hello'.charAt(2)", "Both A and B", "charGet(2)"],
        correct: 2
      },
      {
        question: "Which method extracts a part of a string?",
        options: ["slice()", "extract()", "cut()", "part()"],
        correct: 0
      },
      {
        question: "What does 'Hello'.indexOf('l') return?",
        options: ["1", "2", "3", "4"],
        correct: 1
      }
    ]
  },
  {
    id: 5,
    topic: "SQL",
    questions: [
      {
        question: "Which SQL statement is used to retrieve data from a database?",
        options: ["GET", "FETCH", "SELECT", "RETRIEVE"],
        correct: 2
      },
      {
        question: "Which SQL clause is used to filter records?",
        options: ["WHERE", "HAVING", "FILTER", "IF"],
        correct: 0
      },
      {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Logic"],
        correct: 0
      },
      {
        question: "Which statement is used to insert data into a table?",
        options: ["INSERT INTO", "ADD TO", "UPDATE", "PUT"],
        correct: 0
      },
      {
        question: "Which keyword is used to sort the result set?",
        options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
        correct: 1
      }
    ]
  },
  {
    id: 6,
    topic: "HTML & CSS",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language", "Hyper Transfer Markup Language"],
        correct: 0
      },
      {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<nav>"],
        correct: 1
      },
      {
        question: "Which CSS property changes the text color?",
        options: ["text-color", "color", "font-color", "foreground-color"],
        correct: 1
      },
      {
        question: "Which CSS property makes a flex container?",
        options: ["display: block", "display: inline", "display: flex", "display: grid"],
        correct: 2
      },
      {
        question: "Which HTML tag is used to include an external CSS file?",
        options: ["<style>", "<link>", "<css>", "<script>"],
        correct: 1
      }
    ]
  },
  {
    id: 7,
    topic: "Data Structures",
    questions: [
      {
        question: "What is a stack?",
        options: ["FIFO data structure", "LIFO data structure", "A type of array", "A sorting algorithm"],
        correct: 1
      },
      {
        question: "What does FIFO stand for?",
        options: ["First In First Out", "Final Input Final Output", "First In Final Out", "Fast Input Fast Output"],
        correct: 0
      },
      {
        question: "Which data structure is used to implement BFS (Breadth First Search)?",
        options: ["Stack", "Queue", "Array", "Tree"],
        correct: 1
      },
      {
        question: "What is a linked list?",
        options: ["A linear data structure with nodes", "A type of array", "A stack implementation", "A tree structure"],
        correct: 0
      },
      {
        question: "Which data structure has a root node?",
        options: ["Linked list", "Tree", "Stack", "Queue"],
        correct: 1
      }
    ]
  }
];

// ====== TOPIC COLORS (8 vibrant colors for wheel sections) ======
const topicColors = [
  '#FF6B6B', // Palindrome - Red
  '#4ECDC4', // Fibonacci - Teal
  '#45B7D1', // Prime Number - Blue
  '#96CEB4', // Arrays - Green
  '#FFEAA7', // Strings - Yellow
  '#DDA0DD', // SQL - Plum
  '#98D8C8', // HTML & CSS - Mint
  '#BB8FCE'  // Data Structures - Purple
];

// ====== DOM REFERENCES ======
const wheelEl = document.getElementById('wheel');
const wheelCanvas = document.getElementById('wheelCanvas');
const ctx = wheelCanvas.getContext('2d');
const spinBtn = document.getElementById('spinBtn');
const topicDisplay = document.getElementById('topicDisplay');
const topicName = document.getElementById('topicName');
const quizOverlay = document.getElementById('quizOverlay');
const quizTopic = document.getElementById('quizTopic');
const quizProgress = document.getElementById('quizProgress');
const quizQuestion = document.getElementById('quizQuestion');
const optionsContainer = document.getElementById('optionsContainer');
const answerReveal = document.getElementById('answerReveal');
const correctAnswer = document.getElementById('correctAnswer');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const nextBtn = document.getElementById('nextBtn');
const completedMsg = document.getElementById('completedMsg');
const spinAgainBtn = document.getElementById('spinAgainBtn');

// ====== STATE ======
const NUM_SECTIONS = quizData.length; // 8
const SECTION_ANGLE = 360 / NUM_SECTIONS;

let currentRotation = 0;
let isSpinning = false;
let selectedTopicIndex = -1;
let currentQuestionIndex = 0;
let optionLocked = false;

// Track completed topics and answered questions per topic
// Each topic: { completed: bool, answered: Set(questionIndices) }
const topicState = quizData.map(() => ({
  completed: false,
  answered: new Set()
}));

// ====== DRAW WHEEL ======
function drawWheel() {
  const canvas = wheelCanvas;
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const size = rect.width;

  canvas.width = size * dpr;
  canvas.height = size * dpr;
  ctx.scale(dpr, dpr);

  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 4;
  const fontSize = Math.max(10, size / 30);

  ctx.clearRect(0, 0, size, size);

  for (let i = 0; i < NUM_SECTIONS; i++) {
    const startAngle = (i * SECTION_ANGLE - 90) * (Math.PI / 180);
    const endAngle = ((i + 1) * SECTION_ANGLE - 90) * (Math.PI / 180);

    // Draw section
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = topicColors[i];
    ctx.fill();

    // Section border
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw text
    const midAngle = (startAngle + endAngle) / 2;
    const textRadius = radius * 0.65;
    const textX = centerX + textRadius * Math.cos(midAngle);
    const textY = centerY + textRadius * Math.sin(midAngle);

    ctx.save();
    ctx.translate(textX, textY);

    let topicLabel = quizData[i].topic;
    // Shorten long labels
    if (topicLabel.length > 10) {
      const words = topicLabel.split(' ');
      if (words.length > 1) {
        topicLabel = words.map(w => w.substring(0, 5)).join(' ');
      }
    }

    ctx.font = `bold ${fontSize}px Poppins, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#1a1a3e';
    ctx.fillText(topicLabel, 0, 0);

    ctx.restore();
  }

  // Center circle
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 0.18);
  gradient.addColorStop(0, '#2a1a5e');
  gradient.addColorStop(1, '#0c0c1d');
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.16, 0, 2 * Math.PI);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,215,0,0.4)';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Center icon
  ctx.font = `${fontSize * 1.5}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#ffd700';
  ctx.fillText('✦', centerX, centerY);
}

// ====== REDRAW ON RESIZE ======
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(drawWheel, 100);
});

// ====== SPIN WHEEL ======
spinBtn.addEventListener('click', spinWheel);

function spinWheel() {
  if (isSpinning) return;

  // Check if all topics are completed
  const allCompleted = topicState.every(t => t.completed);
  if (allCompleted) {
    alert('🎉 All topics completed! Great job!');
    return;
  }

  isSpinning = true;
  spinBtn.disabled = true;
  topicDisplay.classList.remove('visible');
  quizOverlay.classList.remove('active');

  // Generate random extra spins (5-8 full rotations) + random section
  const extraRotations = 5 + Math.random() * 3;
  const randomIndex = Math.floor(Math.random() * NUM_SECTIONS);

  // Target a RANDOM position within the selected section (not the edge)
  // Section <randomIndex> spans from (randomIndex*SECTION_ANGLE) to ((randomIndex+1)*SECTION_ANGLE) degrees clockwise from top.
  // Pick a random angle within this section.
  const sectionStart = randomIndex * SECTION_ANGLE;
  const targetAngle = sectionStart + Math.random() * SECTION_ANGLE;
  // Rotating clockwise by R brings the point at (360 - R mod 360)° to the pointer (top).
  // We want point at targetAngle to land at the pointer: 360 - R = targetAngle → R = 360 - targetAngle
  const totalRotation = 360 * extraRotations + (360 - targetAngle);
  currentRotation += totalRotation;

  // Apply rotation
  wheelEl.style.transform = `rotate(${currentRotation}deg)`;

  // After spin completes
  setTimeout(() => {
    isSpinning = false;
    const normalized = ((currentRotation % 360) + 360) % 360;
selectedTopicIndex =
Math.floor(((360 - normalized) % 360) / SECTION_ANGLE);
    const topic = quizData[selectedTopicIndex].topic;
    topicName.textContent = topic;
    topicDisplay.classList.add('visible');

    // Open quiz for selected topic
    openQuiz(selectedTopicIndex);
  }, 4200);
}

// ====== OPEN QUIZ ======
function openQuiz(topicIndex) {
  const state = topicState[topicIndex];
  const topic = quizData[topicIndex];

  if (state.completed) {
    // Show completed message
    quizTopic.textContent = topic.topic;
    quizProgress.textContent = '';
    quizQuestion.style.display = 'none';
    optionsContainer.style.display = 'none';
    answerReveal.classList.remove('show');
    showAnswerBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    completedMsg.classList.add('show');
    quizOverlay.classList.add('active');
    spinBtn.disabled = true;
    return;
  }

  // Find next unanswered question
  let nextQIndex = -1;
  for (let i = 0; i < 
    topic.questions.length; i++) {
    if (!state.answered.has(i)) {
      nextQIndex = i;
      break;
    }
  }

  if (nextQIndex === -1) {
    // All answered, mark completed
    state.completed = true;
    openQuiz(topicIndex);
    return;
  }

  currentQuestionIndex = nextQIndex;
  showQuestion(topicIndex, currentQuestionIndex);
  quizOverlay.classList.add('active');
}

// ====== SHOW QUESTION ======
function showQuestion(topicIndex, qIndex) {
  const topic = quizData[topicIndex];
  const q = topic.questions[qIndex];

  // Reset state
  answerReveal.classList.remove('show');
  showAnswerBtn.style.display = 'inline-block';
  nextBtn.style.display = 'none';
  completedMsg.classList.remove('show');
  quizQuestion.style.display = 'block';
  optionsContainer.style.display = 'flex';

  quizTopic.textContent = topic.topic;
  quizProgress.textContent = `Question ${qIndex + 1} of ${topic.questions.length}`;
  quizQuestion.textContent = q.question;

  // Render options
  optionsContainer.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.index = idx;
    btn.textContent = `${labels[idx]}. ${opt}`;
    btn.addEventListener('click', () => selectOption(btn, idx, q.correct, topicIndex, qIndex));
    optionsContainer.appendChild(btn);
  });

  // Reset answer reveal text
  correctAnswer.textContent = q.options[q.correct];
}

// ====== SELECT OPTION ======

function selectOption(btn, selectedIdx, correctIdx, topicIndex, qIndex) {
  if (optionLocked) return;
  optionLocked = true;

  const allOptions = optionsContainer.querySelectorAll('.option-btn');

  // Disable all options
  allOptions.forEach(b => b.classList.add('disabled'));

  // Mark selected
  btn.classList.add('selected');

  if (selectedIdx === correctIdx) {
    btn.classList.add('correct');
  } else {
    btn.classList.add('wrong');
    allOptions[correctIdx].classList.add('correct');
  }

  // Show answer automatically after selection (for quizmaster convenience)
  showAnswerBtn.click();

  // Mark question as answered IMMEDIATELY — prevents the same question
  // from reappearing if the user closes the overlay or spins again
  topicState[topicIndex].answered.add(qIndex);
}

// ====== SHOW ANSWER ======
showAnswerBtn.addEventListener('click', () => {
  const topicIdx = selectedTopicIndex;
  if (topicIdx < 0) return;
  const topic = quizData[topicIdx];
  const q = topic.questions[currentQuestionIndex];

  correctAnswer.textContent = q.options[q.correct];
  answerReveal.classList.add('show');
  showAnswerBtn.style.display = 'none';
  nextBtn.style.display = 'inline-block';
});

// Also trigger on Enter key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && quizOverlay.classList.contains('active')) {
    if (showAnswerBtn.style.display !== 'none') {
      showAnswerBtn.click();
    }
  }
});

// ====== NEXT QUESTION ======
nextBtn.addEventListener('click', () => {
  optionLocked = false;

  const topicIdx = selectedTopicIndex;
  const state = topicState[topicIdx];
  const topic = quizData[topicIdx];

  // Check if all questions done
  let nextQ = -1;
  for (let i = 0; i < topic.questions.length; i++) {
    if (!state.answered.has(i)) {
      nextQ = i;
      break;
    }
  }

  if (nextQ === -1) {
    // All answered
    state.completed = true;
    // Show completed message
    quizTopic.textContent = topic.topic;
    quizProgress.textContent = '';
    quizQuestion.style.display = 'none';
    optionsContainer.style.display = 'none';
    answerReveal.classList.remove('show');
    showAnswerBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    completedMsg.classList.add('show');
    spinBtn.disabled = false;
    return;
  }

  currentQuestionIndex = nextQ;
  showQuestion(topicIdx, currentQuestionIndex);
});

// ====== CLOSE QUIZ OVERLAY & MARK QUESTION AS SEEN ======
function closeQuizOverlay() {
  // If a question is currently displayed and the user didn't select an option,
  // mark it as "seen" so it won't repeat next time they spin to this topic.
  if (selectedTopicIndex >= 0 && !optionLocked) {
    topicState[selectedTopicIndex].answered.add(currentQuestionIndex);
  }
  quizOverlay.classList.remove('active');
  spinBtn.disabled = false;
  optionLocked = false;
}

// ====== SPIN AGAIN (from completed message) ======
spinAgainBtn.addEventListener('click', closeQuizOverlay);

// ====== CLICK OUTSIDE QUIZ TO CLOSE ======
quizOverlay.addEventListener('click', (e) => {
  if (e.target === quizOverlay) {
    closeQuizOverlay();
  }
});

// ====== KEYBOARD SHORTCUTS ======
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && quizOverlay.classList.contains('active')) {
    closeQuizOverlay();
  }
});

// ====== INIT ======
function init() {
  drawWheel();
}

// Draw when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

