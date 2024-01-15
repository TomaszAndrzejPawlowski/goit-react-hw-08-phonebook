import { AuthorizedNav } from '../AuthorizedNav/AuthorizedNav';
import { UnauthorizedNav } from '../UnauthorizedNav/UnauthorizedNav';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/selectors';
import { LoaderAnimation } from 'components/LoaderAnimation/LoaderAnimation';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? <AuthorizedNav /> : <UnauthorizedNav />}
      <Suspense fallback={<LoaderAnimation />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
