export interface ResourceExample {
  resourceId: string;
  difficulty: 'simple' | 'moderate' | 'complex';
  data: any;
}

export const patientExamples: ResourceExample[] = [
  {
    resourceId: 'patient',
    difficulty: 'simple',
    data: {
      resourceType: 'Patient',
      id: 'example',
      name: [
        {
          use: 'official',
          family: 'Chalmers',
          given: ['Peter', 'James']
        }
      ],
      gender: 'male',
      birthDate: '1974-12-25'
    }
  },
  {
    resourceId: 'patient',
    difficulty: 'moderate',
    data: {
      resourceType: 'Patient',
      id: 'example-moderate',
      identifier: [
        {
          system: 'http://hospital.example.org',
          value: '12345'
        }
      ],
      name: [
        {
          use: 'official',
          family: 'Chalmers',
          given: ['Peter', 'James']
        },
        {
          use: 'nickname',
          given: ['Jim']
        }
      ],
      gender: 'male',
      birthDate: '1974-12-25',
      telecom: [
        {
          system: 'phone',
          value: '(03) 5555 6473',
          use: 'work'
        },
        {
          system: 'email',
          value: 'peter.chalmers@example.org',
          use: 'work'
        }
      ],
      address: [
        {
          use: 'home',
          line: ['534 Erewhon St'],
          city: 'PleasantVille',
          state: 'Vic',
          postalCode: '3999'
        }
      ]
    }
  },
  {
    resourceId: 'patient',
    difficulty: 'complex',
    data: {
      resourceType: 'Patient',
      id: 'example-complex',
      identifier: [
        {
          use: 'usual',
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'MR'
              }
            ]
          },
          system: 'urn:oid:1.2.36.146.595.217.0.1',
          value: '12345',
          period: {
            start: '2001-05-06'
          },
          assigner: {
            display: 'Acme Healthcare'
          }
        }
      ],
      active: true,
      name: [
        {
          use: 'official',
          family: 'Chalmers',
          given: ['Peter', 'James']
        },
        {
          use: 'usual',
          given: ['Jim']
        },
        {
          use: 'maiden',
          family: 'Windsor',
          given: ['Peter', 'James'],
          period: {
            end: '2002'
          }
        }
      ],
      telecom: [
        {
          system: 'phone',
          value: '(03) 5555 6473',
          use: 'work',
          rank: 1
        },
        {
          system: 'phone',
          value: '(03) 3410 5613',
          use: 'mobile',
          rank: 2
        },
        {
          system: 'email',
          value: 'peter.chalmers@example.org',
          use: 'home'
        }
      ],
      gender: 'male',
      birthDate: '1974-12-25',
      deceasedBoolean: false,
      address: [
        {
          use: 'home',
          type: 'both',
          text: '534 Erewhon St PeasantVille, Rainbow, Vic  3999',
          line: ['534 Erewhon St'],
          city: 'PleasantVille',
          district: 'Rainbow',
          state: 'Vic',
          postalCode: '3999',
          period: {
            start: '1974-12-25'
          }
        }
      ],
      maritalStatus: {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
            code: 'M'
          }
        ]
      },
      contact: [
        {
          relationship: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
                  code: 'N'
                }
              ]
            }
          ],
          name: {
            family: 'du Marché',
            given: ['Bénédicte']
          },
          telecom: [
            {
              system: 'phone',
              value: '+33 (237) 998327'
            }
          ],
          address: {
            use: 'home',
            type: 'both',
            line: ['534 Erewhon St'],
            city: 'PleasantVille',
            district: 'Rainbow',
            state: 'Vic',
            postalCode: '3999',
            period: {
              start: '1974-12-25'
            }
          },
          gender: 'female',
          period: {
            start: '2012'
          }
        }
      ]
    }
  }
];

export const resourceExamples: Record<string, ResourceExample[]> = {
  patient: patientExamples
};
