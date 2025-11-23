import React from 'react';

export default function About() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 space-y-12">
            {/* Header Section */}
            <div className="bg-neo-yellow border-3 border-neo-text p-8 shadow-hard-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 brutal-card">
                <h1 className="font-display font-black text-5xl md:text-7xl mb-4 leading-none">
                    WHAT IS THIS?
                </h1>
                <p className="font-bold text-xl md:text-2xl">
                    IT'S NOT MAGIC. IT'S <span className="bg-neo-black text-white px-2">ALGORITHM.</span>
                </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-neo-bg border-3 border-neo-text p-6 shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none-active transition-all group">
                    <h2 className="font-display font-black text-3xl mb-4 bg-neo-pink inline-block border-3 border-neo-text p-2 transform group-hover:rotate-2 transition-transform">
                        THE TECH
                    </h2>
                    <p className="font-mono font-bold text-lg leading-relaxed">
                        Using advanced <span className="line-through decoration-4 decoration-neo-red">quantum computing</span> simple math, we predict the number you're thinking of with 100% accuracy*
                    </p>
                    <p className="mt-4 text-xs font-mono text-gray-500">*Accuracy may vary based on user's ability to follow instructions.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-neo-white text-neo-black border-3 border-neo-text p-6 shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none-active transition-all group">
                    <h2 className="font-display font-black text-3xl mb-4 bg-neo-green inline-block border-3 border-neo-text p-2 transform group-hover:-rotate-2 transition-transform">
                        PRIVACY?
                    </h2>
                    <p className="font-mono font-bold text-lg leading-relaxed">
                        We definitely <span className="bg-neo-black text-white px-1">DO NOT</span> store your thoughts in our database.
                        <br /><br />
                        (We don't have a database properly configured yet).
                    </p>
                </div>
            </div>

            {/* Credits */}
            <div className="bg-neo-purple border-3 border-neo-text p-8 text-white text-center shadow-hard transform rotate-1 hover:rotate-0 transition-transform duration-300 brutal-card">
                <h3 className="font-display font-black text-4xl mb-4">CREATED BY</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/sandivd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black border-3 border-black px-4 py-2 font-bold shadow-hard hover:shadow-none-active hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer inline-block"
                    >
                        SANDIV
                    </a>
                    <span className="bg-neo-yellow text-black border-3 border-black px-4 py-2 font-bold shadow-hard hover:shadow-none-active hover:translate-x-1 hover:translate-y-1 transition-all cursor-none">
                        GOOGLE ANTIGRAVITY
                    </span>
                </div>
            </div>
        </div>
    );
}
