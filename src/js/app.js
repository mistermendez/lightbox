import PhotoGrid from './components/photo-grid'

class App {
  constructor() {
    this.photoGrid = new PhotoGrid;
  }

  render() {
    let app = document.createElement('div');
    app.className = "app";
    app.appendChild(this.photoGrid.render());

    return (
      app
    );
  }
}
export default App