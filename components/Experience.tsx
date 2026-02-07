import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';
import { BriefcaseIcon } from './icons/Icons';

const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Professional Experience" subtitle="My career journey across chemistry, research, and data science">
            <div className="reveal relative">
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent"></div>
                <div className="space-y-8">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className="relative md:pl-20">
                            <div className="hidden md:flex absolute left-5 top-6 w-7 h-7 bg-[#00d4ff] rounded-full items-center justify-center shadow-lg shadow-[#00d4ff]/20 z-10">
                                <span className="text-[#0a0a0a]"><BriefcaseIcon /></span>
                            </div>
                            <div className="glass-card p-6 md:p-8 card-hover">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                                        <p className="text-[#00d4ff] font-medium">{exp.company}</p>
                                        <p className="text-gray-500 text-sm">{exp.location}</p>
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium rounded-full whitespace-nowrap border border-[#00d4ff]/20">
                                        {exp.period}
                                    </span>
                                </div>
                                {exp.description.length > 0 && (
                                    <ul className="space-y-2">
                                        {exp.description.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                                <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0"></span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
