import { useState } from 'react'
import './App.css';
import './index.css'

import questions from './data'

function App() {

  console.log(questions[0].answerOptions)

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [showScore, setShowScore] = useState(false)

  const [score, setScore] = useState(0)


  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {

      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }


  return (
    <div className="App">

      {showScore ? (
        <div className="score-section">

          Você Acertou {score}  de {questions.length} Parabéns 
          

        </div>
      ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Pergunta {currentQuestion + 1} </span>
              </div>
              <div className="question-text"> {questions[currentQuestion].questionText}</div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
              ))}
            </div>
          </>

        )}
    </div>
  );
}

export default App;
