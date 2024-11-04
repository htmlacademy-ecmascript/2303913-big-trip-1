import { filter } from '../utils/filter';

function generateFilters(points) {
  return Object.entries(filter)
    .map(([filterType, filterPoints]) => ({
      type: filterType,
      hasPoints: filterPoints(points).length > 0,
    }));
}

export {generateFilters};
