function loadJSON(path, success, error) {
  'use strict';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success) {
          success(JSON.parse(xhr.responseText));
        }
      } else {
        if (error) {
          error(xhr);
        }
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}

function generateIpsum(e) {
  'use strict';
  loadJSON('data.json',
     function (data) { console.log(data); },
     function (xhr) { console.error(xhr); }
    );
  
  var minCount = 5,
    maxCount = 11,
    ipsum = Math.floor(Math.random() * (maxCount - minCount)) + minCount,
    newIpsum,
    ret = '';
  
  for (i = 0; i < ipsum; i++) {
    newIpsum = quotes[Math.floor(Math.random() * (quotes.length - 1))];
    if (ret.substring(ret.length - 1, ret.length) === "." || ret.substring(ret.length - 1, ret.length) === "?") {
      newIpsum = newIpsum.substring(0, 1).toUpperCase() + newIpsum.substring(1, newIpsum.length);
    }
    ret += ' ' + newIpsum;
  }
    
  document.getElementById(e).innerHTML = document.getElementById(e).innerHTML + '<p>' + ret.substring(0, ret.length + 1) + '</p>';
}