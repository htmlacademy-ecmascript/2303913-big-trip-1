import FiltersView from './view/filters-view.js';
import TripInfoView from './view/trip-info-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import {render, RenderPosition} from './render.js';

const siteContentContainer = document.querySelector('.page-main .page-body__container');
const siteHeaderContainer = document.querySelector('.page-header');
const filtersContainer = siteHeaderContainer.querySelector('.trip-controls__filters');
const headerContentContainer = siteHeaderContainer.querySelector('.trip-main');

const tripPresenter = new TripPresenter({tripContainer: siteContentContainer});

render(new TripInfoView(), headerContentContainer, RenderPosition.AFTERBEGIN);
render(new FiltersView(), filtersContainer);

tripPresenter.init();
