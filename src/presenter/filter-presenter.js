import { render } from '../framework/render';
import FiltersView from '../view/filters-view';
import { generateFilters } from '../mock/filter';

export default class FilterPresenter {
  #container = null;
  #pointsModel = null;
  #filters = [];

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;

    this.#filters = generateFilters(this.#pointsModel.get());
  }

  init() {
    render(new FiltersView({filters: this.#filters}), this.#container);
  }
}
