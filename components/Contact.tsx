import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { MailIcon, LinkedInIcon, GitHubIcon, ScholarIcon, MapPinIcon, DocumentDownloadIcon } from './icons/Icons';
import { useTheme } from '../ThemeContext';

const Contact: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const contactLinks = [
        { icon: <MailIcon />, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
        { icon: <MapPinIcon />, label: 'Location', value: PERSONAL_INFO.address, href: '' },
        { icon: <DocumentDownloadIcon />, label: 'Resume', value: 'Download Resume', href: '/Ankit_Resume.pdf', download: true },
    ];
    const socialLinks = [
        { icon: <LinkedInIcon />, label: 'LinkedIn', href: PERSONAL_INFO.linkedinUrl },
        { icon: <GitHubIcon />, label: 'GitHub', href: PERSONAL_INFO.githubUrl },
        { icon: <ScholarIcon />, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=YTn_UVIAAAAJ&hl=en' },
    ];

    return (
        <Section id="contact" title="Get in Touch" subtitle="I'm open to new opportunities and collaborations" className={`border-t ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
            <div className="reveal max-w-3xl mx-auto">
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {contactLinks.map((item) => (
                        <div key={item.label} className={`p-5 text-center rounded-2xl transition-colors duration-300 ${isDark ? 'glass-card' : 'bg-white border border-gray-200 shadow-sm'}`}>
                            <div className="text-[#00d4ff] flex justify-center mb-3">{item.icon}</div>
                            <div className={`text-xs mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</div>
                            {item.href ? (
                                <a href={item.href} {...(item.download ? { download: true } : {})} className={`text-sm font-medium hover:text-[#00d4ff] transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</a>
                            ) : (
                                <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center mb-10">
                    <a href={`mailto:${PERSONAL_INFO.email}`}
                       className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d4ff] hover:bg-[#00bcd4] text-[#0a0a0a] font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-[#00d4ff]/25 hover:-translate-y-0.5 text-lg">
                        <MailIcon />
                        Say Hello
                    </a>
                </div>
                <div className="flex items-center justify-center gap-4">
                    {socialLinks.map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                           className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:text-[#00d4ff] ${isDark ? 'bg-white/5 border border-white/10 text-gray-500 hover:bg-white/10 hover:border-[#00d4ff]/30' : 'bg-gray-50 border border-gray-200 text-gray-400 hover:bg-gray-100 hover:border-[#00d4ff]/30'}`}
                           aria-label={link.label}>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Contact;
