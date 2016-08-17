import Utils from './utils'

class LightBox {
  constructor(photoset) {
    this.photoset = photoset;

    // next btn
    this.handleNext = this.handleNext.bind(this);
    this.nextBtn = document.createElement('a');
    this.nextBtn.innerHTML = '&#10095;'; // ❯
    this.nextBtn.className = 'next-btn';
    this.nextBtn.onclick = this.handleNext;

    // prev btn
    this.handlePrev = this.handlePrev.bind(this);
    this.prevBtn = document.createElement('a');
    this.prevBtn.innerHTML = '&#10094;'; // ❮
    this.prevBtn.className = 'prev-btn';
    this.prevBtn.onclick = this.handlePrev;

    // close button
    this.handleClose = this.handleClose.bind(this);
    let closeBtn = document.createElement('a');
    closeBtn.innerHTML = '&#215;'; // ×
    closeBtn.className = 'close-btn';
    closeBtn.onclick = this.handleClose;

    // photo placeholder
    let photoPlaceholder = document.createElement('div');

    // caption
    this.caption = document.createElement('div');
    this.caption.className = 'caption';

    // photo container
    this.photoContainer = document.createElement('div');
    this.photoContainer.className = "photo-container";
    this.photoContainer.appendChild(photoPlaceholder);
    this.photoContainer.appendChild(this.caption);

    // lightbox
    this.lightBox = document.createElement('div');
    this.lightBox.id = "lightbox";
    this.lightBox.appendChild(closeBtn);
    this.lightBox.appendChild(this.photoContainer);
    this.lightBox.appendChild(this.nextBtn);
    this.lightBox.appendChild(this.prevBtn);

    // enable keyboard nav
    document.addEventListener("keydown", this.handleKey.bind(this));
  }

  handleNext(event) {
    event.preventDefault();
    if(this.index < (this.photoset.length - 1)) {
      this.index += 1;
      this.prevBtn.style.display = 'inline'; //show prev btn
      this.render(this.photoset[this.index], this.index);
    } else {
      this.nextBtn.style.display = 'none'; //hide next btn
    }
  }

  handlePrev(event) {
    event.preventDefault();
    if(this.index > 0) {
      this.index -= 1;
      this.nextBtn.style.display = 'inline'; //show next btn
      this.render(this.photoset[this.index], this.index);
    } else {
      this.prevBtn.style.display = 'none'; //hide prev btn
    }
  }

  handleClose(event) {
    event.preventDefault();
    document.body.removeChild(this.lightBox);
    document.removeEventListener("keydown", this.handleKey.bind(this)); // disable keyboard nav
  }

  handleKey(event) {
    switch(event.keyCode) {
      case 39:
        this.handleNext(event);
        break;
      case 37:
        this.handlePrev(event);
        break;
    }
  }

  render(item, index) {
    this.index = index;

    // next/prev btn visibility
    if(this.index > 0 && this.index < (this.photoset.length - 1)) {
      this.nextBtn.style.display = 'inline'; //show next btn
      this.prevBtn.style.display = 'inline'; //show prev btn
    } else if(this.index == 0) {
      this.prevBtn.style.display = 'none'; //hide prev btn
    } else if(this.index == (this.photoset.length - 1)) {
      this.nextBtn.style.display = 'none'; //hide next btn
    }

    // photo image
    let photoSrc = Utils.CONSTANTS.IMG_HOST + item.farm + '/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
    let photo = document.createElement('img');
    photo.id = "photo";
    photo.src = photoSrc;

    // replace placeholder w/ photo
    let placeholder = this.photoContainer.childNodes[0];
    if (placeholder) {
      this.photoContainer.replaceChild(photo, placeholder);
      photo.className = "photo"; //className added here to enable animation
    }

    // update caption
    this.caption.innerText = item.title;

    // add lightbox to body
    document.body.appendChild(this.lightBox);
    this.lightBox.className = "lightbox"; //className added here to enable animation
  }
}
export default LightBox