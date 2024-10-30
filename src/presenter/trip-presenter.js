import { render } from '../framework/render';
import EditPointView from '../view/edit-point-view';
import EventListView from '../view/event-list-view';
import PointView from '../view/point-view';
import SortView from '../view/sort-view';

export default class TripPresenter {
  sortComponent = new SortView();
  eventListComponent = new EventListView();

  constructor({tripContainer, pointsModel, offersModel, destionationsModel}) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
    this.offersModel = offersModel;
    this.destionationsModel = destionationsModel;

    this.points = this.pointsModel.get();
  }

  init() {
    render(this.sortComponent, this.tripContainer);
    render(this.eventListComponent, this.tripContainer);

    render(new EditPointView({
      point: this.points[0],
      offers: this.offersModel.getByType(this.points[0].type),
      destination: this.destionationsModel.getById(this.points[0].destination),
      destinations: this.destionationsModel.get(),
    }),
    this.eventListComponent.element
    );

    for (let i = 1; i < this.points.length; i++) {

      render(new PointView({
        point: this.points[i],
        offers: this.offersModel.getByType(this.points[i].type),
        destination: this.destionationsModel.getById(this.points[i].destination),
      }),
      this.eventListComponent.element);
    }
  }
}
