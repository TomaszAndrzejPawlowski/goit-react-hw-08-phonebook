import css from './LoaderAnimation.module.css';
export const LoaderAnimation = () => {
  return (
    <p className={css.loader}>
      <span className={css.loader__anim}></span>Loading data, please wait...
    </p>
  );
};
