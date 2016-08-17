import Utils from './utils'

class Photo {
  constructor(item, index, clickAction) {
    this.item = item;
    this.index = index;
    this.clickAction = clickAction;
    this.handleClickAction = this.handleClickAction.bind(this);
  }

  handleClickAction (event) {
    event.preventDefault();
    this.clickAction(this.item, this.index);
  }

  render() {
    // photo thumbnail image
    let thumbnailSrc = Utils.CONSTANTS.IMG_HOST + this.item.farm + '/' + this.item.server + '/' + this.item.id + '_' + this.item.secret + '_m.jpg';

    // overlay
    let overlay = document.createElement('span');
    overlay.className = "overlay";

    // photo title
    let title = document.createElement('span');
    title.className = "title";
    title.innerText = this.item.title;

    // photo
    let photo = document.createElement('a');
    photo.className = "photo-thumbnail";
    photo.onclick = this.handleClickAction;
    photo.style.backgroundImage = "url('" + thumbnailSrc + "')";
    photo.appendChild(overlay);
    photo.appendChild(title);

    // li
    let li = document.createElement('li');
    li.appendChild(photo);

    return (
      li
    );
  }
}
export default Photo