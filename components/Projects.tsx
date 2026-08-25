import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { GitHubIcon, ExternalLinkIcon } from './icons/Icons';
import { useTheme } from '../ThemeContext';
import type { Project } from '../types';

interface CardProps {
    project: Project;
    isDark: boolean;
    detailed?: boolean;
}

const ProjectCard: React.FC<CardProps> = ({ project, isDark, detailed = false }) => {
    const card = isDark ? 'glass-card' : 'bg-white border border-gray-200 shadow-sm';

    return (
        <div className={`flex flex-col overflow-hidden card-hover group rounded-2xl transition-colors duration-300 ${card}`}>
            {/* Visual: fixed 4:3 well — every source image is 1400x1050, so nothing crops */}
            <div className={`w-full aspect-[4/3] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00d4ff]/15 to-[#0097a7]/10 ${isDark ? 'border-b border-white/5' : 'border-b border-gray-100'}`}>
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <div className="w-full p-8 space-y-5">
                        {project.metrics?.map((m) => (
                            <div key={m.label}>
                                <div className="text-2xl lg:text-3xl font-bold gradient-text leading-tight">{m.value}</div>
                                <div className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{m.label}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-1 p-6 md:p-7">
                <h3 className={`text-lg font-bold mb-3 group-hover:text-[#00d4ff] transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                </h3>
                <p className={`text-sm mb-5 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>

                {detailed && project.metrics && (
                    <div className={`flex flex-wrap gap-x-8 gap-y-3 mb-5 pb-5 border-b ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                        {project.metrics.map((m) => (
                            <div key={m.label}>
                                <div className="text-xl font-bold gradient-text">{m.value}</div>
                                <div className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{m.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {detailed && (
                    <ul className="space-y-2.5 mb-5">
                        {project.bullets.map((bullet, i) => (
                            <li key={i} className={`flex items-start gap-3 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0"></span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className={
                                detailed
                                    ? `px-2.5 py-1 text-xs font-medium rounded-md border ${isDark ? 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20' : 'bg-[#00d4ff]/10 text-[#0097a7] border-[#00d4ff]/20'}`
                                    : `px-2 py-0.5 text-xs font-medium rounded ${isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-600'}`
                            }
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* mt-auto pins the links to the bottom so cards in a row line up */}
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                       className={`inline-flex items-center gap-2 font-medium text-sm transition-colors ${isDark ? 'text-[#00d4ff] hover:text-white' : 'text-[#0097a7] hover:text-[#00d4ff]'}`}>
                        <GitHubIcon />
                        Source Code
                        <ExternalLinkIcon />
                    </a>
                    {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                           className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${isDark ? 'bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/20' : 'bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 text-[#0097a7] border-[#00d4ff]/20'}`}>
                            {project.demoLabel ?? 'Live Demo'}
                            <ExternalLinkIcon />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const featured = PROJECTS.filter((p) => p.featured);
    const earlier = PROJECTS.filter((p) => !p.featured);

    return (
        <Section id="projects" title="Selected Projects" subtitle="Drug discovery models built end to end — data curation, classical ML and GNN training, and a deployed service">
            <div className="reveal grid md:grid-cols-2 gap-8">
                {featured.map((project) => (
                    <ProjectCard key={project.title} project={project} isDark={isDark} detailed />
                ))}
            </div>

            {earlier.length > 0 && (
                <div className="reveal mt-16">
                    <h3 className={`text-sm font-semibold uppercase tracking-wider mb-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        Earlier Data Science Projects
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {earlier.map((project) => (
                            <ProjectCard key={project.title} project={project} isDark={isDark} />
                        ))}
                    </div>
                </div>
            )}
        </Section>
    );
};

export default Projects;
