import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';
import { useTheme } from '../ThemeContext';

const Skills: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <Section id="skills" title="Skills & Expertise">
            <div className="reveal grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SKILL_CATEGORIES.map((category) => (
                    <div key={category.title} className={`p-6 card-hover group rounded-2xl transition-colors duration-300 ${isDark ? 'glass-card' : 'bg-white border border-gray-200 shadow-sm'}`}>
                        <h3 className={`text-lg font-bold mb-5 pb-3 border-b group-hover:text-[#00d4ff] transition-colors ${isDark ? 'text-white border-white/10' : 'text-gray-900 border-gray-200'}`}>
                            {category.title}
                        </h3>
                        <div className="space-y-3">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className={`flex items-center gap-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
