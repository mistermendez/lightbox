jest.unmock('../photo-grid');
jest.unmock('../photo');
jest.unmock('../utils');

import PhotoGrid from '../photo-grid';

describe('photo grid', () => {
  it('tests photo grid', () => {
    let mock = {
      data: {"photoset":{"id":"72157623692742906","primary":"5620727713","owner":"42957889@N05","ownername":"icemanphotos","photo":[{"id":"5487714355","secret":"ab08b908ed","server":"5060","farm":6,"title":"Bugs Jumpin' Around","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"5549566144","secret":"53d767d439","server":"5056","farm":6,"title":"Dancin' in the Moonlight [explored]","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"5407381400","secret":"64ae8bc9f4","server":"5131","farm":6,"title":"Bowling","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"5982408384","secret":"d0166aa8ed","server":"6026","farm":7,"title":"LOL","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"6741096893","secret":"0878b98124","server":"7161","farm":8,"title":"StarGate","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"6753918533","secret":"4434cf6f77","server":"7153","farm":8,"title":"Take a deep breath..","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"8243800931","secret":"6289b5eaff","server":"8346","farm":9,"title":"Splash of walnuts","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0}],"page":1,"per_page":500,"perpage":500,"pages":1,"total":"17","title":"Project: Waterdrops"},"stat":"ok"}
    };
    let photoGrid = new PhotoGrid;
    photoGrid.render(JSON.stringify(mock.data));
    expect(photoGrid.photoGrid.childElementCount).toEqual(8);

    photoGrid.emptyPhotoGrid();
    expect(photoGrid.photoGrid.childElementCount).toEqual(1);
  });
});