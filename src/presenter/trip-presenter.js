import { render, replace } from '../framework/render';
import EditPointView from '../view/edit-point-view';
import EventListView from '../view/event-list-view';
import NoPointView from '../view/no-point-view';
import PointView from '../view/point-view';
import SortView from '../view/sort-view';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destionationsModel = null;

  #sortComponent = new SortView();
  #eventListComponent = new EventListView();

  #points = [];

  constructor({tripContainer, pointsModel, offersModel, destionationsModel}) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destionationsModel = destionationsModel;

    this.#points = this.#pointsModel.get();
  }

  init() {
    this.#renderTripBoard();
  }

  #renderPoint(point, offers, destination, destinations) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();

        replaceFormToCard();

        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      offers,
      destination,
      onEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      },
    });

    const pointEditComponent = new EditPointView({
      point,
      offers,
      destination,
      destinations,
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
    });

    function replaceCardToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToCard() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#eventListComponent.element);
  }

  #renderTripBoard() {
    if (this.#points.length === 0) {
      render(new NoPointView(), this.#tripContainer);
      return;
    }

    render(this.#sortComponent, this.#tripContainer);
    render(this.#eventListComponent, this.#tripContainer);


    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(
        this.#points[i],
        this.#offersModel.getByType(this.#points[i].type),
        this.#destionationsModel.getById(this.#points[i].destination),
        this.#destionationsModel.get(),
      );
    }
  }
}
