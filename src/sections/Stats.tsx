import { useEffect, useState, useRef } from 'react';
import { Users, Repeat2, TrendingUp, Calendar } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 2000000,
    displayValue: '۲M+',
    label: 'کاربر فعال ماهانه',
    suffix: '+',
  },
  {
    icon: Repeat2,
    value: 500000,
    displayValue: '۵۰۰K+',
    label: 'تراکنش موفق روزانه',
    suffix: '+',
  },
  {
    icon: TrendingUp,
    value: 10000000000,
    displayValue: '۱۰B+',
    label: 'تومان حجم معاملات',
    suffix: '+',
  },
  {
    icon: Calendar,
    value: 10,
    displayValue: '۱۰+',
    label: 'سال فعالیت در حوزه فین‌تک',
    suffix: '+',
  },
];

function AnimatedNumber({ value, isVisible }: { value: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(0) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return (
    <span className="tabular-nums">
      {isVisible ? formatNumber(count) : '0'}
      {value >= 1000 ? '+' : ''}
    </span>
  );
}

export default function Stats() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${index * 0.1}s`,
              }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-gold/10 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} isVisible={isVisible} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
