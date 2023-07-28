export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OfferPreview = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type OfferFull = Omit<OfferPreview, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

const offerPreviewList: OfferPreview[] = [
  {
    'id': crypto.randomUUID(),
    'title': 'The house-1',
    'type': 'hotel',
    'price': 197,
    'previewImage': 'https://13.design.pages.academy/static/hotel/10.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.373061,
        'longitude': 4.892555,
        'zoom': 12
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': crypto.randomUUID(),
    'title': 'The house-2',
    'type': 'hotel',
    'price': 197,
    'previewImage': 'https://13.design.pages.academy/static/hotel/10.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.373061,
        'longitude': 4.892555,
        'zoom': 12
      }
    },
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': crypto.randomUUID(),
    'title': 'The house-3',
    'type': 'hotel',
    'price': 197,
    'previewImage': 'https://13.design.pages.academy/static/hotel/10.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.373061,
        'longitude': 4.892555,
        'zoom': 12
      }
    },
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': crypto.randomUUID(),
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 174,
    'previewImage': 'https://13.design.pages.academy/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 3
  },
];

const placeholder = {
  'bedrooms': 1,
  'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  'goods': [
    'Air conditioning',
    'Coffee machine',
    'Breakfast',
    'Wi-Fi',
    'Washer',
    'Fridge',
    'Laptop friendly workspace',
    'Cable TV',
    'Baby seat'
  ],
  'host': {
    'isPro': false,
    'name': 'Eva',
    'avatarUrl': 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
  },
  'images': [
    'https://13.design.pages.academy/static/hotel/9.jpg',
    'https://13.design.pages.academy/static/hotel/1.jpg',
    'https://13.design.pages.academy/static/hotel/16.jpg',
    'https://13.design.pages.academy/static/hotel/10.jpg',
    'https://13.design.pages.academy/static/hotel/7.jpg',
    'https://13.design.pages.academy/static/hotel/5.jpg'
  ],
  'maxAdults': 2
};

const offerPageList: OfferFull[] = [
  {
    ...offerPreviewList[0],
    'bedrooms': 1,
    'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    'images': [
      'https://13.design.pages.academy/static/hotel/5.jpg',
      'https://13.design.pages.academy/static/hotel/10.jpg',
      'https://13.design.pages.academy/static/hotel/16.jpg',
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/7.jpg',
      'https://13.design.pages.academy/static/hotel/9.jpg'
    ],
    'goods': [
      'Air conditioning',
      'Coffee machine',
      'Breakfast',
      'Wi-Fi',
      'Washer',
      'Fridge',
      'Laptop friendly workspace',
      'Cable TV',
      'Baby seat'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    'maxAdults': 2
  },
  {
    ...offerPreviewList[1],
    'bedrooms': 1,
    'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    'goods': [
      'Air conditioning',
      'Coffee machine',
      'Breakfast',
      'Wi-Fi',
      'Washer',
      'Fridge',
      'Laptop friendly workspace',
      'Cable TV',
      'Baby seat'
    ],
    'host': {
      'isPro': false,
      'name': 'Eva',
      'avatarUrl': 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    'images': [
      'https://13.design.pages.academy/static/hotel/9.jpg',
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/16.jpg',
      'https://13.design.pages.academy/static/hotel/10.jpg',
      'https://13.design.pages.academy/static/hotel/7.jpg',
      'https://13.design.pages.academy/static/hotel/5.jpg'
    ],
    'maxAdults': 2
  },
  {
    ...offerPreviewList[2],
    ...placeholder
  },
  {
    ...offerPreviewList[3],
    ...placeholder
  },
  {
    ...offerPreviewList[4],
    ...placeholder
  },
];

export { offerPreviewList, offerPageList };
