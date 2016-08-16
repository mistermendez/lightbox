class Photo {
  constructor(item) {
    this.item = item;
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick (event) {
    event.preventDefault();
    console.log("photo: ", this.item.title);
  }

  render() {
    let img = document.createElement('img');
    img.src = 'https://c2.staticflickr.com/' + this.item.farm + '/' + this.item.server + '/' + this.item.id + '_' + this.item.secret + '_m.jpg';

    let photo = document.createElement('a');
    photo.className = "photo";
    photo.innerText = this.item.title;
    photo.onclick = this.handleOnClick;
    photo.appendChild(img);

    return (
      photo
    );
  }
}
export default Photo