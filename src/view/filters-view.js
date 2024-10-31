import AbstractView from '../framework/view/abstract-view';
import { FILTER_TYPE } from '../const';

function createFilterItem(filterType, isChecked) {
  return `<div class="trip-filters__filter">
            <input id="filter-${filterType.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterType.toLowerCase()}" ${isChecked ? 'checked' : ''}>
            <label class="trip-filters__filter-label" for="filter-${filterType.toLowerCase()}">${filterType}</label>
          </div>`;
}

function createFiltersTemplate() {
  const filterItemsTemplate = FILTER_TYPE.map((type, index) => createFilterItem(type, index === 0)).join('');

  return `<form class="trip-filters" action="#" method="get">
                ${filterItemsTemplate}

                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`;
}

export default class FiltersView extends AbstractView {
  get template() {
    return createFiltersTemplate();
  }
}
