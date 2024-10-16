import { render } from '../render';
import EditPointView from '../view/edit-point-view';
import EventListView from '../view/event-list-view';
import PointView from '../view/point-view';
import SortView from '../view/sort-view';
import TripView from '../view/trip-view';

const POINT_COUNT = 3;

export default class TripPresenter {
  tripComponent = new TripView();
  eventListContainer = new EventListView();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(this.tripComponent, this.tripContainer);
    render(new SortView(), this.tripComponent.getElement());
    render(this.eventListContainer, this.tripComponent.getElement());
    render(new EditPointView(), this.eventListContainer.getElement());

    for (let i = 0; i < POINT_COUNT; i++) {
      render(new PointView(), this.eventListContainer.getElement());
    }
  }
}
