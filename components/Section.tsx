import React, { useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';

interface SectionProps {
    id: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const revealElements = sectionRef.current?.querySelectorAll('.reveal, .stagger-children');
        revealElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`py-20 md:py-28 ${className}`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="reveal text-center mb-16">
                    <h2 className={`text-3xl md:text-[2.6rem] font-bold mb-4 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {title}
                    </h2>
                    <div className="section-rule mb-5"></div>
                    {subtitle && (
                        <p className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {subtitle}
                        </p>
                    )}
                </div>
                {children}
            </div>
        </section>
    );
};

export default Section;
