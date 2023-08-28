import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import styles from './error-page.module.css';

function ErrorPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Oops, something went wrong</h1>
      <Link to={AppRoute.Main} className={styles.link}>
        Let&apos;s go back to the main page
      </Link>
    </div>
  );
}

export default ErrorPage;
