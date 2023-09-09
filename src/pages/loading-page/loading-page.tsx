import styles from './loading-page.module.css';
import Layout from '../../components/layout/layout.tsx';
import { DescriptionPage, TitlePage } from '../../const.ts';

function LoadingPage(): JSX.Element {
  return (
    <Layout description={DescriptionPage.Loading} title={TitlePage.Loading}>
      <p className={styles.loadingPageText}>Loading ...</p>;
    </Layout>
  );
}

export default LoadingPage;
