import { getRandomArrayElement } from '../utils';

const mockPoints = [
  {
    id: '6cb2a5d6-38de-4945-8bdb-04f2fad08414',
    basePrice: 5464,
    dateFrom: '2031-04-15T12:05:46.876Z',
    dateTo: '2031-04-16T01:05:46.876Z',
    destination: '4c421871-8534-473a-8c02-4a55174dd502',
    isFavorite: true,
    offers: [
      '656e1be2-47af-40bc-b6c3-1c9afb61a8a3'
    ],
    type: 'train'
  },
  {
    id: 'd56d2582-3f5b-4cdc-b26c-856f0830636f',
    basePrice: 1860,
    dateFrom: '2031-04-16T01:05:46.876Z',
    dateTo: '2031-04-16T17:05:46.876Z',
    destination: '4c421871-8534-473a-8c02-4a55174dd502',
    isFavorite: false,
    offers: [],
    type: 'train'
  },
  {
    id: '4a46cb9a-2bbb-445f-bd6c-3b8684e2a635',
    basePrice: 9087,
    dateFrom: '2031-04-16T17:05:46.876Z',
    dateTo: '2031-04-18T03:05:46.876Z',
    destination: '7c7b2e95-6e79-458f-a28f-2c82d4cf80ce',
    isFavorite: false,
    offers: [
      'c43c353d-6851-453c-82d2-d615938293da'
    ],
    type: 'drive'
  },
  {
    id: '0367d795-3467-4bf9-9d8f-d91daabff4ac',
    basePrice: 8611,
    dateFrom: '2031-04-18T03:05:46.876Z',
    dateTo: '2031-04-19T15:05:46.876Z',
    destination: '7120fbac-0f2c-45bb-a508-dd4eafe27448',
    isFavorite: true,
    offers: [
      'e478c33d-eecb-46f8-8e50-4385a8e40207',
      '06a7cebd-a4c1-46c9-bfdf-a96cdbe37443'
    ],
    type: 'check-in'
  },
  {
    id: '75e7930b-c3bc-466e-98cb-330fef9c4cd6',
    basePrice: 1016,
    dateFrom: '2031-04-19T15:05:46.876Z',
    dateTo: '2031-04-21T07:05:46.876Z',
    destination: '7120fbac-0f2c-45bb-a508-dd4eafe27448',
    isFavorite: true,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'b293e4d2-b620-41b0-bf7d-ccce423121fc',
    basePrice: 7236,
    dateFrom: '2031-04-21T07:05:46.876Z',
    dateTo: '2031-04-23T04:05:46.876Z',
    destination: '12994f51-bece-498c-8013-e785c49d17c5',
    isFavorite: true,
    offers: [
      '390caeca-392a-4d40-bbf8-0f321ca2b058',
      '3f93dbc1-3718-4544-a8b8-c7528033ec66',
      '2aeb2bb5-7fe5-43c3-a9fb-e3c410c80b5f'
    ],
    type: 'bus'
  },
  {
    id: 'f156ad00-555b-4943-9af0-929e86d1e9b4',
    basePrice: 5966,
    dateFrom: '2031-04-23T04:05:46.876Z',
    dateTo: '2031-04-23T11:05:46.876Z',
    destination: '4c421871-8534-473a-8c02-4a55174dd502',
    isFavorite: false,
    offers: [
      'bfa1933d-4823-488e-b728-728b6040dfdb',
      '656e1be2-47af-40bc-b6c3-1c9afb61a8a3'
    ],
    type: 'train'
  },
  {
    id: '3553ae34-8b39-46bf-a0df-732052140100',
    basePrice: 6674,
    dateFrom: '2031-04-23T11:05:46.876Z',
    dateTo: '2031-04-24T08:05:46.876Z',
    destination: '7120fbac-0f2c-45bb-a508-dd4eafe27448',
    isFavorite: true,
    offers: [
      '435f0764-45f1-46c7-b3d7-dbd524e8d81f',
      'b3840a0d-f863-4206-951a-865b650790c8',
      'e761e3e5-a403-468c-9336-100dcec9e758',
      '4b0e9a58-433b-48f3-ab84-9835f340c6eb',
      '4f539e61-2fa3-4159-b25d-8dbcfa14945a'
    ],
    type: 'flight'
  },
  {
    id: 'adcaba1c-c782-4f9d-bf8d-bffa86c28f8d',
    basePrice: 8224,
    dateFrom: '2031-04-24T08:05:46.876Z',
    dateTo: '2031-04-25T14:05:46.876Z',
    destination: '937f6259-85cd-4069-a123-38bcf856a6cd',
    isFavorite: true,
    offers: [
      'eaee9716-7884-4aef-8bc0-8804dcf08490',
      'e478c33d-eecb-46f8-8e50-4385a8e40207',
      '06a7cebd-a4c1-46c9-bfdf-a96cdbe37443'
    ],
    type: 'check-in'
  },
  {
    id: '40e26c4d-cd94-4521-8896-02cf8309799c',
    basePrice: 1747,
    dateFrom: '2031-04-25T14:05:46.876Z',
    dateTo: '2031-04-26T18:05:46.876Z',
    destination: '4c421871-8534-473a-8c02-4a55174dd502',
    isFavorite: false,
    offers: [
      '8369bbe4-466b-4d05-be10-1ed938c69461',
      'c43c353d-6851-453c-82d2-d615938293da'
    ],
    type: 'drive'
  },
  {
    id: '1cf3fa65-808e-44d8-a2bc-b9e6b93d7646',
    basePrice: 3819,
    dateFrom: '2031-04-26T18:05:46.876Z',
    dateTo: '2031-04-27T19:05:46.876Z',
    destination: '12994f51-bece-498c-8013-e785c49d17c5',
    isFavorite: false,
    offers: [
      '656e1be2-47af-40bc-b6c3-1c9afb61a8a3'
    ],
    type: 'train'
  },
  {
    id: '07a68f4b-b0e0-4c0c-adbe-445475d7791e',
    basePrice: 7543,
    dateFrom: '2031-04-27T19:05:46.876Z',
    dateTo: '2031-04-28T13:05:46.876Z',
    destination: '937f6259-85cd-4069-a123-38bcf856a6cd',
    isFavorite: true,
    offers: [
      '4f539e61-2fa3-4159-b25d-8dbcfa14945a'
    ],
    type: 'flight'
  },
  {
    id: 'c906121d-d763-4e89-8179-d64d34a14f81',
    basePrice: 1084,
    dateFrom: '2031-04-28T13:05:46.876Z',
    dateTo: '2031-04-28T20:05:46.876Z',
    destination: '937f6259-85cd-4069-a123-38bcf856a6cd',
    isFavorite: false,
    offers: [
      'eaee9716-7884-4aef-8bc0-8804dcf08490',
      'e478c33d-eecb-46f8-8e50-4385a8e40207',
      '06a7cebd-a4c1-46c9-bfdf-a96cdbe37443'
    ],
    type: 'check-in'
  },
  {
    id: '6648c37e-be06-400d-8943-38afd8b04f0a',
    basePrice: 7369,
    dateFrom: '2031-04-28T20:05:46.876Z',
    dateTo: '2031-04-30T20:05:46.876Z',
    destination: '4c421871-8534-473a-8c02-4a55174dd502',
    isFavorite: true,
    offers: [
      'e761e3e5-a403-468c-9336-100dcec9e758',
      '4b0e9a58-433b-48f3-ab84-9835f340c6eb',
      '4f539e61-2fa3-4159-b25d-8dbcfa14945a'
    ],
    type: 'flight'
  },
  {
    id: '7b3ba5c3-78a8-409f-8688-510729f38884',
    basePrice: 3194,
    dateFrom: '2031-04-30T20:05:46.876Z',
    dateTo: '2031-05-01T21:05:46.876Z',
    destination: '7c7b2e95-6e79-458f-a28f-2c82d4cf80ce',
    isFavorite: false,
    offers: [
      '5d3dd730-147d-44d2-a73e-4fe47e9eeaa0',
      'eaee9716-7884-4aef-8bc0-8804dcf08490',
      'e478c33d-eecb-46f8-8e50-4385a8e40207',
      '06a7cebd-a4c1-46c9-bfdf-a96cdbe37443'
    ],
    type: 'check-in'
  },
  {
    id: '14c6ba38-fca4-4b3d-bc7f-114dc174e3ef',
    basePrice: 8608,
    dateFrom: '2031-05-01T21:05:46.876Z',
    dateTo: '2031-05-03T14:05:46.876Z',
    destination: '7c7b2e95-6e79-458f-a28f-2c82d4cf80ce',
    isFavorite: true,
    offers: [],
    type: 'flight'
  },
  {
    id: 'c3fb1b87-f815-41d6-a1bc-a6f63587583d',
    basePrice: 6409,
    dateFrom: '2031-05-03T14:05:46.876Z',
    dateTo: '2031-05-04T14:05:46.876Z',
    destination: '937f6259-85cd-4069-a123-38bcf856a6cd',
    isFavorite: false,
    offers: [
      '2aeb2bb5-7fe5-43c3-a9fb-e3c410c80b5f'
    ],
    type: 'bus'
  },
  {
    id: 'c07c7711-0851-455e-8662-3d6873147096',
    basePrice: 9098,
    dateFrom: '2031-05-04T14:05:46.876Z',
    dateTo: '2031-05-06T11:05:46.876Z',
    destination: '937f6259-85cd-4069-a123-38bcf856a6cd',
    isFavorite: true,
    offers: [],
    type: 'ship'
  },
  {
    id: '93595702-0e8e-4110-b59d-019ec0492139',
    basePrice: 9043,
    dateFrom: '2031-05-06T11:05:46.876Z',
    dateTo: '2031-05-07T14:05:46.876Z',
    destination: '4c421871-8534-473a-8c02-4a55174dd502',
    isFavorite: true,
    offers: [],
    type: 'drive'
  },
  {
    id: '1752a6d0-9e5a-4b3e-a362-3c34301242b8',
    basePrice: 2294,
    dateFrom: '2031-05-07T14:05:46.876Z',
    dateTo: '2031-05-08T02:05:46.876Z',
    destination: '7c7b2e95-6e79-458f-a28f-2c82d4cf80ce',
    isFavorite: true,
    offers: [
      '78d6b46d-73b4-499f-865c-ae157b1e33e8',
      '31278519-8284-402a-8ff3-f599004863bc'
    ],
    type: 'taxi'
  },
  {
    id: 'a08e2582-dc06-45d8-8175-c795452e84de',
    basePrice: 934,
    dateFrom: '2031-05-08T02:05:46.876Z',
    dateTo: '2031-05-09T08:05:46.876Z',
    destination: '7c7b2e95-6e79-458f-a28f-2c82d4cf80ce',
    isFavorite: true,
    offers: [
      'c43c353d-6851-453c-82d2-d615938293da'
    ],
    type: 'drive'
  },
  {
    id: '8c7d3f4e-72a1-4cd3-a2f8-0420061c4989',
    basePrice: 2396,
    dateFrom: '2031-05-09T08:05:46.876Z',
    dateTo: '2031-05-09T17:05:46.876Z',
    destination: '12994f51-bece-498c-8013-e785c49d17c5',
    isFavorite: false,
    offers: [],
    type: 'drive'
  },
  {
    id: '672bd10e-5587-4b4b-9392-f8d2f81afc2f',
    basePrice: 2922,
    dateFrom: '2031-05-09T17:05:46.876Z',
    dateTo: '2031-05-11T05:05:46.876Z',
    destination: '7120fbac-0f2c-45bb-a508-dd4eafe27448',
    isFavorite: false,
    offers: [],
    type: 'train'
  },
  {
    id: 'b7ae9895-7537-40c9-b6f0-8974fd84cc32',
    basePrice: 884,
    dateFrom: '2031-05-11T05:05:46.876Z',
    dateTo: '2031-05-12T22:05:46.876Z',
    destination: '7120fbac-0f2c-45bb-a508-dd4eafe27448',
    isFavorite: false,
    offers: [
      '06cdd8cb-0bbd-470a-862f-8e11d4e4f9b9'
    ],
    type: 'restaurant'
  },
  {
    id: '9fbe2a5e-b2b2-487a-bbfb-526061231da6',
    basePrice: 6102,
    dateFrom: '2031-05-12T22:05:46.876Z',
    dateTo: '2031-05-13T18:05:46.876Z',
    destination: '937f6259-85cd-4069-a123-38bcf856a6cd',
    isFavorite: true,
    offers: [
      '06cdd8cb-0bbd-470a-862f-8e11d4e4f9b9'
    ],
    type: 'restaurant'
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
