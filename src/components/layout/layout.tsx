import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { getPageInfo } from './utils.ts';
import Page from '../page/page.tsx';
import Header from '../header/header.tsx';
import Footer from '../footer/footes.tsx';

function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const pageInfo = getPageInfo(pathname);

  let title = `Six Cities`;
  if (pageInfo.title) {
    title += ` | ${pageInfo.title}`;
  }

  return (
    <Page>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={pageInfo.description} />
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </Page>
  );
}

export default Layout;
