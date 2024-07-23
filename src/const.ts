import { CityRoute } from '@entities/cities';

/**
 * Роут приложения
 */
export const enum AppRoute {
  Main = '/',
  Favourites = '/favourites',
  Login = '/login',
  Offer = '/offer',
}

/**
 * Статус авторизации
 */
export const enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

/**
 * Конфигурация городов
 */
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

/**
 * Максимальное количество изображений на странице предложения
 */
export const OFFER_MAX_IMAGES = 6;

/**
 * Максимальное количество комментариев на странице предложения
 */
export const OFFER_MAX_COMMENTS = 10;
