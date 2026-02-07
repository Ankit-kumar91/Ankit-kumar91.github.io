import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { AcademicCapIcon } from './icons/Icons';

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education">
            <div className="reveal grid md:grid-cols-3 gap-6">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="glass-card p-6 card-hover relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0097a7]"></div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center text-[#00d4ff]">
                                <AcademicCapIcon />
                            </div>
                            <span className="text-sm text-[#00d4ff] font-medium">{edu.period}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-[#00d4ff] text-sm font-medium mb-3">{edu.institution}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
