
import React from 'react';
import Header from '@/components/Header';
import Chains from '@/components/Chains';
import Footer from '@/components/Footer';

const ChainsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-24">
        <Chains />
      </div>
      <Footer />
    </div>
  );
};

export default ChainsPage;
