// $('document').ready(function () {
//   $('button#End-Times').click(function () {
//     $('#destruction-methods').show();
//     let promise1 = SpaceService.solarDestruction();
//     let promise2 = SpaceService.shockDestruction();
//     let promise3 = SpaceService.massDestruction();
//   Promise.all([promise1, promise2, promise3])
//   .then(response => {
//       let solarBody = JSON.parse(response[0]);
//       let shockBody = JSON.parse(response[1]);
//       let massBody = JSON.parse(response[2]);
//       let solarTime = solarBody[0].peakTime;
//       let shockTime = shockBody[0].eventTime;
//       let massTime = massBody[0].startTime;


// $(document).ready(function () {
//   $('#solarbtn').click(function () {
//    $('#solarGif').show();
//  let promise1

// //     export default class SpaceDoom {
//   static shiningSun() {
//     return new Promise(function (resolve, reject) {
//     let request = new XMLHttpRequest();
//     const url = `http://api.giphy.com/v1/gifs/search?q=${cheezburger-sun-mornings}&api_key=${process.env.API_KEY2}`;
//     request.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     };

//     request.open("GET", url, true);
//     request.send();
// //     export default class SpaceDoom {
//   static glowingEarth() {
//     return new Promise(function (resolve, reject) {
//     let request = new XMLHttpRequest();
//     const url = `http://api.giphy.com/v1/gifs/search?q=${starwars-movie-star-wars}&api_key=${process.env.API_KEY2}`;
//     request.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     };

//     request.open("GET", url, true);
//     request.send();

//   static shockingEarth() {
//     return new Promise(function (resolve, reject) {
//     let request = new XMLHttpRequest();
//     const url = `http://api.giphy.com/v1/gifs/search?q=${startrekfleetcommand}&api_key=${process.env.API_KEY2}`;
//     request.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     };

//     request.open("GET", url, true);
//     request.send();

//     function getElements(response) {
//       $('.solarGif').html(`<img src="${response["data"][0]["images"]["original"]["url"]}">`);
//       $('.stormGifs').append(`<img src="${response["data"][0]["images"]["original"]["url"]}">`);
//       $('.coronalGifs').append(`<img src="${response["data"][0]["images"]["original"]["url"]}">`);

//     }

//   });
// });

