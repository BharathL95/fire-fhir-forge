export interface SchemaElement {
  name: string;
  path: string;
  dataType: string;
  cardinality: string;
  isRequired: boolean;
  description: string;
  children?: SchemaElement[];
}

export interface ResourceSchema {
  resourceType: string;
  elements: SchemaElement[];
}

// Patient resource schema (simplified for MVP)
export const patientSchema: ResourceSchema = {
  resourceType: 'Patient',
  elements: [
    {
      name: 'resourceType',
      path: 'Patient.resourceType',
      dataType: 'string',
      cardinality: '1..1',
      isRequired: true,
      description: 'Type of resource - always "Patient"'
    },
    {
      name: 'id',
      path: 'Patient.id',
      dataType: 'id',
      cardinality: '0..1',
      isRequired: false,
      description: 'Logical id of this artifact'
    },
    {
      name: 'identifier',
      path: 'Patient.identifier',
      dataType: 'Identifier[]',
      cardinality: '0..*',
      isRequired: false,
      description: 'An identifier for this patient',
      children: [
        {
          name: 'system',
          path: 'Patient.identifier.system',
          dataType: 'uri',
          cardinality: '0..1',
          isRequired: false,
          description: 'The namespace for the identifier value'
        },
        {
          name: 'value',
          path: 'Patient.identifier.value',
          dataType: 'string',
          cardinality: '0..1',
          isRequired: false,
          description: 'The value that is unique'
        }
      ]
    },
    {
      name: 'name',
      path: 'Patient.name',
      dataType: 'HumanName[]',
      cardinality: '0..*',
      isRequired: false,
      description: 'A name associated with the patient',
      children: [
        {
          name: 'use',
          path: 'Patient.name.use',
          dataType: 'code',
          cardinality: '0..1',
          isRequired: false,
          description: 'usual | official | temp | nickname | anonymous | old | maiden'
        },
        {
          name: 'family',
          path: 'Patient.name.family',
          dataType: 'string',
          cardinality: '0..1',
          isRequired: false,
          description: 'Family name (surname)'
        },
        {
          name: 'given',
          path: 'Patient.name.given',
          dataType: 'string[]',
          cardinality: '0..*',
          isRequired: false,
          description: 'Given names (not always first)'
        }
      ]
    },
    {
      name: 'gender',
      path: 'Patient.gender',
      dataType: 'code',
      cardinality: '0..1',
      isRequired: false,
      description: 'male | female | other | unknown'
    },
    {
      name: 'birthDate',
      path: 'Patient.birthDate',
      dataType: 'date',
      cardinality: '0..1',
      isRequired: false,
      description: 'The date of birth for the individual'
    },
    {
      name: 'address',
      path: 'Patient.address',
      dataType: 'Address[]',
      cardinality: '0..*',
      isRequired: false,
      description: 'An address for the individual',
      children: [
        {
          name: 'use',
          path: 'Patient.address.use',
          dataType: 'code',
          cardinality: '0..1',
          isRequired: false,
          description: 'home | work | temp | old | billing'
        },
        {
          name: 'line',
          path: 'Patient.address.line',
          dataType: 'string[]',
          cardinality: '0..*',
          isRequired: false,
          description: 'Street name, number, direction & P.O. Box etc.'
        },
        {
          name: 'city',
          path: 'Patient.address.city',
          dataType: 'string',
          cardinality: '0..1',
          isRequired: false,
          description: 'Name of city, town etc.'
        },
        {
          name: 'state',
          path: 'Patient.address.state',
          dataType: 'string',
          cardinality: '0..1',
          isRequired: false,
          description: 'Sub-unit of country (abbreviations ok)'
        },
        {
          name: 'postalCode',
          path: 'Patient.address.postalCode',
          dataType: 'string',
          cardinality: '0..1',
          isRequired: false,
          description: 'Postal code for area'
        },
        {
          name: 'country',
          path: 'Patient.address.country',
          dataType: 'string',
          cardinality: '0..1',
          isRequired: false,
          description: 'Country (e.g. can be ISO 3166 2 or 3 letter code)'
        }
      ]
    },
    {
      name: 'telecom',
      path: 'Patient.telecom',
      dataType: 'ContactPoint[]',
      cardinality: '0..*',
      isRequired: false,
      description: 'A contact detail for the individual',
      children: [
        {
          name: 'system',
          path: 'Patient.telecom.system',
          dataType: 'code',
          cardinality: '0..1',
          isRequired: false,
          description: 'phone | fax | email | pager | url | sms | other'
        },
        {
          name: 'value',
          path: 'Patient.telecom.value',
          dataType: 'string',
          cardinality: '0..1',
          isRequired: false,
          description: 'The actual contact point details'
        },
        {
          name: 'use',
          path: 'Patient.telecom.use',
          dataType: 'code',
          cardinality: '0..1',
          isRequired: false,
          description: 'home | work | temp | old | mobile'
        }
      ]
    }
  ]
};

// Observation resource schema
export const observationSchema: ResourceSchema = {
  resourceType: 'Observation',
  elements: [
    {
      name: 'resourceType',
      path: 'Observation.resourceType',
      dataType: 'string',
      cardinality: '1..1',
      isRequired: true,
      description: 'Type of resource - always "Observation"'
    },
    {
      name: 'id',
      path: 'Observation.id',
      dataType: 'id',
      cardinality: '0..1',
      isRequired: false,
      description: 'Logical id of this artifact'
    },
    {
      name: 'status',
      path: 'Observation.status',
      dataType: 'code',
      cardinality: '1..1',
      isRequired: true,
      description: 'registered | preliminary | final | amended'
    },
    {
      name: 'code',
      path: 'Observation.code',
      dataType: 'CodeableConcept',
      cardinality: '1..1',
      isRequired: true,
      description: 'Type of observation (code / type)',
      children: [
        {
          name: 'coding',
          path: 'Observation.code.coding',
          dataType: 'Coding[]',
          cardinality: '0..*',
          isRequired: false,
          description: 'Code defined by a terminology system'
        },
        {
          name: 'text',
          path: 'Observation.code.text',
          dataType: 'string',
          cardinality: '0..1',
          isRequired: false,
          description: 'Plain text representation'
        }
      ]
    },
    {
      name: 'subject',
      path: 'Observation.subject',
      dataType: 'Reference(Patient)',
      cardinality: '0..1',
      isRequired: false,
      description: 'Who the observation is about'
    },
    {
      name: 'valueQuantity',
      path: 'Observation.valueQuantity',
      dataType: 'Quantity',
      cardinality: '0..1',
      isRequired: false,
      description: 'Actual result',
      children: [
        {
          name: 'value',
          path: 'Observation.valueQuantity.value',
          dataType: 'decimal',
          cardinality: '0..1',
          isRequired: false,
          description: 'Numerical value'
        },
        {
          name: 'unit',
          path: 'Observation.valueQuantity.unit',
          dataType: 'string',
          cardinality: '0..1',
          isRequired: false,
          description: 'Unit representation'
        }
      ]
    }
  ]
};

// Encounter resource schema
export const encounterSchema: ResourceSchema = {
  resourceType: 'Encounter',
  elements: [
    {
      name: 'resourceType',
      path: 'Encounter.resourceType',
      dataType: 'string',
      cardinality: '1..1',
      isRequired: true,
      description: 'Type of resource - always "Encounter"'
    },
    {
      name: 'status',
      path: 'Encounter.status',
      dataType: 'code',
      cardinality: '1..1',
      isRequired: true,
      description: 'planned | arrived | in-progress | finished'
    },
    {
      name: 'class',
      path: 'Encounter.class',
      dataType: 'Coding',
      cardinality: '1..1',
      isRequired: true,
      description: 'inpatient | outpatient | emergency'
    },
    {
      name: 'subject',
      path: 'Encounter.subject',
      dataType: 'Reference(Patient)',
      cardinality: '0..1',
      isRequired: false,
      description: 'The patient present at the encounter'
    },
    {
      name: 'participant',
      path: 'Encounter.participant',
      dataType: 'BackboneElement[]',
      cardinality: '0..*',
      isRequired: false,
      description: 'List of participants involved in the encounter'
    },
    {
      name: 'period',
      path: 'Encounter.period',
      dataType: 'Period',
      cardinality: '0..1',
      isRequired: false,
      description: 'The start and end time of the encounter'
    }
  ]
};

// Add other resource schemas (simplified for brevity)
export const practitionerSchema: ResourceSchema = {
  resourceType: 'Practitioner',
  elements: [
    {
      name: 'resourceType',
      path: 'Practitioner.resourceType',
      dataType: 'string',
      cardinality: '1..1',
      isRequired: true,
      description: 'Type of resource - always "Practitioner"'
    },
    {
      name: 'name',
      path: 'Practitioner.name',
      dataType: 'HumanName[]',
      cardinality: '0..*',
      isRequired: false,
      description: 'The name(s) associated with the practitioner'
    },
    {
      name: 'qualification',
      path: 'Practitioner.qualification',
      dataType: 'BackboneElement[]',
      cardinality: '0..*',
      isRequired: false,
      description: 'Certification, licenses, or training'
    }
  ]
};

export const conditionSchema: ResourceSchema = {
  resourceType: 'Condition',
  elements: [
    {
      name: 'resourceType',
      path: 'Condition.resourceType',
      dataType: 'string',
      cardinality: '1..1',
      isRequired: true,
      description: 'Type of resource - always "Condition"'
    },
    {
      name: 'code',
      path: 'Condition.code',
      dataType: 'CodeableConcept',
      cardinality: '0..1',
      isRequired: false,
      description: 'Identification of the condition'
    },
    {
      name: 'subject',
      path: 'Condition.subject',
      dataType: 'Reference(Patient)',
      cardinality: '1..1',
      isRequired: true,
      description: 'Who has the condition'
    }
  ]
};

export const medicationRequestSchema: ResourceSchema = {
  resourceType: 'MedicationRequest',
  elements: [
    {
      name: 'resourceType',
      path: 'MedicationRequest.resourceType',
      dataType: 'string',
      cardinality: '1..1',
      isRequired: true,
      description: 'Type of resource - always "MedicationRequest"'
    },
    {
      name: 'status',
      path: 'MedicationRequest.status',
      dataType: 'code',
      cardinality: '1..1',
      isRequired: true,
      description: 'active | completed | stopped'
    },
    {
      name: 'medicationCodeableConcept',
      path: 'MedicationRequest.medicationCodeableConcept',
      dataType: 'CodeableConcept',
      cardinality: '0..1',
      isRequired: false,
      description: 'Medication to be taken'
    },
    {
      name: 'subject',
      path: 'MedicationRequest.subject',
      dataType: 'Reference(Patient)',
      cardinality: '1..1',
      isRequired: true,
      description: 'Who medication is for'
    }
  ]
};

export const procedureSchema: ResourceSchema = {
  resourceType: 'Procedure',
  elements: [
    {
      name: 'resourceType',
      path: 'Procedure.resourceType',
      dataType: 'string',
      cardinality: '1..1',
      isRequired: true,
      description: 'Type of resource - always "Procedure"'
    },
    {
      name: 'status',
      path: 'Procedure.status',
      dataType: 'code',
      cardinality: '1..1',
      isRequired: true,
      description: 'preparation | in-progress | completed'
    },
    {
      name: 'code',
      path: 'Procedure.code',
      dataType: 'CodeableConcept',
      cardinality: '0..1',
      isRequired: false,
      description: 'Identification of the procedure'
    },
    {
      name: 'subject',
      path: 'Procedure.subject',
      dataType: 'Reference(Patient)',
      cardinality: '1..1',
      isRequired: true,
      description: 'Who the procedure was performed on'
    }
  ]
};

export const diagnosticReportSchema: ResourceSchema = {
  resourceType: 'DiagnosticReport',
  elements: [
    {
      name: 'resourceType',
      path: 'DiagnosticReport.resourceType',
      dataType: 'string',
      cardinality: '1..1',
      isRequired: true,
      description: 'Type of resource - always "DiagnosticReport"'
    },
    {
      name: 'status',
      path: 'DiagnosticReport.status',
      dataType: 'code',
      cardinality: '1..1',
      isRequired: true,
      description: 'registered | partial | final'
    },
    {
      name: 'code',
      path: 'DiagnosticReport.code',
      dataType: 'CodeableConcept',
      cardinality: '1..1',
      isRequired: true,
      description: 'Name/Code for this diagnostic report'
    },
    {
      name: 'subject',
      path: 'DiagnosticReport.subject',
      dataType: 'Reference(Patient)',
      cardinality: '0..1',
      isRequired: false,
      description: 'The subject of the report'
    }
  ]
};

export const organizationSchema: ResourceSchema = {
  resourceType: 'Organization',
  elements: [
    {
      name: 'resourceType',
      path: 'Organization.resourceType',
      dataType: 'string',
      cardinality: '1..1',
      isRequired: true,
      description: 'Type of resource - always "Organization"'
    },
    {
      name: 'name',
      path: 'Organization.name',
      dataType: 'string',
      cardinality: '0..1',
      isRequired: false,
      description: 'Name used for the organization'
    },
    {
      name: 'type',
      path: 'Organization.type',
      dataType: 'CodeableConcept[]',
      cardinality: '0..*',
      isRequired: false,
      description: 'Kind of organization'
    }
  ]
};

export const medicationSchema: ResourceSchema = {
  resourceType: 'Medication',
  elements: [
    {
      name: 'resourceType',
      path: 'Medication.resourceType',
      dataType: 'string',
      cardinality: '1..1',
      isRequired: true,
      description: 'Type of resource - always "Medication"'
    },
    {
      name: 'code',
      path: 'Medication.code',
      dataType: 'CodeableConcept',
      cardinality: '0..1',
      isRequired: false,
      description: 'Codes that identify this medication'
    },
    {
      name: 'form',
      path: 'Medication.form',
      dataType: 'CodeableConcept',
      cardinality: '0..1',
      isRequired: false,
      description: 'powder | tablets | capsule'
    }
  ]
};

export const resourceSchemas: Record<string, ResourceSchema> = {
  patient: patientSchema,
  observation: observationSchema,
  encounter: encounterSchema,
  practitioner: practitionerSchema,
  condition: conditionSchema,
  'medication-request': medicationRequestSchema,
  procedure: procedureSchema,
  'diagnostic-report': diagnosticReportSchema,
  organization: organizationSchema,
  medication: medicationSchema
};
