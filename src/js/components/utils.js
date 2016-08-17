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
  },

  CONSTANTS: {
    API_HOST: 'https://api.flickr.com/services/rest/',
    API_QUERY_STRING: '?method=flickr.photosets.getPhotos&format=json&nojsoncallback=1&api_key=4e4e0d1c667cb6e65d3af06d88cebe6d&photoset_id=',
    PHOTO_SET: ['72157624439393875','72157661422082384', '72157623692742906', '72157623459524476', '72157623173893194'],
    IMG_HOST: '//c2.staticflickr.com/'
  }
};
export default Utils