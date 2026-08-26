import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Results() {
    const location = useLocation();
    const navigate = useNavigate();

    const { score, total, time } = location.state || {
        score: 8,
        total: 10,
        time: "2:34",
    };

    const percentage = total
        ? Math.round((score / total) * 100)
        : 0;

    const incorrect = total - score;

    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-50 px-6 py-10">

                <div className="max-w-4xl mx-auto">

                    {/* Heading */}
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Quiz Complete 🎉
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            Great job! You really know your stuff!
                        </p>
                    </div>


                    {/* Result Card */}
                    <div className="mt-6 bg-white rounded-2xl shadow-sm px-8 py-7">

                        <div className="flex items-center justify-between">

                            {/* Score Circle */}
                            <div
                                className="w-48 h-48 rounded-full flex items-center justify-center"
                                style={{
                                    background: `conic-gradient(
                                        #7C3AED ${percentage * 3.6}deg,
                                        #E5E7EB ${percentage * 3.6}deg
                                    )`
                                }}
                            >
                                <div className="w-[76px] h-[76px] rounded-full bg-white flex flex-col items-center justify-center">
                                    <span className="text-xl font-bold text-gray-900">
                                        {score}/{total}
                                    </span>

                                    <span className="text-[10px] text-gray-500">
                                        {percentage}%
                                    </span>
                                </div>
                            </div>


                            {/* Correct */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[15px] uppercase tracking-wide text-gray-500">
                                    Correct
                                </span>

                                <span className="text-lg font-bold text-green-500">
                                    {score}
                                </span>
                            </div>


                            {/* Incorrect */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[15px] uppercase tracking-wide text-gray-500">
                                    Incorrect
                                </span>

                                <span className="text-lg font-bold text-red-500">
                                    {incorrect}
                                </span>
                            </div>


                            {/* Time */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[15px] uppercase tracking-wide text-gray-500">
                                    Time Taken
                                </span>

                                <span className="text-lg font-bold text-gray-900">
                                    {time}
                                </span>
                            </div>

                        </div>

                    </div>


                    {/* Buttons */}
                    <div className="flex justify-center gap-3 mt-6">

                        <button
                            onClick={() => navigate("/quiz-setup")}
                            className="px-6 py-2.5 rounded-2xl! bg-[#7C3AED] text-white text-xs font-semibold
                            hover:bg-[#6D28D9] transition"
                        >
                            Play Again
                        </button>

                        <button
                            onClick={() => navigate("/quiz-setup")}
                            className="px-6 py-2.5 rounded-2xl! bg-[#F5F3FF] text-[#7C3AED] text-xs font-semibold
                            hover:bg-purple-100 transition"
                        >
                            Try Another Category
                        </button>

                        <button
                            onClick={() => navigate("/leaderboard")}
                            className="px-6 py-2.5 rounded-2xl! bg-white text-gray-600 text-xs font-semibold
                            border border-gray-100 hover:bg-gray-50 transition"
                        >
                            View Leaderboard
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
}