import styles from './loading-page.module.css';

function LoadingPage(): JSX.Element {
  return (
    <p className={styles.loadingPageText}>Loading ...</p>
  );
}

export default LoadingPage;
