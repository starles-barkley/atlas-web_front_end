function createElement(data) {
  let newElement = document.createElement("p");
  newElement.innerHTML = data;
  document.body.append(newElement);
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  console.log("opening request");
  xhr.open("GET",
   "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
  xhr.onload = () => {
      if (xhr.readyState === xhr.DONE) {
          if (xhr.status === 200) {
              console.log("request successful");
              data = JSON.parse(xhr.responseText);
              callback(data['query']['pages']['21721040']['extract']);
          }
          else {
              console.log(`request failed with response code: ${xhr.status}`);
          }
      }
      console.log("Past request ready check");
  }
  xhr.send(null);
}

queryWikipedia(createElement);