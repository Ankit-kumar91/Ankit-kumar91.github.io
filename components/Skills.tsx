import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
    return (
        <Section id="skills" title="Skills & Expertise">
            <div className="reveal grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SKILL_CATEGORIES.map((category) => (
                    <div key={category.title} className="glass-card p-6 card-hover group">
                        <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-white/10 group-hover:text-[#00d4ff] transition-colors">
                            {category.title}
                        </h3>
                        <div className="space-y-3">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-3 text-gray-400 text-sm">
                                    <span className="flex-shrink-0 text-[#00d4ff]/60">{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
