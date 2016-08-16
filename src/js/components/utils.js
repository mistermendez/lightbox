let Utils = {
  xhr: function(uri, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if(xhr.readyState == XMLHttpRequest.DONE) {
        if(xhr.status == 200) {
          callback(xhr.responseText);
        }
      }
    };
    xhr.open("GET", uri, true);
    xhr.send();
  }
};
export default Utils