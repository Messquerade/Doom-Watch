export default class SpaceDoom {
  static shiningSun() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs/search?q=${cheezburger - sun - mornings}&api_key=${process.env.API_KEY2}`;
      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      };

      request.open("GET", url, true);
      request.send();
    });
  }
}