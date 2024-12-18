import { getRandomPoint } from '../mock/points';
import { getOffers } from '../mock/offers';
import { getDestinations } from '../mock/destinations';

const POINT_COUNT = 4;

export default class MockService {
  #destinations = [];
  #offers = [];
  #points = [];

  constructor() {
    this.#destinations = this.#generateDestinations();
    this.#offers = this.#generateOffers();
    this.#points = this.#generatePoints();
  }

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }

  #generatePoints() {
    return Array.from({length: POINT_COUNT}, getRandomPoint);
  }

  #generateOffers() {
    return getOffers();
  }

  #generateDestinations() {
    return getDestinations();
  }
}
