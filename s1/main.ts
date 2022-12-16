import axios from 'axios';

console.log("\n\n\n\n")
console.log("I am changed. can u spot it?")
console.log("\n\n\n\n")
axios.get('https://api.github.com/users/mapbox')
  .then((response) => {
    console.log("http get response code:" + response.status);
  });
