import { getRandomPoint } from '../mock/points';
import { getOffers } from '../mock/offers';
import { getDestinations } from '../mock/destinations';

const POINT_COUNT = 3;

export default class MockService {
  destinations = [];
  offers = [];
  points = [];

  constructor() {
    this.destinations = this.generateDestinations();
    this.offers = this.generateOffers();
    this.points = this.generatePoints();
  }

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getDestinations() {
    return this.destinations;
  }

  generatePoints() {
    return Array.from({length: POINT_COUNT}, getRandomPoint);
  }

  generateOffers() {
    return getOffers();
  }

  generateDestinations() {
    return getDestinations();
  }
}
