import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon, ScholarIcon, ChevronDownIcon } from './icons/Icons';
import { useTheme } from '../ThemeContext';

const ROLES = ['Data Scientist', 'Chemist', 'Researcher', , 'AI Enthusiast'];

const Hero: React.FC = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        } else {
            const delta = isDeleting ? 50 : 100;
            timeout = setTimeout(() => {
                setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
            }, delta);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="home" className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-300`}>
            <div className={`absolute inset-0 ${isDark ? 'bg-[#0a0a0a]' : 'bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]'}`}></div>

            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute -top-40 -left-40 w-96 h-96 ${isDark ? 'bg-[#00d4ff]/10' : 'bg-[#00d4ff]/5'} rounded-full blur-3xl animate-float-1`}></div>
                <div className={`absolute top-1/3 -right-20 w-[500px] h-[500px] ${isDark ? 'bg-[#0097a7]/10' : 'bg-[#0097a7]/5'} rounded-full blur-3xl animate-float-2`}></div>
                <div className={`absolute -bottom-20 left-1/3 w-80 h-80 ${isDark ? 'bg-[#00d4ff]/5' : 'bg-[#00d4ff]/3'} rounded-full blur-3xl animate-float-3`}></div>
            </div>

            <div className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.04]'}`}
                 style={{
                     backgroundImage: `radial-gradient(circle, ${isDark ? '#00d4ff' : '#0097a7'} 1px, transparent 1px)`,
                     backgroundSize: '40px 40px'
                 }}
            ></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
                    {/* Left: Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <div className={`inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 mb-6 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/60 border border-gray-200 shadow-sm'}`}>
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            <span className={`text-sm font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Available for opportunities</span>
                        </div>

                        <p className={`text-lg mb-2 font-light tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Hello, I'm</p>

                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {PERSONAL_INFO.name}
                        </h1>

                        <div className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 min-h-[2.5rem]">
                            <span className="text-[#00d4ff]">{text}</span>
                            <span className="typing-cursor"></span>
                        </div>

                        <p className={`text-base md:text-lg max-w-xl mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            A Data Scientist by passion and a Chemist by profession, holding a Ph.D. in Chemistry. I work at the intersection of chemistry and machine learning, applying AI to solve practical scientific and industrial problems.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                            <a
                                href="#projects"
                                className="px-8 py-3.5 bg-[#00d4ff] hover:bg-[#00bcd4] text-[#0a0a0a] font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-[#00d4ff]/25 hover:-translate-y-0.5"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className={`px-8 py-3.5 font-semibold rounded-xl backdrop-blur-sm transition-all hover:-translate-y-0.5 ${isDark ? 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#00d4ff]/30' : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 hover:border-[#00d4ff]/30 shadow-sm'}`}
                            >
                                Get in Touch
                            </a>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer"
                               className={`transition-colors p-2.5 rounded-lg hover:text-[#00d4ff] ${isDark ? 'text-gray-500 hover:bg-white/5' : 'text-gray-400 hover:bg-gray-100'}`}
                               aria-label="GitHub">
                                <GitHubIcon />
                            </a>
                            <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer"
                               className={`transition-colors p-2.5 rounded-lg hover:text-[#00d4ff] ${isDark ? 'text-gray-500 hover:bg-white/5' : 'text-gray-400 hover:bg-gray-100'}`}
                               aria-label="LinkedIn">
                                <LinkedInIcon />
                            </a>
                            <a href="https://scholar.google.com/citations?user=YTn_UVIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"
                               className={`transition-colors p-2.5 rounded-lg hover:text-[#00d4ff] ${isDark ? 'text-gray-500 hover:bg-white/5' : 'text-gray-400 hover:bg-gray-100'}`}
                               aria-label="Google Scholar">
                                <ScholarIcon />
                            </a>
                        </div>
                    </div>

                    {/* Right: Profile Photo */}
                    <div className="flex-shrink-0">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0097a7] photo-ring opacity-50"></div>
                            <div className={`absolute inset-[4px] rounded-full overflow-hidden ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
                                <img
                                    src="/akphoto2.png"
                                    alt="Ankit Kumar"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            {/* Decorative dots */}
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#00d4ff] rounded-full glow-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#0097a7] rounded-full glow-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>

                <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    <ChevronDownIcon />
                </div>
            </div>
        </section>
    );
};

export default Hero;
