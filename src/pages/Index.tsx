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
    heroTitle: "Ваша карьера — это не путь, который вы находите.",
    heroSubtitle: "Это мир, который вы строите.",
    heroDescription: "Я помогаю амбициозным основателям и профессионалам перестать искать «правильную» роль и начать строить жизнь и бизнес, верные их собственной истории.",
    heroButton: "Узнайте, как я помогаю",
    aboutTitle: "Обо мне",
    aboutIntro: "Консультант из Лондона, помогающий основателям стартапов с go-to-market стратегией, ростом и развитием бизнеса. Мой опыт охватывает корпоративные инновации в банковской сфере (ЕБРР, LBG), маркетинг и развитие бизнеса в топ-консалтинговых фирмах (PWC), и AI продуктовую стратегию и GTM в ранних технологических стартапах (Cresta AI). Я соединяю миры традиционных институтов и гибкости Кремниевой долины.",
    aboutStoryTitle: "Мой путь не был прямой линией. Он был выкован на четырех континентах.",
    aboutStory: "Всё началось с билета в одну сторону из моего дома в Казахстане в Лондон, без страховки и с мечтой построить жизнь на собственных условиях. Этот первый прыжок научил меня всему о стойкости, адаптации и искусстве строительства мира с нуля. Этот компас привёл меня к руководству маркетингом в Нигерии, к получению MBA от MIT в Бостоне, и к работе с передовыми AI стартапами в Кремниевой долине. После лет глобальных приключений я оказалась обратно в корпоративном мире. Несмотря на успех на бумаге, я чувствовала глубокое разобщение. Я поняла, что конечный риск — это не выход на свой собственный путь; это потеря себя, оставаясь в месте, где ты не принадлежишь. Этот момент стал катализатором для окончательной интеграции всех частей моей истории в единую, объединённую миссию: помочь другим строить свои собственные миры.",
    servicesTitle: "Как мы можем работать вместе",
    servicesSubtitle: "Я выступаю в качестве вашего дробного стратегического партнёра, привнося строгость топ-консультанта и гибкость стартап-оператора для решения ваших самых критических вызовов.",
    service1Title: "Для основателей и стартапов на ранней стадии",
    service1Description: "Я помогаю вам преодолеть разрыв между видением и исполнением. Мой фокус на построении надёжных, клиентоориентированных стратегий, которые стимулируют рост, включая Go-to-Market стратегию, поддержку маркетинга и продаж, и масштабируемое планирование бизнеса и операций.",
    service2Title: "Для устоявшихся компаний и консалтинговых фирм",
    service2Description: "Я предоставляю экспертную поддержку по запросу для проектов, требующих уникального сочетания стратегического понимания и практического исполнения, особенно в областях трансформации бизнеса, картирования клиентского пути и финтех инноваций.",
    testimonialsTitle: "Что говорят мои клиенты и коллеги",
    testimonial1: "«У Газизы редкая способность видеть как большую стратегическую картину, так и тонкие операционные детали, необходимые для выполнения работы. Её глобальная перспектива была неоценима.»",
    testimonial2: "«Работа с Газизой была мастер-классом ясности. Она помогла нам разобрать сложную проблему и построить план выхода на рынок, который дал уверенность всей нашей команде.»",
    insightsTitle: "Последние идеи",
    contactTitle: "Готовы построить свой план?",
    contactDescription: "Если моя история резонирует с вами, и вы готовы построить бизнес, который одновременно влиятелен и аутентичен, я приглашаю вас связаться. Давайте начнём с бесплатного 30-минутного ознакомительного звонка, чтобы изучить, как я могу помочь вам в вашем пути.",
    contactButton: "Забронируйте бесплатный ознакомительный звонок",
    nameLabel: "Имя",
    emailLabel: "Email",
    phoneLabel: "Телефон",
    messageLabel: "Сообщение",
    namePlaceholder: "Ваше имя",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "+7 (xxx) xxx-xx-xx",
    messagePlaceholder: "Расскажите о вашем проекте...",
    sendButton: "Отправить сообщение",
    footerTagline: "© 2024 Газиза Нуртуганова. Все права защищены."
  },
  en: {
    heroTitle: "Your Career Isn't a Path You Find.",
    heroSubtitle: "It's a World You Build.",
    heroDescription: "I help ambitious founders and professionals stop searching for the \"right\" role and start building a life and business true to their own story.",
    heroButton: "Discover How I Help",
    aboutTitle: "About Me",
    aboutIntro: "London-based consultant helping startup founders with go-to-market strategy, growth, and business development. My background spans corporate innovation in banking (EBRD, LBG), marketing and business development in top consulting firms (PWC), and AI Product Strategy & GTM at early-stage tech startups (Cresta AI). I bridge the worlds of traditional institutions and Silicon Valley agility.",
    aboutStoryTitle: "My journey wasn't a straight line. It was forged across four continents.",
    aboutStory: "It started with a one-way ticket from my home in Kazakhstan to London, with no safety net and a dream of building a life on my own terms. That first leap taught me everything about resilience, adaptation, and the art of building a world from scratch. That compass led me to lead marketing in Nigeria, to earn an MBA from MIT in Boston, and to work with cutting-edge AI startups in Silicon Valley. After years of global adventures, I found myself back in the corporate world. Despite the success on paper, I felt a deep disconnect. I realized the ultimate risk isn't venturing out on your own; it's losing yourself by staying in a place you don't belong. That moment was the catalyst to finally integrate all the pieces of my story into a single, unified mission: to help others build their own worlds.",
    servicesTitle: "How We Can Work Together",
    servicesSubtitle: "I act as your fractional strategy partner, bringing the rigor of a top-tier consultant and the agility of a startup operator to solve your most critical challenges.",
    service1Title: "For Early-Stage Founders & Startups",
    service1Description: "I help you bridge the gap between vision and execution. My focus is on building robust, customer-centric strategies that drive growth, including Go-to-Market Strategy, Marketing & Sales Enablement, and scalable Business & Operations Planning.",
    service2Title: "For Established Companies & Consulting Firms",
    service2Description: "I provide on-demand, expert support for projects requiring a unique blend of strategic insight and hands-on execution, particularly in areas of business transformation, customer journey mapping, and fintech innovation.",
    testimonialsTitle: "What My Clients & Colleagues Say",
    testimonial1: "\"Gaziza has a rare ability to see both the big strategic picture and the fine operational details needed to get things done. Her global perspective was invaluable.\"",
    testimonial2: "\"Working with Gaziza was a masterclass in clarity. She helped us deconstruct a complex problem and build a go-to-market plan that gave our entire team confidence.\"",
    insightsTitle: "Latest Insights",
    contactTitle: "Ready to Build Your Blueprint?",
    contactDescription: "If my story resonates and you're ready to build a business that is both impactful and authentic, I invite you to connect. Let's start with a complimentary 30-minute discovery call to explore how I can help you on your journey.",
    contactButton: "Book Your Free Discovery Call",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    messageLabel: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "+44 (xxx) xxx-xxxx",
    messagePlaceholder: "Tell me about your project...",
    sendButton: "Send Message",
    footerTagline: "© 2024 Gaziza Nurtuganova. All Rights Reserved."
  },
  kz: {
    heroTitle: "Сіздің мансабыңыз сіз тапқан жол емес.",
    heroSubtitle: "Бұл сіз құратын әлем.",
    heroDescription: "Мен амбициялы негізгі құрушылар мен мамандарға \"дұрыс\" рөлді іздеуді тоқтатып, өз тарихына сай өмір мен бизнес құруға көмектесемін.",
    heroButton: "Мен қалай көмектесетінімді біліңіз",
    aboutTitle: "Мен туралы",
    aboutIntro: "Лондонда тұратын консультант, стартап негізгі құрушыларға go-to-market стратегиясы, өсу және бизнес дамыту бойынша көмектесемін. Менің тәжірибем банк саласындағы корпоративтік инновацияларды (ЕБДБ, LBG), топ-консалтинг фирмаларында маркетинг пен бизнес дамытуды (PWC), және ерте кезеңдегі технологиялық стартаптарда AI өнім стратегиясы мен GTM-ді (Cresta AI) қамтиды. Мен дәстүрлі институттар мен Кремний алқабының ептілігі әлемдерін байланыстырамын.",
    aboutStoryTitle: "Менің жолым түзу сызық болған жоқ. Ол төрт континентте қалыптасты.",
    aboutStory: "Бәрі Қазақстандағы үйімнен Лондонға бір жақты билетпен басталды, ешқандай қауіпсіздік торысыз және өз шарттарымда өмір құру арманымен. Сол алғашқы секіру маған төзімділік, бейімделу және нөлден әлем құру өнері туралы бәрін үйретті. Сол компас мені Нигерияда маркетингті басқаруға, Бостондағы MIT-тен MBA алуға және Кремний алқабындағы озық AI стартаптарымен жұмыс істеуге алып барды. Жылдар бойы жаһандық оқиғалардан кейін мен корпоративтік әлемге қайта оралдым. Қағазда табысқа қарамастан, мен терең ажырасуды сездім. Мен түпкілікті тәуекел жеке жолыңызға шығу емес екенін түсіндім; бұл сіз тиесілі емес жерде қалу арқылы өзіңізді жоғалту. Сол сәт менің тарихымның барлық бөліктерін бір, біртұтас миссияға түпкілікті интеграциялау үшін катализатор болды: басқаларға өз әлемдерін құруға көмектесу.",
    servicesTitle: "Біз қалай бірге жұмыс істей аламыз",
    servicesSubtitle: "Мен сіздің бөлшек стратегиялық серіктесіңіз ретінде әрекет етемін, топ деңгейдегі консультанттың қатаңдығы мен стартап операторының ептілігін сіздің ең критикалық міндеттеріңізді шешу үшін әкеліп отырмын.",
    service1Title: "Ерте кезеңдегі негізгі құрушылар және стартаптар үшін",
    service1Description: "Мен сізге көзқарас пен орындау арасындағы алшақтықты жоюға көмектесемін. Менің назарым өсуді ынталандыратын берік, клиентке бағытталған стратегияларды құруға, оның ішінде Go-to-Market стратегиясы, маркетинг пен сату қолдауы және масштабталатын бизнес пен операциялық жоспарлауға бағытталған.",
    service2Title: "Орныққан компаниялар және консалтинг фирмалары үшін",
    service2Description: "Мен стратегиялық түсіну мен практикалық орындаудың бірегей үйлесімін талап ететін жобалар үшін сұраныс бойынша сарапшы қолдауын ұсынамын, әсіресе бизнесті трансформациялау, клиент жолының картографиясы және финтех инновациялар салаларында.",
    testimonialsTitle: "Менің клиенттерім мен әріптестерім не дейді",
    testimonial1: "\"Газизада үлкен стратегиялық көріністі де, жұмысты орындау үшін қажетті нәзік операциялық мәліметтерді де көру қабілеті сирек кездеседі. Оның жаһандық көзқарасы бағаланбайтын болды.\"",
    testimonial2: "\"Газизамен жұмыс істеу айқындық мастер-класы болды. Ол бізге күрделі мәселені талдауға және бүкіл командамызға сенімділік берген нарыққа шығу жоспарын құруға көмектесті.\"",
    insightsTitle: "Соңғы идеялар",
    contactTitle: "Өз жоспарыңызды құруға дайынсыз ба?",
    contactDescription: "Егер менің тарихым сізбен дауыссыз болса және сіз әсер етуші де, түпнұсқа да болатын бизнес құруға дайын болсаңыз, мен сізді байланысуға шақырамын. Сіздің сапарыңызда мен қалай көмектесе алатынымды зерттеу үшін тегін 30 минуттық танысу қоңырауынан бастайық.",
    contactButton: "Тегін танысу қоңырауын брондаңыз",
    nameLabel: "Аты",
    emailLabel: "Email",
    phoneLabel: "Телефон",
    messageLabel: "Хабарлама",
    namePlaceholder: "Сіздің атыңыз",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "+7 (xxx) xxx-xx-xx",
    messagePlaceholder: "Жобаңыз туралы айтыңыз...",
    sendButton: "Хабарлама жіберу",
    footerTagline: "© 2024 Газиза Нұртұғанова. Барлық құқықтар қорғалған."
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
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {t.heroTitle}
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[hsl(var(--business-blue-dark))]">
                {t.heroSubtitle}
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                {t.heroDescription}
              </p>
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.heroButton}
              </Button>
              <div className="flex flex-col gap-3 text-primary-foreground/80 mt-8">
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

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">{t.aboutTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t.aboutIntro}
            </p>
            <h3 className="text-2xl font-semibold mb-6 italic">
              {t.aboutStoryTitle}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-left">
              {t.aboutStory}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.servicesTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.servicesSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--business-blue))] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{t.service1Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
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
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t.service2Description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.testimonialsTitle}</h2>
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
                  {t.testimonial1}
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
                  {t.testimonial2}
                </blockquote>
                <footer className="text-muted-foreground">— {language === 'en' ? 'Client B' : language === 'kz' ? 'Клиент Б' : 'Клиент Б'}</footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.insightsTitle}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-muted/50 rounded-lg mb-4 flex items-center justify-center">
                  <Lightbulb className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategic Planning for Startups</h3>
                <p className="text-muted-foreground mb-4">Essential frameworks for building go-to-market strategies that drive sustainable growth...</p>
                <Button variant="ghost" className="p-0 h-auto text-primary">Read More</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-muted/50 rounded-lg mb-4 flex items-center justify-center">
                  <Globe className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Building Global Teams</h3>
                <p className="text-muted-foreground mb-4">Lessons learned from managing diverse teams across four continents...</p>
                <Button variant="ghost" className="p-0 h-auto text-primary">Read More</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-muted/50 rounded-lg mb-4 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Scaling AI Products</h3>
                <p className="text-muted-foreground mb-4">How to navigate the unique challenges of bringing AI solutions to market...</p>
                <Button variant="ghost" className="p-0 h-auto text-primary">Read More</Button>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.contactDescription}
            </p>
          </div>
          
          <div className="text-center mb-8">
            <Button 
              className="bg-[hsl(var(--business-blue))] hover:bg-[hsl(var(--business-blue-dark))] text-white px-8 py-3 text-lg"
              onClick={() => window.open('mailto:gaziza.nurtuganova@sloan.mit.edu', '_blank')}
            >
              {t.contactButton}
            </Button>
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
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Gaziza Nurtuganova</h3>
            <div className="flex justify-center gap-6 text-sm text-primary-foreground/80 mb-4">
              <span>London, UK</span>
              <span>+44 7565253222</span>
              <span>gaziza.nurtuganova@sloan.mit.edu</span>
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                LinkedIn
              </Button>
            </div>
          </div>
          <div className="text-center text-sm text-primary-foreground/60 border-t border-white/20 pt-6">
            <p>{t.footerTagline}</p>
            <div className="mt-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground/60 hover:text-primary-foreground/80 h-auto p-0"
              >
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
