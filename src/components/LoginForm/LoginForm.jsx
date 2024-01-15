import { useDispatch } from 'react-redux';
import { login } from '../../redux/operations';
import { Button, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispach = useDispatch();

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    dispach(
      login({
        email,
        password,
      })
    );
  };

  return (
    <div className={css.loginFormContainer}>
      <form className={css.loginForm} onSubmit={handleLogin}>
        <TextField
          id={uuidv4()}
          name="email"
          label="Email"
          variant="outlined"
          type="email"
        />

        <TextField
          id={uuidv4()}
          name="password"
          label="Password"
          variant="outlined"
          type="password"
        />

        <Button type="submit" className={css.loginButton} variant="outlined">
          Login
        </Button>
      </form>
    </div>
  );
};
export default LoginForm;
