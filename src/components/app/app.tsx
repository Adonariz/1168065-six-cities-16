import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { AppRoute, AuthStatus, CITIES } from '@src/const';
import OfferPage from '@src/pages/offer-page/offer-page';
import MainPage from '@src/pages/main-page/main-page';
import FavouritesPage from '@src/pages/favourites-page/favourites-page';
import NotFoundPage from '@src/pages/error-page/not-found-page';
import { PrivateRoute } from '../access-route/access-route';
import LoginPage from '@src/pages/login-page/login-page';
import { Provider } from 'react-redux';
import store from '@src/store';

export default function App(): JSX.Element {
  const userStatus: AuthStatus = AuthStatus.Auth;

  /**
   * Сгенерированные роуты по городам
   */
  const citiesRoutes = CITIES.map(({ slug, name, location }) => ({
    path: slug,
    element: <MainPage city={name} location={location} />,
  }));

  /**
   * Приватные роуты
   */
  const privateRoutes = [
    {
      path: AppRoute.Favourites,
      element: <FavouritesPage />,
    },
  ];

  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: <Navigate to={CITIES[0].slug} />,
      index: true,
      errorElement: <NotFoundPage />,
    },
    {
      element: <PrivateRoute status={userStatus} />,
      children: privateRoutes,
    },
    {
      path: AppRoute.Login,
      element: <LoginPage />,
    },
    {
      path: AppRoute.Offer,
      children: [
        {
          path: ':id',
          element: <OfferPage userStatus={userStatus} />,
        },
      ],
    },
    ...citiesRoutes,
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
