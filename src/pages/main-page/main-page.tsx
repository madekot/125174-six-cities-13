import { useState } from 'react';
import LocationsTabs from '../../components/locations-tabs/locations-tabs.tsx';
import Cities from '../../components/cities/cities.tsx';
import { useAppSelector } from '../../store/hooks.ts';
import cn from 'classnames';
import { OfferPreview } from '../../types.ts';
import Header from '../../components/header/header.tsx';

type MainPageProps = {
  offers: OfferPreview[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [selectedOfferId, setSelectedOfferId] = useState<OfferPreview['id']>('');
  const selectedCity = useAppSelector((state) => state.selectedCity);
  const offersByCity = offers.filter((offer) => offer.city.name === selectedCity);

  const handleCardMouseEnter = (id: OfferPreview['id']) => setSelectedOfferId(id);
  const handleCardMouseLeave = () => setSelectedOfferId('');

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={cn('page__main page__main--index', {'page__main--index-empty': offersByCity.length === 0})}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabs/>
        <Cities
          offers={offersByCity}
          selectedOfferId={selectedOfferId}
          handleCardMouseLeave={handleCardMouseLeave}
          handleCardMouseEnter={handleCardMouseEnter}
        />
      </main>
    </div>
  );
}

export default MainPage;
