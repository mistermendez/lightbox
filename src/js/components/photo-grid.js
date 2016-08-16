import Photo from './photo'
import Utils from './utils'

class PhotoGrid {
  constructor() {
    this.photoGrid = document.createElement('div');
    this.photoGrid.className = "photo-grid";
    this.photoGrid.id = "photo-grid";

    let url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=4e4e0d1c667cb6e65d3af06d88cebe6d&photoset_id=72157619882835617&format=json&nojsoncallback=1';
    Utils.xhr(url, this.render.bind(this));
  }

  render(data) {
    if(data) {
      let body = JSON.parse(data);
      body.photoset.photo.forEach(function (item) {
        let photo = new Photo(item);
        this.photoGrid.appendChild(photo.render());
      }.bind(this));
    }

    return (
      this.photoGrid
    );
  }
}
export default PhotoGrid