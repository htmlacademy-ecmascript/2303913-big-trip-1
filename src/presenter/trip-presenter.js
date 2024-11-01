import { render } from '../framework/render';
import EventListView from '../view/event-list-view';
import NoPointView from '../view/no-point-view';
import SortView from '../view/sort-view';
import PointPresenter from './point-presenter';
import {updateItem} from '../utils/common';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destionationsModel = null;

  #sortComponent = new SortView();
  #pointListComponent = new EventListView();
  #noPointsComponent = new NoPointView();

  #points = [];
  #pointsPresenters = new Map();

  constructor({tripContainer, pointsModel, offersModel, destionationsModel}) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destionationsModel = destionationsModel;

    this.#points = structuredClone(this.#pointsModel.get());
  }

  init() {
    this.#renderTripBoard();
  }

  #renderPoint({point, offers, destination, destinations}) {
    const pointPresenter = new PointPresenter({
      pointListComponent: this.#pointListComponent.element,
      onDataChange: this.#handlePointChange,
    });

    pointPresenter.init({point, offers, destination, destinations});
    this.#pointsPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    this.#points
      .forEach((point) => this.#renderPoint({
        point,
        offers: this.#offersModel.getByType(point.type),
        destination: this.#destionationsModel.getById(point.destination),
        destinations: this.#destionationsModel.get(),
      }));
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);

    this.#pointsPresenters.get(updatedPoint.id).init({
      point: updatedPoint,
      offers: this.#offersModel.getByType(updatedPoint.type),
      destination: this.#destionationsModel.getById(updatedPoint.destination),
      destinations: this.#destionationsModel.get(),
    });
  };

  #renderSort() {
    render(this.#sortComponent, this.#tripContainer);
  }

  #renderNoPoints() {
    render(this.#noPointsComponent, this.#tripContainer);
  }

  #clearPointList() {
    this.#pointsPresenters.forEach((presenter) => presenter.destroy());
    this.#pointsPresenters.clear();
  }

  #renderPointList() {
    render(this.#pointListComponent, this.#tripContainer);

    this.#renderPoints();
  }

  #renderTripBoard() {
    if (this.#points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPointList();
  }
}
