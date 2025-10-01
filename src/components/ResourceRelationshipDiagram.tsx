import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const ResourceRelationshipDiagram = () => {
  return (
    <Card className="p-6 bg-gradient-hero border-primary/20">
      <h3 className="text-lg font-semibold mb-4 text-center">How FHIR Resources Connect</h3>
      <div className="flex flex-col gap-4">
        {/* Patient at the center */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm shadow-card">
            Patient
          </div>
        </div>

        {/* Arrows pointing down */}
        <div className="flex justify-center">
          <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
        </div>

        {/* Clinical Resources */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="px-3 py-2 rounded-md bg-primary/10 border border-primary/20 text-sm">
            Observation
          </div>
          <div className="px-3 py-2 rounded-md bg-primary/10 border border-primary/20 text-sm">
            Condition
          </div>
          <div className="px-3 py-2 rounded-md bg-primary/10 border border-primary/20 text-sm">
            Procedure
          </div>
        </div>

        {/* Arrows pointing down */}
        <div className="flex justify-center">
          <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
        </div>

        {/* Administrative & Support Resources */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="px-3 py-2 rounded-md bg-secondary/10 border border-secondary/20 text-sm">
            Encounter
          </div>
          <div className="px-3 py-2 rounded-md bg-secondary/10 border border-secondary/20 text-sm">
            Practitioner
          </div>
          <div className="px-3 py-2 rounded-md bg-secondary/10 border border-secondary/20 text-sm">
            Organization
          </div>
        </div>

        {/* Arrows pointing down */}
        <div className="flex justify-center">
          <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
        </div>

        {/* Medication & Reports */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="px-3 py-2 rounded-md bg-accent/20 border border-accent/30 text-sm">
            MedicationRequest
          </div>
          <div className="px-3 py-2 rounded-md bg-accent/20 border border-accent/30 text-sm">
            Medication
          </div>
          <div className="px-3 py-2 rounded-md bg-accent/20 border border-accent/30 text-sm">
            DiagnosticReport
          </div>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground text-center mt-6">
        Resources reference each other via <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">Reference</code> fields, 
        creating a connected healthcare data graph.
      </p>
    </Card>
  );
};
