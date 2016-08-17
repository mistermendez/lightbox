import Utils from './utils'

class Menu {
  constructor(menuAction) {
    this.menuAction = menuAction;
    this.handleMenuAction = this.handleMenuAction.bind(this);
    this.index = 1;
  }

  handleMenuAction(event) {
    event.preventDefault();
    let photoSet = Utils.CONSTANTS.PHOTO_SET;
    this.menuAction(this.index);
    this.index++;
    if(this.index == photoSet.length) {
      this.index = 0;
    }
  }

  render() {
    let menuBtn = document.createElement('a');
    menuBtn.className = "menu-btn";
    menuBtn.innerText = '↻ load more photos';
    menuBtn.onclick = this.handleMenuAction;

    let menu = document.createElement('div');
    menu.className = "menu";
    menu.appendChild(menuBtn);

    let footer = document.createElement('footer');
    footer.className = "footer";
    footer.appendChild(menu);

    return (
      footer
    );
  }
}
export default Menu