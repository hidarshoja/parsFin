import { useState, useEffect } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'صفحه اصلی', href: '#hero' },
  { label: 'خدمات', href: '#services' },
  { label: 'ویژگی‌ها', href: '#features' },
  { label: 'امنیت', href: '#security' },
  { label: 'تماس با ما', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold-sm">
              <Wallet className="w-6 h-6 text-[#0A1628]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">پارس پی</span>
              <span className="text-xs text-[#D4AF37]">هلدینگ پارس</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-gold text-[#0A1628] hover:opacity-90 font-semibold px-6 shadow-gold-sm transition-all duration-300 hover:scale-105"
            >
              شروع کنید
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#D4AF37] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-white/10 animate-fade-in-up">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 text-right text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="mt-4 bg-gradient-gold text-[#0A1628] hover:opacity-90 font-semibold w-full"
              >
                شروع کنید
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
