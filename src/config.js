import { orderBy as _orderBy } from 'lodash';
export const apiUrl = "https:/api.openweathermap.org/data/2.5/group?id=";
export const apiUrlCity = "https:/api.openweathermap.org/data/2.5/weather?q=";
export const apiKey = "&APPID=8496070a6ed3bd27bd80c6c4595509b1";
export const menuItems = ["Search single city"];
export const metric = "&units=metric";
export const imperial = "&units=imperial";
export const htmlMode = "&mode=html";

export const getCity = (api, city) => {
  let thisCity = {};
  axios
    .get(`${api}${city}${apiKey}${metric}`, {
      mode: "cors"
    })
    .then(response => console.log(response))
};

export const citiesArr = [
  {
    id: 776069,
    name: "Białystok"
  },
  {
    id: 3102014,
    name: "Bydgoszcz"
  },
  {
    id: 3099434,
    name: "Gdansk"
  },
  {
    id: 3098722,
    name: "Gorzow Wielkopolski"
  },
  {
    id: 3096472,
    name: "Katowice"
  },
  {
    id: 769250,
    name: "Kielce"
  },
  {
    id: 3094802,
    name: "Krakow"
  },
  {
    id: 765876,
    name: "Lublin"
  },
  {
    id: 3093133,
    name: "Lodz"
  },
  {
    id: 763166,
    name: "Olsztyn"
  },
  {
    id: 3090048,
    name: "Opole"
  },
  {
    id: 3088171,
    name: "Poznan"
  },
  {
    id: 759734,
    name: "Rzeszow"
  },
  {
    id: 3083829,
    name: "Szczecin"
  },
  {
    id: 3083271,
    name: "Torun"
  },
  {
    id: 6695624,
    name: "Warszawa"
  },
  {
    id: 3081368,
    name: "Wroclaw"
  },
  {
    id: 7530991,
    name: "Zielona Góra"
  }
];

//api.openweathermap.org/data/2.5/weather?q=London
//api.openweathermap.org/data/2.5/weather?lat=35&lon=139
//http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric



//Store layout

export const initialStore = {
  itemsHasErrored: false,
  itemsIsLoading: false,
  typing: '',
  cityWeather: []
}

export const sortByTempFunc = (data, type) => {
  const list = _orderBy(data, [item => item.main.temp], [type])
  return list
}

export const sortByWindFunc = (data, type) => {
  const list = _orderBy(data, [item => item.wind.speed], [type])
  return list
}
export const sortByCloudsFunc = (data, type) => {
  const list = _orderBy(data, [item => item.clouds.all], [type])
  return list
}

export const sortByHumidityFunc = (data, type) => {
  const list = _orderBy(data, [item => item.main.humidity], [type])
  return list
}
