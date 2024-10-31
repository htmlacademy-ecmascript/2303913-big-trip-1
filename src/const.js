const POINT_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const SORT_TYPE = ['Day', 'Event', 'Time', 'Price', 'Offers'];
const DISABLED_SORT_TYPE = new Set(['Event', 'Offers']);

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

export {POINT_TYPES, SORT_TYPE, DISABLED_SORT_TYPE, FilterType};
