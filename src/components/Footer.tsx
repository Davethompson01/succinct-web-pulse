
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">SL</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Succinct Labs</span>
            </div>
            <p className="text-sm text-white/70 mb-6">
              Building the future of blockchain technology with zero-knowledge proofs.
            </p>
            <div className="flex gap-4">
              {['twitter', 'discord', 'github', 'linkedin'].map(platform => (
                <a 
                  key={platform}
                  href={`https://${platform}.com/SuccinctLabs`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <span className="sr-only">{platform}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {platform === 'twitter' && (
                      <>
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </>
                    )}
                    {platform === 'discord' && (
                      <>
                        <path d="M9 8a5 5 0 0 1 5 5v7H9l3-3-3-3z"></path>
                        <path d="M20 8v7a5 5 0 0 1-5 5H4V8a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5Z"></path>
                      </>
                    )}
                    {platform === 'github' && (
                      <>
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </>
                    )}
                    {platform === 'linkedin' && (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {['Polygon Zero', 'zkSync', 'Starknet', 'ZK Documentation', 'Developer Tools'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-sm text-white/70 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Documentation', 'Tutorials', 'GitHub', 'Blog', 'Research Papers'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-sm text-white/70 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Careers', 'Press', 'Contact', 'Privacy Policy'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-sm text-white/70 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Succinct Labs. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-white/50 hover:text-white transition">Terms</Link>
            <Link to="#" className="text-xs text-white/50 hover:text-white transition">Privacy</Link>
            <Link to="#" className="text-xs text-white/50 hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
