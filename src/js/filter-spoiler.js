export default class Spoiler {
  constructor(element) {
    this.element = element;
    this.spoilerBtn = element.querySelector('.js-filter-btn');
  }
  init() {
    if (this.spoilerBtn) {
      this.spoilerBtn.addEventListener('click', () => this.toggle());
    }
  }
  toggle() {
    this.element.classList.toggle('opened');
  }
}
