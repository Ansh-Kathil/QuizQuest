import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Leaderboard() {
    const [results, setResults] = useState([]);

    const currentUsername = localStorage.getItem("username");

    useEffect(() => {
        const savedResults =
            JSON.parse(localStorage.getItem("quizResults")) || [];

        setResults(savedResults);
    }, []);

    const leaderboard = results
        .map((result, index) => ({
            ...result,
            id: index,
            username: result.username || "Guest",
            accuracy: Math.round((result.score / result.total) * 100)
        }))
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }

            return b.accuracy - a.accuracy;
        });

    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-50 px-6 py-12">
                <div className="max-w-4xl mx-auto">

                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Leaderboard
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            See how you match up against the smartest minds
                            in the community.
                        </p>
                    </div>

                    <div className="mt-8 bg-white rounded-2xl shadow-sm overflow-hidden">

                        <div className="grid grid-cols-[80px_1fr_120px_100px] px-6 py-4 bg-gray-50 border-b text-xs font-bold text-gray-500">
                            <span>Rank</span>
                            <span>Username</span>
                            <span className="text-right">Score</span>
                            <span className="text-right">Accuracy</span>
                        </div>

                        {leaderboard.length === 0 ? (
                            <div className="py-16 text-center">
                                <p className="text-gray-500">
                                    No quiz results yet.
                                </p>

                                <p className="mt-2 text-sm text-gray-400">
                                    Complete a quiz to appear on the leaderboard.
                                </p>
                            </div>
                        ) : (
                            leaderboard.map((result, index) => (
                                <div
                                    key={result.id}
                                    className={`grid grid-cols-[80px_1fr_120px_100px] items-center px-6 py-4 border-b last:border-b-0 ${
                                        index === 0
                                            ? "bg-purple-50"
                                            : "bg-white"
                                    }`}
                                >

                                    {/* Rank */}
                                    <div>
                                        {index < 3 ? (
                                            <div
                                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                                                    index === 0
                                                        ? "bg-orange-400"
                                                        : index === 1
                                                        ? "bg-gray-400"
                                                        : "bg-orange-600"
                                                }`}
                                            >
                                                {index + 1}
                                            </div>
                                        ) : (
                                            <span className="text-sm font-semibold text-gray-600">
                                                #{index + 1}
                                            </span>
                                        )}
                                    </div>

                                    {/* Username */}
                                    <div className="flex items-center gap-3">

                                        <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-sm font-bold">
                                            {result.username
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>

                                        <span className="text-sm font-semibold text-gray-800">
                                            {result.username}
                                        </span>

                                        {result.username === currentUsername && (
                                            <span className="px-2 py-0.5 rounded bg-[#7C3AED] text-white text-[9px] font-bold">
                                                YOU
                                            </span>
                                        )}

                                    </div>

                                    {/* Score */}
                                    <div className="text-right text-sm font-semibold text-gray-800">
                                        {result.score * 1000}
                                    </div>

                                    {/* Accuracy */}
                                    <div className="text-right text-sm font-semibold text-green-500">
                                        {result.accuracy}%
                                    </div>

                                </div>
                            ))
                        )}

                    </div>
                </div>
            </div>
        </>
    );
}