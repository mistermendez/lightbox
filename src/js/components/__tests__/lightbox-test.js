jest.unmock('../lightbox');
jest.unmock('../utils');

import LightBox from '../lightbox';

describe('lightbox', () => {
  it('renders lightbox, index 1', () => {
    let mock = {
      data: [{"id":"5487714355","secret":"ab08b908ed","server":"5060","farm":6,"title":"Bugs Jumpin' Around","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"5549566144","secret":"53d767d439","server":"5056","farm":6,"title":"Dancin' in the Moonlight [explored]","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"5407381400","secret":"64ae8bc9f4","server":"5131","farm":6,"title":"Bowling","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0}],
      index: 1,
      event: {
        preventDefault:function(){},
        keyCode: 39
      }
    };
    let lightBox = new LightBox(mock.data);
    lightBox.render(mock.data[mock.index], mock.index);
    lightBox.handleNext(mock.event);
    lightBox.handlePrev(mock.event);
    lightBox.handleKey(mock.event);
    lightBox.handleClose(mock.event);
  });

  it('renders lightbox, index 0', () => {
    let mock = {
      data: [{"id":"5487714355","secret":"ab08b908ed","server":"5060","farm":6,"title":"Bugs Jumpin' Around","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"5549566144","secret":"53d767d439","server":"5056","farm":6,"title":"Dancin' in the Moonlight [explored]","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"5407381400","secret":"64ae8bc9f4","server":"5131","farm":6,"title":"Bowling","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0}],
      index: 0,
      event: {
        preventDefault:function(){},
        keyCode: 37
      }
    };
    let lightBox = new LightBox(mock.data);
    lightBox.render(mock.data[mock.index], mock.index);
    lightBox.handleNext(mock.event);
    lightBox.handlePrev(mock.event);
    lightBox.handleKey(mock.event);
    lightBox.handleClose(mock.event);
  });

  it('renders lightbox, index 2', () => {
    let mock = {
      data: [{"id":"5487714355","secret":"ab08b908ed","server":"5060","farm":6,"title":"Bugs Jumpin' Around","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"5549566144","secret":"53d767d439","server":"5056","farm":6,"title":"Dancin' in the Moonlight [explored]","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0},{"id":"5407381400","secret":"64ae8bc9f4","server":"5131","farm":6,"title":"Bowling","isprimary":"0","ispublic":1,"isfriend":0,"isfamily":0}],
      index: 2,
      event: {
        preventDefault:function(){},
        keyCode: 27
      }
    };
    let lightBox = new LightBox(mock.data);
    lightBox.render(mock.data[mock.index], mock.index);
    lightBox.handleNext(mock.event);
    lightBox.handlePrev(mock.event);
    lightBox.handleKey(mock.event);
  });
});