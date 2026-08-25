import React from 'react'
import { Link } from "react-router-dom";
export const Landing = () => {
    return (
        <div className='flex flex-col gap-8 m-8'>
            <div className='flex p-3 items-center gap-8'>
                <div className=' m-10 flex flex-col gap-3  '>
                    <p className='font-bold text-8xl'>
                        How much do you <span className='text-[#7C3AED]!'>really</span> know?
                    </p>
                    <p className='text-xl font-serif'>
                        Challenge yourself with thousands of mind-bending trivia questions across science, history, pop culture, geography, and more. Play solo or climb the global leaderboard!
                    </p>
                    <div className='flex gap-4 '>
                        <Link
    to="/quiz-setup" className="  font-semibold text-lg! border-2 px-8 w-fit py-2 rounded-2xl! bg-[#7C3AED]! text-white! border-[#7C3AED]! no-underline!">Start Game</Link>
                        <button className="  font-semibold text-lg! border-2 px-8 w-fit py-2 rounded-2xl! bg-white!  border-[#7C3AED]!">Leaderboard</button>
                    </div>

                </div>
                <div>
                    <img className='w-100 p-3 m-4' src="/front.png" alt="" />
                </div>
            </div>
            <div className='flex flex-col w-full items-center gap-7'>
                <div className='font-bold text-3xl'>Designed for Trivia Lover</div>
                <div className='flex gap-8 w-4/6 m-2'>
                    <div className='w-2/3 rounded-2xl border m-2 p-4'>
                        <div className='mt-3 m-2  '>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="12" fill="#F5F3FF" />
                                <path d="M15 21H33M15 27H33M21 15V33M27 15V33M17 15H31C32.1046 15 33 15.8954 33 17V31C33 32.1046 32.1046 33 31 33H17C15.8954 33 15 32.1046 15 31V17C15 15.8954 15.8954 15 17 15Z" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                        <p className='font-bold'>Multiple Categories</p>
                        <p>From Science and History to Tech and Sports. Choose your favorite topics or randomize for an ultimate brain challenge.</p>

                    </div>
                    <div className='w-2/3 rounded-2xl border m-2 p-4'>
                        <div className='mt-3 m-2  '>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="12" fill="#EFF6FF" />
                                <path d="M15.4659 25.8471C15.6261 25.9477 15.8116 26.0008 16.0009 26.0001H23.0001C23.1618 25.9996 23.3213 26.0383 23.4647 26.113C23.6082 26.1876 23.7315 26.296 23.8239 26.4287C23.9163 26.5615 23.9752 26.7147 23.9954 26.8752C24.0156 27.0357 23.9966 27.1987 23.94 27.3502L22.0202 33.3706C21.9901 33.4799 21.9981 33.5963 22.0428 33.7005C22.0876 33.8047 22.1664 33.8906 22.2664 33.9441C22.3664 33.9976 22.4816 34.0155 22.5931 33.9949C22.7046 33.9743 22.8058 33.9163 22.8801 33.8306L32.779 23.63C32.8982 23.483 32.9732 23.3053 32.9954 23.1173C33.0177 22.9294 32.9861 22.739 32.9044 22.5683C32.8227 22.3976 32.6943 22.2535 32.534 22.1529C32.3738 22.0523 32.1883 21.9993 31.9991 21.9999H24.9998C24.8381 22.0004 24.6787 21.9617 24.5352 21.8871C24.3917 21.8124 24.2684 21.7041 24.176 21.5713C24.0836 21.4386 24.0248 21.2854 24.0045 21.1249C23.9843 20.9644 24.0033 20.8014 24.06 20.6498L25.9797 14.6295C26.0098 14.5201 26.0018 14.4038 25.9571 14.2996C25.9123 14.1953 25.8335 14.1094 25.7335 14.0559C25.6335 14.0024 25.5183 13.9845 25.4068 14.0052C25.2953 14.0258 25.1941 14.0837 25.1198 14.1694L15.2209 24.37C15.1017 24.517 15.0267 24.6948 15.0045 24.8827C14.9823 25.0707 15.0138 25.2611 15.0955 25.4318C15.1772 25.6025 15.3056 25.7465 15.4659 25.8471Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" />
                            </svg>

                        </div>
                        <p className='font-bold'>Different Difficulty Levels</p>
                        <p>Select Easy, Medium, or Hard based on your expertise. Perfect for beginners testing the waters or masters seeking glory.</p>

                    </div>
                    <div className='w-2/3 rounded-2xl border m-2 p-4'>
                        <div className='mt-3 m-2  '>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="12" fill="#F5F3FF" />
                                <path d="M34.0009 24.9998V19.0008H28.0004M34.0009 19.0008L25.5002 27.4994L20.4998 22.5002L13.9993 28.9992" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" />
                            </svg>

                        </div>
                        <p className='font-bold'>Track Your Score</p>
                        <p>See instant progress, analyze detailed accuracy summaries of your correct and incorrect answers, and track leaderboard placement.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}
