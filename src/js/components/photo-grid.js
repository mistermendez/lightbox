import Photo from './photo'
import Utils from './utils'
import LightBox from './lightbox'

class PhotoGrid {
  constructor() {
    // photoset info
    this.title = document.createElement('div');
    this.title.className = "photoset-title";
    this.ownerName = document.createElement('div');
    this.ownerName.className = "owner-name";

    // grid header li
    this.header = document.createElement('li');
    this.header.className = "header";
    this.header.appendChild(this.title);
    this.header.appendChild(this.ownerName);

    // grid ul
    this.photoGrid = document.createElement('ul');
    this.photoGrid.className = "photo-grid";
    this.photoGrid.id = "photo-grid";
    this.photoGrid.appendChild(this.header);

    this.requestPhotos();
  }

  requestPhotos (photoSetId) {
    let id = photoSetId ? photoSetId : 0;
    let uri = Utils.CONSTANTS.API_HOST + Utils.CONSTANTS.API_QUERY_STRING + Utils.CONSTANTS.PHOTO_SET[id];
    Utils.xhr(uri, this.render.bind(this));
  }

  emptyPhotoGrid() {
    while (this.photoGrid.childElementCount > 1) {
      this.photoGrid.removeChild(this.photoGrid.lastChild);
    }
  }

  render(data) {
    if(data) {
      let body = JSON.parse(data);
      let photoset = body.photoset;

      if(photoset) {
        // update photoset info
        this.title.innerText = "#" + photoset.title;
        this.ownerName.innerText = "@" + photoset.ownername;

        // initialize lightbox
        this.lightBox = new LightBox(photoset.photo);
        let clickAction = this.lightBox.render.bind(this.lightBox);

        // empty grid before adding new photoset
        this.emptyPhotoGrid();

        // build photo grid
        photoset.photo.forEach(function (item, index) {
          let photo = new Photo(item, index, clickAction);
          this.photoGrid.appendChild(photo.render());
        }.bind(this));
      }
    }

    return (
      this.photoGrid
    );
  }
}
export default PhotoGrid