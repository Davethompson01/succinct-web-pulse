
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Chains from '@/components/Chains';
import Technology from '@/components/Technology';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Chains />
      <Technology />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
