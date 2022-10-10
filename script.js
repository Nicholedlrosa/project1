
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


// ++++++++++++++++++++++++
const questions = [
  {
    question: 'A rhinoceros\'s horn is made out of:',
    answers: [
      { text:'bone', correct: false },
      { text: 'compacted hair', correct: true },
      { text: 'cartiledge', correct: false },
      { text: 'It\'s still unknown', correct: false }
    ]
  },
  {
    question: 'All of the following birds can fly except this bird:',
    answers: [
      { text: 'chicken', correct: false },
      { text: 'kiwi', correct: true },
      { text: 'owls', correct: false },
      { text: 'condor', correct: false }
    ]
  },
  {
    question: 'What is 12 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '24', correct: true },
      { text: '30', correct: false },
      { text: '25', correct: false }
    ]
  },


  {
    question: 'What were the first hockey pucks made out of?',
    answers: [
      { text: 'plastic', correct: false },
      { text: 'ice', correct: false },
      { text: 'cow dung', correct: true },
      { text: 'cement', correct: false }
    ]
  },

  {
    question: 'Where was fried chicken invented?',
    answers: [
      { text: 'Scotland', correct: true },
      { text: 'The U.S.', correct: false },
      { text: 'Amsterdam', correct: false },
      { text: 'It\'s unknown', correct: false }
    ]
  },

  {
    question: 'Where was the first fortune cookie invented?',
    answers: [
      { text: 'New York City', correct: false },
      { text: 'Atlanta', correct: false },
      { text: 'Emmet', correct: false},
      { text: 'San Francisco', correct: true }
    ]
  },

  {
    question: 'How many miles long is New Zealand\'s Ninety Mile Beach?',
    answers: [
      { text: '40', correct: false },
      { text: '55', correct: true },
      { text: '90', correct: false },
      { text: '85', correct: false }
    ]
  },

  {
    question: 'What is it called when a question mark is immediately followed by an exclamation mark(?!)?',
    answers: [
      { text: 'An interrobang', correct: true },
      { text: 'A typo', correct: false },
      { text: 'An exclamation-question mark', correct: false },
      { text: 'confused question', correct: false }
    ]
  },

  {
    question: 'Which animals urine glows in the dark?',
    answers: [
      { text: 'dog', correct: false },
      { text: 'ferret', correct: false },
      { text: 'Cat', correct: true },
      { text: 'kangaroo', correct: false }
    ]
  },

  {
    question: 'What estimated amount of pounds does the average person lose a year?',
    answers: [
      { text: '250 lbs', correct: false },
      { text: '100lbs', correct: false },
      { text: '30 lbs', correct: false },
      { text: '628 lbs', correct: true }
    ]
  }

]

// ++++++++++++++++++++++++++++