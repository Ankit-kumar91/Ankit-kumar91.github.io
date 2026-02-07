import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Publication from './components/Publication';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-[#0a0a0a] text-gray-300 font-sans leading-relaxed">
            <Header />
            <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Projects />
                <Publication />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
