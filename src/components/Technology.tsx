
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Technology = () => {
  const technologies = [
    {
      title: "Zero-Knowledge Proofs",
      description: "Cryptographic method allowing one party to prove to another that a statement is true, without revealing any information beyond the validity of the statement itself.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
        </svg>
      )
    },
    {
      title: "L2 Scaling",
      description: "Layer 2 scaling solutions process transactions off the main blockchain, bundling them for enhanced throughput and reduced fees while inheriting security.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="3" x2="21" y1="15" y2="15"></line>
          <line x1="9" x2="9" y1="3" y2="21"></line>
          <line x1="15" x2="15" y1="3" y2="21"></line>
        </svg>
      )
    },
    {
      title: "Trustless Verification",
      description: "Systems enabling verification of computations without requiring trust in third parties, leveraging cryptographic proofs for validity assurance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      title: "Privacy-Preserving Computation",
      description: "Technology enabling computation on encrypted data without revealing the underlying information, maintaining privacy while producing verifiable results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M7 12h10"></path>
          <path d="M12 7v10"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Cutting-Edge Technology
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Our advanced zero-knowledge proof systems power the next generation of blockchain applications,
            enabling scalability without compromising security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-secondary/50 border border-white/10 card-hover">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                    <p className="text-white/70">{tech.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-secondary/30 border border-white/10 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">How ZK Proofs Power Blockchain Scaling</h3>
              <p className="text-white/70 mb-4">
                Zero-knowledge proofs allow blockchain networks to verify transactions without processing every 
                transaction on the main chain. This significantly increases throughput while maintaining 
                the same level of security.
              </p>
              <ul className="space-y-2">
                {["Reduced gas fees", "Increased transaction speed", "Enhanced privacy", "Maintained security"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full h-64 bg-black/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-4 rounded-full bg-primary/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v9a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                </div>
                <p className="text-sm text-white/60">Interactive diagram placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
