import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { AcademicCapIcon } from './icons/Icons';
import { useTheme } from '../ThemeContext';

const Education: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <Section id="education" title="Education">
            <div className="reveal grid md:grid-cols-3 gap-6">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className={`p-6 card-hover relative overflow-hidden rounded-2xl transition-colors duration-300 ${isDark ? 'glass-card' : 'bg-white border border-gray-200 shadow-sm'}`}>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0097a7]"></div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center text-[#00d4ff]">
                                <AcademicCapIcon />
                            </div>
                            <span className={`text-sm font-medium ${isDark ? 'text-[#00d4ff]' : 'text-[#0097a7]'}`}>{edu.period}</span>
                        </div>
                        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
                        <p className={`text-sm font-medium mb-3 ${isDark ? 'text-[#00d4ff]' : 'text-[#0097a7]'}`}>{edu.institution}</p>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{edu.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
