import { render } from '../render';
import EditPointView from '../view/edit-point-view';
import EventListView from '../view/event-list-view';
import PointView from '../view/point-view';
import SortView from '../view/sort-view';

const POINT_COUNT = 3;

export default class TripPresenter {
  sortComponent = new SortView();
  eventListComponent = new EventListView();

  constructor({tripContainer, pointsModel}) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];

    render(this.sortComponent, this.tripContainer);
    render(this.eventListComponent, this.tripContainer);
    render(new EditPointView(), this.eventListComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new PointView({task: this.points[i]}), this.eventListComponent.getElement());
    }
  }
}
