import { useMemo } from 'react';
import LocationsTabs from '../../components/locations-tabs/locations-tabs.tsx';
import Cities from '../../components/cities/cities.tsx';
import { useAppSelector } from '../../store/hooks.ts';
import cn from 'classnames';
import { OfferPreview } from '../../types.ts';
import Header from '../../components/header/header.tsx';
import { getSelectedCity } from '../../store/slices/app-process/selectors.ts';
import Layout from '../../components/layout/layout.tsx';
import { DescriptionPage, TitlePage } from '../../const.ts';

type MainPageProps = {
  offers: OfferPreview[];
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  const selectedCity = useAppSelector(getSelectedCity);
  const offersByCity = useMemo(
    () => offers.filter((offer) => offer.city.name === selectedCity),
    [offers, selectedCity],
  );

  return (
    <Layout title={TitlePage.Main} description={DescriptionPage.Main}>
      <div className="page page--gray page--main">
        <Header isMainPage />
        <main
          className={cn('page__main page__main--index', {
            'page__main--index-empty': offersByCity.length === 0,
          })}
        >
          <h1 className="visually-hidden">Cities</h1>
          <LocationsTabs selectedCity={selectedCity} />
          <Cities offers={offersByCity} />
        </main>
      </div>
    </Layout>
  );
}

export default MainPage;
