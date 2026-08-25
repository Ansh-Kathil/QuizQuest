import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris",
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7",
    },
];

export default function Quiz() {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const question = questions[currentQuestion];
    const handleNext = () => {
        if (selectedAnswer === question.answer) {
            setScore(score + 1);
        }
        if (currentQuestion === questions.length - 1) {
            navigate("/results", {
                state: {
                    score: score,
                    total: questions.length
                }
            });
            setSelectedAnswer(null);
            return;
        }

        setCurrentQuestion(currentQuestion + 1);
    };



    return (
        <div>
            <Header/>
        
        <div className="min-h-screen bg-gray-50 px-6 py-14">

            <div className="max-w-4xl mx-auto">

                {/* Top information */}
                <div className="flex justify-between items-center mb-8">

                    <p className="font-semibold text-gray-600">
                        Question {currentQuestion + 1} of {questions.length}
                    </p>

                    <p className="font-bold text-[#7C3AED]">
                        Score: {score}
                    </p>

                </div>


                {/* Progress */}
                <div className="w-full h-2 bg-gray-200 rounded-full mb-12">
                    <div
                        className="h-2 bg-[#7C3AED] rounded-full"
                        style={{
                            width: `${((currentQuestion + 1) / questions.length) * 100}%`
                        }}
                    />
                </div>


                {/* Question */}
                <div className="text-center">


                    <h1 className="text-4xl font-bold leading-tight">
                        {question.question}
                    </h1>

                </div>


                {/* Answers */}
                <div className="grid grid-cols-2 gap-5 mt-12">

                    {question.options.map((option, index) => (

                        <button
                            key={option}
                            onClick={() => setSelectedAnswer(option)}
                            className={`text-left p-6 rounded-2xl! border-2 bg-white transition ${selectedAnswer === option
                                ? "border-[#7C3AED] bg-purple-50"
                                : "border-gray-200 hover:border-[#7C3AED]"
                                }`}
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className={`w-10 h-10 rounded-xl! flex items-center justify-center font-bold ${selectedAnswer === option
                                        ? "bg-[#7C3AED] text-white"
                                        : "bg-gray-100 text-gray-600"
                                        }`}
                                >
                                    {String.fromCharCode(65 + index)}
                                </div>

                                <span className="font-semibold text-lg">
                                    {option}
                                </span>

                            </div>

                        </button>

                    ))}

                </div>


                {/* Next */}

                <div className="flex justify-end mt-10">

                   

                    <button
                        disabled={!selectedAnswer}
                        onClick={handleNext}
                        className="font-semibold text-lg! border-2 px-8 py-3 rounded-2xl! bg-[#7C3AED]! text-white! border-[#7C3AED]! no-underline! 
                        disabled:opacity-40 disabled:cursor-not-allowed
                        hover:bg-[#6D28D9] transition"
                    >
                        Next →
                    </button>

                </div>



            </div>

        </div>
        </div>
    );
}