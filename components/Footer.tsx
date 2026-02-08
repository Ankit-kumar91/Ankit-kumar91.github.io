import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon, ScholarIcon, MailIcon } from './icons/Icons';
import { useTheme } from '../ThemeContext';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const links = [
        { icon: <MailIcon />, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
        { icon: <LinkedInIcon />, href: PERSONAL_INFO.linkedinUrl, label: 'LinkedIn' },
        { icon: <GitHubIcon />, href: PERSONAL_INFO.githubUrl, label: 'GitHub' },
        { icon: <ScholarIcon />, href: 'https://scholar.google.com/citations?user=YTn_UVIAAAAJ&hl=en', label: 'Scholar' },
    ];

    return (
        <footer className={`border-t transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a] border-white/5' : 'bg-white border-gray-200'}`}>
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {links.map((link) => (
                            <a key={link.label} href={link.href}
                               target={link.href.startsWith('mailto') ? undefined : '_blank'}
                               rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                               className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:text-[#00d4ff] ${isDark ? 'bg-white/5 text-gray-500 hover:bg-white/10' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                               aria-label={link.label}>
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
