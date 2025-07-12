import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Layers, Monitor, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored navigation solutions built with modern frameworks and best practices.',
      features: ['React Components', 'TypeScript Support', 'Custom Animations']
    },
    {
      icon: Layers,
      title: 'Design Systems',
      description: 'Comprehensive design systems with consistent navigation patterns across platforms.',
      features: ['Component Libraries', 'Style Guides', 'Brand Consistency']
    },
    {
      icon: Monitor,
      title: 'Responsive Solutions',
      description: 'Multi-device navigation that works seamlessly across all screen sizes.',
      features: ['Mobile Optimization', 'Touch Interactions', 'Progressive Enhancement']
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive navigation solutions that elevate your web presence 
            and enhance user engagement across all platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;