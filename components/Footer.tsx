import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon, ScholarIcon, MailIcon } from './icons/Icons';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const links = [
        { icon: <MailIcon />, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
        { icon: <LinkedInIcon />, href: PERSONAL_INFO.linkedinUrl, label: 'LinkedIn' },
        { icon: <GitHubIcon />, href: PERSONAL_INFO.githubUrl, label: 'GitHub' },
        { icon: <ScholarIcon />, href: 'https://scholar.google.com/citations?user=YTn_UVIAAAAJ&hl=en', label: 'Scholar' },
    ];

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {links.map((link) => (
                            <a key={link.label} href={link.href}
                               target={link.href.startsWith('mailto') ? undefined : '_blank'}
                               rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                               className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-500 hover:text-[#00d4ff] hover:bg-white/10 transition-all"
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
