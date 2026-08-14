import React from 'react'

export default function Header() {
    return (
        <header className='bg-gray-50'>
            <nav className=" flex items-center justify-between  px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className='p-2 px-3 gap-3  bg-[#7C3AED] text-white font-extrabold rounded-xl'>Q</div>
                    <a href="#" className="text-black! no-underline! font-bold text-xl" style={{ color: "black", textDecoration: "none" }}>Quiz<span className="text-[#7C3AED]">Quest</span></a>
                    <div className=" absolute  left-1/2 -translate-x-1/2 ">
                        <ul   className=" flex  text-lg font-semibold items-center gap-10 list-none flex-row m-0 p-0">
                            <li className="">
                                <a className=" text-[#7C3AED]!  text-lg no-underline!"  href="#">Home</a>
                            </li>
                            <li className="">
                                <a className="text-black! no-underline!" href="#">Leaderboard</a>
                            </li>
                             <li className="">
                                <a className="text-black! no-underline!" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                   <button className="absolute font-semibold right-8 border-2 px-4 py-2 rounded-full! text-[#7C3AED]! border-[#7C3AED]!">Sign in</button>
                </div>
            </nav>
            <hr />
        </header>
    )
}



