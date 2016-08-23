jest.unmock('../menu');
jest.unmock('../utils');

import Menu from '../menu';
import Utils from '../utils'

describe('menu', () => {
  it('tests menu', () => {
    let mock = {
      callback: function() {},
      event: {
        preventDefault:function(){}
      }
    };

    let menu = new Menu(mock.callback);
    menu.render();
    Utils.CONSTANTS.PHOTO_SET.forEach(function () {
      menu.handleMenuAction(mock.event);
    });
  });
});