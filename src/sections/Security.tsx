import { useEffect, useRef, useState } from 'react';
import { Shield, Lock, FileCheck, Server, Eye, Fingerprint } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'PCI DSS',
    description: 'استاندارد امنیت داده‌های صنعت کارت پرداخت',
  },
  {
    icon: FileCheck,
    title: 'ISO 27001',
    description: 'سیستم مدیریت امنیت اطلاعات',
  },
  {
    icon: Lock,
    title: 'SSL Certificate',
    description: 'رمزنگاری انتقال داده‌ها',
  },
];

const securityFeatures = [
  {
    icon: Server,
    title: 'سرورهای امن',
    description: 'میزبانی در دیتاسنترهای داخلی با بالاترین استانداردها',
  },
  {
    icon: Eye,
    title: 'نظارت ۲۴/۷',
    description: 'پایش لحظه‌ای سیستم‌ها و شناسایی تهدیدات',
  },
  {
    icon: Fingerprint,
    title: 'احراز هویت زیست‌سنجی',
    description: 'ورود امن با اثر انگشت و تشخیص چهره',
  },
];

export default function Security() {
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
    <section id="security" ref={sectionRef} className="relative py-24 bg-gradient-to-b from-[#0A1628] to-[#0d1d35]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #D4AF37 25%, transparent 25%), linear-gradient(-45deg, #D4AF37 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D4AF37 75%), linear-gradient(-45deg, transparent 75%, #D4AF37 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
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
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-gray-300">امنیت و اعتماد</span>
          </div>
          
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            استانداردهای <span className="text-gradient-gold">بین‌المللی امنیت</span>
          </h2>
          
          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.2s',
            }}
          >
            پارس پی با رعایت استانداردهای جهانی امنیت پرداخت، اطلاعات و دارایی شما را در بالاترین سطح محافظت می‌کند
          </p>
        </div>

        {/* Certifications */}
        <div
          className="grid md:grid-cols-3 gap-6 mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 0.3s',
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card rounded-2xl p-8 text-center hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <cert.icon className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>
              <p className="text-gray-400">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div
          className="glass-card rounded-3xl p-8 lg:p-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 0.4s',
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                لایه‌های امنیتی <span className="text-[#D4AF37]">چندگانه</span>
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                سیستم امنیتی پارس پی از چندین لایه محافظتی تشکیل شده است که هر لایه به عنوان سدی در برابر تهدیدات احتمالی عمل می‌کند. این معماری چندلایه، امنیت کامل را برای دارایی‌های دیجیتال شما تضمین می‌کند.
              </p>
              
              <div className="space-y-4">
                {securityFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold/20 rounded-3xl blur-3xl" />
              <div className="relative glass-card rounded-3xl p-8">
                <div className="space-y-6">
                  {/* Security Layers Visualization */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="text-white">رمزنگاری انتها به انتها</span>
                    </div>
                    <span className="text-green-400 text-sm">فعال</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-white">فایروال پیشرفته</span>
                    </div>
                    <span className="text-green-400 text-sm">فعال</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Eye className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-white">نظارت لحظه‌ای</span>
                    </div>
                    <span className="text-green-400 text-sm">فعال</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <Fingerprint className="w-5 h-5 text-orange-400" />
                      </div>
                      <span className="text-white">احراز هویت زیست‌سنجی</span>
                    </div>
                    <span className="text-green-400 text-sm">فعال</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-6 flex items-center justify-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 font-medium">همه سیستم‌های امنیتی فعال هستند</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
