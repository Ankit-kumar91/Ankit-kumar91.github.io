import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon, ScholarIcon, ChevronDownIcon } from './icons/Icons';

const ROLES = ['Data Scientist', 'AI Enthusiast', 'Chemist', 'Researcher'];

const Hero: React.FC = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

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
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]"></div>

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl animate-float-1"></div>
                <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#0097a7]/10 rounded-full blur-3xl animate-float-2"></div>
                <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-3xl animate-float-3"></div>
            </div>

            <div className="absolute inset-0 opacity-[0.03]"
                 style={{
                     backgroundImage: 'radial-gradient(circle, #00d4ff 1px, transparent 1px)',
                     backgroundSize: '40px 40px'
                 }}
            ></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
                    {/* Left: Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            <span className="text-emerald-400 text-sm font-medium">Available for opportunities</span>
                        </div>

                        <p className="text-gray-400 text-lg mb-2 font-light tracking-wide">Hello, I'm</p>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                            {PERSONAL_INFO.name}
                        </h1>

                        <div className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 min-h-[2.5rem]">
                            <span className="text-[#00d4ff]">{text}</span>
                            <span className="typing-cursor"></span>
                        </div>

                        <p className="text-gray-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
                            Data Scientist with a Ph.D. in Chemistry, blending scientific research with AI & Machine Learning to solve real-world problems.
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
                                className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-[#00d4ff]/30 backdrop-blur-sm transition-all hover:-translate-y-0.5"
                            >
                                Get in Touch
                            </a>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer"
                               className="text-gray-500 hover:text-[#00d4ff] transition-colors p-2.5 hover:bg-white/5 rounded-lg"
                               aria-label="GitHub">
                                <GitHubIcon />
                            </a>
                            <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer"
                               className="text-gray-500 hover:text-[#00d4ff] transition-colors p-2.5 hover:bg-white/5 rounded-lg"
                               aria-label="LinkedIn">
                                <LinkedInIcon />
                            </a>
                            <a href="https://scholar.google.com/citations?user=YTn_UVIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"
                               className="text-gray-500 hover:text-[#00d4ff] transition-colors p-2.5 hover:bg-white/5 rounded-lg"
                               aria-label="Google Scholar">
                                <ScholarIcon />
                            </a>
                        </div>
                    </div>

                    {/* Right: Profile Photo Placeholder — replace src with your photo */}
                    <div className="flex-shrink-0">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0097a7] photo-ring opacity-50"></div>
                            <div className="absolute inset-[4px] rounded-full bg-[#0a0a0a] overflow-hidden">
                                <img
                                    src="https://api.dicebear.com/9.x/initials/svg?seed=AK&backgroundColor=0a3d62&textColor=00d4ff&fontSize=38"
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

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
                    <ChevronDownIcon />
                </div>
            </div>
        </section>
    );
};

export default Hero;
