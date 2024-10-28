import FiltersView from './view/filters-view.js';
import TripInfoView from './view/trip-info-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import {render, RenderPosition} from './render.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestionationModel from './model/destinations-model.js';
import MockService from './service/mock-service.js';

const siteContentContainer = document.querySelector('.trip-events');
const siteHeaderContainer = document.querySelector('.page-header');
const filtersContainer = siteHeaderContainer.querySelector('.trip-controls__filters');
const headerContentContainer = siteHeaderContainer.querySelector('.trip-main');

const mockService = new MockService();
const pointsModel = new PointsModel(mockService);
const offersModel = new OffersModel(mockService);
const destionationsModel = new DestionationModel(mockService);

const tripPresenter = new TripPresenter({
  tripContainer: siteContentContainer,
  pointsModel,
  offersModel,
  destionationsModel
});

render(new TripInfoView(), headerContentContainer, RenderPosition.AFTERBEGIN);
render(new FiltersView(), filtersContainer);

tripPresenter.init();
