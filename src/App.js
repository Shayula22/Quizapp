import React from 'react';
import { useState } from 'react';

function App() {

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);
  
  const [score, setScore] = useState(0);

  const handleAnswerClickEvent = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }

    if(isCorrect){
      setScore(score + 1);
    }
  }

  const handleRestartClickEvent = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }

  return (
    <div className="app">
        {showScore ? (
          <div className="scoreContent">
              <div className="score-section">You Scored {score} out of {questions.length}</div>
              <button onClick={handleRestartClickEvent} className="restartBtn">Restart</button>
          </div>
        ) : (
          <div className="content">
            <div className="questionSection">
              <h1>{currentQuestion + 1}/{questions.length} {questions[currentQuestion].questionText}</h1>
            </div>
            <div className="answerSection">
              {questions[currentQuestion].answerOptions.map(answerOption => (
                <button onClick={() => handleAnswerClickEvent(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </div>
        )}
    </div>
  )
}

export default App;
