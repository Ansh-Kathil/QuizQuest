import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function QuizSetup() {
    const [difficulty, setDifficulty] = useState("medium");
    const [questions, setQuestions] = useState(10);
    const [category, setCategory] = useState("General Knowledge");
    const [type, settype] = useState("Multiple Choice");
    const navigate = useNavigate()



    return (
        <div className="min-h-screen bg-gray-50 px-6 py-14">

            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold">
                        Set Up Your{" "}
                        <span className="text-[#7C3AED]">Quiz</span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                        Customize your challenge before you begin
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl p-10">

                    {/* Category */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            Category
                        </h2>

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-5 py-4
                            bg-white text-gray-700 font-medium outline-none
                            focus:border-[#7C3AED]"
                        >
                            <option>General Knowledge</option>
                            <option>Science</option>
                            <option>History</option>
                            <option>Geography</option>
                            <option>Sports</option>
                            <option>Entertainment</option>
                            <option>Technology</option>
                        </select>
                    </div>

                    {/* Difficulty */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">
                            Difficulty
                        </h2>

                        <div className="grid grid-cols-3 gap-5">

                            {["easy", "medium", "hard"].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setDifficulty(level)}
                                    className={` font-semibold text-lg! border-2 px-8  py-2 rounded-2xl!    capitalize transition ${difficulty === level
                                        ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                                        : "bg-white border-gray-200 text-gray-700 hover:border-[#7C3AED] hover:text-[#7C3AED]"
                                        }`}
                                >
                                    {level}
                                </button>
                            ))}

                        </div>
                    </div>

                    {/* Number of Questions */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">
                            Number of Questions
                        </h2>

                        <div className="grid grid-cols-4 gap-5">

                            {[5, 10, 15, 20].map((number) => (
                                <button
                                    key={number}
                                    onClick={() => setQuestions(number)}
                                    className={`font-semibold text-lg! border-2 px-8  py-2 rounded-2xl!  transition ${questions === number
                                        ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                                        : "bg-white border-gray-200 text-gray-700 hover:border-[#7C3AED] hover:text-[#7C3AED]"
                                        }`}
                                >
                                    {number}
                                </button>
                            ))}

                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">
                            Question Type
                        </h2>
                        <div className="grid grid-cols-2 gap-5">

                            {["Multiple Choice", "True/false"].map((number) => (
                                <button
                                    key={number}
                                    onClick={() => settype(number)}
                                    className={`font-semibold text-lg! border-2 px-8  py-2 rounded-2xl!  transition ${type === number
                                        ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                                        : "bg-white border-gray-200 text-gray-700 hover:border-[#7C3AED] hover:text-[#7C3AED]"
                                        }`}
                                >
                                    {number}
                                </button>
                            ))}

                        </div>
                    </div>

                    {/* Start */}
                    <div className="mt-10 w-full font-semibold text-lg! ">

                        <button onClick={() => {
                            navigate("/quiz", {
                                state: {
                                    category,
                                    difficulty,
                                    questions
                                }
                            })
                        }}
                            className="mt-12 block text-center border rounded-2xl! no-underline! w-full! py-4 
                        bg-[#7C3AED] text-white text-lg font-bold
                        hover:bg-[#6D28D9] transition"
                        >
                            Start Quiz →
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}