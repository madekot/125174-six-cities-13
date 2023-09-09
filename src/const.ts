export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum SortingType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  PageNotFound = '/*',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Review = '/comments',
  Nearby = '/nearby',
  Favorite = '/favorite',
}

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export enum FavoriteStatus {
  Add = 1,
  Remove = 0,
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export enum TitlePage {
  Main = 'Home',
  Error = 'Error',
  Favorites = 'Favorites',
  Loading = 'Loading',
  Login = 'Login',
  NotFound = 'Not found',
  Offer = 'Offer',
}

export enum DescriptionPage {
  Main = 'Description main',
  Error = 'Description error',
  Favorites = 'Description favorites',
  Loading = 'Description loading',
  Login = 'Description login',
  NotFound = 'Description not found',
  Offer = 'Description offer',
}
