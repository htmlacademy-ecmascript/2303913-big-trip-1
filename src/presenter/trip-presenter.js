import { render } from '../render';
import EditPointView from '../view/edit-point-view';
import EventListView from '../view/event-list-view';
import PointView from '../view/point-view';
import SortView from '../view/sort-view';

const POINT_COUNT = 3;

export default class TripPresenter {
  sortComponent = new SortView();
  eventListComponent = new EventListView();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(this.sortComponent, this.tripContainer);
    render(this.eventListComponent, this.tripContainer);
    render(new EditPointView(), this.eventListComponent.getElement());

    for (let i = 0; i < POINT_COUNT; i++) {
      render(new PointView(), this.eventListComponent.getElement());
    }
  }
}
