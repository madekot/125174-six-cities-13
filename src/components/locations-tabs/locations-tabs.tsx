import cn from 'classnames';

import { CityName } from '../../const.ts';
import { useDispatch } from 'react-redux';
import { changeCity } from '../../store/action.ts';
import { useAppSelector } from '../../store/hooks.ts';

function LocationsTabs() {
  const dispatch = useDispatch();
  const cities: CityName[] = [CityName.Paris, CityName.Cologne, CityName.Brussels, CityName.Amsterdam, CityName.Hamburg, CityName.Dusseldorf];
  const selectedCity = useAppSelector((state) => state.selectedCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <a
                className={cn('locations__item-link', 'tabs__item', {
                  'tabs__item--active': selectedCity === city,
                })}
                href="#"
                onClick={() => dispatch(changeCity(city))}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LocationsTabs;
