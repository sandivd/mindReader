import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [chaosMode, setChaosMode] = useState(false);

    // Dark Mode Logic
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Custom Cursor Logic
    useEffect(() => {
        const cursor = document.getElementById('cursor');
        const hoverElements = document.querySelectorAll('a, button, input, select, textarea, summary, .draggable');

        const moveCursor = (e: MouseEvent) => {
            if (cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        };

        const addHover = () => cursor?.classList.add('hovered');
        const removeHover = () => cursor?.classList.remove('hovered');

        document.addEventListener('mousemove', moveCursor);
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            hoverElements.forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, []);

    // Chaos Mode Logic
    useEffect(() => {
        let chaosInterval: NodeJS.Timeout;
        const colors = ['#FFE600', '#FF0099', '#00FFFF', '#9D4EDD', '#00FF66', '#FF5500', '#ffffff'];

        if (chaosMode) {
            chaosInterval = setInterval(() => {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                document.documentElement.style.setProperty('--tw-ring-color', randomColor);

                const cards = document.querySelectorAll('.brutal-card, .draggable');
                const randomCard = cards[Math.floor(Math.random() * cards.length)] as HTMLElement;
                if (randomCard) {
                    randomCard.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
                    setTimeout(() => randomCard.style.transform = '', 200);
                }
            }, 500);
        }

        return () => clearInterval(chaosInterval);
    }, [chaosMode]);

    return (
        <div className="min-h-screen bg-neo-bg text-neo-text font-body relative transition-colors duration-300">
            {/* Custom Cursor */}
            <div id="cursor"></div>

            {/* Grain Overlay */}
            <div className="grain"></div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 p-4 pointer-events-none">
                <div className="max-w-7xl mx-auto flex justify-between items-start">
                    {/* Logo */}
                    <Link to="/" className="pointer-events-auto bg-neo-bg border-3 border-neo-text p-2 shadow-hard hover:translate-y-1 hover:shadow-none-active transition-all group">
                        <span className="font-display font-black text-2xl tracking-tighter group-hover:text-neo-pink transition-colors">MIND READER.</span>
                    </Link>

                    {/* Menu */}
                    <div className="pointer-events-auto flex flex-col gap-2 items-end">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className="bg-neo-white text-neo-black border-3 border-neo-black p-2 shadow-hard hover:translate-y-1 hover:shadow-none-active transition-all"
                            >
                                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="bg-neo-yellow text-neo-black border-3 border-neo-black px-6 py-2 font-bold text-lg shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none-active transition-all flex items-center gap-2 group"
                            >
                                <span>MENU</span>
                                <Menu className="w-5 h-5 group-hover:rotate-180 transition-transform" />
                            </button>
                        </div>

                        {/* Chaos Mode Toggle */}
                        <button
                            onClick={() => setChaosMode(!chaosMode)}
                            className={`border-3 border-neo-black px-4 py-1 font-bold text-sm shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none-active transition-all ${chaosMode ? 'bg-neo-green text-black' : 'bg-neo-black text-white hover:bg-neo-pink hover:text-black'}`}
                        >
                            CHAOS MODE: {chaosMode ? 'ON' : 'OFF'}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-neo-purple z-40 transform transition-transform duration-300 border-l-5 border-neo-black flex items-center justify-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col gap-6 text-center">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-display text-6xl font-black text-white hover:text-neo-yellow text-stroke hover:text-stroke-none transition-all">HOME</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)} className="font-display text-6xl font-black text-white hover:text-neo-yellow text-stroke hover:text-stroke-none transition-all">ABOUT</Link>
                    <button onClick={() => setIsMenuOpen(false)} className="mt-8 bg-white border-3 border-neo-black p-4 shadow-hard hover:shadow-none-active hover:translate-y-1 mx-auto">
                        <X className="w-8 h-8 text-black" />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <main className="pt-16 pb-20 px-4 min-h-screen flex flex-col items-center justify-start relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none"></div>
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-neo-black text-white pt-10 pb-10 px-4 border-t-5 border-neo-green relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="font-display font-black text-3xl mb-2">MIND READER.</h2>
                        <p className="font-mono text-gray-400">© 2025 NO PRIVACY INC.</p>
                    </div>
                    <div className="text-center font-mono text-xs text-gray-600">
                        READING MINDS SINCE YESTERDAY.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
