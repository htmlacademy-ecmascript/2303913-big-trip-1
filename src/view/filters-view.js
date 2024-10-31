import AbstractView from '../framework/view/abstract-view';
import { capitalize } from '../utils/point';

function createFilterItem({type, hasPoints}, isChecked) {
  return `<div class="trip-filters__filter">
            <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${isChecked ? 'checked' : ''} ${hasPoints ? 'disabled' : ''}>
            <label class="trip-filters__filter-label" for="filter-${type}">${capitalize(type)}</label>
          </div>`;
}

function createFiltersTemplate(filters) {
  const filterItemsTemplate = filters.map((filter, index) => createFilterItem(filter, index === 0)).join('');

  return `<form class="trip-filters" action="#" method="get">
                ${filterItemsTemplate}

                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`;
}

export default class FiltersView extends AbstractView {
  #filters = [];

  constructor({filters}) {
    super();

    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
