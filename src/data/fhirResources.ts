export interface FHIRResource {
  id: string;
  name: string;
  category: 'Clinical' | 'Administrative' | 'Financial' | 'Infrastructure' | 'Foundation';
  description: string;
  icon: string;
  officialUrl: string;
}

export const fhirResources: FHIRResource[] = [
  {
    id: 'patient',
    name: 'Patient',
    category: 'Administrative',
    description: 'Demographics and other administrative information about an individual receiving care',
    icon: 'User',
    officialUrl: 'http://hl7.org/fhir/R4/patient.html'
  },
  {
    id: 'observation',
    name: 'Observation',
    category: 'Clinical',
    description: 'Measurements and simple assertions made about a patient, device or other subject',
    icon: 'Activity',
    officialUrl: 'http://hl7.org/fhir/R4/observation.html'
  },
  {
    id: 'encounter',
    name: 'Encounter',
    category: 'Administrative',
    description: 'An interaction between a patient and healthcare provider(s) for the purpose of providing care',
    icon: 'Calendar',
    officialUrl: 'http://hl7.org/fhir/R4/encounter.html'
  },
  {
    id: 'practitioner',
    name: 'Practitioner',
    category: 'Administrative',
    description: 'A person who is directly or indirectly involved in the provisioning of healthcare',
    icon: 'UserCircle',
    officialUrl: 'http://hl7.org/fhir/R4/practitioner.html'
  },
  {
    id: 'condition',
    name: 'Condition',
    category: 'Clinical',
    description: 'A clinical condition, problem, diagnosis, or other event, situation, issue, or concern',
    icon: 'AlertCircle',
    officialUrl: 'http://hl7.org/fhir/R4/condition.html'
  },
  {
    id: 'medication-request',
    name: 'MedicationRequest',
    category: 'Clinical',
    description: 'An order or request for both supply of the medication and the instructions for administration',
    icon: 'Pill',
    officialUrl: 'http://hl7.org/fhir/R4/medicationrequest.html'
  },
  {
    id: 'procedure',
    name: 'Procedure',
    category: 'Clinical',
    description: 'An action that is or was performed on or for a patient',
    icon: 'Scissors',
    officialUrl: 'http://hl7.org/fhir/R4/procedure.html'
  },
  {
    id: 'diagnostic-report',
    name: 'DiagnosticReport',
    category: 'Clinical',
    description: 'The findings and interpretation of diagnostic tests performed on patients',
    icon: 'FileText',
    officialUrl: 'http://hl7.org/fhir/R4/diagnosticreport.html'
  },
  {
    id: 'organization',
    name: 'Organization',
    category: 'Administrative',
    description: 'A formally or informally recognized grouping of people or organizations',
    icon: 'Building',
    officialUrl: 'http://hl7.org/fhir/R4/organization.html'
  },
  {
    id: 'medication',
    name: 'Medication',
    category: 'Clinical',
    description: 'A medication for use in the healthcare setting',
    icon: 'Syringe',
    officialUrl: 'http://hl7.org/fhir/R4/medication.html'
  }
];

export const getCategoryColor = (category: FHIRResource['category']) => {
  const colors = {
    Clinical: 'bg-primary/10 text-primary border-primary/20',
    Administrative: 'bg-secondary/10 text-secondary border-secondary/20',
    Financial: 'bg-success/10 text-success border-success/20',
    Infrastructure: 'bg-accent/10 text-accent-foreground border-accent/20',
    Foundation: 'bg-muted text-muted-foreground border-border'
  };
  return colors[category];
};
