import { useEffect, useRef, useState } from 'react';
import { Shield, Lock, Fingerprint, Zap, Clock, Rocket, Headphones, MessageCircle, Phone } from 'lucide-react';

const features = [
  {
    title: 'امنیت در سطح بانکی',
    description: 'استفاده از رمزنگاری AES-256، احراز هویت دو عاملی و رمزنگاری زیست‌سنجی برای حداکثر امنیت دارایی و اطلاعات شما',
    image: '/security-illustration.jpg',
    icons: [Shield, Lock, Fingerprint],
    iconLabels: ['رمزنگاری پیشرفته', 'احراز هویت دو عاملی', 'بیومتریک'],
    reverse: false,
  },
  {
    title: 'پرداخت در چند ثانیه',
    description: 'پردازش لحظه‌ای تراکنش‌ها با زیرساخت قدرتمند و تکنولوژی روز، بدون معطلی و با بالاترین سرعت ممکن',
    image: '/speed-illustration.jpg',
    icons: [Zap, Clock, Rocket],
    iconLabels: ['پرداخت فوری', '۲۴/۷', 'تکنولوژی پیشرفته'],
    reverse: true,
  },
  {
    title: 'همراه شما در هر لحظه',
    description: 'تیم پشتیبانی متخصص آماده پاسخگویی شبانه‌روزی از طریق چت آنلاین، تلفن و ایمیل با کمترین زمان انتظار',
    image: '/support-illustration.jpg',
    icons: [Headphones, MessageCircle, Phone],
    iconLabels: ['پشتیبانی تلفنی', 'چت آنلاین', 'پاسخ سریع'],
    reverse: false,
  },
];

export default function Features() {
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
    <section id="features" ref={sectionRef} className="relative py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-sm text-gray-300">چرا پارس پی؟</span>
          </div>
          
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            ویژگی‌های <span className="text-gradient-gold">منحصر به فرد</span>
          </h2>
          
          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.2s',
            }}
          >
            تجربه‌ای متفاوت از پرداخت و مدیریت مالی با قابلیت‌های برتر
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                feature.reverse ? 'lg:flex-row-reverse' : ''
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.8s ease ${0.2 + index * 0.15}s`,
              }}
            >
              {/* Image */}
              <div className={`relative ${feature.reverse ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-3xl blur-2xl group-hover:bg-[#D4AF37]/20 transition-colors duration-500" />
                  
                  {/* Image */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="relative z-10 w-full rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-3 z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
                        <Shield className="w-4 h-4 text-[#0A1628]" />
                      </div>
                      <span className="text-sm text-white font-medium">امنیت تضمینی</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${feature.reverse ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Icons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {feature.icons.map((Icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card hover:border-[#D4AF37]/30 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-gold/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <span className="text-sm text-gray-300">{feature.iconLabels[iconIndex]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
