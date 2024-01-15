import { useDispatch } from 'react-redux';
import { signup } from '../../redux/operations';
import { Button, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import css from './SignupForm.module.css';

const SignupForm = () => {
  const dispach = useDispatch();
  const handleRegistration = event => {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    dispach(
      signup({
        name,
        email,
        password,
      })
    );
  };

  return (
    <main>
      <div className={css.signupFormContainer}>
        <form className={css.signupForm} onSubmit={handleRegistration}>
          <TextField
            id={uuidv4()}
            name="username"
            label="Username"
            variant="outlined"
          />
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
          <Button type="submit" className={css.signupButton} variant="outlined">
            Signup
          </Button>
        </form>
      </div>
    </main>
  );
};
export default SignupForm;
