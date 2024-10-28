const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '5231fd2e-8166-4043-a190-f80a75647e25',
        title: 'Upgrade to a business class',
        price: 155
      },
      {
        id: 'db341c13-5db6-4dbc-a3f8-341c79025dd9',
        title: 'Choose the radio station',
        price: 106
      },
      {
        id: 'd239b4ef-3e4b-4897-8314-9b0fe43e3e4c',
        title: 'Choose temperature',
        price: 186
      },
      {
        id: '78d6b46d-73b4-499f-865c-ae157b1e33e8',
        title: 'Drive quickly, I\'m in a hurry',
        price: 177
      },
      {
        id: '31278519-8284-402a-8ff3-f599004863bc',
        title: 'Drive slowly',
        price: 171
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: '390caeca-392a-4d40-bbf8-0f321ca2b058',
        title: 'Infotainment system',
        price: 38
      },
      {
        id: '3f93dbc1-3718-4544-a8b8-c7528033ec66',
        title: 'Order meal',
        price: 118
      },
      {
        id: '2aeb2bb5-7fe5-43c3-a9fb-e3c410c80b5f',
        title: 'Choose seats',
        price: 66
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'ba045b98-8aab-482e-85fc-97938486a34d',
        title: 'Book a taxi at the arrival point',
        price: 193
      },
      {
        id: 'bfa1933d-4823-488e-b728-728b6040dfdb',
        title: 'Order a breakfast',
        price: 159
      },
      {
        id: '656e1be2-47af-40bc-b6c3-1c9afb61a8a3',
        title: 'Wake up at a certain time',
        price: 133
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'bc9d7279-4c05-4d93-9a45-0ad6d6e09d2b',
        title: 'Choose meal',
        price: 74
      },
      {
        id: '435f0764-45f1-46c7-b3d7-dbd524e8d81f',
        title: 'Choose seats',
        price: 152
      },
      {
        id: 'b3840a0d-f863-4206-951a-865b650790c8',
        title: 'Upgrade to comfort class',
        price: 40
      },
      {
        id: 'e761e3e5-a403-468c-9336-100dcec9e758',
        title: 'Upgrade to business class',
        price: 62
      },
      {
        id: '4b0e9a58-433b-48f3-ab84-9835f340c6eb',
        title: 'Add luggage',
        price: 30
      },
      {
        id: '4f539e61-2fa3-4159-b25d-8dbcfa14945a',
        title: 'Business lounge',
        price: 155
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'f93038c9-db90-4163-b3e3-cd58d0da2517',
        title: 'Choose the time of check-in',
        price: 58
      },
      {
        id: '5d3dd730-147d-44d2-a73e-4fe47e9eeaa0',
        title: 'Choose the time of check-out',
        price: 100
      },
      {
        id: 'eaee9716-7884-4aef-8bc0-8804dcf08490',
        title: 'Add breakfast',
        price: 74
      },
      {
        id: 'e478c33d-eecb-46f8-8e50-4385a8e40207',
        title: 'Laundry',
        price: 33
      },
      {
        id: '06a7cebd-a4c1-46c9-bfdf-a96cdbe37443',
        title: 'Order a meal from the restaurant',
        price: 75
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        id: '42fd0c6d-7318-4970-9240-a2a3862e7539',
        title: 'Choose meal',
        price: 67
      },
      {
        id: '7e46674f-99d4-44f7-afb7-319dc896752c',
        title: 'Choose seats',
        price: 50
      },
      {
        id: 'baa8ba15-48e3-4e61-931e-466a88d97057',
        title: 'Upgrade to comfort class',
        price: 147
      },
      {
        id: '5b931164-e5b6-40e0-a6af-14d005933b6b',
        title: 'Upgrade to business class',
        price: 118
      },
      {
        id: '01167231-d3f8-4591-ab1f-ca970698786c',
        title: 'Add luggage',
        price: 123
      },
      {
        id: 'a6ddad2c-9cc2-462b-93e1-8a0642e6557a',
        title: 'Business lounge',
        price: 116
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: '8369bbe4-466b-4d05-be10-1ed938c69461',
        title: 'With automatic transmission',
        price: 75
      },
      {
        id: 'c43c353d-6851-453c-82d2-d615938293da',
        title: 'With air conditioning',
        price: 82
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: '2c3ff4ed-83f4-47cb-8f60-d78e46d4c45b',
        title: 'Choose live music',
        price: 182
      },
      {
        id: '06cdd8cb-0bbd-470a-862f-8e11d4e4f9b9',
        title: 'Choose VIP area',
        price: 32
      }
    ]
  }
];

function getOffers() {
  return mockOffers;
}

export {getOffers};
