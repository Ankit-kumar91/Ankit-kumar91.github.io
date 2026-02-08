import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, PERSONAL_INFO } from '../constants';
import { useTheme } from '../ThemeContext';
import { SunIcon, MoonIcon } from './icons/Icons';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? isDark
                        ? 'bg-[#0a0a0a]/95 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-white/5'
                        : 'bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5 border-b border-gray-200'
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a
                    href="#home"
                    className={`text-xl font-bold text-[#00d4ff] transition-colors ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}
                >
                    {PERSONAL_INFO.name}
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors hover:text-[#00d4ff] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#00d4ff] after:transition-all hover:after:w-full ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-lg transition-all ${isDark ? 'text-gray-400 hover:text-yellow-400 hover:bg-white/5' : 'text-gray-500 hover:text-amber-500 hover:bg-gray-100'}`}
                        aria-label="Toggle theme"
                    >
                        {isDark ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-lg transition-all ${isDark ? 'text-gray-400 hover:text-yellow-400 hover:bg-white/5' : 'text-gray-500 hover:text-amber-500 hover:bg-gray-100'}`}
                        aria-label="Toggle theme"
                    >
                        {isDark ? <SunIcon /> : <MoonIcon />}
                    </button>
                    <button
                        className="p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 flex flex-col gap-1.5">
                            <span className={`block h-0.5 rounded transition-all duration-300 ${isDark ? 'bg-gray-300' : 'bg-gray-600'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 rounded transition-all duration-300 ${isDark ? 'bg-gray-300' : 'bg-gray-600'} ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 rounded transition-all duration-300 ${isDark ? 'bg-gray-300' : 'bg-gray-600'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className={`backdrop-blur-lg px-6 py-4 space-y-3 ${isDark ? 'bg-[#0a0a0a]/95 border-t border-white/5' : 'bg-white/95 border-t border-gray-200'}`}>
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block hover:text-[#00d4ff] font-medium py-2 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
