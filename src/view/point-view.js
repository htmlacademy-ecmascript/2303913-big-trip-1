import AbstractView from '../framework/view/abstract-view';
import { getPointDuration, formatStringToShortDate, formatStringToTime } from '../utils/point';

function createTripPointOfferTemplate(point, offers) {
  return offers
    .filter((offer) => point.offers.includes(offer.id))
    .map((offer) => `<li class="event__offer">
            <span class="event__offer-title">${offer.title}</span>
            +€&nbsp;
            <span class="event__offer-price">${offer.price}</span>
          </li>`).join('');
}

function createTripPointTemplate(point, offers, destination) {
  const {basePrice, dateFrom, dateTo, type, isFavorite} = point;

  const favoriteClassName = isFavorite ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';

  const offerTemplate = createTripPointOfferTemplate(point, offers);

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${dateFrom}">${formatStringToShortDate(dateFrom)}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} ${destination.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateFrom}">${formatStringToTime(dateFrom)}</time>
                    —
                    <time class="event__end-time" datetime="=${dateTo}">${formatStringToTime(dateTo)}</time>
                  </p>
                  <p class="event__duration">${getPointDuration(dateFrom, dateTo)}</p>
                </div>
                <p class="event__price">
                  €&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${offerTemplate}
                </ul>
                <button class="${favoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
}

export default class PointView extends AbstractView {
  #point = null;
  #offers = null;
  #destination = null;

  #handleEditClick = null;

  constructor({point, offers, destination, onEditClick}) {
    super();

    this.#point = point;
    this.#offers = offers;
    this.#destination = destination;

    this.#handleEditClick = onEditClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createTripPointTemplate(
      this.#point,
      this.#offers,
      this.#destination
    );
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
