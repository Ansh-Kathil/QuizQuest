import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";


export default function Quiz() {
    const navigate = useNavigate();
    const location = useLocation();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(0);
    const [answered, setAnswered] = useState(false);

    const seconds = Math.round(time % 60);
    const minutes = Math.floor(time / 60);
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    const {
    category,
    difficulty,
    questions: questionCount,
    type,
    username
} = location.state || {
    category: "General Knowledge",
    difficulty: "medium",
    questions: 10,
    type: "Multiple Choice",
    username: "Guest"
};

    const questionType = type === "Multiple Choice"
        ? "multiple"
        : "boolean";

    const categoryIds = {
        "General Knowledge": 9,
        "Science": 17,
        "History": 23,
        "Geography": 22,
        "Sports": 21,
        "Entertainment": 11,
        "Technology": 18
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevtime) => prevtime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);


  const handleNext = () => {
    const isCorrect = selectedAnswer === question.answer;
    const newScore = isCorrect ? score + 1 : score;

    if (currentQuestion === questions.length - 1) {

        const result = {
            username,
            score: newScore,
            total: questions.length,
            time: formattedTime,
            category,
            difficulty,
            type,
            date: new Date().toLocaleDateString()
        };

        const previousResults =
            JSON.parse(localStorage.getItem("quizResults")) || [];

        previousResults.push(result);

        localStorage.setItem(
            "quizResults",
            JSON.stringify(previousResults)
        );

        navigate("/results", {
            state: {
                username,
                score: newScore,
                total: questions.length,
                time: formattedTime,
                category,
                difficulty,
                type
            }
        });

        return;
    }

    setScore(newScore);
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setAnswered(false);
};


    const decodeHTML = (text) => {
        const textarea = document.createElement("textarea");
        textarea.innerHTML = text;
        return textarea.value;
    };


    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                setLoading(true);
                setError(null);

                const url = `https://opentdb.com/api.php?amount=${questionCount}&category=${categoryIds[category]}&difficulty=${difficulty}&type=${questionType}`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch questions");
                }

                const data = await response.json();

                console.log(data);

                if (data.response_code !== 0) {
                    throw new Error("No questions available");
                }

                const formattedQuestions = data.results.map((item) => ({
                    question: decodeHTML(item.question),
                    options: [
                        decodeHTML(item.correct_answer),
                        ...item.incorrect_answers.map(decodeHTML)
                    ].sort(() => Math.random() - 0.5),
                    answer: decodeHTML(item.correct_answer)
                }));

                setQuestions(formattedQuestions);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [category, difficulty, questionCount, questionType]);


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-semibold">
                    Loading questions...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-xl font-semibold text-red-500">
                    {error}
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 rounded-xl bg-[#7C3AED] text-white font-semibold"
                >
                    Try Again
                </button>
            </div>
        );
    }
    if (!questions.length) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-semibold">
                    No questions available.
                </p>
            </div>
        );
    }

    const question = questions[currentQuestion];


    return (
        <div>


            <div className="min-h-screen bg-gray-50 px-6 py-14">

                <div className="max-w-4xl mx-auto">

                    {/* Top information */}
                    <div className="flex justify-between items-center mb-8">

                        <p className="font-semibold text-gray-600">
                            Question {currentQuestion + 1} of {questions.length}
                        </p>
                        <div className="flex items-center gap-6">
                            <p className="font-bold text-gray-600">
                                Time: {formattedTime}
                            </p>
                            <p className="font-bold text-[#7C3AED]">
                                Score: {score}
                            </p>
                        </div>

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
                                onClick={() => {
                                    if (!answered) {
                                        setSelectedAnswer(option);
                                        setAnswered(true);
                                    }
                                }}
                                className={`text-left p-6 rounded-2xl! border-2 bg-white transition
                                        ${selectedAnswer === option
                                        ? option === question.answer
                                            ? "border-green-500 bg-green-50"
                                            : "border-red-500 bg-red-50"
                                        : answered && option === question.answer
                                            ? "border-green-500 bg-green-50"
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


                    <div
                        className={` ${answered ? "" : "invisible"}  mt-6 p-4 rounded-xl font-semibold ${selectedAnswer === question.answer
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                            }`}
                    >
                        {selectedAnswer === question.answer
                            ? "✓ Correct!"
                            : `✗ Incorrect — Correct answer: ${question.answer}`}
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
                            {currentQuestion === questions.length - 1
                                ? "Finish Quiz ✓"
                                : "Next →"}
                        </button>

                    </div>



                </div>

            </div>
        </div>
    );
}