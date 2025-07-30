import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Star, Send, Lightbulb, TrendingUp, Target } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

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
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary to-[hsl(var(--business-blue))] text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
                Стратегия и Инновации
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Gaziza<br />
                <span className="text-[hsl(var(--business-blue-dark))]">Nurtuganova</span>
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Привет! Я Газиза Нуртуганова, менеджер по стратегии и инновациям из Лондона.
                Помогаю стартапам и компаниям достигать новых высот через стратегическое планирование и инновационные решения.
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
            <h2 className="text-4xl font-bold mb-4">Мои Услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Предлагаю комплексные решения для развития вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--business-blue))] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Go-to-market стратегия</CardTitle>
                <CardDescription>для стартапов</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Разработка комплексной стратегии выхода на рынок с учетом особенностей вашего продукта и целевой аудитории.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--business-blue))] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Маркетинг и развитие</CardTitle>
                <CardDescription>продаж</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Построение эффективных маркетинговых воронок и систем продаж для максимизации конверсии и роста выручки.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--business-blue))] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Рост и масштабирование</CardTitle>
                <CardDescription>продукта</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Оптимизация продуктовых процессов и создание стратегий масштабирования для устойчивого долгосрочного роста.
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
            <h2 className="text-4xl font-bold mb-4">Отзывы Клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о моей работе</p>
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
                  "Отличный специалист, рекомендую! Газиза помогла нам разработать стратегию выхода на новый рынок."
                </blockquote>
                <footer className="text-muted-foreground">— Клиент А</footer>
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
                  "Очень доволен работой, всё быстро и качественно. Результаты превзошли ожидания."
                </blockquote>
                <footer className="text-muted-foreground">— Клиент Б</footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Связаться со мной</h2>
            <p className="text-xl text-muted-foreground">
              Готов обсудить ваш проект и найти лучшие решения
            </p>
          </div>
          
          <Card className="border-0 shadow-[var(--shadow-card)]">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (xxx) xxx-xx-xx"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-[hsl(var(--business-blue))] hover:bg-[hsl(var(--business-blue-dark))] text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Отправить сообщение
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
            Стратегия и инновации для вашего успеха
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
