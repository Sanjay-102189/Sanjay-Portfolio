'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import CodingProfiles from '@/components/CodingProfiles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <Education />
      <CodingProfiles />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
