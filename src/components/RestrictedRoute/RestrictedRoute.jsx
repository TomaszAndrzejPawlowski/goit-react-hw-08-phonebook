import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/selectors';

export const RestrictedRoute = ({ component: Component, path }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={path} />;
  }
  return <Component />;
};
