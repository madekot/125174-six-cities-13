import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { getPageInfo } from './utils.ts';
import Page from '../page/page.tsx';
import Header from '../header/header.tsx';
import Footer from '../footer/footer.tsx';
import { usePageInfo } from './hooks.ts';

function Layout(): JSX.Element {
  const { pathname } = useLocation();

  const { pageInfo, setPageInfo } = usePageInfo(getPageInfo(pathname));

  const outletContext = { setPageInfo };

  return (
    <Page>
      <Helmet>
        <title>Six-cities{pageInfo.title && ` | ${pageInfo.title}`}</title>
        <meta name="description" content={pageInfo.description} />
      </Helmet>
      <Header />
      <Outlet context={outletContext} />
      <Footer />
    </Page>
  );
}

export default Layout;
