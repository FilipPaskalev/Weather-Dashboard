const OPEN_WEATHER_MAP_API_KEY = "691ac0267ff69aea88b780e2223ae9f4";

// Example https://api.openweathermap.org/data/2.5/forecast?lat=52.4796992&lon=-1.9026911&appid=691ac0267ff69aea88b780e2223ae9f4
// With param Birmingham
const OPEN_WEATHER_MAP = {
  API_KEY: OPEN_WEATHER_MAP_API_KEY,
  domain: "https://api.openweathermap.org",
  subdomain: "data",
  apiVersion: "2.5",
  searchKey: "forecast",
  PARAMS: {
    LAT: {
      key: "lat",
      required: true,
      description:
        "Latitude. If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API. Learn more at https://openweathermap.org/api/geocoding-api",
    },
    LON: {
      key: "lon",
      required: true,
      description:
        "Longitude. If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API. Learn more at https://openweathermap.org/api/geocoding-api",
    },
    APP_ID: {
      key: "appid",
      required: true,
      description:
        "Your unique API key (you can always find it on your account page under the API key tab)",
    },
    MODE: {
      key: "mode",
      required: false,
      description:
        "Response format. JSON format is used by default. To get data in XML format use mode=xml. Learn more at https://openweathermap.org/forecast5#format",
    },
    CNT: {
      key: "cnt",
      required: false,
      description:
        "A number of timestamps, which will be returned in the API response. Learn more at https://openweathermap.org/forecast5#limit",
    },
    UNITS: {
      key: "units",
      required: false,
      description:
        "Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more at https://openweathermap.org/forecast5#data",
    },
    LANG: {
      key: "lang",
      required: false,
      description:
        "You can use the lang parameter to get the output in your language. Learn more at https://openweathermap.org/multi",
    },
  },
};

// Example https://api.openweathermap.org/geo/1.0/direct?q=birmingham&appid=691ac0267ff69aea88b780e2223ae9f4
// With lat lon for Birmingham
const DIRECT_GEOCODING = {
  API_KEY: OPEN_WEATHER_MAP_API_KEY,
  domain: "http://api.openweathermap.org",
  subdomain: "geo",
  apiVersion: "1.0",
  PARAMS: {
    QUERY: {
      key: "q",
      required: true,
      description:
        "City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes.",
    },
    APP_ID: {
      key: "appid",
      required: true,
      description:
        "Your unique API key (you can always find it on your account page under the API key tab)",
    },
    LIMIT: {
      key: "limit",
      required: false,
      description:
        "Number of the locations in the API response (up to 5 results can be returned in the API response)",
    },
  },
};

var formHeading = $("#form-heading");
var searchForm = $("search-form");
var searchInput = $("search-input");
var searchBtn = $("search-button");
var searchBtn = $("search-button");
var historyDiv = $("history");
var historyDiv = $("history");
var todaySection = $("today");
var forecastSection = $("forecast");

const currentDate = dayjs();

function getDirectGeocoding(cityName, apiKey) {}

function getFiveDayWeatherInfo(lat, lon, apikey) {}
