import { lazy, useEffect } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../redux/operations';
import { RestrictedRoute } from '../components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { selectIsRefreshing } from '../redux/selectors';
import css from './App.module.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Signup = lazy(() => import('../pages/Signup/Signup'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispach = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispach(verifyUser());
  }, [dispach]);

  return isRefreshing ? (
    <p className={css.loader}>
      <span className={css.loader__anim}></span>Loading data, please wait...
    </p>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="signup"
            element={<RestrictedRoute component={Signup} path="/contacts" />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={Login} path="/contacts" />}
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={Contacts} path="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
