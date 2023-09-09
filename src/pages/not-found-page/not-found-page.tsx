import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';
import Layout from '../../components/layout/layout.tsx';
import { DescriptionPage, TitlePage } from '../../const.ts';

function NotFoundPage(): JSX.Element {
  return (
    <Layout description={DescriptionPage.NotFound} title={TitlePage.NotFound}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>404 Not Found</h1>
          <Link to={'/'} className={styles.link}>
            return to main page
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
