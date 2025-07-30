import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Star, Send, Lightbulb, TrendingUp, Target, Globe } from "lucide-react";

type Language = 'ru' | 'en' | 'kz';

const translations = {
  ru: {
    badge: "Стратегия и Инновации",
    intro: "Привет! Я Газиза Нуртуганова, менеджер по стратегии и инновациям из Лондона. Помогаю стартапам и компаниям достигать новых высот через стратегическое планирование и инновационные решения.",
    servicesTitle: "Мои Услуги",
    servicesSubtitle: "Предлагаю комплексные решения для развития вашего бизнеса",
    service1Title: "Go-to-market стратегия",
    service1Subtitle: "для стартапов",
    service1Description: "Разработка комплексной стратегии выхода на рынок с учетом особенностей вашего продукта и целевой аудитории.",
    service2Title: "Маркетинг и развитие",
    service2Subtitle: "продаж",
    service2Description: "Построение эффективных маркетинговых воронок и систем продаж для максимизации конверсии и роста выручки.",
    service3Title: "Рост и масштабирование",
    service3Subtitle: "продукта",
    service3Description: "Оптимизация продуктовых процессов и создание стратегий масштабирования для устойчивого долгосрочного роста.",
    testimonialsTitle: "Отзывы Клиентов",
    testimonialsSubtitle: "Что говорят о моей работе",
    testimonial1: "Отличный специалист, рекомендую! Газиза помогла нам разработать стратегию выхода на новый рынок.",
    testimonial2: "Очень доволен работой, всё быстро и качественно. Результаты превзошли ожидания.",
    contactTitle: "Связаться со мной",
    contactSubtitle: "Готов обсудить ваш проект и найти лучшие решения",
    nameLabel: "Имя",
    emailLabel: "Email",
    phoneLabel: "Телефон",
    messageLabel: "Сообщение",
    namePlaceholder: "Ваше имя",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "+7 (xxx) xxx-xx-xx",
    messagePlaceholder: "Расскажите о вашем проекте...",
    sendButton: "Отправить сообщение",
    footerTagline: "Стратегия и инновации для вашего успеха"
  },
  en: {
    badge: "Strategy and Innovation",
    intro: "Hi! I'm Gaziza Nurtuganova, a strategy and innovation manager from London. I help startups and companies reach new heights through strategic planning and innovative solutions.",
    servicesTitle: "My Services",
    servicesSubtitle: "Offering comprehensive solutions for your business development",
    service1Title: "Go-to-market strategy",
    service1Subtitle: "for startups",
    service1Description: "Development of comprehensive market entry strategies tailored to your product features and target audience.",
    service2Title: "Marketing and sales",
    service2Subtitle: "development",
    service2Description: "Building effective marketing funnels and sales systems to maximize conversion and revenue growth.",
    service3Title: "Product growth",
    service3Subtitle: "and scaling",
    service3Description: "Optimizing product processes and creating scaling strategies for sustainable long-term growth.",
    testimonialsTitle: "Client Testimonials",
    testimonialsSubtitle: "What people say about my work",
    testimonial1: "Excellent specialist, highly recommend! Gaziza helped us develop a strategy for entering a new market.",
    testimonial2: "Very satisfied with the work, everything was fast and high-quality. Results exceeded expectations.",
    contactTitle: "Contact Me",
    contactSubtitle: "Ready to discuss your project and find the best solutions",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    messageLabel: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "+44 (xxx) xxx-xxxx",
    messagePlaceholder: "Tell me about your project...",
    sendButton: "Send Message",
    footerTagline: "Strategy and innovation for your success"
  },
  kz: {
    badge: "Стратегия және Инновация",
    intro: "Сәлем! Мен Газиза Нұртұғанова, Лондондағы стратегия және инновация менеджерімін. Стартаптар мен компанияларға стратегиялық жоспарлау және инновациялық шешімдер арқылы жаңа биіктерге жетуге көмектесемін.",
    servicesTitle: "Менің Қызметтерім",
    servicesSubtitle: "Бизнесіңізді дамыту үшін кешенді шешімдер ұсынамын",
    service1Title: "Нарыққа шығу стратегиясы",
    service1Subtitle: "стартаптар үшін",
    service1Description: "Өніміңіздің ерекшеліктері мен мақсатты аудиторияны ескере отырып, нарыққа шығудың кешенді стратегиясын әзірлеу.",
    service2Title: "Маркетинг және сату",
    service2Subtitle: "дамыту",
    service2Description: "Конверсияны және кіріс өсімін максималды арттыру үшін тиімді маркетингтік воронкалар мен сату жүйелерін құру.",
    service3Title: "Өнімнің өсуі",
    service3Subtitle: "және масштабтау",
    service3Description: "Тұрақты ұзақ мерзімді өсу үшін өнім процестерін оңтайландыру және масштабтау стратегияларын жасау.",
    testimonialsTitle: "Клиенттердің Пікірлері",
    testimonialsSubtitle: "Менің жұмысым туралы не дейді",
    testimonial1: "Керемет маман, ұсынамын! Газиза бізге жаңа нарыққа шығу стратегиясын әзірлеуге көмектесті.",
    testimonial2: "Жұмыстан өте риза, бәрі жылдам және сапалы. Нәтижелер күткеннен де асып түсті.",
    contactTitle: "Менімен Байланысу",
    contactSubtitle: "Жобаңызды талқылауға және ең жақсы шешімдерді табуға дайынмын",
    nameLabel: "Аты",
    emailLabel: "Email",
    phoneLabel: "Телефон",
    messageLabel: "Хабарлама",
    namePlaceholder: "Сіздің атыңыз",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "+7 (xxx) xxx-xx-xx",
    messagePlaceholder: "Жобаңыз туралы айтыңыз...",
    sendButton: "Хабарлама жіберу",
    footerTagline: "Сіздің табысыңыз үшін стратегия және инновация"
  }
};

const Index = () => {
  const [language, setLanguage] = useState<Language>('ru');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const t = translations[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex gap-2">
          <Button
            variant={language === 'ru' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setLanguage('ru')}
            className="text-white hover:bg-white/20 h-8 px-3"
          >
            Русский
          </Button>
          <Button
            variant={language === 'en' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setLanguage('en')}
            className="text-white hover:bg-white/20 h-8 px-3"
          >
            English
          </Button>
          <Button
            variant={language === 'kz' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setLanguage('kz')}
            className="text-white hover:bg-white/20 h-8 px-3"
          >
            Қазақша
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary to-[hsl(var(--business-blue))] text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
                {t.badge}
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Gaziza<br />
                <span className="text-[hsl(var(--business-blue-dark))]">Nurtuganova</span>
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                {t.intro}
              </p>
              <div className="flex flex-col gap-3 text-primary-foreground/80">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>London, UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+44 7565253222</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>gaziza.nurtuganova@sloan.mit.edu</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Avatar className="w-72 h-72 border-4 border-white/20 shadow-2xl">
                <AvatarImage src="" alt="Gaziza Nurtuganova" />
                <AvatarFallback className="text-6xl bg-white/10 text-white">GN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.servicesTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.servicesSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--business-blue))] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{t.service1Title}</CardTitle>
                <CardDescription>{t.service1Subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {t.service1Description}
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--business-blue))] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{t.service2Title}</CardTitle>
                <CardDescription>{t.service2Subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {t.service2Description}
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--business-blue))] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{t.service3Title}</CardTitle>
                <CardDescription>{t.service3Subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {t.service3Description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.testimonialsTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.testimonialsSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4 italic">
                  "{t.testimonial1}"
                </blockquote>
                <footer className="text-muted-foreground">— {language === 'en' ? 'Client A' : language === 'kz' ? 'Клиент А' : 'Клиент А'}</footer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4 italic">
                  "{t.testimonial2}"
                </blockquote>
                <footer className="text-muted-foreground">— {language === 'en' ? 'Client B' : language === 'kz' ? 'Клиент Б' : 'Клиент Б'}</footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.contactTitle}</h2>
            <p className="text-xl text-muted-foreground">
              {t.contactSubtitle}
            </p>
          </div>
          
          <Card className="border-0 shadow-[var(--shadow-card)]">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.nameLabel}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.namePlaceholder}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.emailLabel}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.emailPlaceholder}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.phoneLabel}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t.phonePlaceholder}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{t.messageLabel}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.messagePlaceholder}
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-[hsl(var(--business-blue))] hover:bg-[hsl(var(--business-blue-dark))] text-white">
                  <Send className="w-4 h-4 mr-2" />
                  {t.sendButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-4">Gaziza Nurtuganova</h3>
          <p className="text-primary-foreground/80 mb-6">
            {t.footerTagline}
          </p>
          <div className="flex justify-center gap-6 text-sm text-primary-foreground/60">
            <span>London, UK</span>
            <span>+44 7565253222</span>
            <span>gaziza.nurtuganova@sloan.mit.edu</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
