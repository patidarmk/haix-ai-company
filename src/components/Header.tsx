import { Link } from '@tanstack/react-router';
import { BotMessageSquare, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Features', path: '/#features' },
  { name: 'Solutions', path: '/#solutions' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <BotMessageSquare className="text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Haix AI
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Log In</Button>
            <Button>Get Started</Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link to="/" className="flex items-center space-x-2 mb-4">
                    <BotMessageSquare className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">Haix AI</span>
                </Link>
                {navLinks.map((link) => (
                    <a key={link.name} href={link.path} className="text-muted-foreground hover:text-primary">
                        {link.name}
                    </a>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                    <Button variant="ghost">Log In</Button>
                    <Button>Get Started</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};