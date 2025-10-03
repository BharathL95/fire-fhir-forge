import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Flame, BookOpen, Code, Zap, ArrowRight, ArrowLeft, Users, Hospital, FileText, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface OnboardingFlowProps {
  onComplete: () => void;
}

const OnboardingFlow = ({ onComplete }: OnboardingFlowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const totalSlides = 4;

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSkip = () => {
    onComplete();
    navigate('/resources');
  };

  const handleComplete = () => {
    onComplete();
    navigate('/resources');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slides = [
    {
      icon: <Flame className="w-16 h-16 text-primary" />,
      title: "Welcome to FHIR Fighter 🔥",
      subtitle: "A hands-on learning tool to master healthcare data interoperability",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            FHIR (Fast Healthcare Interoperability Resources) is the modern standard 
            for exchanging healthcare information electronically.
          </p>
          <div className="bg-card/50 rounded-lg p-6 space-y-3">
            <p className="font-semibold text-foreground">This tool will help you:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Understand FHIR resource structures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Practice building queries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Visualize how healthcare data connects</span>
              </li>
            </ul>
          </div>
          <p className="text-lg font-semibold text-foreground">Let's get started!</p>
        </div>
      )
    },
    {
      icon: <Activity className="w-16 h-16 text-primary" />,
      title: "What is FHIR?",
      subtitle: "The common language for healthcare data exchange",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            FHIR is an HL7 standard that defines how healthcare information 
            can be exchanged between different computer systems.
          </p>
          <div className="bg-card/50 rounded-lg p-6 space-y-4">
            <p className="font-semibold text-foreground">Think of it as a common language for:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Electronic Health Records (EHRs)</span>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Mobile health apps</span>
              </div>
              <div className="flex items-center gap-3">
                <Hospital className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Healthcare analytics platforms</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Insurance systems</span>
              </div>
            </div>
          </div>
          <div className="bg-primary/10 rounded-lg p-6 space-y-2">
            <p className="font-semibold text-foreground">Key Benefits:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Modern RESTful API design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Based on web standards (JSON, XML, HTTP)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Modular "resources" that represent healthcare data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Widely adopted across the industry</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      icon: <Hospital className="w-16 h-16 text-primary" />,
      title: "Real-World Use Cases",
      subtitle: "Where FHIR makes an impact in healthcare",
      content: (
        <div className="space-y-4">
          <div className="bg-card/50 rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-primary" />
              <h4 className="font-semibold text-foreground">Patient Access</h4>
            </div>
            <p className="text-muted-foreground">Patients retrieving their own health records through mobile apps</p>
            <p className="text-sm text-muted-foreground italic">Example: Download lab results, view medications, check immunizations</p>
          </div>

          <div className="bg-card/50 rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <Hospital className="w-6 h-6 text-primary" />
              <h4 className="font-semibold text-foreground">Provider Integration</h4>
            </div>
            <p className="text-muted-foreground">Hospitals sharing patient data with specialists and care coordinators</p>
            <p className="text-sm text-muted-foreground italic">Example: ER sends patient history to admitting physician</p>
          </div>

          <div className="bg-card/50 rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-6 h-6 text-primary" />
              <h4 className="font-semibold text-foreground">Payer Operations</h4>
            </div>
            <p className="text-muted-foreground">Insurance companies accessing claims and clinical data</p>
            <p className="text-sm text-muted-foreground italic">Example: Prior authorization, care gap analysis</p>
          </div>

          <div className="bg-card/50 rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-6 h-6 text-primary" />
              <h4 className="font-semibold text-foreground">Research & Public Health</h4>
            </div>
            <p className="text-muted-foreground">Aggregating data for population health studies and reporting</p>
            <p className="text-sm text-muted-foreground italic">Example: COVID-19 tracking, immunization records, outbreak monitoring</p>
          </div>
        </div>
      )
    },
    {
      icon: <Code className="w-16 h-16 text-primary" />,
      title: "How to Use This Tool",
      subtitle: "Everything you need to master FHIR",
      content: (
        <div className="space-y-4">
          <div className="bg-card/50 rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <h4 className="font-semibold text-foreground">🔍 Resource Explorer</h4>
            </div>
            <p className="text-muted-foreground">Browse 20+ FHIR resources and see their structure</p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• Interactive schema trees</li>
              <li>• Real JSON examples</li>
              <li>• Build your own valid resources</li>
            </ul>
          </div>

          <div className="bg-card/50 rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-6 h-6 text-primary" />
              <h4 className="font-semibold text-foreground">🧩 Resource Connections</h4>
            </div>
            <p className="text-muted-foreground">Visualize how FHIR resources relate to each other</p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• See the big picture</li>
              <li>• Understand patient-centric data model</li>
            </ul>
          </div>

          <div className="bg-card/50 rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <Code className="w-6 h-6 text-primary" />
              <h4 className="font-semibold text-foreground">💻 Interactive Examples</h4>
            </div>
            <p className="text-muted-foreground">See real JSON examples with different complexity levels</p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• Basic to complex examples</li>
              <li>• Learn by doing</li>
            </ul>
          </div>

          <div className="text-center pt-4">
            <p className="text-lg font-semibold text-foreground">Ready to become a FHIR expert?</p>
          </div>
        </div>
      )
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Skip Button */}
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            onClick={handleSkip}
            className="text-muted-foreground hover:text-foreground"
          >
            Skip to Tool
          </Button>
        </div>

        {/* Main Card */}
        <div className="bg-card rounded-2xl shadow-elevation border p-8 md:p-12 animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl gradient-fire shadow-fire">
              {currentSlideData.icon}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
            {currentSlideData.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-center text-muted-foreground mb-8">
            {currentSlideData.subtitle}
          </p>

          {/* Content */}
          <div className="mb-12">
            {currentSlideData.content}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <Progress value={((currentSlide + 1) / totalSlides) * 100} className="mb-8" />

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentSlide === 0}
              className="flex-1 md:flex-none"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="text-sm text-muted-foreground">
              {currentSlide + 1} / {totalSlides}
            </div>

            <Button
              onClick={handleNext}
              className="gradient-fire shadow-fire flex-1 md:flex-none"
            >
              {currentSlide === totalSlides - 1 ? (
                <>
                  Start Learning
                  <Flame className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Keyboard Hint */}
        <div className="text-center mt-4 text-sm text-muted-foreground">
          Use arrow keys to navigate
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
