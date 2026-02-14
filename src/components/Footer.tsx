import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import siteSettings from '@/content/site-settings.json';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Virtual IT Department', href: '/services' },
    { label: 'IT Debt Collection', href: '/services' },
    { label: 'IT Compliance', href: '/services' },
    { label: 'Overseas Projects', href: '/services' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-sunny-teal flex items-center justify-center font-bold text-lg">
                S
              </div>
              <span className="font-semibold text-lg">{siteSettings.siteName}</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {siteSettings.tagline}
            </p>
            <div className="flex gap-4">
              {siteSettings.socialLinks.facebook && (
                <a href={siteSettings.socialLinks.facebook} target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sunny-teal transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteSettings.socialLinks.instagram && (
                <a href={siteSettings.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sunny-teal transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteSettings.socialLinks.linkedin && (
                <a href={siteSettings.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sunny-teal transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sunny-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{siteSettings.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sunny-teal flex-shrink-0" />
                <a href={`mailto:${siteSettings.contactEmail}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {siteSettings.contactEmail}
                </a>
              </li>
              {siteSettings.contactPhone && (
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sunny-teal flex-shrink-0" />
                  <a href={`tel:${siteSettings.contactPhone}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {siteSettings.contactPhone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {siteSettings.siteName} Co., LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
