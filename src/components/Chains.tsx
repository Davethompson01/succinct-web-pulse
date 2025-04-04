
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Chains = () => {
  const chains = [
    {
      name: "Polygon Zero",
      description: "A zkEVM scaling solution for Ethereum, enabling faster and cheaper transactions.",
      features: ["Ethereum compatibility", "Low gas fees", "High throughput", "Secure"],
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "zkSync",
      description: "A Layer-2 protocol that scales Ethereum with zkRollup technology for security and scalability.",
      features: ["EVM compatibility", "Trustless", "Composable", "Developer-friendly"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Starknet",
      description: "A permissionless decentralized ZK-Rollup operating as an L2 network over Ethereum.",
      features: ["Parallel processing", "Cairo language", "Account abstraction", "High security"],
      color: "from-indigo-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-24 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Powering Multiple Chains
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Succinct Labs provides zero-knowledge proof technology to various blockchain networks, 
            enhancing their scalability, privacy, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chains.map((chain, index) => (
            <Card key={index} className="bg-secondary/50 border border-white/10 card-hover">
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${chain.color} mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold">{chain.name.charAt(0)}</span>
                </div>
                <CardTitle className="text-2xl">{chain.name}</CardTitle>
                <CardDescription className="text-white/70">{chain.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {chain.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="mt-6 w-full justify-between">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chains;
