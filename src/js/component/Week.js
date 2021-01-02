export default class Week {
  constructor(parent) {
    this.element = document.createElement('div');
    this.element.className = 'week';
    parent.append(this.element);
  }
}
