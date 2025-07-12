import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@vibrantnav.com',
      subtitle: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'San Francisco, CA',
      subtitle: 'Come say hello at our HQ'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Get In </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to enhance your web navigation? Let's discuss your project 
            and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-background/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input 
                  placeholder="Project inquiry" 
                  className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={5}
                  className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200 resize-none"
                />
              </div>
              
              <Button 
                className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-200"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Let's start a conversation</h3>
              <p className="text-muted-foreground">
                We're here to help bring your navigation ideas to life. Whether you need 
                a complete redesign or just want to add some interactive elements, 
                we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="bg-background/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-primary font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;