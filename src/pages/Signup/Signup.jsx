import { Helmet } from 'react-helmet';
import SignupForm from '../../components/SignupForm/SignupForm';

const Signup = () => {
  return (
    <div>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <SignupForm />
    </div>
  );
};
export default Signup;
