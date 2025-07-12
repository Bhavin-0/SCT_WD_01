import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: 'The Future of Web Navigation',
      excerpt: 'Exploring emerging trends in navigation design and their impact on user experience.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      category: 'Design',
      readTime: '5 min read'
    },
    {
      title: 'Mobile-First Navigation Strategies',
      excerpt: 'Best practices for creating navigation that works beautifully on mobile devices.',
      author: 'Mike Rodriguez',
      date: '2024-01-12',
      category: 'Development',
      readTime: '7 min read'
    },
    {
      title: 'Accessibility in Modern Navigation',
      excerpt: 'How to ensure your navigation is inclusive and accessible to all users.',
      author: 'Emma Thompson',
      date: '2024-01-08',
      category: 'Accessibility',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Latest </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, techniques, and best practices 
            in navigation design and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={post.title}
              className="bg-secondary/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-200"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;