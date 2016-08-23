jest.unmock('../app');
jest.unmock('../components/menu');
jest.unmock('../components/photo-grid');
jest.unmock('../components/utils');

import App from '../app';

describe('app', () => {
  it('renders app', () => {
    let app = new App;
    app.render();
  });
});