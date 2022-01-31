const DrawerInitiator = {
  init({
    button,
    drawer,
    hero,
    content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, hero, content);
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, hero);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, hero, content);
    });
  },

  _toggleDrawer(event, drawer, hero) {
    event.stopPropagation();
    drawer.classList.toggle('slide');
    hero.classList.toggle('turun');
  },

  _closeDrawer(event, drawer, hero) {
    event.stopPropagation();
    drawer.classList.remove('slide');
    hero.classList.remove('turun');
  },
};

export default DrawerInitiator;
