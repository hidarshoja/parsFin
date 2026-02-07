import { useEffect, useRef, useState } from 'react';
import { Wallet, PiggyBank, CircleDollarSign, Bitcoin, Globe } from 'lucide-react';

const services = [
  {
    icon: Wallet,
    title: 'کیف پول دیجیتال',
    description: 'مدیریت هوشمند وجوه با قابلیت پرداخت سریع و امن در هر زمان و مکان',
    color: 'from-blue-500/20 to-blue-600/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: PiggyBank,
    title: 'مدیریت وجوه',
    description: 'کنترل کامل درآمد و هزینه‌ها با داشبورد تحلیلی پیشرفته و گزارش‌های هوشمند',
    color: 'from-green-500/20 to-green-600/20',
    iconColor: 'text-green-400',
  },
  {
    icon: CircleDollarSign,
    title: 'کیف پول طلا',
    description: 'خرید، فروش و نگهداری طلای آب شده با قیمت لحظه‌ای بازار و کارمزد رقابتی',
    color: 'from-yellow-500/20 to-yellow-600/20',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Bitcoin,
    title: 'کیف پول ارز دیجیتال',
    description: 'نگهداری امن ارزهای دیجیتال با بالاترین استانداردهای امنیتی و پشتیبانی از شبکه‌های متنوع',
    color: 'from-orange-500/20 to-orange-600/20',
    iconColor: 'text-orange-400',
  },
  {
    icon: Globe,
    title: 'کیف پول ارزی',
    description: 'تبادل ارزهای خارجی با نرخ رقابتی و انتقال بین‌المللی سریع و مطمئن',
    color: 'from-purple-500/20 to-purple-600/20',
    iconColor: 'text-purple-400',
  },
];

export default function Services() {
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
    <section id="services" ref={sectionRef} className="relative py-24 bg-[#0A1628]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-sm text-gray-300">خدمات ما</span>
          </div>
          
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            ابزارهای <span className="text-gradient-gold">هوشمند مالی</span>
          </h2>
          
          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.2s',
            }}
          >
            مجموعه کامل راهکارهای پرداخت و مدیریت مالی برای نیازهای مختلف شما
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${0.1 + index * 0.1}s`,
              }}
            >
              <div className="relative h-full glass-card rounded-2xl p-8 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="mt-6 flex items-center gap-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">بیشتر بدانید</span>
                    <span className="transform rotate-180">←</span>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-gold/5 rounded-full blur-2xl group-hover:bg-gradient-gold/10 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.6s',
          }}
        >
          <p className="text-gray-400 mb-4">
            به دنبال راهکار سفارشی برای کسب‌وکار خود هستید؟
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4D03F] transition-colors duration-300"
          >
            <span className="font-medium">مشاوره رایگان دریافت کنید</span>
            <span className="transform rotate-180">←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
