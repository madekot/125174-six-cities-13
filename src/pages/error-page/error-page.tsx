import styles from './error-page.module.css';
import { useAppDispatch } from '../../store/hooks.ts';
import { fetchOffersAction } from '../../store/api-actions.ts';
import Layout from '../../components/layout/layout.tsx';
import { DescriptionPage, TitlePage } from '../../const.ts';

function ErrorPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Layout title={TitlePage.Error} description={DescriptionPage.Error}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Oops, something went wrong</h1>
        <button onClick={() => void dispatch(fetchOffersAction())}>Try uploading again</button>
        <div className={styles.mail}>
          <p>If the error occurs again, write to our support team</p>
          <a className={styles.link} href="mailto:supportFake@mail.ru">
            Email Support team: support@mail.ru
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default ErrorPage;
