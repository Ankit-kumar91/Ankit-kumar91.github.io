import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publication from './components/Publication';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={`app-shell ${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans leading-relaxed transition-colors duration-300`}>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Education />
                <Publication />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
