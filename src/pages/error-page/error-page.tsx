import { AppRoute } from '../../const.ts';
import styles from './error-page.module.css';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks.ts';
import { fetchOffersAction } from '../../store/api-actions.ts';

function ErrorPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Oops, something went wrong</h1>
      <Link
        to={AppRoute.Main} className={styles.link}
        onClick={() => void dispatch(fetchOffersAction())}
      >
        Let&apos;s try to return to the main page
      </Link>
      <div className={styles.mail}>
        <p>If the error occurs again, write to our support team</p>
        <a className={styles.link} href="mailto:supportFake@mail.ru">Email Support team: support@mail.ru</a>
      </div>
    </div>
  );
}

export default ErrorPage;
