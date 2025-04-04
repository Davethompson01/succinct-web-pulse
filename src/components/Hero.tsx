
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col items-center justify-center hero-glow relative overflow-hidden">
      {/* Background Logo Image with Blur */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/lovable-uploads/d825ac29-91e4-48db-a931-cbb357c0a165.png"
          alt="Succinct Labs Logo Background"
          className="w-full h-full object-cover scale-150 blur-lg"
        />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight gradient-text">
          Powering the Future of Web3
        </h1>
        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10">
          Succinct Labs builds zero-knowledge proof technologies to scale blockchain networks and enable trustless verification.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base">
            Explore Chains
          </Button>
          <Button variant="outline" className="h-12 px-8 text-base gradient-border">
            Join Community <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Transactions", value: "1B+" },
            { label: "TVL Secured", value: "$500M+" },
            { label: "Developers", value: "10K+" },
            { label: "Networks", value: "5+" }
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-bold mb-2 gradient-text">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
