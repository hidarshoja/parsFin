import { Wallet, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

const quickLinks = [
  { label: 'صفحه اصلی', href: '#hero' },
  { label: 'خدمات', href: '#services' },
  { label: 'ویژگی‌ها', href: '#features' },
  { label: 'امنیت', href: '#security' },
  { label: 'تماس با ما', href: '#contact' },
];

const services = [
  { label: 'کیف پول دیجیتال', href: '#services' },
  { label: 'مدیریت وجوه', href: '#services' },
  { label: 'کیف پول طلا', href: '#services' },
  { label: 'کیف پول ارز دیجیتال', href: '#services' },
  { label: 'کیف پول ارزی', href: '#services' },
];

const legalLinks = [
  { label: 'حریم خصوصی', href: '#' },
  { label: 'شرایط استفاده', href: '#' },
  { label: 'سوالات متداول', href: '#' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'اینستاگرام' },
  { icon: Twitter, href: '#', label: 'توییتر' },
  { icon: Linkedin, href: '#', label: 'لینکدین' },
  { icon: Send, href: '#', label: 'تلگرام' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#070f1c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold-sm">
                <Wallet className="w-7 h-7 text-[#0A1628]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">پارس پی</span>
                <span className="text-xs text-[#D4AF37]">هلدینگ پارس</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              پارس پی، پیشرو در ارائه راهکارهای نوین فین‌تکی با تمرکز بر امنیت، سرعت و نوآوری. زیرمجموعه هلدینگ پارس.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">لینک‌های سریع</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">خدمات ما</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">قانونی</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-right">
              © ۱۴۰۳ پارس پی. تمامی حقوق محفوظ است. | زیرمجموعه هلدینگ پارس
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-500 text-sm">همه سیستم‌ها فعال هستند</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
