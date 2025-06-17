import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, Menu, User, Settings, LogOut, Award } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';
import AuthModal from '../auth/AuthModal';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-bg-card/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold gradient-text">
                Portfolio
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('certificates')}
                className="text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform"
              >
                Certificates
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-text-secondary hover:text-text-primary transition-colors hover:scale-105 transform"
              >
                Contact
              </button>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Theme toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2 hover:scale-110 transform transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>

              {/* Authentication */}
              {isAuthenticated && user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-text-primary font-medium hidden sm:block hover:text-primary transition-colors">
                    Welcome, {user.name}
                  </span>
                  <div className="relative" ref={userMenuRef}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="p-2 hover:scale-110 transform transition-all duration-200"
                      aria-label="User menu"
                    >
                      <Menu className="h-5 w-5" />
                    </Button>
                    
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-bg-card border border-border rounded-lg shadow-elegant-lg py-1 z-50 animate-in slide-in-from-top-2 duration-200">
                        <button
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center w-full px-4 py-2 text-sm text-text-primary hover:bg-bg-secondary transition-all duration-200 hover:scale-105 transform"
                        >
                          <User className="h-4 w-4 mr-3" />
                          Profile
                        </button>
                        <button
                          onClick={() => scrollToSection('certificates')}
                          className="flex items-center w-full px-4 py-2 text-sm text-text-primary hover:bg-bg-secondary transition-all duration-200 hover:scale-105 transform"
                        >
                          <Award className="h-4 w-4 mr-3" />
                          Certificates
                        </button>
                        <button
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center w-full px-4 py-2 text-sm text-text-primary hover:bg-bg-secondary transition-all duration-200 hover:scale-105 transform"
                        >
                          <Settings className="h-4 w-4 mr-3" />
                          Settings
                        </button>
                        <hr className="my-1 border-border" />
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-500 hover:bg-bg-secondary transition-all duration-200 hover:scale-105 transform"
                        >
                          <LogOut className="h-4 w-4 mr-3" />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleAuthClick('login')}
                    className="hover:scale-105 transform transition-all duration-200"
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleAuthClick('register')}
                    className="hover:scale-105 transform transition-all duration-200"
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Header;