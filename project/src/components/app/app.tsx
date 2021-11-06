import {
  Router as BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddReview from '../add-review/add-review';
import MainPage from '../main-page/main-page';
import Movie from '../movie/movie';
import MyList from '../my-list/my-list';
import Page404 from '../page-404/page-404';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../sign-in/sign-in';
import browserHistory from '../../browser-history';
import { AppRoutes, AuthStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/selectors/user-process';
import Spinner from '../spinner/spinner';

function App(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthStatus.Unknown) {
    return <Spinner />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoutes.MainPage}>
          <MainPage />
        </Route>
        <Route exact path={AppRoutes.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute exact path={AppRoutes.MyList} >
          <MyList />
        </PrivateRoute>
        <Route exact path={AppRoutes.Movie}>
          <Movie />
        </Route>
        <PrivateRoute exact path={AppRoutes.AddReview} >
          <AddReview />
        </PrivateRoute>
        <Route exact path={AppRoutes.Player}>
          <Player />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
