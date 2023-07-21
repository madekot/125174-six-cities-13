type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
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

export type OfferPage = Omit<OfferPreview, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

const offerPreviewList: OfferPreview[] = [
  {
    'id': '34f50f68-803c-43a9-8d59-9556fb9c0eaa',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 197,
    'previewImage': 'https://13.design.pages.academy/static/hotel/10.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': '4b658388-7118-4e47-806a-fa5b0d41e8b0',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 174,
    'previewImage': 'https://13.design.pages.academy/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
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

const offerPageList: OfferPage[] = [
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
      'name': 'Angelina',
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
  }
];

export { offerPreviewList, offerPageList };
