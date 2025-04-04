
import React from 'react';
import Header from '@/components/Header';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 text-center mb-12">
          <img 
            src="/lovable-uploads/7a99ee3f-3dec-4e77-89fa-c2301baeceee.png" 
            alt="Succinct Labs Logo" 
            className="w-24 h-24 mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Join Our Community
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Connect with developers, researchers, and enthusiasts who are building
            the future of blockchain technology with zero-knowledge proofs.
          </p>
        </div>
        <Community />
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;
