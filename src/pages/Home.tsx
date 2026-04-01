import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}