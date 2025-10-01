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

export const resourceSchemas: Record<string, ResourceSchema> = {
  patient: patientSchema
};
