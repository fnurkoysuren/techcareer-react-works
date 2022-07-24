import { Button, Stack } from '@mui/material';
import React, { useRef, useState } from 'react'

function QuizAppSample() {

    const questions = [
        {
            questionText: 'What is the capital of Turkey?',
            answerOptions: [
                { answerText: 'Istanbul', isCorrect: false },
                { answerText: 'Adana', isCorrect: false },
                { answerText: 'Ankara', isCorrect: true },
                { answerText: 'Bursa', isCorrect: false },
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
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const buttonRef = useRef('')

    const checkAnswer = (isCorrect) => {

        if (isCorrect) {
            setScore(score + 1);
        }
        
        if (currentQuestion + 1 === questions.length) {
            setShowScore(true)
        }
        else {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    return (<>
        {
            !showScore ? <div>
                <h2>
                    Question: <span>{currentQuestion + 1}</span> / {questions.length}
                </h2>

                <h3>{questions[currentQuestion].questionText}</h3>

                <Stack spacing={2} direction="column" width={500}>
                {
                    questions[currentQuestion].answerOptions.map((item, key) => {
                        return <Button variant="outlined" ref={buttonRef} key={key} onClick={() => checkAnswer(item.isCorrect)}>{item.answerText}</Button>
                    })
                }
                </Stack>

            </div>
                : <div>Score: {score} / {questions.length}</div>
        }
    </>
    )
}

export default QuizAppSample