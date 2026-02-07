import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-[#0a0a0a]/95 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-white/5'
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a
                    href="#home"
                    className="text-xl font-bold text-[#00d4ff] transition-colors hover:text-white"
                >
                    {PERSONAL_INFO.name}
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-400 transition-colors hover:text-[#00d4ff] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#00d4ff] after:transition-all hover:after:w-full"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`block h-0.5 rounded transition-all duration-300 bg-gray-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block h-0.5 rounded transition-all duration-300 bg-gray-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 rounded transition-all duration-300 bg-gray-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </nav>

            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/5 px-6 py-4 space-y-3">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-400 hover:text-[#00d4ff] font-medium py-2 transition-colors"
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
