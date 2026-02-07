import React from 'react';
import Section from './Section';
import { LANGUAGES, PROFILE } from '../constants';

const SKILL_BARS = [
    { name: 'Python', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Deep Learning', level: 80 },
    { name: 'Data Analysis', level: 90 },
    { name: 'PyTorch', level: 75 },
    { name: 'SQL', level: 80 },
];

const About: React.FC = () => {
    return (
        <Section id="about" title="About Me" subtitle="Bridging Chemistry & Data Science">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Left: Skills & Languages with progress bars */}
                <div className="reveal space-y-8">
                    {/* Technical Skills */}
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>
                        <div className="space-y-4">
                            {SKILL_BARS.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-200 font-medium">{skill.name}</span>
                                        <span className="text-[#00d4ff] font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#00d4ff] to-[#0097a7] rounded-full skill-bar-fill"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-bold text-white mb-6">Languages</h3>
                        <div className="space-y-4">
                            {LANGUAGES.map((lang) => (
                                <div key={lang.name}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-200 font-medium">{lang.name}</span>
                                        <span className="text-gray-400 text-xs">{lang.level}</span>
                                    </div>
                                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#00d4ff] to-[#0097a7] rounded-full skill-bar-fill"
                                            style={{
                                                width: lang.name === 'Hindi' ? '100%' : lang.name === 'English' ? '95%' : '60%'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Profile Information */}
                <div className="reveal space-y-6">
                    {/* Bio */}
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-bold text-white mb-4">Who I Am</h3>
                        <p className="text-gray-400 leading-relaxed text-sm mb-6">{PROFILE}</p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-[#00d4ff] font-semibold text-sm min-w-[100px]">Profile:</span>
                                <span className="text-gray-300 text-sm">Data Science & Analytics</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#00d4ff] font-semibold text-sm min-w-[100px]">Domain:</span>
                                <span className="text-gray-300 text-sm">Data Science, Chemistry, Research & Development</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#00d4ff] font-semibold text-sm min-w-[100px]">Education:</span>
                                <span className="text-gray-300 text-sm">Ph.D. in Chemistry (IIT Bombay)</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#00d4ff] font-semibold text-sm min-w-[100px]">Language:</span>
                                <span className="text-gray-300 text-sm">English, Hindi, German (B1)</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#00d4ff] font-semibold text-sm min-w-[100px]">Other Skills:</span>
                                <span className="text-gray-300 text-sm">Organic Synthesis, Spectroscopy, Process Chemistry, Analytical Chemistry, Git, VS Code, Docker</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { value: '13', label: 'Publications' },
                            { value: 'Ph.D.', label: 'IIT Bombay' },
                            { value: '5+', label: 'Years Research' },
                            { value: 'B1', label: 'German Certified' },
                        ].map((stat) => (
                            <div key={stat.label} className="glass-card p-4 text-center card-hover">
                                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
