import { MadeWithApplaa } from './made-with-applaa';
import { BotMessageSquare, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BotMessageSquare className="text-white" />
              </div>
              <span className="text-2xl font-bold">Haix AI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Revolutionizing industries with cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Github size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary">AI Automation</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary">Data Analytics</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary">NLP Services</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary">Computer Vision</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary">Press</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Haix AI, Inc. All rights reserved.</p>
          <MadeWithApplaa />
        </div>
      </div>
    </footer>
  );
};