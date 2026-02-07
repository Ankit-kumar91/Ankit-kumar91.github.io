import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { GitHubIcon, ExternalLinkIcon } from './icons/Icons';

const PROJECT_COLORS = ['from-[#00d4ff]/20 to-[#0097a7]/20', 'from-emerald-500/20 to-teal-500/20', 'from-purple-500/20 to-indigo-500/20'];

const Projects: React.FC = () => {
    return (
        <Section id="projects" title="Projects" subtitle="Data science and machine learning applications">
            <div className="reveal space-y-8">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="glass-card overflow-hidden card-hover group">
                        <div className="flex flex-col md:flex-row">
                            {/* Project Visual */}
                            <div className={`md:w-80 lg:w-96 flex-shrink-0 bg-gradient-to-br ${PROJECT_COLORS[index % PROJECT_COLORS.length]} flex items-center justify-center p-8 md:p-10 min-h-[200px] border-r border-white/5`}>
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-[#00d4ff]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                                        </svg>
                                    </div>
                                    <h4 className="text-white font-semibold text-sm">{project.tags[0]}</h4>
                                    <p className="text-gray-400 text-xs mt-1">{project.tags.slice(1, 3).join(' / ')}</p>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="flex-1 p-6 md:p-8">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                                <ul className="space-y-2 mb-5">
                                    {project.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                            <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0"></span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2.5 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium rounded-md border border-[#00d4ff]/20">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                       className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-white font-medium text-sm transition-colors">
                                        <GitHubIcon />
                                        Source Code
                                        <ExternalLinkIcon />
                                    </a>
                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                                           className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 text-[#00d4ff] text-sm font-medium rounded-lg border border-[#00d4ff]/20 transition-colors">
                                            Live Demo
                                            <ExternalLinkIcon />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
