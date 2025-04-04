
import React from 'react';
import Header from '@/components/Header';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-24">
        <Community />
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;
