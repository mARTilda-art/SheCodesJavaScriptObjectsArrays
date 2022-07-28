let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};

console.log(paris.temperature);

let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temperature: 25,
  capitalCity: false
};

console.log(sydney.temperature);

let cities = ["Brisbane", "Sydney", "Canberra"];
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);

let city = [
  { name: "Berlin", temp: 26 },
  { name: "Dresden", temp: 28 },
  { name: "Paris", temp: 24 }
];
console.log(city[0].name);
console.log(city[0].temp);
console.log(city[1].name);
console.log(city[1].temp);
console.log(city[2].name);
console.log(city[2].temp);
