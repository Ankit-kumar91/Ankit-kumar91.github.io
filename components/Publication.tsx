import React, { useState } from 'react';
import Section from './Section';
import { PUBLICATIONS, PUBLICATIONS_INFO } from '../constants';
import { ScholarIcon, ExternalLinkIcon } from './icons/Icons';

const Publication: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const displayed = showAll ? PUBLICATIONS : PUBLICATIONS.slice(0, 5);

    return (
        <Section id="publications" title="Research Publications" subtitle={PUBLICATIONS_INFO.summary}>
            <div className="reveal">
                <div className="text-center mb-10">
                    <a href={PUBLICATIONS_INFO.scholarUrl} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00d4ff] hover:bg-[#00bcd4] text-[#0a0a0a] font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-[#00d4ff]/20">
                        <ScholarIcon />
                        View Google Scholar Profile
                    </a>
                </div>
                <div className="max-w-4xl mx-auto space-y-3">
                    {displayed.map((pub, index) => (
                        <a key={index} href={pub.url} target="_blank" rel="noopener noreferrer"
                           className="pub-item block glass-card p-5 group">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-[#00d4ff]/10 text-[#00d4ff] rounded-lg flex items-center justify-center text-sm font-bold group-hover:bg-[#00d4ff] group-hover:text-[#0a0a0a] transition-colors">
                                    {index + 1}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#00d4ff] transition-colors flex items-center gap-2">
                                        <span className="line-clamp-2">{pub.title}</span>
                                        <span className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-[#00d4ff]">
                                            <ExternalLinkIcon />
                                        </span>
                                    </h4>
                                    <p className="text-xs text-gray-500 mb-1">{pub.authors}</p>
                                    <p className="text-xs text-[#00d4ff]/70 font-medium">{pub.citation}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                {PUBLICATIONS.length > 5 && (
                    <div className="text-center mt-8">
                        <button onClick={() => setShowAll(!showAll)}
                                className="px-6 py-2.5 bg-white/5 hover:bg-[#00d4ff]/10 text-[#00d4ff] font-medium rounded-xl border border-[#00d4ff]/20 transition-colors">
                            {showAll ? 'Show Less' : `Show All ${PUBLICATIONS.length} Publications`}
                        </button>
                    </div>
                )}
            </div>
        </Section>
    );
};

export default Publication;
