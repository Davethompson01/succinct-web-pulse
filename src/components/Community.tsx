
import React from 'react';
import { Button } from "@/components/ui/button";

const Community = () => {
  const communityStats = [
    { label: "Twitter Followers", value: "50K+" },
    { label: "Discord Members", value: "25K+" },
    { label: "GitHub Contributors", value: "500+" },
    { label: "Projects Built", value: "100+" }
  ];

  const bullishReasons = [
    {
      title: "Revolutionary ZK Technology",
      description: "Succinct's zero-knowledge proof technology enables unprecedented scalability and security for blockchain applications while maintaining decentralization."
    },
    {
      title: "Cross-Chain Compatibility",
      description: "Build once and deploy across multiple blockchain networks with Succinct's unified ZK framework, reducing development time and costs."
    },
    {
      title: "Developer-First Approach",
      description: "Comprehensive SDK, extensive documentation, and active developer community make integrating ZK proofs accessible to all skill levels."
    },
    {
      title: "Real-World Applications",
      description: "Already powering solutions in DeFi, gaming, identity management, and more with proven success stories across various industries."
    }
  ];

  return (
    <section className="py-24 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Join Our Thriving Community
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Connect with developers, researchers, and enthusiasts who are building
            the future of blockchain technology with zero-knowledge proofs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="bg-secondary/30 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2 gradient-text">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Why People Are Bullish on Succinct Labs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bullishReasons.map((reason, index) => (
              <div key={index} className="bg-secondary/50 border border-white/10 rounded-lg p-6 card-hover">
                <h4 className="text-xl font-bold mb-3 gradient-text">{reason.title}</h4>
                <p className="text-white/80">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary/30 border border-white/10 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Succinct Labs?</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Be part of a community that's building the future of blockchain technology.
            Contribute to open-source projects, participate in discussions, and help shape
            the next generation of decentralized applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 h-12 px-8">
              Join Discord
            </Button>
            <Button variant="outline" className="h-12 px-8 gradient-border">
              Follow on Twitter
            </Button>
            <Button variant="outline" className="h-12 px-8 gradient-border">
              GitHub Repository
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
