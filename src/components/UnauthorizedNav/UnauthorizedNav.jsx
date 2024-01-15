import { Tab } from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import css from './UnauthorizedNav.module.css';

export const UnauthorizedNav = () => {
  return (
    <div className={css.navigation}>
      <NavLink className={css.navHome} to="/">
        <Tab
          icon={<HomeIcon fontSize="small" />}
          iconPosition="start"
          label="Home"
        />
      </NavLink>
      <NavLink to="/signup">
        <Tab label="Register" />
      </NavLink>
      <NavLink to="/login">
        <Tab label="Login" />
      </NavLink>
    </div>
  );
};
