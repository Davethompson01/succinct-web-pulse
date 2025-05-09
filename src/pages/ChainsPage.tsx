import React from 'react';
import Header from '@/components/Header';
import Chains from '@/components/Chains';
import Footer from '@/components/Footer';

const ChainsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 text-center mb-12">
          <img 
            src="/succinctlogo/chains-logo.png" 
            alt="Succinct Labs Logo" 
            className="w-24 h-24 mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Supported Chains
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Succinct Labs provides zero-knowledge proof technology to various blockchain networks, 
            enhancing their scalability, privacy, and security.
          </p>
        </div>
        <Chains />
      </div>
      <Footer />
    </div>
  );
};

export default ChainsPage;
