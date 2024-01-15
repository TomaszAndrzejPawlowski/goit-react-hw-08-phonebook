import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserName } from '../../redux/selectors';
import { logout } from '../../redux/operations';
import { Button, Tab } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import css from './AuthorizedNav.module.css';

export const AuthorizedNav = () => {
  const userName = useSelector(selectUserName);
  const dispach = useDispatch();

  const handleLogout = event => {
    event.preventDefault();
    dispach(logout());
  };

  return (
    <div className={css.navigation}>
      <NavLink className={css.navHome} to="/">
        <Tab
          icon={<HomeIcon fontSize="small" />}
          iconPosition="start"
          label="Home"
        />
      </NavLink>
      <NavLink to="/contacts">
        <Tab label="Contacts" />
      </NavLink>
      <b className={css.welcome}>Welcome {userName}</b>
      <Button variant="contained" type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
