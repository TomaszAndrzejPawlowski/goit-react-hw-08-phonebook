import { Helmet } from 'react-helmet';
import css from './Home.module.css';

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={css.homeWelcome}>
        <h2>Welcome to your contacts application!</h2>
      </div>
    </main>
  );
};
export default Home;
