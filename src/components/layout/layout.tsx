import { Helmet } from 'react-helmet-async';
import { DescriptionPage, TitlePage } from '../../const.ts';
import { ReactElement, ReactNode } from 'react';

type LayoutProps = {
  title: TitlePage;
  description: DescriptionPage;
  children: ReactElement | ReactNode;
};

function Layout({ title, description, children }: LayoutProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>{`Six Cities | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
