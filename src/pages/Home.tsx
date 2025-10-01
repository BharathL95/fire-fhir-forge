import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Flame, BookOpen, Code, Zap } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
              <Flame className="w-4 h-4" />
              <span className="text-sm font-medium">Ignite your FHIR knowledge</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-glow to-primary">
              FHIR Fighter
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Master healthcare interoperability through <span className="text-foreground font-semibold">interactive exploration</span> and <span className="text-foreground font-semibold">hands-on practice</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="gradient-fire text-lg px-8 shadow-fire hover:shadow-elevation transition-smooth"
                onClick={() => navigate('/resources')}
              >
                <Flame className="w-5 h-5 mr-2" />
                Start Exploring
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 border-2"
                onClick={() => window.open('http://hl7.org/fhir/R4/', '_blank')}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                FHIR Spec
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Fight the <span className="text-primary">FHIR</span> with the right tools
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex p-4 rounded-2xl gradient-fire mb-6 shadow-fire">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Resource Explorer</h3>
                <p className="text-muted-foreground">
                  Deep dive into FHIR resource schemas with interactive trees and real examples
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="inline-flex p-4 rounded-2xl gradient-fire mb-6 shadow-fire">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Live Validation</h3>
                <p className="text-muted-foreground">
                  See how data types and cardinality work with instant feedback
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="inline-flex p-4 rounded-2xl gradient-fire mb-6 shadow-fire">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Learning</h3>
                <p className="text-muted-foreground">
                  Get from zero to understanding FHIR faster than ever before
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to extinguish confusion?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start exploring FHIR resources and become a healthcare data hero
            </p>
            <Button 
              size="lg" 
              className="gradient-fire text-lg px-12 shadow-fire hover:shadow-elevation transition-smooth"
              onClick={() => navigate('/resources')}
            >
              <Flame className="w-5 h-5 mr-2" />
              Jump In
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
