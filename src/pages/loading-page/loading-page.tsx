import styles from './loading-page.module.css';

function LoadingPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <p className={styles.loadingPageText}>Loading ...</p>
    </div>
  );
}

export default LoadingPage;
