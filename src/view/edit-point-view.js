import { POINT_TYPES } from '../const';
import AbstractView from '../framework/view/abstract-view';
import { formatStringToDateTime } from '../utils/point';

const POINT_BLANK = {
  type: 'taxi',
  basePrice: 0,
  offers: [],
  dateFrom: '2031-04-15T12:05:46.876Z',
  dateTo: '2031-04-16T01:05:46.876Z',
  isFavorite: false,
  destination: {
    description: 'Tokio - full of of cozy canteens where you can try the best coffee in the Middle East',
    name: 'Tokio',
    pictures: [
      {
        src: 'https://20.objects.htmlacademy.pro/static/destinations/12.jpg',
        description: 'Tokio is a beautiful city'
      },
      {
        src: 'https://20.objects.htmlacademy.pro/static/destinations/13.jpg',
        description: 'Tokio full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ],
  },

};

function createOfferItemTemplate(selectedOffers, item) {
  const checked = selectedOffers.includes(item.id) ? 'checked' : '';
  const value = item.title.replace(/\s/g, '-').toLowerCase();

  return `<div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${value}-1" type="checkbox" name="event-offer-${value}" ${checked}>
            <label class="event__offer-label" for="event-offer-${value}-1">
              <span class="event__offer-title">${item.title}</span>
              +€&nbsp;
              <span class="event__offer-price">${item.price}</span>
            </label>
          </div>`;
}

function createOffersTemplate(selectedOffers, offers) {
  return offers.length > 0 ? `<section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
              ${offers.map((item) => createOfferItemTemplate(selectedOffers, item)).join('')}
            </div>
          </section>` : '';
}

function createDestinationTemplate(destination) {
  const {description, pictures} = destination;

  return `<section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${description}</p>

            ${pictures.length > 0 ? `<div class="event__photos-container">
              <div class="event__photos-tape">
                ${pictures.map((item) => `<img class="event__photo" src="${item.src}" alt="${item.description}">`).join('')}
              </div>
            </div>` : ''}
          </section>`;
}

function createPointTypeTemplate(type) {
  return POINT_TYPES.map((pointType) => {
    const checked = pointType.toLowerCase() === type ? 'checked' : '';

    return `<div class="event__type-item">
              <input id="event-type-${pointType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointType.toLowerCase()}" ${checked}>
              <label class="event__type-label  event__type-label--${pointType.toLowerCase()}" for="event-type-${pointType.toLowerCase()}-1">${pointType}</label>
            </div>`;
  }).join('');
}

function createEditPointTemplate({point = POINT_BLANK, offers, destination = POINT_BLANK.destination, destinations}) {
  const {type, dateFrom, dateTo, basePrice} = point;

  const destinationTemplate = createDestinationTemplate(destination);
  const offersTemplate = createOffersTemplate(point.offers, offers);
  const typesTemplate = createPointTypeTemplate(type);

  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>

                        ${typesTemplate}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${destinations.map((item) => `<option value="${item.name}"></option>`)}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${formatStringToDateTime(dateFrom)}">
                    —
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${formatStringToDateTime(dateTo)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      €
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  ${offersTemplate}

                  ${destinationTemplate}
                </section>
              </form>
            </li>`;

}

export default class EditPointView extends AbstractView {
  #point = null;
  #offers = null;
  #destination = null;
  #destinations = null;

  #handleFormSubmit = null;

  constructor({point, offers, destination, destinations, onFormSubmit}) {
    super();

    this.#point = point;
    this.#offers = offers;
    this.#destination = destination;
    this.#destinations = destinations;

    this.#handleFormSubmit = onFormSubmit;

    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#formSubmitHandler);

  }

  get template() {
    return createEditPointTemplate({
      point: this.#point,
      offers: this.#offers,
      destination: this.#destination,
      destinations: this.#destinations
    });
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(this.#point);
  };
}
