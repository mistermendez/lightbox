import PhotoGrid from './components/photo-grid'
import Menu from './components/menu'

class App {
  constructor() {
    this.photoGrid = new PhotoGrid;
    let menuAction = this.photoGrid.requestPhotos.bind(this.photoGrid);
    this.menu = new Menu(menuAction);
  }

  render() {
    let app = document.createElement('div');
    app.className = "app";
    app.appendChild(this.photoGrid.render());
    app.appendChild(this.menu.render());

    return (
      app
    );
  }
}
export default App