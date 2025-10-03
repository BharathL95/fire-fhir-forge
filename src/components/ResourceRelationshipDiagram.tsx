import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ResourceNode = ({ name, variant = 'default' }: { name: string; variant?: 'primary' | 'secondary' | 'default' }) => {
  const styles = {
    primary: 'px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-semibold shadow-card',
    secondary: 'px-3 py-2 rounded-full bg-primary/10 border border-primary/20',
    default: 'px-3 py-2 rounded-full bg-card border border-border'
  };
  
  return <div className={styles[variant]}>{name}</div>;
};

const RelationshipArrow = ({ label, className = '' }: { label: string; className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <ArrowRight className="w-4 h-4 text-muted-foreground" />
    <span className="text-xs text-muted-foreground italic mt-0.5">{label}</span>
  </div>
);

export const ResourceRelationshipDiagram = () => {
  return (
    <Card className="p-6 bg-gradient-hero border-primary/20">
      <h3 className="text-lg font-semibold mb-6 text-center">Here is an example of how some FHIR resources connect</h3>
      
      <div className="flex flex-col items-center gap-6">
        {/* Patient at top */}
        <ResourceNode name="Patient" variant="primary" />
        
        {/* First level - direct Patient relationships */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {/* Left branch: Encounter */}
          <div className="flex flex-col items-center gap-3">
            <RelationshipArrow label="has" />
            <ResourceNode name="Encounter" variant="secondary" />
            
            <div className="flex gap-4 mt-3">
              <div className="flex flex-col items-center gap-2">
                <RelationshipArrow label="includes" />
                <ResourceNode name="Procedure" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <RelationshipArrow label="includes" />
                <ResourceNode name="Observation" />
              </div>
            </div>
          </div>
          
          {/* Middle branch: Condition */}
          <div className="flex flex-col items-center gap-3">
            <RelationshipArrow label="has" />
            <ResourceNode name="Condition" variant="secondary" />
            
            <div className="flex flex-col items-center gap-2 mt-3">
              <RelationshipArrow label="supports" />
              <ResourceNode name="Observation" />
            </div>
          </div>
          
          {/* Right branch: MedicationRequest */}
          <div className="flex flex-col items-center gap-3">
            <RelationshipArrow label="subject" />
            <ResourceNode name="MedicationRequest" variant="secondary" />
            
            <div className="flex gap-4 mt-3">
              <div className="flex flex-col items-center gap-2">
                <RelationshipArrow label="prescribes" />
                <ResourceNode name="Medication" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <RelationshipArrow label="authored by" />
                <ResourceNode name="Practitioner" />
                <RelationshipArrow label="member of" className="mt-2" />
                <ResourceNode name="Organization" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground text-center mt-8">
        Resources reference each other via <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">Reference</code> fields, 
        creating a connected healthcare data graph.
      </p>
    </Card>
  );
};
