import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ru' | 'kz'>('en');
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const translations = {
    en: {
      nav: ['EN', 'RU', 'KZ'],
      hero: {
        title: "Your Career Isn't a Path You Find. It's a World You Build.",
        subtitle: "I help ambitious founders and professionals stop searching for the \"right\" role and start building a life and business true to their own story.",
        cta: "Discover How I Help"
      },
      about: {
        title: "About Me",
        intro: "London-based consultant helping startup founders with go-to-market strategy, growth, and business development. My background spans corporate innovation in banking (EBRD, LBG), marketing and business development in top consulting firms (PWC), and AI Product Strategy & GTM at early-stage tech startups (Cresta AI). I bridge the worlds of traditional institutions and Silicon Valley agility.",
        journey: "My journey wasn't a straight line. It was forged across four continents.",
        humble: "Humble Beginnings",
        humbleText: "I come from humble beginnings. I grew up in a modest Kazakh family where my parents were blue-collar workers. I attended a state school with dreams that felt much bigger than my surroundings. The struggles of my parents in Soviet and post-Soviet Kazakhstan gave me the drive to dream, educate myself, and work hard, realizing I had no one but myself to reach those dreams.",
        compass: "The Compass of Adventure",
        compassText: "That first leap taught me the most important lesson: The most rewarding journeys begin when you trade a predictable map for a compass of your own making. This belief became my compass as I navigated high-profile client engagements at PwC London, led Go-to-Market strategies in Lagos, Nigeria, earned an MBA from MIT Sloan in Boston, and worked with cutting-edge AI startups in Silicon Valley.",
        lost: "I'd Built a World-Class CV. But I'd Lost Myself in It.",
        lostText: "After years of global adventures, I found myself back in post-Brexit, post-Covid London, climbing the ladder at a prestigious bank. On paper, I had \"made it.\" In reality, I felt more disconnected than ever. The uninspiring corporate mission, the toxic leadership, the lack of meaningful work - it was the opposite of everything I had worked so hard to build. The ultimate risk isn't venturing out on your own; it's losing yourself by staying in a place you don't belong."
      },
      services: {
        title: "How We Can Work Together",
        subtitle: "I act as your fractional strategy partner, bringing the rigor of a top-tier consultant and the agility of a startup operator to solve your most critical challenges.",
        startups: {
          title: "For Early-Stage Founders & Startups",
          description: "I help you bridge the gap between vision and execution. My focus is on building robust, customer-centric strategies that drive growth, including Go-to-Market Strategy, Marketing & Sales Enablement, and scalable Business & Operations Planning.",
          services: ["Go-to-Market Strategy", "Marketing & Sales Enablement", "Scalable Business & Operations Planning"]
        },
        companies: {
          title: "For Established Companies & Consulting Firms",
          description: "I provide on-demand, expert support for projects requiring a unique blend of strategic insight and hands-on execution, particularly in areas of business transformation, customer journey mapping, and fintech innovation.",
          services: ["Business Transformation", "Customer Journey Mapping", "Fintech Innovation"]
        }
      },
      testimonials: {
        title: "What My Clients & Colleagues Say",
        quote: "Gaziza has a rare ability to see both the big strategic picture and the fine operational details needed to get things done. Her global perspective was invaluable.",
        author: "Sarah Johnson",
        position: "CEO, TechStartup"
      },
      contact: {
        title: "Ready to Build Your Blueprint?",
        subtitle: "If my story resonates and you're ready to build a business that is both impactful and authentic, I invite you to connect. Let's start with a complimentary 30-minute discovery call to explore how I can help you on your journey.",
        location: "London, UK",
        email: "gaziza.nurtuganova@sloan.mit.edu",
        cta: "Book Your Free Discovery Call",
        form: {
          name: "Name",
          email: "Email",
          phone: "Phone",
          message: "Message",
          send: "Send Message"
        }
      },
      cookies: {
        text: "This website uses cookies to ensure you get the best experience on our site. By continuing to browse, you agree to our use of cookies.",
        learn: "Learn more",
        accept: "Accept",
        decline: "Decline"
      }
    },
    ru: {
      nav: ['EN', 'RU', 'KZ'],
      hero: {
        title: "Ваша карьера - это не путь, который вы находите. Это мир, который вы строите.",
        subtitle: "Я помогаю амбициозным основателям и профессионалам прекратить поиски «правильной» роли и начать строить жизнь и бизнес, верные их собственной истории.",
        cta: "Узнайте, как я помогаю"
      },
      about: {
        title: "Обо мне",
        intro: "Консультант из Лондона, помогающий основателям стартапов с выходом на рынок, ростом и развитием бизнеса.",
        journey: "Мой путь не был прямым. Он был выкован на четырех континентах.",
        humble: "Скромное начало",
        humbleText: "Я из скромной семьи. Вырос в простой казахской семье, где родители были рабочими.",
        compass: "Компас приключений",
        compassText: "Этот первый скачок научил меня самому важному уроку: самые полезные путешествия начинаются, когда вы меняете предсказуемую карту на собственный компас.",
        lost: "Я построил CV мирового класса. Но потерял себя в нем.",
        lostText: "После лет глобальных приключений я оказался в пост-Brexit, пост-Covid Лондоне, поднимаясь по лестнице в престижном банке."
      },
      services: {
        title: "Как мы можем работать вместе",
        subtitle: "Я выступаю в качестве вашего частичного стратегического партнера, привнося строгость консультанта высшего уровня и гибкость стартап-оператора.",
        startups: {
          title: "Для основателей и стартапов на ранней стадии",
          description: "Я помогаю вам преодолеть разрыв между видением и исполнением.",
          services: ["Стратегия выхода на рынок", "Маркетинг и поддержка продаж", "Масштабируемое планирование бизнеса"]
        },
        companies: {
          title: "Для устоявшихся компаний и консалтинговых фирм",
          description: "Я предоставляю экспертную поддержку по требованию для проектов.",
          services: ["Трансформация бизнеса", "Картирование клиентского пути", "Финтех-инновации"]
        }
      },
      testimonials: {
        title: "Что говорят мои клиенты и коллеги",
        quote: "У Газизы редкая способность видеть как большую стратегическую картину, так и мелкие операционные детали.",
        author: "Сара Джонсон",
        position: "Генеральный директор, TechStartup"
      },
      contact: {
        title: "Готовы построить свой план?",
        subtitle: "Если моя история откликается вам, и вы готовы строить бизнес, который одновременно влиятелен и аутентичен, приглашаю связаться.",
        location: "Лондон, Великобритания",
        email: "gaziza.nurtuganova@sloan.mit.edu",
        cta: "Забронировать бесплатный звонок",
        form: {
          name: "Имя",
          email: "Email",
          phone: "Телефон",
          message: "Сообщение",
          send: "Отправить сообщение"
        }
      },
      cookies: {
        text: "Этот сайт использует куки для обеспечения лучшего опыта.",
        learn: "Узнать больше",
        accept: "Принять",
        decline: "Отклонить"
      }
    },
    kz: {
      nav: ['EN', 'RU', 'KZ'],
      hero: {
        title: "Сіздің мансабыңыз - бұл сіз табатын жол емес. Бұл сіз құратын әлем.",
        subtitle: "Мен амбициялы негізін қалаушылар мен мамандарға \"дұрыс\" рөлді іздеуді тоқтатуға және өз тарихына сәйкес өмір мен бизнес құруға көмектесемін.",
        cta: "Қалай көмектесетінімді білу"
      },
      about: {
        title: "Мен туралы",
        intro: "Лондон базалы кеңесші стартап негізін қалаушыларға нарыққа шығу стратегиясы, өсу және бизнес дамыту бойынша көмектеседі.",
        journey: "Менің жолым түзу болған жоқ. Ол төрт құрлыққа таралды.",
        humble: "Қарапайым бастау",
        humbleText: "Мен қарапайым отбасыдан шыққанмын. Ата-анам жұмысшы болған қазақ отбасында өстім.",
        compass: "Серуендеу компасы",
        compassText: "Бұл алғашқы секіру маған ең маңызды сабақты үйретті: ең пайдалы саяхаттар болжамды картаны өз компасыңызға ауыстырғаннан басталады.",
        lost: "Мен әлемдік деңгейдегі резюме жасадым. Бірақ өзімді жоғалттым.",
        lostText: "Көп жылдық жаһандық серуендерден кейін мен Brexit және Covid кейінгі Лондонда беделді банктегі сатыға көтерілдім."
      },
      services: {
        title: "Қалай бірге жұмыс істей аламыз",
        subtitle: "Мен сіздің фракциялық стратегиялық серіктесіңіз ретінде әрекет етемін, жоғары деңгейлі кеңесшінің қатаңдығын және стартап операторының икемділігін әкеледі.",
        startups: {
          title: "Ерте кезеңдегі негізін қалаушылар мен стартаптарға",
          description: "Көзқарас пен орындау арасындағы алшақтықты жоюға көмектесемін.",
          services: ["Нарыққа шығу стратегиясы", "Маркетинг және сату қолдауы", "Масштабталатын бизнес жоспарлау"]
        },
        companies: {
          title: "Орнықты компаниялар мен консалтинг фирмаларына",
          description: "Жобалар үшін сұраныс бойынша сарапшы қолдау көрсетемін.",
          services: ["Бизнес трансформациясы", "Клиент жолын картографиялау", "Финтех инновациялар"]
        }
      },
      testimonials: {
        title: "Менің клиенттерім мен әріптестерім не дейді",
        quote: "Газизаның үлкен стратегиялық көріністі де, жұмысты аяқтау үшін қажет операциялық мәліметтерді де көру қабілеті сирек кездеседі.",
        author: "Сара Джонсон",
        position: "Бас директор, TechStartup"
      },
      contact: {
        title: "Өз жоспарыңызды құруға дайынсыз ба?",
        subtitle: "Егер менің тарихым сізге жақын болса және сіз әсерлі де шынайы бизнес құруға дайын болсаңыз, байланысуға шақырамын.",
        location: "Лондон, Ұлыбритания",
        email: "gaziza.nurtuganova@sloan.mit.edu",
        cta: "Тегін қоңырау брондау",
        form: {
          name: "Аты",
          email: "Email",
          phone: "Телефон",
          message: "Хабарлама",
          send: "Хабарлама жіберу"
        }
      },
      cookies: {
        text: "Бұл веб-сайт сізге ең жақсы тәжірибе беру үшін cookies пайдаланады.",
        learn: "Көбірек білу",
        accept: "Қабылдау",
        decline: "Бас тарту"
      }
    }
  };

  const t = translations[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {t.cookies.text}{' '}
              <a href="#" className="text-primary hover:underline">
                {t.cookies.learn}
              </a>
            </p>
            <div className="flex gap-2">
              <Button
                variant="default"
                size="sm"
                onClick={() => setShowCookieBanner(false)}
              >
                {t.cookies.accept}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCookieBanner(false)}
              >
                {t.cookies.decline}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-40">
        <div className="flex gap-1 bg-card/80 backdrop-blur-sm rounded-lg p-1 border border-border">
          {(['en', 'ru', 'kz'] as const).map((lang, index) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                language === lang
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              {t.nav[index]}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.hero.subtitle}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              {t.hero.cta}
            </Button>
          </div>
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700"
                alt="Gaziza Nurtuganova - Strategic Consultant"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            {t.about.intro}
          </p>

          <h3 className="text-2xl font-semibold mb-8">{t.about.journey}</h3>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4">{t.about.humble}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.humbleText}
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Kazakhstan countryside landscape"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="International business meeting"
                className="rounded-lg shadow-lg md:order-first"
              />
              <div>
                <h4 className="text-xl font-semibold mb-4">{t.about.compass}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.compassText}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4">{t.about.lost}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.lostText}
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Corporate office building at dusk"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">{t.services.startups.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.services.startups.description}
                </p>
                <ul className="space-y-2">
                  {t.services.startups.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">{t.services.companies.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.services.companies.description}
                </p>
                <ul className="space-y-2">
                  {t.services.companies.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">{t.testimonials.title}</h2>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-lg italic text-muted-foreground mb-6 leading-relaxed">
                "{t.testimonials.quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold">{t.testimonials.author}</div>
                  <div className="text-sm text-muted-foreground">{t.testimonials.position}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">{t.contact.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-primary hover:underline"
                >
                  {t.contact.email}
                </a>
              </div>
              <Button size="lg" className="w-full sm:w-auto">
                {t.contact.cta}
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder={t.contact.form.name}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder={t.contact.form.email}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder={t.contact.form.phone}
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder={t.contact.form.message}
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;