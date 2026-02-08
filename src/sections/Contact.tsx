import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: MapPin,
    title: 'آدرس',
    content: 'تهران، خیابان اشرفی اصفهانی، پارک علم و فناوری',
  },
  {
    icon: Phone,
    title: 'تلفن',
    content: '۰۲۱-۲۲۰۳۷۵۵۰',
  },
  {
    icon: Mail,
    title: 'ایمیل',
    content: 'info@parspay.ir',
  },
  {
    icon: Clock,
    title: 'ساعات کاری',
    content: 'شنبه تا چهارشنبه ۸ صبح تا ۶ عصر',
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Mail className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-gray-300">تماس با ما</span>
          </div>
          
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            با ما در <span className="text-gradient-gold">تماس باشید</span>
          </h2>
          
          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.2s',
            }}
          >
            برای همکاری، مشاوره یا دریافت اطلاعات بیشتر با ما تماس بگیرید
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div
            className="lg:col-span-2 space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease 0.3s',
            }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">اطلاعات تماس</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card rounded-2xl p-4">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-[#1E3A5F]/50 to-[#0A1628] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                  <span className="text-gray-400 text-sm">تهران، خیابان اشرفی اصفهانی</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease 0.4s',
            }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">فرم تماس</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">پیام شما ارسال شد</h4>
                  <p className="text-gray-400">با تشکر از تماس شما. به زودی با شما تماس خواهیم گرفت.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">نام و نام خانوادگی</Label>
                      <Input
                        id="name"
                        placeholder="نام خود را وارد کنید"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">ایمیل</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">شماره تماس</Label>
                      <Input
                        id="phone"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">موضوع</Label>
                      <Input
                        id="subject"
                        placeholder="موضوع پیام"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">پیام</Label>
                    <Textarea
                      id="message"
                      placeholder="پیام خود را بنویسید..."
                      rows={5}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-gold text-[#0A1628] hover:opacity-90 font-semibold py-6 shadow-gold transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5 ml-2" />
                    ارسال پیام
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
