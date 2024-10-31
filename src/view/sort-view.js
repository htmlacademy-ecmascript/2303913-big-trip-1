import AbstractView from '../framework/view/abstract-view';
import { SORT_TYPE, DISABLED_SORT_TYPE } from '../const';


function createSortItem(sortType, isChecked, isDisabled) {
  return `<div class="trip-sort__item  trip-sort__item--${sortType.toLowerCase()}">
              <input id="sort-${sortType.toLowerCase()}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType.toLowerCase()}" ${isChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>
              <label class="trip-sort__btn" for="sort-${sortType.toLowerCase()}">${sortType}</label>
            </div>`;
}

function createSortTemplate() {

  const sortItemsTemplate = SORT_TYPE.map((type, index) => {
    const disabled = DISABLED_SORT_TYPE.has(type);
    const checked = index === 0;

    return createSortItem(type, checked, disabled);
  }).join('');

  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${sortItemsTemplate}
          </form>`;
}

export default class SortView extends AbstractView {
  get template() {
    return createSortTemplate();
  }
}
