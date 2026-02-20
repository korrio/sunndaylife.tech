import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '@/lib/language';

const navLinks = [
  { href: '/', label: 'Home', labelTh: 'หน้าหลัก' },
  { href: '/about', label: 'About', labelTh: 'เกี่ยวกับ' },
  { href: '/services', label: 'Services', labelTh: 'บริการ' },
  { href: '/case-studies', label: 'Case Studies', labelTh: 'ผลงาน' },
  { href: '/team', label: 'Team', labelTh: 'ทีม' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-sunny-teal py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-sm transition-colors',
                  isActive(link.href)
                    ? isScrolled 
                      ? 'text-sunny-teal bg-sunny-teal/10' 
                      : 'text-white bg-white/20'
                    : isScrolled 
                      ? 'text-gray-600 hover:text-sunny-teal hover:bg-gray-50' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {t(link.label, link.labelTh)}
              </Link>
            ))}
          </nav>

          {/* Center: Logo (Typography-based, centered) */}
          <Link to="/" className="flex items-center justify-center flex-1 lg:flex-none">
            <span className={cn(
              'font-bold text-xl tracking-tight transition-colors',
              isScrolled ? 'text-sunny-teal' : 'text-white'
            )}>
              Sunny Day 365
            </span>
          </Link>

          {/* Right: Navigation + Language + CTA */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-end">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-sm transition-colors',
                  isActive(link.href)
                    ? isScrolled 
                      ? 'text-sunny-teal bg-sunny-teal/10' 
                      : 'text-white bg-white/20'
                    : isScrolled 
                      ? 'text-gray-600 hover:text-sunny-teal hover:bg-gray-50' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {t(link.label, link.labelTh)}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={cn(
                'ml-2 px-3 py-2 text-sm font-medium rounded-sm transition-colors flex items-center gap-1.5',
                isScrolled 
                  ? 'text-gray-600 hover:text-sunny-teal hover:bg-gray-50' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              )}
              title={t('Switch language', 'เปลี่ยนภาษา')}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>

            {/* CTA Button */}
            <Button 
              variant={isScrolled ? 'primary' : 'white'}
              size="sm"
              className="ml-4"
              asChild
            >
              <Link to="/contact">{t('Get in Touch', 'ติดต่อเรา')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={cn(
                'p-2 rounded-sm text-sm font-medium uppercase',
                isScrolled ? 'text-gray-900' : 'text-white'
              )}
            >
              {language}
            </button>
            
            <button
              className={cn(
                'p-2 rounded-sm',
                isScrolled ? 'text-gray-900' : 'text-white'
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-3 text-sm font-medium rounded-sm transition-colors',
                  isActive(link.href)
                    ? 'text-sunny-teal bg-sunny-teal/10'
                    : 'text-gray-600 hover:text-sunny-teal hover:bg-gray-50'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.label, link.labelTh)}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t">
              <Button className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('Get in Touch', 'ติดต่อเรา')}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
