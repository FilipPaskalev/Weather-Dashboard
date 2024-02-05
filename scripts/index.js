const API_KEYS = {
  currentWeatherData: "ae3a76f05c3abe1e11d6e4bac3ee18fe",
  fiveDaysWeatherForecast: "89bcb64cccfd3cf71adffaab58499f00",
  directGeocoding: "34e16918a61a82d1589798842ddb3d2e",
};

const OPEN_WEATHER_MAP_DOMAIN = {
  domain: "https://api.openweathermap.org",
  subdomains: {
    currentWeatherData: "data",
    fiveDaysWeatherForecast: "data",
    directGeocoding: "geo",
  },
  apiVersion: {
    currentWeatherData: "2.5",
    fiveDaysWeatherForecast: "2.5",
    directGeocoding: "1.0",
  },
  searchKey: {
    currentWeatherData: "weather",
    fiveDaysWeatherForecast: "forecast",
    directGeocoding: "direct",
  },
};

const OPEN_WEATHER_PARAMS = {
  // Example API call https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  // Example https://api.openweathermap.org/data/2.5/weather?lat=52.4796992&lon=-1.9026911&appid=ae3a76f05c3abe1e11d6e4bac3ee18fe
  // With param Birmingham
  currentWeatherData: {
    latitude: {
      key: "lat",
      required: true,
      description:
        "Latitude. If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API. Learn more at https://openweathermap.org/api/geocoding-api",
    },
    longitude: {
      key: "lon",
      required: true,
      description:
        "Longitude. If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API. Learn more at https://openweathermap.org/api/geocoding-api",
    },
    apiKey: {
      key: "appid",
      required: true,
      description:
        "Your unique API key (you can always find it on your account page under the API key tab)",
    },
    responseFormat: {
      key: "mode",
      required: false,
      description:
        "Response format. JSON format is used by default. To get data in XML format use mode=xml. Learn more at https://openweathermap.org/forecast5#format",
    },
    units: {
      key: "units",
      required: false,
      description:
        "Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more at https://openweathermap.org/forecast5#data",
    },
    language: {
      key: "lang",
      required: false,
      description:
        "You can use the lang parameter to get the output in your language. Learn more at https://openweathermap.org/multi",
    },
  },
  // Example API call https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  // Example https://api.openweathermap.org/data/2.5/forecast?lat=52.4796992&lon=-1.9026911&appid=89bcb64cccfd3cf71adffaab58499f00
  // With param Birmingham
  fiveDaysWeatherForecast: {
    latitude: {
      key: "lat",
      required: true,
      description:
        "Latitude. If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API. Learn more at https://openweathermap.org/api/geocoding-api",
    },
    longitude: {
      key: "lon",
      required: true,
      description:
        "Longitude. If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API. Learn more at https://openweathermap.org/api/geocoding-api",
    },
    apiKey: {
      key: "appid",
      required: true,
      description:
        "Your unique API key (you can always find it on your account page under the API key tab)",
    },
    responseFormat: {
      key: "mode",
      required: false,
      description:
        "Response format. JSON format is used by default. To get data in XML format use mode=xml. Learn more at https://openweathermap.org/forecast5#format",
    },
    timestamp: {
      key: "cnt",
      required: false,
      description:
        "A number of timestamps, which will be returned in the API response. Learn more at https://openweathermap.org/forecast5#limit",
    },
    units: {
      key: "units",
      required: false,
      description:
        "Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more at https://openweathermap.org/forecast5#data",
    },
    language: {
      key: "lang",
      required: false,
      description:
        "You can use the lang parameter to get the output in your language. Learn more at https://openweathermap.org/multi",
    },
  },
  // Example API call http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  // Example https://api.openweathermap.org/geo/1.0/direct?q=birmingham&appid=34e16918a61a82d1589798842ddb3d2e
  // With lat lon for Birmingham
  directGeocoding: {
    query: {
      key: "q",
      required: true,
      description:
        "City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes.",
    },
    apiKey: {
      key: "appid",
      required: true,
      description:
        "Your unique API key (you can always find it on your account page under the API key tab)",
    },
    locationLimit: {
      key: "limit",
      required: false,
      description:
        "Number of the locations in the API response (up to 5 results can be returned in the API response)",
    },
  },
};

const UTILS = {
  text: {
    headers: {
      main: "Weather Dashboard",
      searchCityForm: "Search for a City: ",
    },
    buttons: {
      search: "Search",
    },
    placeholders: {
      inputCityName: "Enter name of the city",
    },
  },
  settings: {
    localeStorage: {
      key: "cities",
      limitOfSearchedCities: 6,
    },
    defaultCityInfo: {
      name: "Birmingham",
      lat: 52.489471,
      lon: -1.898575,
    },
  },
};

const searchCityHeading = $("#form-heading");
const searchForm = $("#search-form");
const searchInput = $("#search-input");
const searchBtn = $("#search-button");
const historyDiv = $("#history");
const todaySection = $("#today");
const forecastSection = $("#forecast");

const mainHeader = $("h1");

var currentCity = {
  name: "",
  lat: 0,
  lon: 0,
};

const currentDate = dayjs();

function loadAllInitialText() {
  $(mainHeader).text(UTILS_TEXT.HEADER.main);
  $(searchCityHeading).text(UTILS_TEXT.HEADER.searchCityForm);
  $(searchBtn).text(UTILS_TEXT.BUTTON.search);
  $(searchInput).attr("placeholder", UTILS_TEXT.PLACEHOLDER.inputCityName);
}

function getDirectGeocoding(cityName, apiKey) {}

function getFiveDayWeatherInfo(lat, lon, apikey) {}

function removeCityFromLocaleStorage() {}

function addCityToLocaleStorage(storageKey, cityName, lat, lon) {}

function loadSearchedCitiesFromLocaleStorage(key) {}

function getNameForSearchedCity() {
  $(searchForm).submit(function (event) {
    event.preventDefault();

    currentCity.name = $(searchInput).val();
  });
}

function resetNameForSearchedCity() {
  $(searchInput).val("");
}

$(document).ready(function () {
  loadAllInitialText();
  // getUserGeolocation() //TODO: implement this after finish with the code - get default location of the user if is allowed, if not leave default location
  getNameForSearchedCity();
  resetNameForSearchedCity();
});
