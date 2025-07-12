import { Card, CardContent } from '@/components/ui/card';
import { Zap, Smartphone, Palette } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized animations and smooth transitions that enhance user experience without compromising performance.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Fully responsive design with intuitive mobile navigation and touch-friendly interactions.'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Modern aesthetics with gradient backgrounds, glass morphism, and carefully crafted visual effects.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">About Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Navigation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with modern web technologies, our navigation system combines beautiful design 
            with exceptional functionality to create an unforgettable user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-secondary/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;