import { AuthorizedNav } from '../AuthorizedNav/AuthorizedNav';
import { UnauthorizedNav } from '../UnauthorizedNav/UnauthorizedNav';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/selectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? <AuthorizedNav /> : <UnauthorizedNav />}
      <Suspense fallback={<b>Loading ...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
