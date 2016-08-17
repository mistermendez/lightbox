import Photo from './photo'
import Utils from './utils'
import LightBox from './lightbox'

class PhotoGrid {
  constructor() {
    this.photoGrid = document.createElement('ul');
    this.photoGrid.className = "photo-grid";
    this.photoGrid.id = "photo-grid";

    let uri = Utils.CONSTANTS.API_HOST + Utils.CONSTANTS.API_QUERY_STRING + Utils.CONSTANTS.PHOTO_SET[3];
    Utils.xhr(uri, this.render.bind(this));
  }

  render(data) {
    if(data) {
      let body = JSON.parse(data);
      let photoset = body.photoset.photo;
      this.lightBox = new LightBox(photoset);
      let clickAction = this.lightBox.render.bind(this.lightBox);

      photoset.forEach(function (item, index) {
        let photo = new Photo(item, index, clickAction);
        this.photoGrid.appendChild(photo.render());
      }.bind(this));
    }

    return (
      this.photoGrid
    );
  }
}
export default PhotoGrid