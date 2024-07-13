import { CityRoute } from '@entities/cities';

export const enum AppRoutes {
  Main = '/',
  Favourites = '/favourites',
  Login = '/login',
  Offer = '/offer',
  NotFound = '/404'
}

export const CITIES: Array<CityRoute> = [
  {
    slug: '/paris',
    name: 'Paris',
  },
  {
    slug: '/cologne',
    name: 'Cologne',
  },
  {
    slug: '/brussels',
    name: 'Brussels',
  },
  {
    slug: '/amsterdam',
    name: 'Amsterdam',
  },
  {
    slug: '/hamburg',
    name: 'Hamburg',
  },
  {
    slug: '/dusseldorf',
    name: 'Dusseldorf',
  },
];
