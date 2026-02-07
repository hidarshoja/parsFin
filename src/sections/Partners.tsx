import { useEffect, useRef, useState } from 'react';
import { Building2, Landmark, CreditCard, Wallet, TrendingUp, Shield } from 'lucide-react';

const partners = [
  { name: 'هلدینگ پارس', icon: Building2 },
  { name: 'بانک ملت', icon: Landmark },
  { name: 'بانک سامان', icon: Landmark },
  { name: 'پرداخت الکترونیک', icon: CreditCard },
  { name: 'کیف پول دیجیتال', icon: Wallet },
  { name: 'سرمایه‌گذاری پارس', icon: TrendingUp },
  { name: 'بیمه پارس', icon: Shield },
  { name: 'صرافی پارس', icon: TrendingUp },
];

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-[#0A1628] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}
          >
            مورد <span className="text-gradient-gold">اعتماد</span> سازمان‌های برتر
          </h2>
          <p
            className="text-gray-400"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            همکاری با بزرگترین نام‌های صنعت مالی و بانکداری کشور
          </p>
        </div>

        {/* Partners Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 0.2s',
          }}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group glass-card rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <partner.icon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
